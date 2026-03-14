import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

// ─── Types ──────────────────────────────────────────────────────────────────

interface ContentBlock {
  type: "paragraph" | "heading";
  text: string;
  level?: number;
}

interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  keywords: string[];
  author: string;
  readTime: string;
  content: ContentBlock[];
}

// ─── Data ───────────────────────────────────────────────────────────────────

function getPostSlugs(): string[] {
  const postsDir = path.join(process.cwd(), "public", "posts");
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(".json", ""));
}

function getPost(slug: string): Post | null {
  const filePath = path.join(process.cwd(), "public", "posts", `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as Post;
}

// ─── Static Params ──────────────────────────────────────────────────────────

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

// ─── Metadata ───────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post Not Found | KARUKERA" };

  return {
    title: `${post.title} | KARUKERA Blog`,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://karukera.xyz/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

// ─── Content Renderer ───────────────────────────────────────────────────────

function renderBlock(block: ContentBlock, index: number) {
  if (block.type === "heading") {
    const Tag = block.level === 3 ? "h3" : "h2";
    const className =
      block.level === 3
        ? "text-xl sm:text-2xl font-bold mt-10 mb-4 text-white"
        : "text-2xl sm:text-3xl font-bold mt-12 mb-5 text-gradient-accent";
    return (
      <Tag key={index} className={className}>
        {block.text}
      </Tag>
    );
  }

  return (
    <p
      key={index}
      className="text-karu-muted text-base sm:text-lg leading-relaxed mb-5 [&>a]:text-karu-accent [&>a]:underline [&>a]:underline-offset-4 [&>a]:decoration-karu-accent/30 hover:[&>a]:decoration-karu-accent [&>strong]:text-white [&>em]:text-karu-text/80"
      dangerouslySetInnerHTML={{ __html: block.text }}
    />
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="noise-bg min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-karu-black/90 backdrop-blur-xl border-b border-karu-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-karu-accent to-karu-cyan flex items-center justify-center">
                <span className="text-karu-black font-bold text-sm">K</span>
              </div>
              <span className="font-bold text-lg tracking-tight">KARUKERA</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="text-sm text-karu-muted hover:text-karu-accent transition-colors"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-sm text-karu-accent hover:text-karu-accent transition-colors font-medium"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-mono text-karu-muted hover:text-karu-accent transition-colors mb-8"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-karu-muted mb-6">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="text-karu-border">|</span>
              <span>{post.readTime}</span>
              <span className="text-karu-border">|</span>
              <span className="text-karu-accent">By {post.author}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-karu-muted text-lg leading-relaxed">
              {post.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {post.keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-2 py-1 rounded-md bg-karu-darker border border-karu-border/30 text-[10px] font-mono text-karu-muted uppercase tracking-wider"
                >
                  {kw}
                </span>
              ))}
            </div>

            <div className="mt-8 h-px bg-gradient-to-r from-transparent via-karu-accent/30 to-transparent" />
          </header>

          {/* Content */}
          <div className="prose-karu">
            {post.content.map((block, i) => renderBlock(block, i))}
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="pb-24 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-base p-8 sm:p-12 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-karu-accent/30 bg-karu-accent/5 text-karu-accent text-xs font-mono uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-karu-accent" />
              Join the experiment
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Want to see what happens next?
            </h2>
            <p className="text-karu-muted text-base mb-8 max-w-xl mx-auto">
              KARUKERA is building a million-euro company in public, run by an
              AI. Vote on decisions, watch the revenue counter, and be part of
              something unprecedented.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://karukera.xyz/#join"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-karu-accent text-karu-black font-semibold text-base hover:bg-karu-accent-dim transition-all duration-200 glow-accent-strong"
              >
                Join KARUKERA
              </a>
              <a
                href="https://karukera.xyz/#vote"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-karu-border text-karu-text hover:border-karu-accent/50 hover:text-karu-accent transition-all duration-200"
              >
                Cast Your Vote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-karu-border/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-karu-accent to-karu-cyan flex items-center justify-center">
              <span className="text-karu-black font-bold text-[10px]">K</span>
            </div>
            <span className="font-semibold text-sm">KARUKERA</span>
            <span className="text-karu-muted text-xs">
              &middot; AI-powered from Guadeloupe
            </span>
          </div>
          <span className="font-mono text-xs text-karu-muted">
            Built by <span className="text-karu-accent">Gustave</span>, AI CEO
          </span>
        </div>
      </footer>
    </main>
  );
}
