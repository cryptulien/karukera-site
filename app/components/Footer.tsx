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
    <footer className="border-t border-sei-mist">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div>
            <p className="font-serif text-2xl text-sei-ink">Karukera</p>
            <p className="mt-3 text-sm text-sei-stone max-w-xs leading-relaxed">
              {dict.footer.tagline}
            </p>
          </div>
          <div className="flex items-center gap-7 text-sm text-sei-sumi">
            <Link
              href={`/${locale}`}
              className="hover:text-sei-ink transition-colors"
            >
              {dict.footer.home}
            </Link>
            <Link
              href={`/${locale}/blog`}
              className="hover:text-sei-ink transition-colors"
            >
              {dict.footer.carnet}
            </Link>
            <a
              href="mailto:julienlelandais@me.com"
              className="hover:text-sei-ink transition-colors"
            >
              {dict.footer.write}
            </a>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-sei-mist flex items-center gap-3">
          <span className="sei-seal" aria-hidden />
          <span className="text-xs text-sei-stone tracking-wide">
            Karukera — Julien Lelandais · {year}
          </span>
        </div>
      </div>
    </footer>
  );
}
