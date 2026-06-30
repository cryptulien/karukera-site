import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { FadeIn } from "../components/FadeIn";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Le Carnet — Karukera",
  description:
    "Écrits, réflexions et vision sur le software agentic AI-first en santé.",
};

export default function BlogIndex() {
  const ordered = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <Nav />
      <main className="pt-16">
        <section className="max-w-3xl mx-auto px-6 sm:px-10 pt-20 sm:pt-28 pb-12">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.25em] text-sei-vermilion font-medium">
              Le Carnet
            </p>
            <h1 className="mt-5 font-serif text-4xl sm:text-5xl text-sei-ink leading-tight">
              Écrits &amp; réflexions
            </h1>
            <p className="mt-6 text-lg text-sei-sumi leading-relaxed">
              Quelques notes sur le chemin : la santé, le software agentic, et la
              conviction qu&apos;un humain seul, bien outillé, peut désormais
              construire ce qui demandait hier une équipe entière.
            </p>
            <div className="sei-rule mt-8" />
          </FadeIn>
        </section>

        <section className="max-w-3xl mx-auto px-6 sm:px-10 pb-28">
          <div className="divide-y divide-sei-mist border-t border-sei-mist">
            {ordered.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 80}>
                <Link href={`/blog/${post.slug}`} className="group block py-10">
                  <div className="flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-sei-stone">
                    <time dateTime={post.date}>{post.dateLabel}</time>
                    <span aria-hidden>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="mt-3 font-serif text-2xl sm:text-3xl text-sei-ink group-hover:text-sei-vermilion transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-base text-sei-sumi leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-sei-vermilion">
                    Lire
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
