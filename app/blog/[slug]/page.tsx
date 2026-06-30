import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { posts, getPost } from "../posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Le Carnet — Karukera" };
  return {
    title: `${post.title} — Karukera`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} — Karukera`,
      description: post.excerpt,
      type: "article",
      url: `https://karukera.xyz/blog/${post.slug}`,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main className="pt-16">
        <article className="max-w-prose mx-auto px-6 sm:px-10 pt-16 sm:pt-24 pb-24">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-sei-stone hover:text-sei-ink transition-colors"
          >
            <span aria-hidden>←</span> Le Carnet
          </Link>

          <header className="mt-10">
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-sei-stone">
              <time dateTime={post.date}>{post.dateLabel}</time>
              <span aria-hidden>·</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-sei-ink leading-tight">
              {post.title}
            </h1>
            <div className="sei-rule mt-7" />
          </header>

          <div className="mt-12">{post.content}</div>
        </article>

        <div className="max-w-prose mx-auto px-6 sm:px-10 pb-24">
          <div className="border-t border-sei-mist pt-10 flex items-center justify-between">
            <p className="font-serif text-lg text-sei-ink">Karukera</p>
            <Link
              href="/blog"
              className="text-sm text-sei-vermilion hover:opacity-70 transition-opacity"
            >
              ← Tous les écrits
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
