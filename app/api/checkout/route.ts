import { NextResponse } from "next/server";
import { isLocale } from "@/lib/i18n";
import { getStripe, originFromRequest } from "@/lib/stripe";
import { KIT_CURRENCY, KIT_NAME, KIT_PRICE_CENTS, KIT_SKU } from "@/lib/kit-offer";

export async function POST(req: Request) {
  let locale = "fr";
  try {
    const body = (await req.json()) as { locale?: string };
    if (body.locale && isLocale(body.locale)) locale = body.locale;
  } catch {
    /* empty body is fine */
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
  try {
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    locale: locale === "es" ? "es" : locale === "en" ? "en" : "fr",
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: KIT_CURRENCY,
          unit_amount: KIT_PRICE_CENTS,
          product_data: {
            name: KIT_NAME[locale] ?? KIT_NAME.fr,
            description:
              locale === "en"
                ? "ZIP of Web + SaaS security-audit agents. Immediate download after payment."
                : locale === "es"
                  ? "ZIP de agentes de auditoría de seguridad Web + SaaS. Descarga inmediata tras el pago."
                  : "ZIP d’agents d’audit sécu Web + SaaS. Livraison immédiate après paiement.",
          },
        },
      },
    ],
    success_url: `${origin}/${locale}/agents/thanks?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/${locale}/agents/security`,
    metadata: { sku: KIT_SKU, locale },
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
