import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-sei-mist">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div>
            <p className="font-serif text-2xl text-sei-ink">Karukera</p>
            <p className="mt-3 text-sm text-sei-stone max-w-xs leading-relaxed">
              Le software agentic, AI-first, au service de la santé. Calme dans
              la tempête.
            </p>
          </div>
          <div className="flex items-center gap-7 text-sm text-sei-sumi">
            <Link href="/" className="hover:text-sei-ink transition-colors">
              Accueil
            </Link>
            <Link href="/blog" className="hover:text-sei-ink transition-colors">
              Le Carnet
            </Link>
            <a
              href="mailto:julienlelandais@me.com"
              className="hover:text-sei-ink transition-colors"
            >
              Écrire
            </a>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-sei-mist flex items-center gap-3">
          <span className="sei-seal" aria-hidden />
          <span className="text-xs text-sei-stone tracking-wide">
            Karukera — Julien Lelandais · {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
