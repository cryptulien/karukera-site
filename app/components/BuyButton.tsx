"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { Dict } from "@/dictionaries";

export function BuyButton({
  locale,
  dict,
  sku = "security-kit",
  className = "",
  compact = false,
  label,
  priceLabel,
}: {
  locale: Locale;
  dict: Dict;
  sku?: "security-kit" | "sales-secretary";
  className?: string;
  compact?: boolean;
  label?: string;
  priceLabel?: string;
}) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function buy() {
    setBusy(true);
    setErr(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale, sku }),
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (data.url) {
        window.location.href = data.url;
        return;
      }
      setErr(
        res.status === 503 ? dict.shop.stripeMissing : data.error || dict.shop.checkoutError,
      );
    } catch {
      setErr(dict.shop.checkoutError);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className={className}>
      <button
        type="button"
        onClick={buy}
        disabled={busy}
        className={
          compact
            ? "inline-flex items-center justify-center rounded-full bg-[#E23B2E] px-4 h-9 text-[13px] font-medium text-white hover:bg-[#c92f24] disabled:opacity-60 transition-colors"
            : "inline-flex items-center justify-center rounded-full bg-[#E23B2E] px-7 h-12 text-[15px] font-medium text-white hover:bg-[#c92f24] disabled:opacity-60 transition-colors"
        }
      >
        {busy ? dict.shop.busy : compact ? (priceLabel ?? dict.shop.price) : (label ?? dict.shop.buy)}
      </button>
      {err ? <p className="mt-3 text-sm text-[#E23B2E]">{err}</p> : null}
    </div>
  );
}
