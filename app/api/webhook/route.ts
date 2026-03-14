import { NextRequest, NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";
import { appendFileSync } from "fs";

function verifyStripeSignature(
  payload: string,
  sigHeader: string,
  secret: string
): boolean {
  const parts = sigHeader.split(",").reduce(
    (acc, part) => {
      const [key, value] = part.split("=");
      if (key === "t") acc.timestamp = value;
      if (key === "v1") acc.signatures.push(value);
      return acc;
    },
    { timestamp: "", signatures: [] as string[] }
  );

  if (!parts.timestamp || parts.signatures.length === 0) return false;

  const signedPayload = `${parts.timestamp}.${payload}`;
  const expectedSig = createHmac("sha256", secret)
    .update(signedPayload)
    .digest("hex");

  return parts.signatures.some((sig) => {
    try {
      return timingSafeEqual(
        Buffer.from(expectedSig),
        Buffer.from(sig)
      );
    } catch {
      return false;
    }
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const sig = req.headers.get("stripe-signature");

    if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
      return NextResponse.json(
        { error: "Missing signature or webhook secret" },
        { status: 400 }
      );
    }

    if (!verifyStripeSignature(body, sig, process.env.STRIPE_WEBHOOK_SECRET)) {
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 400 }
      );
    }

    const event = JSON.parse(body);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const email = session.customer_details?.email || session.customer_email || "unknown";
      const amount = session.amount_total ? (session.amount_total / 100).toFixed(2) : "0.00";
      const tier =
        session.amount_total === 3900
          ? "essential"
          : session.amount_total === 9900
            ? "premium"
            : session.amount_total === 19900
              ? "founder"
              : "unknown";

      const logLine = `[${new Date().toISOString()}] email=${email} amount=$${amount} tier=${tier} session=${session.id}\n`;

      try {
        appendFileSync("/tmp/purchases.log", logLine);
      } catch {
        console.error("Failed to write purchase log");
      }

      console.log("Purchase completed:", logLine.trim());
    }

    return NextResponse.json({ received: true });
  } catch {
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}
