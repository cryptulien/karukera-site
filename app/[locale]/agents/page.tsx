import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { ogImage } from "@/lib/share";
import { localeAlternates, SITE } from "@/lib/seo";
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
    title: dict.kit.catalogMetaTitle,
    description: dict.kit.catalogMetaDesc,
    alternates: localeAlternates(locale, "/agents"),
    openGraph: {
      title: dict.kit.catalogMetaTitle,
      description: dict.kit.catalogMetaDesc,
      url: `https://karukera.xyz/${locale}/agents`,
      images: [ogImage("/images/og-agents.jpg", dict.kit.catalogMetaTitle)],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.kit.catalogMetaTitle,
      description: dict.kit.catalogMetaDesc,
      images: ["/images/og-agents.jpg"],
    },
  };
}

export default async function AgentsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();

  const kits = [
    {
      sku: "security-kit" as const,
      href: `/${locale}/agents/security`,
      badge: dict.kit.catalogBadge,
      scope: dict.kit.catalogScope,
      title: dict.kit.catalogH2,
      body: dict.kit.catalogBody,
      facts: dict.kit.catalogFacts,
      image: "/images/kit-security.jpg",
      alt: dict.kit.catalogAlt,
      note: dict.shop.priceNote,
    },
    {
      sku: "sales-secretary" as const,
      href: `/${locale}/agents/secretary`,
      badge: dict.kit.catalogSecretaryBadge,
      scope: dict.kit.catalogSecretaryScope,
      title: dict.kit.catalogSecretaryH2,
      body: dict.kit.catalogSecretaryBody,
      facts: dict.kit.catalogSecretaryFacts,
      image: "/images/kit-folder.jpg",
      alt: dict.kit.catalogSecretaryH2,
      note: dict.secretary.priceNote,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F3EF] text-[#121212]">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: dict.kit.catalogMetaTitle,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: dict.kit.catalogH2,
              url: `${SITE}/${locale}/agents/security`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: dict.kit.catalogSecretaryH2,
              url: `${SITE}/${locale}/agents/secretary`,
            },
          ],
        }}
      />
      <SalesNav locale={locale} dict={dict} />
      <main>
        <section className="max-w-5xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-12">
          <h1 className="font-sans text-[2.1rem] sm:text-5xl md:text-[3.4rem] font-semibold tracking-[-0.03em] leading-[1.08] max-w-4xl">
            {dict.kit.catalogTitle}
          </h1>
          <p className="mt-6 text-lg text-[#5C5954] max-w-2xl leading-relaxed">
            {dict.kit.catalogLead}
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-16 grid md:grid-cols-3 gap-10">
          {dict.kit.catalogHow.map((step) => (
            <div key={step.t}>
              <p className="font-medium text-[17px]">{step.t}</p>
              <p className="mt-2 text-sm text-[#5C5954] leading-relaxed">{step.b}</p>
            </div>
          ))}
        </section>

        <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-20 grid lg:grid-cols-2 gap-6">
          {kits.map((k) => (
            <article
              key={k.sku}
              className="flex flex-col rounded-2xl bg-white shadow-[0_12px_40px_-18px_rgba(22,22,22,0.28)] overflow-hidden"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={k.image}
                  alt={k.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 480px, 100vw"
                  priority={k.sku === "security-kit"}
                />
              </div>
              <div className="flex flex-1 flex-col px-6 sm:px-8 py-8">
                <p className="text-sm text-[#8A857D]">{k.scope}</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight leading-snug">
                  {k.title}
                </h2>
                <p className="mt-3 text-[#5C5954] leading-relaxed">{k.body}</p>
                <ul className="mt-5 space-y-1.5 text-sm text-[#161616]">
                  {k.facts.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <p className="mt-6 text-2xl font-semibold tracking-tight">
                  {dict.kit.catalogPrice}
                </p>
                <Link
                  href={k.href}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-[#E23B2E] px-7 h-12 text-[15px] font-medium text-white hover:bg-[#c92f24] self-start"
                >
                  {dict.kit.catalogOpen}
                </Link>
                <p className="mt-3 text-sm text-[#8A857D]">{k.note}</p>
              </div>
            </article>
          ))}
        </section>

        <p className="max-w-5xl mx-auto px-5 sm:px-8 pb-20 text-sm text-[#8A857D]">
          {dict.kit.catalogSoon}
        </p>
      </main>
      <SalesFooter locale={locale} dict={dict} year={year} />
    </div>
  );
}
