import Link from "next/link";

/**
 * Navigation minimale, esthétique seijaku.
 * `floating` : posée par-dessus le hero plein écran (texte clair).
 * sinon : barre washi opaque pour les pages intérieures (blog).
 */
export function Nav({ floating = false }: { floating?: boolean }) {
  const base =
    "fixed top-0 inset-x-0 z-50 transition-colors";
  const skin = floating
    ? "bg-transparent"
    : "bg-sei-washi/85 backdrop-blur-sm border-b border-sei-mist";
  const text = floating ? "text-white" : "text-sei-ink";

  return (
    <header className={`${base} ${skin}`}>
      <nav
        className={`max-w-5xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between ${text}`}
      >
        <Link
          href="/"
          className="font-serif text-lg tracking-wide hover:opacity-70 transition-opacity"
        >
          Karukera
        </Link>
        <div className="flex items-center gap-7 text-sm tracking-wide">
          <Link
            href="/#projets"
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            Projets
          </Link>
          <Link
            href="/blog"
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            Le Carnet
          </Link>
        </div>
      </nav>
    </header>
  );
}
