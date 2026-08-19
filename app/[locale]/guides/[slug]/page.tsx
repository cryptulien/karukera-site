import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { ogImage } from "@/lib/share";
import { localeAlternates, SITE } from "@/lib/seo";
import { GUIDES, getGuide, guideCopy } from "@/lib/guides";
import { JsonLd } from "../../../components/JsonLd";
import { SalesNav } from "../../../components/SalesNav";
import { SalesFooter } from "../../../components/SalesFooter";
import { KitAction } from "../../../components/KitAction";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    GUIDES.map((g) => ({ locale, slug: g.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const guide = getGuide(slug);
  if (!guide) return {};
  const c = guideCopy(guide, locale);
  return {
    title: c.metaTitle,
    description: c.metaDesc,
    keywords: [c.keyword],
    alternates: localeAlternates(locale, `/guides/${guide.slug}`),
    openGraph: {
      title: c.metaTitle,
      description: c.metaDesc,
      type: "article",
      url: `${SITE}/${locale}/guides/${guide.slug}`,
      publishedTime: guide.published,
      images: [ogImage("/images/og-security.jpg", c.metaTitle)],
    },
    twitter: {
      card: "summary_large_image",
      title: c.metaTitle,
      description: c.metaDesc,
      images: ["/images/og-security.jpg"],
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const guide = getGuide(slug);
  if (!guide) notFound();
  const dict = getDictionary(locale);
  const c = guideCopy(guide, locale);
  const year = new Date().getFullYear();
  const related = guide.related
    .map((s) => getGuide(s))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));
  const url = `${SITE}/${locale}/guides/${guide.slug}`;

  return (
    <div className="min-h-screen bg-[#F4F3EF] text-[#121212] pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-0">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: c.title,
          description: c.metaDesc,
          datePublished: guide.published,
          dateModified: guide.published,
          inLanguage: locale,
          mainEntityOfPage: url,
          author: {
            "@type": "Person",
            name: "Julien Lelandais",
            url: `${SITE}/${locale}`,
          },
          publisher: {
            "@type": "Organization",
            name: "Karukera",
            url: SITE,
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: dict.nav.agents,
              item: `${SITE}/${locale}/agents`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: dict.nav.guides,
              item: `${SITE}/${locale}/guides`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: c.title,
              item: url,
            },
          ],
        }}
      />
      {c.faq.length > 0 ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: c.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />
      ) : null}
      <SalesNav locale={locale} dict={dict} sku="security-kit" />
      <main>
        <article className="max-w-3xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20">
          <p className="text-xs tracking-[0.18em] uppercase text-[#8A857D]">
            {guide.modeId ? `${guide.modeId} · ${c.duration}` : dict.guides.pillarEyebrow}
            {" · "}
            {c.readingTime}
          </p>
          <h1 className="mt-4 text-[2.05rem] sm:text-[2.7rem] font-semibold tracking-[-0.03em] leading-[1.1]">
            {c.title}
          </h1>
          <p className="mt-6 text-lg text-[#4A4742] leading-relaxed">{c.lead}</p>

          <dl className="mt-10 grid sm:grid-cols-2 gap-6 rounded-2xl bg-white p-6 sm:p-8 shadow-[0_10px_32px_-18px_rgba(22,22,22,0.2)]">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-[#8A857D]">
                {dict.guides.whenLabel}
              </dt>
              <dd className="mt-3">
                <ul className="space-y-2 text-sm text-[#121212] leading-relaxed">
                  {c.when.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-[#8A857D]">
                {dict.guides.agentsLabel}
              </dt>
              <dd className="mt-3 text-sm leading-relaxed">{c.agents}</dd>
              <dt className="mt-5 text-xs uppercase tracking-[0.16em] text-[#8A857D]">
                {dict.guides.skipsLabel}
              </dt>
              <dd className="mt-3">
                <ul className="space-y-2 text-sm text-[#5C5954] leading-relaxed">
                  {c.skips.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>

          <div className="mt-12 space-y-6">
            {c.body.map((b, i) => {
              if (b.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="pt-4 text-2xl sm:text-[1.7rem] font-semibold tracking-tight"
                  >
                    {b.text}
                  </h2>
                );
              }
              if (b.type === "ul") {
                return (
                  <ul
                    key={i}
                    className="list-disc pl-5 space-y-2 text-[17px] text-[#4A4742] leading-relaxed"
                  >
                    {b.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }
              if (b.type === "quote") {
                return (
                  <blockquote
                    key={i}
                    className="border-l-2 border-[#E23B2E] pl-5 text-[17px] text-[#121212] leading-relaxed"
                  >
                    {b.text}
                  </blockquote>
                );
              }
              return (
                <p key={i} className="text-[17px] text-[#4A4742] leading-relaxed">
                  {b.text}
                </p>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl bg-white p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.16em] text-[#8A857D]">
              {dict.guides.launchLabel}
            </p>
            <p className="mt-3 font-mono text-sm leading-relaxed text-[#121212]">
              {c.launch}
            </p>
          </div>

          {c.faq.length > 0 ? (
            <section className="mt-14">
              <h2 className="text-2xl font-semibold tracking-tight">
                {dict.guides.faqTitle}
              </h2>
              <dl className="mt-6 divide-y divide-black/5">
                {c.faq.map((f) => (
                  <div key={f.q} className="py-5">
                    <dt className="font-medium">{f.q}</dt>
                    <dd className="mt-2 text-sm text-[#5C5954] leading-relaxed">
                      {f.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          <section className="mt-14 rounded-2xl bg-[#141311] text-white px-7 py-10 sm:px-10">
            <h2 className="text-2xl font-semibold tracking-tight">
              {dict.guides.ctaTitle}
            </h2>
            <p className="mt-3 text-white/55 leading-relaxed">{dict.guides.ctaBody}</p>
            <KitAction locale={locale} dict={dict} sku="security-kit" className="mt-8" tone="dark" />
          </section>

          {related.length > 0 ? (
            <nav className="mt-16 pb-20" aria-label={dict.guides.relatedTitle}>
              <h2 className="text-xl font-semibold tracking-tight">
                {dict.guides.relatedTitle}
              </h2>
              <ul className="mt-5 space-y-3">
                {related.map((g) => {
                  const rc = guideCopy(g, locale);
                  return (
                    <li key={g.slug}>
                      <Link
                        href={`/${locale}/guides/${g.slug}`}
                        className="text-[15px] font-medium hover:text-[#E23B2E]"
                      >
                        {rc.title} →
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link
                href={`/${locale}/guides`}
                className="mt-8 inline-block text-sm text-[#5C5954] hover:text-[#121212]"
              >
                ← {dict.guides.allGuides}
              </Link>
            </nav>
          ) : null}
        </article>
      </main>
      <SalesFooter locale={locale} dict={dict} year={year} />
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-black/5 bg-[#F4F3EF]/95 backdrop-blur-md px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <KitAction locale={locale} dict={dict} sku="security-kit" compact />
      </div>
    </div>
  );
}
