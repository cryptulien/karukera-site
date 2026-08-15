import { createReadStream, existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { Readable } from "node:stream";
import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { verifyDownload } from "@/lib/download-token";
import { getKit } from "@/lib/kit-offer";

export const runtime = "nodejs";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("t");
  if (!token) {
    return NextResponse.json({ error: "missing token" }, { status: 400 });
  }

  const sessionId = verifyDownload(token);
  if (!sessionId) {
    return NextResponse.json({ error: "invalid or expired link" }, { status: 403 });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: "Stripe missing" }, { status: 503 });
  }

  const stripe = getStripe();
  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId);
  } catch {
    return NextResponse.json({ error: "unknown session" }, { status: 403 });
  }
  const paid =
    session.payment_status === "paid" ||
    session.payment_status === "no_payment_required";
  const kit = getKit(session.metadata?.sku);
  if (!paid || !kit) {
    return NextResponse.json({ error: "unpaid" }, { status: 403 });
  }

  const zipPath = join(process.cwd(), "private", kit.filename);
  if (!existsSync(zipPath)) {
    return NextResponse.json({ error: "kit missing on server" }, { status: 500 });
  }

  const { size } = statSync(zipPath);
  const stream = Readable.toWeb(createReadStream(zipPath)) as ReadableStream;
  return new NextResponse(stream, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Length": String(size),
      "Content-Disposition": `attachment; filename="${kit.filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
