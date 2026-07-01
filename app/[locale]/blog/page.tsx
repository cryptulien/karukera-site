import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { FadeIn } from "../../components/FadeIn";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { posts } from "@/lib/posts";

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
  return { title: `${dict.blog.eyebrow} — Karukera`, description: dict.blog.intro };
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
      <main className="pt-16">
        <section className="max-w-3xl mx-auto px-6 sm:px-10 pt-20 sm:pt-28 pb-12">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.25em] text-sei-vermilion font-medium">
              {dict.blog.eyebrow}
            </p>
            <h1 className="mt-5 font-serif text-4xl sm:text-5xl text-sei-ink leading-tight">
              {dict.blog.title}
            </h1>
            <p className="mt-6 text-lg text-sei-sumi leading-relaxed">
              {dict.blog.intro}
            </p>
            <div className="sei-rule mt-8" />
          </FadeIn>
        </section>

        <section className="max-w-3xl mx-auto px-6 sm:px-10 pb-28">
          <div className="divide-y divide-sei-mist border-t border-sei-mist">
            {ordered.map((post, i) => {
              const meta = post.meta[locale];
              return (
                <FadeIn key={post.slug} delay={i * 80}>
                  <Link
                    href={`/${locale}/blog/${post.slug}`}
                    className="group block py-10"
                  >
                    <div className="flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-sei-stone">
                      <time dateTime={post.date}>{meta.dateLabel}</time>
                      <span aria-hidden>·</span>
                      <span>{meta.readingTime}</span>
                    </div>
                    <h2 className="mt-3 font-serif text-2xl sm:text-3xl text-sei-ink group-hover:text-sei-vermilion transition-colors">
                      {meta.title}
                    </h2>
                    <p className="mt-3 text-base text-sei-sumi leading-relaxed">
                      {meta.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm text-sei-vermilion">
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
