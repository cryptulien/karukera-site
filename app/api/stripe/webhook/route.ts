import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { KIT_SKU } from "@/lib/kit-offer";

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
    if (session.metadata?.sku === KIT_SKU && session.payment_status === "paid") {
      console.log("kit paid", session.id, session.customer_details?.email);
    }
  }

  return NextResponse.json({ received: true });
}
