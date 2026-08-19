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
import { KITS } from "@/lib/kit-offer";

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
      url: `${SITE}/${locale}/agents`,
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

type FamilyCard = {
  href: string;
  scope: string;
  title: string;
  body: string;
  facts: string[];
  image: string;
  alt: string;
  note: string;
  priority?: boolean;
  external?: boolean;
};

function KitCard({
  card,
  cta,
}: {
  card: FamilyCard;
  cta: string;
}) {
  const className =
    "group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_-18px_rgba(18,18,18,0.28)] transition-shadow hover:shadow-[0_16px_44px_-16px_rgba(18,18,18,0.36)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E23B2E]";
  const inner = (
    <>
        <div className="relative aspect-[16/9]">
          <Image
            src={card.image}
            alt={card.alt}
            fill
            className="object-cover object-center"
            sizes="(min-width: 1024px) 960px, 100vw"
            priority={card.priority}
          />
        </div>
        <div className="flex flex-1 flex-col px-6 py-8 sm:px-10">
          <p className="text-sm text-[#5C5954]">{card.scope}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight leading-snug">
            {card.title}
          </h3>
          <p className="mt-3 text-[#4A4742] leading-relaxed">{card.body}</p>
          <ul className="mt-5 space-y-1.5 text-sm text-[#121212]">
            {card.facts.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <span className="mt-6 inline-flex h-12 items-center justify-center self-start rounded-full bg-[#E23B2E] px-7 text-[15px] font-medium text-white group-hover:bg-[#c92f24]">
            {cta}
          </span>
          <p className="mt-3 text-sm text-[#5C5954]">{card.note}</p>
        </div>
    </>
  );

  return (
    <article>
      {card.external ? (
        <a href={card.href} target="_blank" rel="noopener noreferrer" className={className}>
          {inner}
        </a>
      ) : (
        <Link href={card.href} className={className}>
          {inner}
        </Link>
      )}
    </article>
  );
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
  const k = dict.kit;

  const tech: FamilyCard = {
    href: `/${locale}/agents/security`,
    scope: k.catalogScope,
    title: k.catalogH2,
    body: k.catalogBody,
    facts: k.catalogFacts,
    image: KITS["security-kit"].openSource!.card!,
    alt: dict.oss.cardAltSecurity,
    note: dict.oss.catalogNote,
    priority: true,
  };

  const biz: FamilyCard = {
    href: `/${locale}/agents/secretary`,
    scope: k.catalogSecretaryScope,
    title: k.catalogSecretaryH2,
    body: k.catalogSecretaryBody,
    facts: k.catalogSecretaryFacts,
    image: KITS["sales-secretary"].openSource!.card!,
    alt: dict.oss.cardAltSecretary,
    note: dict.oss.catalogNote,
  };

  const linkedin: FamilyCard = {
    href: "https://github.com/cryptulien/linkedin-outreach",
    scope: k.catalogLinkedinScope,
    title: k.catalogLinkedinH2,
    body: k.catalogLinkedinBody,
    facts: k.catalogLinkedinFacts,
    image: "/images/oss/linkedin-card.png",
    alt: dict.oss.cardAltLinkedin,
    note: dict.oss.catalogNote,
    external: true,
  };

  return (
    <div className="min-h-screen bg-[#F4F3EF] text-[#121212]">
      {/*
        THESIS: Karukera Agents is a studio of kits for founders, split into two families that must not be sold as one mixed grid.
        OWN-WORLD: paper field, ink type, vermillion only on the buy/open action; Space Grotesk; no studio washi.
        STORY: visitor understands the shared rule (runs on their side, fits their practice), then chooses Technique or Commercial.
        FIRST VIEWPORT: name + promise + three shared rules; no product card yet.
        FORM: two stacked family bands, one live kit each; coming-soon as a line, never a fake card.
        FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
      */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: k.catalogMetaTitle,
          description: k.catalogMetaDesc,
          url: `${SITE}/${locale}/agents`,
          isPartOf: { "@type": "WebSite", name: "Karukera", url: SITE },
          hasPart: [
            {
              "@type": "ItemList",
              name: k.catalogFamilyTech,
              description: k.catalogFamilyTechLead,
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: k.catalogH2,
                  url: `${SITE}/${locale}/agents/security`,
                },
              ],
            },
            {
              "@type": "ItemList",
              name: k.catalogFamilyBiz,
              description: k.catalogFamilyBizLead,
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: k.catalogSecretaryH2,
                  url: `${SITE}/${locale}/agents/secretary`,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: k.catalogLinkedinH2,
                  url: "https://github.com/cryptulien/linkedin-outreach",
                },
              ],
            },
          ],
        }}
      />
      <SalesNav locale={locale} dict={dict} />
      <main>
        <section className="max-w-5xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-14">
          <h1 className="font-sans text-[2.15rem] sm:text-5xl md:text-[3.35rem] font-semibold tracking-[-0.03em] leading-[1.08] max-w-4xl text-balance">
            {k.catalogTitle}
          </h1>
          <p className="mt-6 text-lg text-[#4A4742] max-w-2xl leading-relaxed">
            {k.catalogLead}
          </p>
          <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-medium">
            <a href="#technique" className="text-[#121212] underline-offset-4 hover:underline">
              {k.catalogFamilyTech}
            </a>
            <a href="#commercial" className="text-[#121212] underline-offset-4 hover:underline">
              {k.catalogFamilyBiz}
            </a>
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-20 grid md:grid-cols-3 gap-x-10 gap-y-8">
          {k.catalogHow.map((step) => (
            <div key={step.t}>
              <p className="font-medium text-[17px]">{step.t}</p>
              <p className="mt-2 text-sm text-[#4A4742] leading-relaxed">{step.b}</p>
            </div>
          ))}
        </section>

        <section
          id="technique"
          aria-labelledby="family-tech"
          className="border-t border-black/[0.06]"
        >
          <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-16 pb-20">
            <h2
              id="family-tech"
              className="text-3xl sm:text-[2.15rem] font-semibold tracking-[-0.03em]"
            >
              {k.catalogFamilyTech}
            </h2>
            <p className="mt-4 text-[#4A4742] leading-relaxed max-w-2xl">
              {k.catalogFamilyTechLead}
            </p>
            <div className="mt-10">
              <KitCard card={tech} cta={k.catalogOpen} />
            </div>
            <p className="mt-8 text-sm text-[#5C5954]">{k.catalogFamilyTechSoon}</p>
          </div>
        </section>

        <section
          id="commercial"
          aria-labelledby="family-biz"
          className="border-t border-black/[0.06] bg-[#EFEDE7]"
        >
          <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-16 pb-20">
            <h2
              id="family-biz"
              className="text-3xl sm:text-[2.15rem] font-semibold tracking-[-0.03em]"
            >
              {k.catalogFamilyBiz}
            </h2>
            <p className="mt-4 text-[#4A4742] leading-relaxed max-w-2xl">
              {k.catalogFamilyBizLead}
            </p>
            <div className="mt-10 space-y-10">
              <KitCard card={biz} cta={k.catalogOpen} />
              <KitCard card={linkedin} cta={dict.oss.viewOnGitHub} />
            </div>
            <p className="mt-8 text-sm text-[#5C5954]">{k.catalogFamilyBizSoon}</p>
          </div>
        </section>
      </main>
      <SalesFooter locale={locale} dict={dict} year={year} />
    </div>
  );
}
