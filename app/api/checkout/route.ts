import { NextRequest, NextResponse } from "next/server";

const PRICE_IDS: Record<string, string> = {
  essential: "price_1TAuPgRkyhhrHnW8OLunM5Hc",
  premium: "price_1TAuPhRkyhhrHnW8uSxyXUUh",
  founder: "price_1TAuPiRkyhhrHnW876tkEilL",
};

export async function POST(req: NextRequest) {
  try {
    const { tier } = await req.json();

    const priceId = PRICE_IDS[tier];
    if (!priceId) {
      return NextResponse.json({ error: "Invalid tier" }, { status: 400 });
    }

    const response = await fetch(
      "https://api.stripe.com/v1/checkout/sessions",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + process.env.STRIPE_SECRET_KEY,
          "Stripe-Context": "acct_1TAZQGRkyhhrHnW8",
          "Stripe-Version": "2024-12-18.acacia",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          mode: "payment",
          "line_items[0][price]": priceId,
          "line_items[0][quantity]": "1",
          success_url: "https://karukera.xyz/success",
          cancel_url: "https://karukera.xyz",
        }),
      }
    );

    const session = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: session.error?.message || "Stripe error" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
