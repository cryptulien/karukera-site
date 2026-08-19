import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { ogImage } from "@/lib/share";
import { localeAlternates, SITE } from "@/lib/seo";
import { JsonLd } from "../../../components/JsonLd";
import { SalesNav } from "../../../components/SalesNav";
import { SalesFooter } from "../../../components/SalesFooter";
import { KitAction } from "../../../components/KitAction";
import { KITS, githubHttpsUrl } from "@/lib/kit-offer";

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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: dict.secretary.metaTitle,
          description: dict.secretary.metaDesc,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Linux",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
            url: `${SITE}/${locale}/agents/secretary`,
          },
          isAccessibleForFree: true,
          license: "https://opensource.org/licenses/MIT",
          codeRepository: githubHttpsUrl(KITS["sales-secretary"].openSource!.githubRepo),
        }}
      />
      <SalesNav locale={locale} dict={dict} sku="sales-secretary" />
      <main>
        <section className="max-w-3xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 pb-16">
          <p className="text-sm text-[#8A857D]">{dict.kit.catalogSecretaryScope}</p>
          <h1 className="mt-4 text-[2.1rem] sm:text-5xl font-semibold tracking-[-0.03em] leading-[1.08]">
            {dict.secretary.heroTitle}
          </h1>
          <p className="mt-6 text-lg text-[#5C5954] leading-relaxed">
            {dict.secretary.heroLead}
          </p>
          <KitAction
            locale={locale}
            dict={dict}
            sku="sales-secretary"
            className="mt-8"
          />
          <p className="mt-3 text-sm text-[#8A857D]">{dict.secretary.priceNote}</p>
        </section>

        <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-16">
          <h2 className="text-3xl font-semibold tracking-tight">
            {dict.secretary.problemTitle}
          </h2>
          <p className="mt-5 text-[#5C5954] leading-relaxed">
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
                <span className="text-[#E23B2E] font-semibold">{i + 1}</span>
                <div>
                  <p className="font-medium">{s.t}</p>
                  <p className="mt-1 text-sm text-[#5C5954] leading-relaxed">{s.b}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-16">
          <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-[0_12px_40px_-20px_rgba(22,22,22,0.25)]">
            <p className="text-sm text-[#5C5954]">{dict.secretary.priceEyebrow}</p>
            <p className="mt-2 text-5xl font-semibold tracking-tight">{dict.oss.catalogPrice}</p>
            <p className="mt-3 text-[#5C5954] leading-relaxed">{dict.secretary.priceBody}</p>
            <KitAction
              locale={locale}
              dict={dict}
              sku="sales-secretary"
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
                <dd className="mt-2 text-sm text-[#5C5954] leading-relaxed">{f.a}</dd>
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
            <KitAction locale={locale} dict={dict} sku="sales-secretary" tone="dark" />
          </div>
        </section>
      </main>
      <SalesFooter locale={locale} dict={dict} year={year} />
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-black/5 bg-[#F6F4EF]/95 backdrop-blur-md px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <KitAction locale={locale} dict={dict} sku="sales-secretary" compact />
      </div>
    </div>
  );
}
