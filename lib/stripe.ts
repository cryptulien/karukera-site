import Stripe from "stripe";

export function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY missing");
  }
  const context = process.env.STRIPE_CONTEXT;
  return new Stripe(key, context ? { stripeContext: context } : undefined);
}

export function originFromRequest(req: Request): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (configured && !/localhost|127\.0\.0\.1/.test(configured)) {
    return configured;
  }
  const host = req.headers.get("x-forwarded-host") || req.headers.get("host");
  const proto = req.headers.get("x-forwarded-proto") || "http";
  if (host) return `${proto}://${host}`;
  return configured || "https://karukera.xyz";
}
