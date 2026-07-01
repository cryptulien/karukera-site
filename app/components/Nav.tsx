import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dict } from "@/dictionaries";
import { LanguageSwitcher } from "./LanguageSwitcher";

/**
 * Navigation minimale, esthétique seijaku.
 * `floating` : posée par-dessus le hero plein écran (texte clair).
 * sinon : barre washi opaque pour les pages intérieures (blog).
 */
export function Nav({
  locale,
  dict,
  floating = false,
}: {
  locale: Locale;
  dict: Dict;
  floating?: boolean;
}) {
  const skin = floating
    ? "bg-transparent"
    : "bg-sei-washi/85 backdrop-blur-sm border-b border-sei-mist";
  const text = floating ? "text-white" : "text-sei-ink";

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors ${skin}`}>
      <nav
        className={`max-w-5xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between ${text}`}
      >
        <Link
          href={`/${locale}`}
          className="font-serif text-lg tracking-wide hover:opacity-70 transition-opacity"
        >
          Karukera
        </Link>
        <div className="flex items-center gap-5 sm:gap-7 text-sm tracking-wide">
          <Link
            href={`/${locale}#projets`}
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            {dict.nav.projects}
          </Link>
          <Link
            href={`/${locale}/blog`}
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            {dict.nav.carnet}
          </Link>
          <span
            className={`h-3 w-px ${floating ? "bg-white/30" : "bg-sei-mist"}`}
            aria-hidden
          />
          <LanguageSwitcher locale={locale} tone={floating ? "light" : "dark"} />
        </div>
      </nav>
    </header>
  );
}
