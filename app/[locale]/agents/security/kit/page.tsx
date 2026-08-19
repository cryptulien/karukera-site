import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { ogImage } from "@/lib/share";
import { localeAlternates, SITE } from "@/lib/seo";
import { kitBrief } from "@/lib/kit-brief";
import { JsonLd } from "../../../../components/JsonLd";
import { SalesNav } from "../../../../components/SalesNav";
import { SalesFooter } from "../../../../components/SalesFooter";

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
  const b = kitBrief(locale);
  return {
    title: b.metaTitle,
    description: b.metaDesc,
    alternates: localeAlternates(locale, "/agents/security/kit"),
    openGraph: {
      title: b.metaTitle,
      description: b.metaDesc,
      type: "article",
      url: `${SITE}/${locale}/agents/security/kit`,
      images: [ogImage("/images/og-security.jpg", b.metaTitle)],
    },
    twitter: {
      card: "summary_large_image",
      title: b.metaTitle,
      description: b.metaDesc,
      images: ["/images/og-security.jpg"],
    },
  };
}

export default async function KitBriefPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const b = kitBrief(locale);
  const year = new Date().getFullYear();
  const url = `${SITE}/${locale}/agents/security/kit`;

  return (
    <div className="min-h-screen bg-[#F4F3EF] text-[#121212]">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: b.title,
          description: b.metaDesc,
          datePublished: b.updated,
          dateModified: b.updated,
          inLanguage: locale,
          mainEntityOfPage: url,
          author: {
            "@type": "Person",
            name: "Julien Lelandais",
            url: `${SITE}/${locale}`,
          },
        }}
      />
      <SalesNav locale={locale} dict={dict} sku="security-kit" />
      <main>
        <article className="max-w-[40rem] mx-auto px-5 sm:px-8 pt-14 sm:pt-20 pb-24">
          <p className="text-xs tracking-[0.18em] uppercase text-[#8A857D]">{b.kicker}</p>
          <h1 className="mt-4 text-[2.05rem] sm:text-[2.6rem] font-semibold tracking-[-0.03em] leading-[1.1]">
            {b.title}
          </h1>
          <p className="mt-6 text-lg text-[#4A4742] leading-relaxed">{b.lead}</p>
          <p className="mt-4">
            <a
              href={`/${locale}/agents/security/kit.md`}
              className="text-sm text-[#E23B2E] underline underline-offset-4 decoration-[#E23B2E]/40 hover:decoration-[#E23B2E]"
            >
              {locale === "en"
                ? "Download as Markdown"
                : locale === "es"
                  ? "Descargar en Markdown"
                  : "Télécharger en Markdown"}
            </a>
          </p>

          <div className="mt-14 space-y-6">
            {b.body.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="pt-6 text-[1.45rem] sm:text-[1.65rem] font-semibold tracking-[-0.03em] leading-[1.2]"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "p") {
                return (
                  <p key={i} className="text-[17px] text-[#2A2826] leading-relaxed">
                    {block.text}
                  </p>
                );
              }
              if (block.type === "quote") {
                return (
                  <blockquote
                    key={i}
                    className="border-l-2 border-[#E23B2E] pl-5 text-[17px] text-[#121212] leading-relaxed"
                  >
                    {block.text}
                  </blockquote>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={i} className="space-y-2.5 pl-0">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="grid grid-cols-[0.7rem_1fr] gap-3 text-[17px] text-[#2A2826] leading-relaxed"
                      >
                        <span className="mt-[0.55em] h-1.5 w-1.5 rounded-full bg-[#E23B2E]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <ol key={i} className="space-y-2.5">
                  {block.items.map((item, n) => (
                    <li
                      key={item}
                      className="grid grid-cols-[1.5rem_1fr] gap-2 text-[17px] text-[#2A2826] leading-relaxed"
                    >
                      <span className="text-[#E23B2E] font-semibold tabular-nums">{n + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              );
            })}
          </div>
        </article>
      </main>
      <SalesFooter locale={locale} dict={dict} year={year} />
    </div>
  );
}
