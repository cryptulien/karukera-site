"use client";

import { useState } from "react";

export function CloneButton({
  command,
  label,
  copiedLabel,
  compact = false,
  tone = "light",
}: {
  command: string;
  label: string;
  copiedLabel: string;
  compact?: boolean;
  tone?: "light" | "dark";
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={
        compact
          ? tone === "dark"
            ? "inline-flex items-center justify-center rounded-full border border-white/25 px-4 h-9 text-[13px] font-medium text-white hover:border-white/50 transition-colors"
            : "inline-flex items-center justify-center rounded-full border border-black/15 px-4 h-9 text-[13px] font-medium text-[#121212] hover:border-black/30 transition-colors"
          : tone === "dark"
            ? "inline-flex items-center justify-center rounded-full border border-white/25 px-7 h-12 text-[15px] font-medium text-white hover:border-white/50 transition-colors"
            : "inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-7 h-12 text-[15px] font-medium text-[#121212] hover:border-black/30 transition-colors"
      }
    >
      {copied ? copiedLabel : label}
    </button>
  );
}
