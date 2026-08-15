"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { Dict } from "@/dictionaries";

export function UnlockForm({
  sessionId,
  locale,
  dict,
}: {
  sessionId: string;
  locale: Locale;
  dict: Dict;
}) {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    try {
      const res = await fetch("/api/download/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, email }),
      });
      const data = (await res.json()) as { token?: string; error?: string };
      if (data.token) {
        window.location.replace(`/${locale}/agents/thanks?t=${encodeURIComponent(data.token)}`);
        return;
      }
      setErr(dict.shop.unlockFail);
    } catch {
      setErr(dict.shop.unlockFail);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="mt-8 max-w-md">
      <label className="block text-sm font-medium" htmlFor="unlock-email">
        {dict.shop.unlockLabel}
      </label>
      <input
        id="unlock-email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-2 w-full h-12 rounded-xl border border-black/10 bg-white px-4 text-[15px] outline-none focus:border-[#E23B2E]"
      />
      <button
        type="submit"
        disabled={busy}
        className="mt-4 inline-flex items-center justify-center rounded-full bg-[#E23B2E] px-7 h-12 text-[15px] font-medium text-white hover:bg-[#c92f24] disabled:opacity-60"
      >
        {busy ? dict.shop.unlockBusy : dict.shop.unlockSubmit}
      </button>
      {err ? <p className="mt-3 text-sm text-[#E23B2E]">{err}</p> : null}
    </form>
  );
}
