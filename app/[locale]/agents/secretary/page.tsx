import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { ogImage } from "@/lib/share";
import { localeAlternates } from "@/lib/seo";
import { SalesNav } from "../../../components/SalesNav";
import { SalesFooter } from "../../../components/SalesFooter";
import { BuyButton } from "../../../components/BuyButton";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.secretary.metaTitle,
    description: dict.secretary.metaDesc,
    alternates: localeAlternates(locale, "/agents/secretary"),
    openGraph: {
      title: dict.secretary.metaTitle,
      description: dict.secretary.metaDesc,
      url: `https://karukera.xyz/${locale}/agents/secretary`,
      images: [ogImage("/images/og-secretary.jpg", dict.secretary.metaTitle)],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.secretary.metaTitle,
      description: dict.secretary.metaDesc,
      images: ["/images/og-secretary.jpg"],
    },
  };
}

export default async function SecretaryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#F6F4EF] text-[#161616] pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-0">
      <SalesNav locale={locale} dict={dict} sku="sales-secretary" />
      <main>
        <section className="max-w-3xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 pb-16">
          <p className="text-sm text-isle-stone">{dict.kit.catalogSecretaryScope}</p>
          <h1 className="mt-4 font-serif text-[2.1rem] sm:text-5xl font-normal tracking-[-0.03em] leading-[1.08]">
            {dict.secretary.heroTitle}
          </h1>
          <p className="mt-6 text-lg text-isle-stone leading-relaxed">
            {dict.secretary.heroLead}
          </p>
          <BuyButton
            locale={locale}
            dict={dict}
            sku="sales-secretary"
            label={dict.secretary.buy}
            className="mt-8"
          />
          <p className="mt-3 text-sm text-isle-stone">{dict.secretary.priceNote}</p>
        </section>

        <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-16">
          <h2 className="text-3xl font-semibold tracking-tight">
            {dict.secretary.problemTitle}
          </h2>
          <p className="mt-5 text-isle-stone leading-relaxed">
            {dict.secretary.problemBody}
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-16">
          <h2 className="text-3xl font-semibold tracking-tight">
            {dict.secretary.stepsTitle}
          </h2>
          <ol className="mt-8 divide-y divide-black/5">
            {dict.secretary.steps.map((s, i) => (
              <li key={s.t} className="py-5 grid grid-cols-[2rem_1fr] gap-4">
                <span className="text-isle-flame font-semibold">{i + 1}</span>
                <div>
                  <p className="font-medium">{s.t}</p>
                  <p className="mt-1 text-sm text-isle-stone leading-relaxed">{s.b}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-16">
          <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-[0_12px_40px_-20px_rgba(22,22,22,0.25)]">
            <p className="text-sm text-isle-stone">{dict.secretary.priceEyebrow}</p>
            <p className="mt-2 text-5xl font-semibold tracking-tight">{dict.shop.price}</p>
            <p className="mt-3 text-isle-stone leading-relaxed">{dict.secretary.priceBody}</p>
            <BuyButton
              locale={locale}
              dict={dict}
              sku="sales-secretary"
              label={dict.secretary.buy}
              className="mt-8"
            />
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-16">
          <h2 className="text-3xl font-semibold tracking-tight">{dict.secretary.faqTitle}</h2>
          <dl className="mt-8 divide-y divide-black/5">
            {dict.secretary.faq.map((f) => (
              <div key={f.q} className="py-5">
                <dt className="font-medium">{f.q}</dt>
                <dd className="mt-2 text-sm text-isle-stone leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-20">
          <div className="rounded-3xl bg-[#1C1B19] text-white px-8 py-12 sm:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                {dict.secretary.closeTitle}
              </h2>
              <p className="mt-3 text-white/60">{dict.secretary.closeBody}</p>
            </div>
            <BuyButton locale={locale} dict={dict} sku="sales-secretary" label={dict.secretary.buy} />
          </div>
        </section>
      </main>
      <SalesFooter locale={locale} dict={dict} year={year} />
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-black/5 bg-[#F6F4EF]/95 backdrop-blur-md px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <BuyButton locale={locale} dict={dict} sku="sales-secretary" label={dict.secretary.buy} />
      </div>
    </div>
  );
}
