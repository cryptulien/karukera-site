import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dict } from "@/dictionaries";
import type { KitSku } from "@/lib/kit-offer";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { KitAction } from "./KitAction";

export async function SalesNav({
  locale,
  dict,
  sku,
}: {
  locale: Locale;
  dict: Dict;
  sku?: KitSku;
}) {
  return (
    <header className="sticky top-0 z-50 bg-[#F4F3EF]/90 backdrop-blur-md border-b border-black/[0.06]">
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        <Link
          href={`/${locale}/agents`}
          className="flex items-baseline gap-2 min-w-0"
        >
          <span className="font-serif text-lg text-[#121212] tracking-wide">
            Karukera
          </span>
          <span className="hidden sm:inline text-[13px] text-[#6B675F]">
            {dict.nav.agents}
          </span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-6">
          <Link
            href={`/${locale}/guides`}
            className="hidden sm:inline py-2 text-sm text-[#3F3C38] hover:text-[#121212]"
          >
            {dict.nav.guides}
          </Link>
          <Link
            href={`/${locale}/agents/security`}
            className="py-2 text-sm text-[#3F3C38] hover:text-[#121212]"
          >
            {dict.nav.security}
          </Link>
          <Link
            href={`/${locale}/agents/secretary`}
            className="hidden sm:inline py-2 text-sm text-[#3F3C38] hover:text-[#121212]"
          >
            {dict.nav.secretary}
          </Link>
          <LanguageSwitcher locale={locale} tone="dark" />
          {sku ? (
            <div className="hidden md:block">
              <KitAction locale={locale} dict={dict} sku={sku} compact />
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  );
}
