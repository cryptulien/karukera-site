import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { ogImage } from "@/lib/share";
import { localeAlternates, SITE } from "@/lib/seo";
import { GUIDES, guideCopy } from "@/lib/guides";
import { JsonLd } from "../../../components/JsonLd";
import { SalesNav } from "../../../components/SalesNav";
import { SalesFooter } from "../../../components/SalesFooter";
import { KitAction } from "../../../components/KitAction";
import { AgentWorkflow } from "../../../components/AgentWorkflow";
import { KitStages } from "../../../components/KitStages";
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
    title: dict.kit.metaTitle,
    description: dict.kit.metaDesc,
    keywords:
      locale === "fr"
        ? ["pentest IA", "audit SaaS", "audit sécurité site web", "sécurité MCP"]
        : locale === "en"
          ? ["AI pentest", "SaaS security audit", "MCP security", "Claude Code"]
          : ["pentest IA", "auditoría SaaS", "seguridad MCP"],
    alternates: localeAlternates(locale, "/agents/security"),
    openGraph: {
      title: dict.kit.metaTitle,
      description: dict.kit.metaDesc,
      url: `https://karukera.xyz/${locale}/agents/security`,
      images: [ogImage("/images/og-security.jpg", dict.kit.metaTitle)],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.kit.metaTitle,
      description: dict.kit.metaDesc,
      images: ["/images/og-security.jpg"],
    },
  };
}

