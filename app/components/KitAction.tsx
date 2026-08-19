import type { Dict } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";
import { getGitHubRepoStats } from "@/lib/github-stats";
import { getKit, isOpenSource, type KitSku } from "@/lib/kit-offer";
import { BuyButton } from "./BuyButton";
import { GitHubCta } from "./GitHubCta";

export async function KitAction({
  locale,
  dict,
  sku = "security-kit",
  className = "",
  compact = false,
  tone = "light",
  label,
  priceLabel,
}: {
  locale: Locale;
  dict: Dict;
  sku?: KitSku;
  className?: string;
  compact?: boolean;
  tone?: "light" | "dark";
  label?: string;
  priceLabel?: string;
}) {
  const kit = getKit(sku);
  if (kit && isOpenSource(kit)) {
    const stats = await getGitHubRepoStats(kit.openSource.githubRepo);
    return (
      <GitHubCta
        githubRepo={kit.openSource.githubRepo}
        license={kit.openSource.license}
        dict={dict}
        stats={stats}
        className={className}
        compact={compact}
        tone={tone}
      />
    );
  }

  return (
    <BuyButton
      locale={locale}
      dict={dict}
      sku={sku}
      className={className}
      compact={compact}
      label={label}
      priceLabel={priceLabel}
    />
  );
}
