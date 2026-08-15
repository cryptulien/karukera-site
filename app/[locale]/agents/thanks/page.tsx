import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { getStripe } from "@/lib/stripe";
import { signDownload } from "@/lib/download-token";
import { KIT_SKU } from "@/lib/kit-offer";
import { SalesNav } from "../../../components/SalesNav";
import { SalesFooter } from "../../../components/SalesFooter";

export const dynamic = "force-dynamic";

export default async function ThanksPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();
  const { session_id } = await searchParams;

  let downloadHref: string | null = null;
  let state: "ok" | "pending" | "fail" = "fail";

  if (session_id && process.env.STRIPE_SECRET_KEY) {
    try {
      const session = await getStripe().checkout.sessions.retrieve(session_id);
      const paid =
        session.payment_status === "paid" ||
        session.payment_status === "no_payment_required";
      if (session.metadata?.sku === KIT_SKU && paid) {
        const token = signDownload(session.id);
        downloadHref = `/api/download?t=${encodeURIComponent(token)}`;
        state = "ok";
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
