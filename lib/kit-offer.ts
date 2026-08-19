export const KIT_CURRENCY = "eur";

export type KitSku = "security-kit" | "sales-secretary";

export type OpenSourceKit = {
  githubRepo: string;
  license: "MIT";
};

export type KitOffer = {
  sku: KitSku;
  slug: string;
  filename: string;
  priceCents: number;
  cancelPath: string;
  name: Record<string, string>;
  description: Record<string, string>;
  /** When set, the SKU is not sold — checkout is denied and the storefront links to GitHub. */
  openSource?: OpenSourceKit;
};

export const KITS: Record<KitSku, KitOffer> = {
  "security-kit": {
    sku: "security-kit",
    slug: "security",
    filename: "karukera-security-kit.zip",
    priceCents: 19700,
    cancelPath: "/agents/security",
    openSource: {
      githubRepo: "cryptulien/security-kit",
      license: "MIT",
    },
    name: {
      fr: "Karukera · Kit audit sécu Web + SaaS",
      en: "Karukera · Web + SaaS security audit kit",
      es: "Karukera · Kit de auditoría de seguridad Web + SaaS",
    },
    description: {
      fr: "Kit d’agents d’audit sécu Web + SaaS. Open source, licence MIT.",
      en: "Web + SaaS security-audit agent kit. Open source, MIT license.",
      es: "Kit de agentes de auditoría de seguridad Web + SaaS. Open source, licencia MIT.",
    },
  },
  "sales-secretary": {
    sku: "sales-secretary",
    slug: "secretary",
    filename: "karukera-sales-secretary.zip",
    priceCents: 19700,
    cancelPath: "/agents/secretary",
    openSource: {
      githubRepo: "cryptulien/quicktalk-automation",
      license: "MIT",
    },
    name: {
      fr: "Karukera · Kit secrétaire commercial",
      en: "Karukera · Sales secretary kit",
      es: "Karukera · Kit de secretaria comercial",
    },
    description: {
      fr: "Appliance Hermes : mails + appels Ringover → Telegram → Odoo. Open source, licence MIT.",
      en: "Hermes appliance: mail + Ringover calls → Telegram → Odoo. Open source, MIT license.",
      es: "Appliance Hermes: mails + llamadas Ringover → Telegram → Odoo. Open source, licencia MIT.",
    },
  },
};

export function isOpenSource(kit: KitOffer): kit is KitOffer & { openSource: OpenSourceKit } {
  return Boolean(kit.openSource);
}

export function githubHttpsUrl(repo: string): string {
  return `https://github.com/${repo}`;
}

export function githubCloneUrl(repo: string): string {
  return `https://github.com/${repo}.git`;
}

export function checkoutDeniedFor(
  kit: KitOffer,
): { status: number; error: string; github: string } | null {
  if (!kit.openSource) return null;
  return {
    status: 409,
    error: "This kit is open source and is not sold.",
    github: githubHttpsUrl(kit.openSource.githubRepo),
  };
}

/** @deprecated use getKit("security-kit") */
export const KIT_SKU: KitSku = "security-kit";
/** @deprecated */
export const KIT_PRICE_CENTS = KITS["security-kit"].priceCents;
/** @deprecated */
export const KIT_FILENAME = KITS["security-kit"].filename;
/** @deprecated */
export const KIT_NAME = KITS["security-kit"].name;

export function isKitSku(value: string | null | undefined): value is KitSku {
  return value === "security-kit" || value === "sales-secretary";
}

export function getKit(sku: string | null | undefined): KitOffer | null {
  if (!isKitSku(sku)) return null;
  return KITS[sku];
}

export function formatPrice(cents: number, locale: string): string {
  if (locale === "en") return `€${(cents / 100).toFixed(0)}`;
  return `${(cents / 100).toFixed(0)} €`;
}
