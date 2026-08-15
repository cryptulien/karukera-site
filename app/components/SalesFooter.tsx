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
    <footer className="border-t border-black/5 bg-[#F6F4EF]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div>
            <p className="font-serif text-2xl text-[#161616]">Karukera</p>
            <p className="mt-3 text-sm text-[#5C5954] max-w-sm leading-relaxed">
              {dict.footer.tagline}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#5C5954]">
            <Link href={`/${locale}`} className="hover:text-[#161616]">
              {dict.footer.home}
            </Link>
            <Link href={`/${locale}/agents`} className="hover:text-[#161616]">
              {dict.footer.agents}
            </Link>
            <a
              href="https://x.com/cryptulien"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#161616]"
            >
              {dict.footer.follow}
            </a>
          </div>
        </div>
        <p className="mt-10 text-xs text-[#8A857D]">
          {dict.footer.legal} · {year}
        </p>
      </div>
    </footer>
  );
}
