import Link from "next/link";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { getStripe } from "@/lib/stripe";
import { KIT_COOKIE, verifyDownload } from "@/lib/download-token";
import { KIT_SKU } from "@/lib/kit-offer";
import { SalesNav } from "../../../components/SalesNav";
import { SalesFooter } from "../../../components/SalesFooter";
import { UnlockForm } from "../../../components/UnlockForm";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

function isPaid(status: string | null | undefined) {
  return status === "paid" || status === "no_payment_required";
}

export default async function ThanksPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ session_id?: string; t?: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();
  const { session_id, t } = await searchParams;
  const jar = await cookies();

  let downloadHref: string | null = null;
  let unlockSession: string | null = null;
  let state: "ok" | "pending" | "fail" | "unlock" = "fail";

  const cookieSid = jar.get(KIT_COOKIE)?.value
    ? verifyDownload(jar.get(KIT_COOKIE)!.value)
    : null;
  const tokenSid = t ? verifyDownload(t) : null;
  const unlockedSid = tokenSid || cookieSid;

  if (unlockedSid && process.env.STRIPE_SECRET_KEY) {
    try {
      const session = await getStripe().checkout.sessions.retrieve(unlockedSid);
      if (session.metadata?.sku === KIT_SKU && isPaid(session.payment_status)) {
        downloadHref = `/api/download?t=${encodeURIComponent(t || jar.get(KIT_COOKIE)!.value)}`;
        state = "ok";
      }
    } catch {
      state = "fail";
    }
  } else if (session_id && process.env.STRIPE_SECRET_KEY) {
    try {
      const session = await getStripe().checkout.sessions.retrieve(session_id);
      if (session.metadata?.sku === KIT_SKU && isPaid(session.payment_status)) {
        unlockSession = session.id;
        state = "unlock";
      } else if (session.payment_status === "unpaid") {
        state = "pending";
      }
    } catch {
      state = "fail";
    }
  }

  return (
    <div className="min-h-screen bg-[#F6F4EF] text-[#161616]">
      <SalesNav locale={locale} dict={dict} />
      <main className="max-w-2xl mx-auto px-5 sm:px-8 py-20">
        {state === "ok" && downloadHref ? (
          <>
            <h1 className="text-4xl font-semibold tracking-tight">
              {dict.shop.thanksTitle}
            </h1>
            <p className="mt-5 text-lg text-[#5C5954] leading-relaxed">
              {dict.shop.thanksBody}
            </p>
            <a
              href={downloadHref}
              referrerPolicy="no-referrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#E23B2E] px-7 h-12 text-[15px] font-medium text-white hover:bg-[#c92f24]"
            >
              {dict.shop.download}
            </a>
            <ol className="mt-12 space-y-3 text-[15px] text-[#5C5954]">
              <li>1. {dict.shop.next1}</li>
              <li>2. {dict.shop.next2}</li>
              <li>3. {dict.shop.next3}</li>
            </ol>
          </>
        ) : state === "unlock" && unlockSession ? (
          <>
            <h1 className="text-3xl font-semibold tracking-tight">
              {dict.shop.unlockTitle}
            </h1>
            <p className="mt-5 text-lg text-[#5C5954] leading-relaxed">
              {dict.shop.unlockBody}
            </p>
            <UnlockForm sessionId={unlockSession} locale={locale} dict={dict} />
          </>
        ) : (
          <>
            <h1 className="text-3xl font-semibold tracking-tight">
              {state === "pending" ? dict.shop.thanksPending : dict.shop.thanksFail}
            </h1>
            <Link
              href={`/${locale}/agents/security`}
              className="mt-8 inline-block text-[#E23B2E]"
            >
              ← {dict.nav.agents}
            </Link>
          </>
        )}
      </main>
      <SalesFooter locale={locale} dict={dict} year={year} />
    </div>
  );
}
