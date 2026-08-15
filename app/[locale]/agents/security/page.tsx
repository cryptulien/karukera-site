import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { ogImage } from "@/lib/share";
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
    title: dict.kit.metaTitle,
    description: dict.kit.metaDesc,
    alternates: { canonical: `https://karukera.xyz/${locale}/agents/security` },
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

  return (
    <div className="min-h-screen bg-[#F6F4EF] text-[#161616] pb-24 md:pb-0">
      <SalesNav locale={locale} dict={dict} />
      <main>
        <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 pb-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-[2.1rem] sm:text-5xl font-semibold tracking-[-0.03em] leading-[1.08]">
              {dict.kit.heroTitle}
            </h1>
            <p className="mt-6 text-lg text-[#5C5954] leading-relaxed">
              {dict.kit.heroLead}
            </p>
            <BuyButton locale={locale} dict={dict} sku="security-kit" className="mt-8" />
            <p className="mt-3 text-sm text-[#8A857D]">{dict.shop.priceNote}</p>
          </div>
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_16px_50px_-20px_rgba(22,22,22,0.4)]">
            <Image
              src="/images/kit-laptop.jpg"
              alt={dict.kit.heroAlt}
              fill
              className="object-cover"
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-16">
          <p className="text-xs text-[#E23B2E] mb-5">{dict.kit.reviewsLabel}</p>
          <div className="grid md:grid-cols-3 gap-4">
            {dict.kit.reviews.map((r) => (
              <figure
                key={r.name}
                className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_-18px_rgba(22,22,22,0.3)]"
              >
                <blockquote className="text-[15px] leading-relaxed">
                  « {r.quote} »
                </blockquote>
                <figcaption className="mt-5 text-sm font-medium">
                  {r.name}
                  <span className="block font-normal text-[#8A857D]">{r.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-16">
          <h2 className="text-3xl font-semibold tracking-tight">
            {dict.kit.problemTitle}
          </h2>
          <p className="mt-5 text-[#5C5954] leading-relaxed">{dict.kit.problemBody}</p>
        </section>

        <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-16 grid md:grid-cols-2 gap-4">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
            <Image
              src="/images/kit-folder.jpg"
              alt={dict.kit.folderAlt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
            <Image
              src="/images/kit-finding.jpg"
              alt={dict.kit.findingAlt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-16">
          <h2 className="text-3xl font-semibold tracking-tight">{dict.kit.stepsTitle}</h2>
          <ol className="mt-8 divide-y divide-black/5">
            {dict.kit.steps.map((s, i) => (
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
            <p className="text-sm text-[#5C5954]">{dict.kit.priceEyebrow}</p>
            <p className="mt-2 text-5xl font-semibold tracking-tight">{dict.shop.price}</p>
            <p className="mt-3 text-[#5C5954] leading-relaxed">{dict.kit.priceBody}</p>
            <BuyButton locale={locale} dict={dict} sku="security-kit" className="mt-8" />
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-16">
          <h2 className="text-3xl font-semibold tracking-tight">{dict.kit.faqTitle}</h2>
          <dl className="mt-8 divide-y divide-black/5">
            {dict.kit.faq.map((f) => (
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
                {dict.kit.closeTitle}
              </h2>
              <p className="mt-3 text-white/60">{dict.kit.closeBody}</p>
            </div>
            <BuyButton locale={locale} dict={dict} />
          </div>
        </section>
      </main>
      <SalesFooter locale={locale} dict={dict} year={year} />
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-black/5 bg-[#F6F4EF]/95 backdrop-blur-md px-4 py-3">
        <BuyButton locale={locale} dict={dict} />
      </div>
    </div>
  );
}