export default async function SecurityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();
  const k = dict.kit;

  return (
    <div className="min-h-screen bg-[#F4F3EF] text-[#121212] pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-0">
      {/*
        THESIS: sell the outcome (secure the app, keep the revenue), not a ZIP inventory; refuse studio chrome and stock photos.
        OWN-WORLD: paper light field, ink consoles as the product stage, vermillion only on the buy action.
        STORY: a solo founder opens the kit in Claude/Codex, picks project + depth + access, gets report + tickets.
        FIRST VIEWPORT: headline + lead + CTA left; live squad console right (the mechanism, running).
        FORM: moshi.app feature staging on a light sales surface; code-led.
        FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
      */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: dict.kit.metaTitle,
          description: dict.kit.metaDesc,
          applicationCategory: "SecurityApplication",
          operatingSystem: "macOS, Linux, Windows",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
            url: `${SITE}/${locale}/agents/security`,
          },
          isAccessibleForFree: true,
          license: "https://opensource.org/licenses/MIT",
          codeRepository: githubHttpsUrl(KITS["security-kit"].openSource!.githubRepo),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: k.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <SalesNav locale={locale} dict={dict} sku="security-kit" />
      <main>
        <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 pb-16 lg:pb-24 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-12 items-center">
          <div className="min-w-0">
            <h1 className="text-[2.15rem] sm:text-5xl font-semibold tracking-[-0.03em] leading-[1.08] text-balance">
              {k.heroTitle}
            </h1>
            <p className="mt-6 text-lg text-[#4A4742] leading-relaxed">{k.heroLead}</p>
            <KitAction locale={locale} dict={dict} sku="security-kit" className="mt-8" />
            <p className="mt-4">
              <Link
                href={`/${locale}/agents/security/kit`}
                className="text-sm text-[#3F3C38] underline underline-offset-4 decoration-black/20 hover:text-[#121212] hover:decoration-[#121212]"
              >
                {k.briefLink}
              </Link>
            </p>
            <p className="mt-4 text-sm text-[#5C5954] leading-relaxed max-w-md">
              {k.modelsLine}
            </p>
          </div>
          <div className="min-w-0">
            <AgentWorkflow
              agents={k.agents}
              log={k.log}
              scope={k.demoScope}
              findingId={k.findingId}
              findingTitle={k.findingTitle}
              findingStatus={k.findingStatus}
            />
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-20">
          <h2 className="text-3xl sm:text-[2.15rem] font-semibold tracking-[-0.03em] leading-[1.12]">
            {k.problemTitle}
          </h2>
          <p className="mt-5 text-[#4A4742] leading-relaxed text-[17px]">{k.problemBody}</p>
        </section>

        <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-24">
          <h2 className="text-3xl sm:text-[2.15rem] font-semibold tracking-[-0.03em] leading-[1.12] max-w-2xl">
            {k.featuresTitle}
          </h2>
          <div className="mt-14">
            <KitStages
              features={k.features}
              demo={{
                scope: k.demoScope,
                findingId: k.findingId,
                findingTitle: k.findingTitle,
                findingStatus: k.findingStatus,
                ticketId: k.ticketId,
                ticketTitle: k.ticketTitle,
                ticketPrompt: k.ticketPrompt,
              }}
            />
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-20">
          <h2 className="text-3xl sm:text-[2.15rem] font-semibold tracking-[-0.03em]">
            {k.flowTitle}
          </h2>
          <ol className="mt-8 divide-y divide-black/5">
            {k.steps.map((s, i) => (
              <li key={s.t} className="py-5 grid grid-cols-[2rem_1fr] gap-4">
                <span className="text-[#E23B2E] font-semibold tabular-nums">{i + 1}</span>
                <div>
                  <p className="font-medium">{s.t}</p>
                  <p className="mt-1 text-sm text-[#5C5954] leading-relaxed">{s.b}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-20">
          <h2 className="text-3xl sm:text-[2.15rem] font-semibold tracking-[-0.03em]">
            {k.modesTitle}
          </h2>
          <ol className="mt-8 divide-y divide-black/5">
            {k.modes.map((m, i) => (
              <li key={m.t} className="py-5 grid grid-cols-[2rem_1fr] gap-4">
                <span className="text-[#E23B2E] font-semibold tabular-nums">{i + 1}</span>
                <div>
                  <p className="font-medium">{m.t}</p>
                  <p className="mt-1 text-sm text-[#5C5954] leading-relaxed">{m.b}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-20">
          <h2 className="text-3xl sm:text-[2.15rem] font-semibold tracking-[-0.03em]">
            {k.routerTitle}
          </h2>
          <p className="mt-5 text-[#4A4742] leading-relaxed text-[17px]">{k.routerBody}</p>
        </section>

        <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-20">
          <h2 className="text-3xl sm:text-[2.15rem] font-semibold tracking-[-0.03em]">
            {dict.guides.productModesTitle}
          </h2>
          <p className="mt-4 text-[#4A4742] leading-relaxed max-w-2xl">
            {dict.guides.productModesLead}
          </p>
          <ul className="mt-10 grid sm:grid-cols-2 gap-4">
            {GUIDES.filter((g) => g.modeId).map((g) => {
              const c = guideCopy(g, locale);
              return (
                <li key={g.slug}>
                  <Link
                    href={`/${locale}/guides/${g.slug}`}
                    className="block rounded-2xl bg-white p-6 h-full shadow-[0_10px_32px_-18px_rgba(22,22,22,0.2)] hover:shadow-[0_14px_36px_-16px_rgba(22,22,22,0.28)]"
                  >
                    <p className="text-xs text-[#8A857D] tabular-nums">
                      {g.modeId} · {c.duration}
                    </p>
                    <p className="mt-2 font-medium leading-snug">{c.title}</p>
                    <p className="mt-2 text-sm text-[#5C5954] leading-relaxed">
                      {c.excerpt}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href={`/${locale}/guides`}
            className="mt-6 inline-flex text-sm font-medium text-[#E23B2E]"
          >
            {dict.guides.allGuides} →
          </Link>
        </section>

        <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-16">
          <div className="rounded-2xl bg-white p-8 sm:p-10 shadow-[0_16px_40px_-24px_rgba(18,18,18,0.28)]">
            <h2 className="text-3xl font-semibold tracking-tight">{k.priceTitle}</h2>
            <p className="mt-3 text-[#4A4742] leading-relaxed">{k.priceBody}</p>
            <KitAction
              locale={locale}
              dict={dict}
              sku="security-kit"
              className="mt-8"
            />
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-16">
          <h2 className="text-3xl font-semibold tracking-tight">{k.faqTitle}</h2>
          <dl className="mt-8 divide-y divide-black/5">
            {k.faq.map((f) => (
              <div key={f.q} className="py-5">
                <dt className="font-medium">{f.q}</dt>
                <dd className="mt-2 text-sm text-[#5C5954] leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-20">
          <div className="rounded-2xl bg-[#141311] text-white px-8 py-12 sm:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                {k.closeTitle}
              </h2>
              <p className="mt-3 text-white/55">{k.closeBody}</p>
            </div>
            <KitAction locale={locale} dict={dict} sku="security-kit" tone="dark" />
          </div>
        </section>
      </main>
      <SalesFooter locale={locale} dict={dict} year={year} />
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-black/5 bg-[#F4F3EF]/95 backdrop-blur-md px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <KitAction locale={locale} dict={dict} sku="security-kit" compact />
      </div>
    </div>
  );
}
