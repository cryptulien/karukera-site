import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { FadeIn } from "../../components/FadeIn";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { posts } from "@/lib/posts";
import { localeAlternates } from "@/lib/seo";
import { ogImage } from "@/lib/share";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "fr");
  return {
    title: `${dict.blog.title} — Karukera`,
    description: dict.blog.intro,
    alternates: localeAlternates(isLocale(locale) ? locale : "fr", "/blog"),
    openGraph: {
      title: `${dict.blog.title} — Karukera`,
      description: dict.blog.intro,
      images: [ogImage("/images/og-default.jpg", "Karukera")],
    },
  };
}

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();
  const ordered = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <Nav locale={locale} dict={dict} />
      <main className="pt-16 bg-isle-salt">
        <section className="relative h-[42vh] min-h-[280px] overflow-hidden">
          <Image
            src="/images/foret.webp"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-isle-canopy via-isle-canopy/50 to-isle-canopy/20" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-3xl mx-auto px-6 sm:px-10 pb-10 w-full">
              <h1 className="font-serif text-4xl sm:text-5xl text-isle-salt leading-tight tracking-[-0.02em]">
                {dict.blog.title}
              </h1>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 sm:px-10 pt-12 pb-10">
          <FadeIn>
            <p className="text-lg text-isle-tide leading-relaxed font-text">
              {dict.blog.intro}
            </p>
          </FadeIn>
        </section>

        <section className="max-w-3xl mx-auto px-6 sm:px-10 pb-28">
          <div className="divide-y divide-isle-mist border-t border-isle-mist">
            {ordered.map((post, i) => {
              const meta = post.meta[locale as Locale];
              return (
                <FadeIn key={post.slug} delay={i * 80}>
                  <Link
                    href={`/${locale}/blog/${post.slug}`}
                    className="group block py-10"
                  >
                    <div className="flex items-center gap-4 text-xs text-isle-stone">
                      <time dateTime={post.date}>{meta.dateLabel}</time>
                      <span aria-hidden>·</span>
                      <span>{meta.readingTime}</span>
                    </div>
                    <h2 className="mt-3 font-serif text-2xl sm:text-3xl text-isle-ink group-hover:text-isle-flame transition-colors tracking-[-0.02em]">
                      {meta.title}
                    </h2>
                    <p className="mt-3 text-base text-isle-tide leading-relaxed font-text">
                      {meta.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm text-isle-lagoon">
                      {dict.blog.read}
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </section>
      </main>
      <Footer locale={locale} dict={dict} year={year} />
    </>
  );
}
