import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { ogImage } from "@/lib/share";
import { localeAlternates, SITE } from "@/lib/seo";
import { GUIDES, guideCopy, pillarGuide } from "@/lib/guides";
import { JsonLd } from "../../components/JsonLd";
import { SalesNav } from "../../components/SalesNav";
import { SalesFooter } from "../../components/SalesFooter";

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
    title: dict.guides.indexMetaTitle,
    description: dict.guides.indexMetaDesc,
    alternates: localeAlternates(locale, "/guides"),
    openGraph: {
      title: dict.guides.indexMetaTitle,
      description: dict.guides.indexMetaDesc,
      url: `${SITE}/${locale}/guides`,
      images: [ogImage("/images/og-security.jpg", dict.guides.indexMetaTitle)],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.guides.indexMetaTitle,
      description: dict.guides.indexMetaDesc,
      images: ["/images/og-security.jpg"],
    },
  };
}

export default async function GuidesIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();
  const pillar = pillarGuide();
  const pillarC = guideCopy(pillar, locale);
  const modes = GUIDES.filter((g) => g.modeId !== null);

  return (
    <div className="min-h-screen bg-[#F4F3EF] text-[#121212]">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: dict.guides.indexMetaTitle,
          description: dict.guides.indexMetaDesc,
          url: `${SITE}/${locale}/guides`,
          inLanguage: locale,
          isPartOf: { "@type": "WebSite", name: "Karukera", url: SITE },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: GUIDES.map((g, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: guideCopy(g, locale).title,
              url: `${SITE}/${locale}/guides/${g.slug}`,
            })),
          },
        }}
      />
      <SalesNav locale={locale} dict={dict} sku="security-kit" />
      <main>
        <section className="max-w-5xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-12">
          <p className="text-xs tracking-[0.18em] uppercase text-[#E23B2E] font-medium">
            {dict.guides.modesEyebrow}
          </p>
          <h1 className="mt-4 font-sans text-[2.1rem] sm:text-5xl font-semibold tracking-[-0.03em] leading-[1.08] max-w-3xl">
            {dict.guides.indexTitle}
          </h1>
          <p className="mt-6 text-lg text-[#5C5954] max-w-2xl leading-relaxed">
            {dict.guides.indexLead}
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-12">
          <article className="rounded-2xl bg-white p-8 sm:p-10 shadow-[0_12px_40px_-18px_rgba(22,22,22,0.22)]">
            <p className="text-xs tracking-[0.18em] uppercase text-[#8A857D]">
              {dict.guides.pillarEyebrow}
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight leading-snug">
              <Link
                href={`/${locale}/guides/${pillar.slug}`}
                className="hover:text-[#E23B2E]"
              >
                {pillarC.title}
              </Link>
            </h2>
            <p className="mt-4 text-[#5C5954] leading-relaxed">{pillarC.excerpt}</p>
            <Link
              href={`/${locale}/guides/${pillar.slug}`}
              className="mt-6 inline-flex text-sm font-medium text-[#E23B2E]"
            >
              {dict.guides.read} →
            </Link>
          </article>
        </section>

        <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-20 grid md:grid-cols-2 gap-5">
          {modes.map((g) => {
            const c = guideCopy(g, locale);
            return (
              <article
                key={g.slug}
                className="flex flex-col rounded-2xl bg-white p-7 shadow-[0_10px_32px_-18px_rgba(22,22,22,0.22)]"
              >
                <p className="text-xs text-[#8A857D] tabular-nums">
                  {g.modeId} · {c.duration}
                </p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight leading-snug">
                  <Link
                    href={`/${locale}/guides/${g.slug}`}
                    className="hover:text-[#E23B2E]"
                  >
                    {c.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm text-[#5C5954] leading-relaxed flex-1">
                  {c.excerpt}
                </p>
                <Link
                  href={`/${locale}/guides/${g.slug}`}
                  className="mt-5 text-sm font-medium text-[#E23B2E] self-start"
                >
                  {dict.guides.read} →
                </Link>
              </article>
            );
          })}
        </section>
      </main>
      <SalesFooter locale={locale} dict={dict} year={year} />
    </div>
  );
}
