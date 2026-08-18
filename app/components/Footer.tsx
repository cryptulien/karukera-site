import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dict } from "@/dictionaries";

export function Footer({
  locale,
  dict,
  year,
}: {
  locale: Locale;
  dict: Dict;
  year: number;
}) {
  return (
    <footer className="border-t border-isle-mist/80">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div>
            <p className="font-serif text-2xl text-isle-ink">Karukera</p>
            <p className="mt-3 text-sm text-isle-stone max-w-xs leading-relaxed">
              {dict.footer.tagline}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-isle-tide">
            <Link
              href={`/${locale}`}
              className="hover:text-isle-ink transition-colors"
            >
              {dict.footer.home}
            </Link>
            <Link
              href={`/${locale}/agents`}
              className="hover:text-isle-ink transition-colors"
            >
              {dict.footer.agents}
            </Link>
            <Link
              href={`/${locale}/blog`}
              className="hover:text-isle-ink transition-colors"
            >
              {dict.footer.carnet}
            </Link>
            <a
              href="https://x.com/cryptulien"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-isle-ink transition-colors"
            >
              {dict.footer.follow}
            </a>
            <a
              href="mailto:julienlelandais@me.com"
              className="hover:text-isle-ink transition-colors"
            >
              {dict.footer.write}
            </a>
          </div>
        </div>
        <p className="mt-12 pt-6 border-t border-isle-mist/80 text-xs text-isle-stone tracking-wide">
          Karukera — Julien Lelandais · {year}
        </p>
      </div>
    </footer>
  );
}
