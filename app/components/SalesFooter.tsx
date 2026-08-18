import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dict } from "@/dictionaries";

export function SalesFooter({
  locale,
  dict,
  year,
}: {
  locale: Locale;
  dict: Dict;
  year: number;
}) {
  return (
    <footer className="border-t border-isle-mist/70 bg-isle-salt">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div>
            <Link
              href={`/${locale}/agents`}
              className="font-serif text-2xl text-isle-ink"
            >
              Karukera
            </Link>
            <p className="mt-3 text-sm text-isle-stone max-w-sm leading-relaxed">
              {dict.footer.salesTagline}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-isle-stone">
            <Link
              href={`/${locale}/agents`}
              className="hover:text-isle-ink"
            >
              {dict.footer.agents}
            </Link>
            <Link
              href={`/${locale}/guides`}
              className="hover:text-isle-ink"
            >
              {dict.nav.guides}
            </Link>
            <Link
              href={`/${locale}/agents/security`}
              className="hover:text-isle-ink"
            >
              {dict.nav.security}
            </Link>
            <Link
              href={`/${locale}/agents/secretary`}
              className="hover:text-isle-ink"
            >
              {dict.nav.secretary}
            </Link>
            <a
              href="https://x.com/cryptulien"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-isle-ink"
            >
              {dict.footer.follow}
            </a>
          </div>
        </div>
        <p className="mt-10 text-xs text-isle-stone">
          {dict.footer.salesLegal} · {year}
        </p>
      </div>
    </footer>
  );
}
