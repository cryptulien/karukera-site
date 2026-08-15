import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getKit } from "@/lib/kit-offer";
import { isLocale } from "@/lib/i18n";
import {
  KIT_COOKIE,
  signDownload,
  unlockMatches,
} from "@/lib/download-token";

export const runtime = "nodejs";

const DAY = 24 * 60 * 60;

export async function GET(req: Request) {
  const url = new URL(req.url);
  const sessionId = url.searchParams.get("session_id")?.trim() ?? "";
  const nonce = url.searchParams.get("k")?.trim() ?? "";
  const localeRaw = url.searchParams.get("locale") ?? "fr";
  const locale = isLocale(localeRaw) ? localeRaw : "fr";
  const fail = `/${locale}/agents/thanks`;

  if (!sessionId || !nonce || !process.env.STRIPE_SECRET_KEY) {
    return NextResponse.redirect(new URL(fail, req.url));
  }

  const stripe = getStripe();
  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId);
  } catch {
    return NextResponse.redirect(new URL(fail, req.url));
  }

  const paid =
    session.payment_status === "paid" ||
    session.payment_status === "no_payment_required";
  if (!paid || !getKit(session.metadata?.sku)) {
    return NextResponse.redirect(new URL(fail, req.url));
  }
  if (!unlockMatches(nonce, session.metadata?.unlock)) {
    return NextResponse.redirect(new URL(fail, req.url));
  }

  const token = signDownload(session.id);
  const dest = new URL(`/${locale}/agents/thanks`, req.url);
  const res = NextResponse.redirect(dest);
  res.cookies.set(KIT_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 7 * DAY,
  });
  return res;
}
