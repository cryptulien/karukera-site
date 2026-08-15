import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { KIT_SKU } from "@/lib/kit-offer";
import { sendKitEmail } from "@/lib/send-kit-email";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret || !process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: "webhook not configured" }, { status: 503 });
  }

  const stripe = getStripe();
  const sig = req.headers.get("stripe-signature");
  const raw = await req.text();
  if (!sig) {
    return NextResponse.json({ error: "missing signature" }, { status: 400 });
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(raw, sig, secret);
  } catch {
    return NextResponse.json({ error: "invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const paid =
      session.payment_status === "paid" ||
      session.payment_status === "no_payment_required";
    if (session.metadata?.sku === KIT_SKU && paid) {
      const to = session.customer_details?.email || session.customer_email;
      const locale = session.metadata.locale || "fr";
      const origin = process.env.NEXT_PUBLIC_SITE_URL || "https://karukera.xyz";
      if (to) {
        const sent = await sendKitEmail({
          to,
          locale,
          sessionId: session.id,
          origin: origin.replace(/\/$/, ""),
        });
        console.log("kit paid", session.id, to, sent ? "mailed" : "no-mailer");
      } else {
        console.log("kit paid", session.id, "no-email");
      }
    }
  }

  return NextResponse.json({ received: true });
}
