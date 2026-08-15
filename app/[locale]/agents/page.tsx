import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { SalesNav } from "../../components/SalesNav";
import { SalesFooter } from "../../components/SalesFooter";
import { BuyButton } from "../../components/BuyButton";

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
    alternates: { canonical: `https://karukera.xyz/${locale}/agents` },
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

  return (
    <div className="min-h-screen bg-[#F6F4EF] text-[#161616]">
      <SalesNav locale={locale} dict={dict} />
      <main>
        <section className="max-w-5xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-10 text-center">
          <h1 className="font-sans text-[2.1rem] sm:text-5xl md:text-[3.4rem] font-semibold tracking-[-0.03em] leading-[1.08]">
            {dict.kit.catalogTitle}
          </h1>
          <p className="mt-6 text-lg text-[#5C5954] max-w-2xl mx-auto leading-relaxed">
            {dict.kit.catalogLead}
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-20">
          <article className="rounded-3xl overflow-hidden bg-white shadow-[0_12px_40px_-16px_rgba(22,22,22,0.25)]">
            <div className="bg-[#1C1B19] px-6 sm:px-8 py-4 flex items-center justify-between text-white/70 text-sm">
              <span>{dict.kit.catalogBadge}</span>
              <span>{dict.kit.catalogScope}</span>
            </div>
            <div className="bg-[#1C1B19] px-4 sm:px-8 pb-6">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                <Image
                  src="/images/kit-laptop.jpg"
                  alt={dict.kit.catalogAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 960px, 100vw"
                  priority
                />
              </div>
            </div>
            <div className="px-6 sm:px-10 py-10">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-snug">
                {dict.kit.catalogH2}
              </h2>
              <p className="mt-4 text-[#5C5954] leading-relaxed max-w-2xl">
                {dict.kit.catalogBody}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                <BuyButton locale={locale} dict={dict} sku="security-kit" />
                <Link
                  href={`/${locale}/agents/security`}
                  className="text-sm text-[#5C5954] hover:text-[#161616]"
                >
                  {dict.kit.catalogMore}
                </Link>
              </div>
              <p className="mt-3 text-sm text-[#8A857D]">{dict.shop.priceNote}</p>
            </div>
          </article>

          <article className="mt-8 rounded-3xl overflow-hidden bg-white shadow-[0_12px_40px_-16px_rgba(22,22,22,0.25)]">
            <div className="bg-[#1C1B19] px-6 sm:px-8 py-4 flex items-center justify-between text-white/70 text-sm">
              <span>{dict.kit.catalogSecretaryBadge}</span>
              <span>{dict.kit.catalogSecretaryScope}</span>
            </div>
            <div className="px-6 sm:px-10 py-10">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-snug">
                {dict.kit.catalogSecretaryH2}
              </h2>
              <p className="mt-4 text-[#5C5954] leading-relaxed max-w-2xl">
                {dict.kit.catalogSecretaryBody}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                <BuyButton
                  locale={locale}
                  dict={dict}
                  sku="sales-secretary"
                  label={dict.secretary.buy}
                />
                <Link
                  href={`/${locale}/agents/secretary`}
                  className="text-sm text-[#5C5954] hover:text-[#161616]"
                >
                  {dict.kit.catalogSecretaryMore}
                </Link>
              </div>
              <p className="mt-3 text-sm text-[#8A857D]">{dict.secretary.priceNote}</p>
            </div>
          </article>

          <p className="mt-10 text-sm text-[#8A857D]">{dict.kit.catalogSoon}</p>
        </section>
      </main>
      <SalesFooter locale={locale} dict={dict} year={year} />
    </div>
  );
}
