import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "../../../components/Nav";
import { Footer } from "../../../components/Footer";
import { isLocale, locales } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { posts, getPost, PostBody } from "@/lib/posts";
import { localeAlternates } from "@/lib/seo";
import { ogImage } from "@/lib/share";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    posts.map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPost(slug);
  const loc = isLocale(locale) ? locale : "fr";
  if (!post) return { title: "Karukera" };
  const meta = post.meta[loc];
  return {
    title: `${meta.title} — Karukera`,
    description: meta.excerpt,
    alternates: localeAlternates(loc, `/blog/${post.slug}`),
    openGraph: {
      title: `${meta.title} — Karukera`,
      description: meta.excerpt,
      type: "article",
      url: `https://karukera.xyz/${loc}/blog/${post.slug}`,
      images: [ogImage("/images/og-default.jpg", meta.title)],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const post = getPost(slug);
  if (!post) notFound();

  const dict = getDictionary(locale);
  const meta = post.meta[locale];
  const year = new Date().getFullYear();

  return (
    <>
      <Nav locale={locale} dict={dict} />
      <main className="pt-16 bg-isle-salt">
        <article className="max-w-prose mx-auto px-6 sm:px-10 pt-16 sm:pt-24 pb-24">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-sm text-isle-stone hover:text-isle-ink transition-colors"
          >
            <span aria-hidden>←</span> {dict.blog.back}
          </Link>

          <header className="mt-10">
            <div className="flex items-center gap-4 text-xs text-isle-stone">
              <time dateTime={post.date}>{meta.dateLabel}</time>
              <span aria-hidden>·</span>
              <span>{meta.readingTime}</span>
            </div>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-isle-ink leading-tight tracking-[-0.02em]">
              {meta.title}
            </h1>
            <div className="isle-rule mt-8" />
          </header>

          <div className="mt-12 font-text">
            <PostBody blocks={post.content[locale]} />
          </div>
        </article>

        <div className="max-w-prose mx-auto px-6 sm:px-10 pb-24">
          <div className="border-t border-isle-mist pt-10 flex items-center justify-between">
            <p className="font-serif text-lg text-isle-ink">Karukera</p>
            <Link
              href={`/${locale}/blog`}
              className="text-sm text-isle-lagoon hover:text-isle-flame transition-colors"
            >
              ← {dict.blog.allWritings}
            </Link>
          </div>
        </div>
      </main>
      <Footer locale={locale} dict={dict} year={year} />
    </>
  );
}
