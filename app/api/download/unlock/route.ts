import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { emailsMatch, KIT_COOKIE, signDownload } from "@/lib/download-token";
import { KIT_SKU } from "@/lib/kit-offer";

export const runtime = "nodejs";

const DAY = 24 * 60 * 60;

export async function POST(req: Request) {
  let sessionId = "";
  let email = "";
  try {
    const body = (await req.json()) as { session_id?: string; email?: string };
    sessionId = body.session_id?.trim() ?? "";
    email = body.email?.trim() ?? "";
  } catch {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }

  if (!sessionId || !email) {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
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
  if (!paid || session.metadata?.sku !== KIT_SKU) {
    return NextResponse.json({ error: "unpaid" }, { status: 403 });
  }

  const expected = session.customer_details?.email || session.customer_email;
  if (!emailsMatch(expected, email)) {
    return NextResponse.json({ error: "email mismatch" }, { status: 403 });
  }

  const token = signDownload(session.id);
  const res = NextResponse.json({ token });
  res.cookies.set(KIT_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 7 * DAY,
  });
  return res;
}
