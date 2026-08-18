import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dict } from "@/dictionaries";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { BuyButton } from "./BuyButton";

export function SalesNav({
  locale,
  dict,
  sku,
}: {
  locale: Locale;
  dict: Dict;
  sku?: "security-kit" | "sales-secretary";
}) {
  return (
    <header className="sticky top-0 z-50 bg-isle-salt/90 backdrop-blur-md border-b border-isle-mist/60">
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        <Link
          href={`/${locale}/agents`}
          className="flex items-baseline gap-2 min-w-0"
        >
          <span className="font-serif text-lg text-isle-ink tracking-wide">
            Karukera
          </span>
          <span className="hidden sm:inline text-[13px] text-isle-stone">
            {dict.nav.agents}
          </span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-6">
          <Link
            href={`/${locale}/guides`}
            className="hidden sm:inline py-2 text-sm text-isle-tide hover:text-isle-ink"
          >
            {dict.nav.guides}
          </Link>
          <Link
            href={`/${locale}/agents/security`}
            className="py-2 text-sm text-isle-tide hover:text-isle-ink"
          >
            {dict.nav.security}
          </Link>
          <Link
            href={`/${locale}/agents/secretary`}
            className="hidden sm:inline py-2 text-sm text-isle-tide hover:text-isle-ink"
          >
            {dict.nav.secretary}
          </Link>
          <LanguageSwitcher locale={locale} tone="dark" />
          {sku ? (
            <div className="hidden md:block">
              <BuyButton
                locale={locale}
                dict={dict}
                sku={sku}
                compact
                label={
                  sku === "sales-secretary"
                    ? dict.secretary.buy
                    : dict.shop.buy
                }
              />
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  );
}
