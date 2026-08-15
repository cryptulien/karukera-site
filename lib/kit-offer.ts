export const KIT_CURRENCY = "eur";

export type KitSku = "security-kit" | "sales-secretary";

export type KitOffer = {
  sku: KitSku;
  slug: string;
  filename: string;
  priceCents: number;
  cancelPath: string;
  name: Record<string, string>;
  description: Record<string, string>;
};

export const KITS: Record<KitSku, KitOffer> = {
  "security-kit": {
    sku: "security-kit",
    slug: "security",
    filename: "karukera-security-kit.zip",
    priceCents: 19700,
    cancelPath: "/agents/security",
    name: {
      fr: "Karukera · Kit audit sécu Web + SaaS",
      en: "Karukera · Web + SaaS security audit kit",
      es: "Karukera · Kit de auditoría de seguridad Web + SaaS",
    },
    description: {
      fr: "ZIP d’agents d’audit sécu Web + SaaS. Livraison immédiate après paiement.",
      en: "ZIP of Web + SaaS security-audit agents. Immediate download after payment.",
      es: "ZIP de agentes de auditoría de seguridad Web + SaaS. Descarga inmediata tras el pago.",
    },
  },
  "sales-secretary": {
    sku: "sales-secretary",
    slug: "secretary",
    filename: "karukera-sales-secretary.zip",
    priceCents: 19700,
    cancelPath: "/agents/secretary",
    name: {
      fr: "Karukera · Kit secrétaire commercial",
      en: "Karukera · Sales secretary kit",
      es: "Karukera · Kit de secretaria comercial",
    },
    description: {
      fr: "Appliance Hermes : mails + appels Ringover → Telegram → Odoo. ZIP livré après paiement.",
      en: "Hermes appliance: mail + Ringover calls → Telegram → Odoo. ZIP delivered after payment.",
      es: "Appliance Hermes: mails + llamadas Ringover → Telegram → Odoo. ZIP tras el pago.",
    },
  },
};

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
