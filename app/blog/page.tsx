import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Journal | KARUKERA",
  description:
    "Notes, réflexions et articles publiés sur KARUKERA autour des projets, du produit, de la santé, de la technologie et de la construction.",
  keywords: [
    "KARUKERA",
    "Julien Lelandais",
    "blog",
    "journal",
    "produit",
    "santé",
    "technologie",
  ],
  openGraph: {
    title: "Journal | KARUKERA",
    description:
      "Notes, réflexions et articles publiés sur KARUKERA.",
    type: "website",
    url: "https://karukera.xyz/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Journal | KARUKERA",
    description: "Notes, réflexions et articles publiés sur KARUKERA.",
  },
};

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  readTime: string;
  keywords: string[];
}

function getPosts(): PostMeta[] {
  const postsDir = path.join(process.cwd(), "public", "posts");
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".json"));

  const posts: PostMeta[] = files.map((file) => {
    const raw = fs.readFileSync(path.join(postsDir, file), "utf-8");
    const data = JSON.parse(raw);
    return {
      slug: data.slug,
      title: data.title,
      date: data.date,
      description: data.description,
      readTime: data.readTime,
      keywords: data.keywords,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndex() {
  const posts = getPosts();

  return (
    <main className="noise-bg min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-karu-black/90 backdrop-blur-xl border-b border-karu-border/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-karu-accent to-karu-cyan flex items-center justify-center">
                <span className="text-karu-black font-bold text-sm">K</span>
              </div>
              <span className="font-semibold tracking-[0.12em] text-sm sm:text-base">KARUKERA</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm text-karu-muted hover:text-karu-accent transition-colors">
                Accueil
              </Link>
              <span className="text-sm text-karu-accent font-medium">Journal</span>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 grid-bg animate-grid-pulse" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(800px,200vw)] h-[400px] bg-gradient-radial from-karu-accent/5 via-transparent to-transparent rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-karu-accent/30 bg-karu-accent/5 text-karu-accent text-xs font-mono uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-karu-accent" />
            Journal
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Notes, idées et
            <span className="text-gradient-accent"> réflexions de construction</span>
          </h1>
          <p className="max-w-2xl mx-auto text-karu-muted text-lg">
            Une sélection d’articles publiés sur KARUKERA autour des projets, du produit, de la santé, de la technologie et de la manière de construire.
          </p>
        </div>
      </section>

      <section className="pb-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block card-base p-6 sm:p-8 hover:border-karu-accent/40 transition-all duration-300 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3 text-xs font-mono text-karu-muted">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span className="text-karu-border">|</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-karu-accent transition-colors">
                  {post.title}
                </h2>

                <p className="text-karu-muted text-sm sm:text-base leading-relaxed mb-4">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.keywords.slice(0, 4).map((kw) => (
                    <span
                      key={kw}
                      className="px-2 py-1 rounded-md bg-karu-darker border border-karu-border/30 text-[10px] font-mono text-karu-muted uppercase tracking-wider"
                    >
                      {kw}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs font-mono text-karu-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="w-1 h-1 rounded-full bg-karu-accent" />
                  Lire l’article
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-karu-border/30 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-karu-accent to-karu-cyan flex items-center justify-center">
              <span className="text-karu-black font-bold text-[10px]">K</span>
            </div>
            <span className="font-semibold text-sm">KARUKERA</span>
            <span className="text-karu-muted text-xs">· Journal</span>
          </div>
          <span className="font-mono text-xs text-karu-muted">© {new Date().getFullYear()} Julien Lelandais</span>
        </div>
      </footer>
    </main>
  );
}
