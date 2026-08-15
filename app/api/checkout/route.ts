import { randomBytes } from "node:crypto";
import { NextResponse } from "next/server";
import { isLocale } from "@/lib/i18n";
import { getStripe, originFromRequest } from "@/lib/stripe";
import { KIT_CURRENCY, getKit, isKitSku } from "@/lib/kit-offer";
import { hashUnlock } from "@/lib/download-token";

export async function POST(req: Request) {
  let locale = "fr";
  let sku = "security-kit";
  try {
    const body = (await req.json()) as { locale?: string; sku?: string };
    if (body.locale && isLocale(body.locale)) locale = body.locale;
    if (body.sku && isKitSku(body.sku)) sku = body.sku;
  } catch {
    /* empty body is fine */
  }

  const kit = getKit(sku);
  if (!kit) {
    return NextResponse.json({ error: "unknown kit" }, { status: 400 });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Stripe n’est pas encore configuré (STRIPE_SECRET_KEY)." },
      { status: 503 },
    );
  }

  let stripe: ReturnType<typeof getStripe>;
  try {
    stripe = getStripe();
  } catch {
    return NextResponse.json(
      { error: "Stripe n’est pas encore branché (STRIPE_SECRET_KEY)." },
      { status: 503 },
    );
  }

  const origin = originFromRequest(req);
  const nonce = randomBytes(32).toString("base64url");
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      locale: locale === "es" ? "es" : locale === "en" ? "en" : "fr",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: KIT_CURRENCY,
            unit_amount: kit.priceCents,
            product_data: {
              name: kit.name[locale] ?? kit.name.fr,
              description: kit.description[locale] ?? kit.description.fr,
            },
          },
        },
      ],
      success_url: `${origin}/${locale}/agents/thanks?session_id={CHECKOUT_SESSION_ID}&k=${nonce}`,
      cancel_url: `${origin}/${locale}${kit.cancelPath}`,
      metadata: { sku: kit.sku, locale, unlock: hashUnlock(nonce) },
      allow_promotion_codes: true,
    });

    if (!session.url) {
      return NextResponse.json({ error: "Checkout URL missing" }, { status: 500 });
    }
    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "checkout failed";
    const needsContext = /Stripe-Context/i.test(message);
    return NextResponse.json(
      {
        error: needsContext
          ? "Clé Stripe Organisation : ajoute STRIPE_CONTEXT (acct_…) dans .env."
          : message,
      },
      { status: needsContext ? 503 : 500 },
    );
  }
}
