import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dict } from "@/dictionaries";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function SalesNav({ locale, dict }: { locale: Locale; dict: Dict }) {
  return (
    <header className="sticky top-0 z-50 bg-[#F6F4EF]/90 backdrop-blur-md border-b border-black/5">
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        <Link href={`/${locale}`} className="font-serif text-lg text-[#161616]">
          Karukera
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href={`/${locale}`}
            className="hidden sm:inline py-2 text-sm text-[#5C5954] hover:text-[#161616]"
          >
            Studio
          </Link>
          <Link
            href={`/${locale}/agents`}
            className="py-2 text-sm font-medium text-[#161616]"
          >
            {dict.nav.agents}
          </Link>
          <LanguageSwitcher locale={locale} tone="dark" />
        </div>
      </nav>
    </header>
  );
}
