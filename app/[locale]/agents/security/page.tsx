import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { ogImage } from "@/lib/share";
import { localeAlternates } from "@/lib/seo";
import { SalesNav } from "../../../components/SalesNav";
import { SalesFooter } from "../../../components/SalesFooter";
import { BuyButton } from "../../../components/BuyButton";
import { AgentWorkflow } from "../../../components/AgentWorkflow";
import { KitStages } from "../../../components/KitStages";

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
      <SalesNav locale={locale} dict={dict} sku="security-kit" />
      <main>
        <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 pb-16 lg:pb-24 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-12 items-center">
          <div className="min-w-0">
            <h1 className="text-[2.15rem] sm:text-5xl font-semibold tracking-[-0.03em] leading-[1.08] text-balance">
              {k.heroTitle}
            </h1>
            <p className="mt-6 text-lg text-[#4A4742] leading-relaxed">{k.heroLead}</p>
            <BuyButton locale={locale} dict={dict} sku="security-kit" className="mt-8" />
            <p className="mt-4 text-sm text-[#5C5954] leading-relaxed max-w-md">
              {k.modelsLine}
            </p>
          </div>
          <div className="min-w-0">
            <AgentWorkflow
              agents={k.agents}
              log={k.log}
              demoLabel={k.demoLabel}
              scope={k.demoScope}
              findingId={k.findingId}
              findingTitle={k.findingTitle}
              findingStatus={k.findingStatus}
            />
            <p className="mt-3 text-sm text-[#6B675F]">{k.workflowLead}</p>
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
                label: k.demoLabel,
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
            {k.routerTitle}
          </h2>
          <p className="mt-5 text-[#4A4742] leading-relaxed text-[17px]">{k.routerBody}</p>
        </section>

        <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-16">
          <div className="rounded-2xl bg-white p-8 sm:p-10 shadow-[0_16px_40px_-24px_rgba(18,18,18,0.28)]">
            <h2 className="text-3xl font-semibold tracking-tight">{k.priceTitle}</h2>
            <p className="mt-3 text-5xl font-semibold tracking-tight">{dict.shop.price}</p>
            <p className="mt-3 text-[#4A4742] leading-relaxed">{k.priceBody}</p>
            <BuyButton locale={locale} dict={dict} sku="security-kit" className="mt-8" />
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
            <BuyButton locale={locale} dict={dict} sku="security-kit" />
          </div>
        </section>
      </main>
      <SalesFooter locale={locale} dict={dict} year={year} />
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-black/5 bg-[#F4F3EF]/95 backdrop-blur-md px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <BuyButton locale={locale} dict={dict} sku="security-kit" />
      </div>
    </div>
  );
}
