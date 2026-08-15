import { createHmac, timingSafeEqual } from "crypto";

const DAY = 24 * 60 * 60;

function secret(): string {
  return (
    process.env.KIT_DOWNLOAD_SECRET ||
    process.env.STRIPE_SECRET_KEY ||
    ""
  );
}

export function signDownload(sessionId: string, ttlSec = 7 * DAY): string {
  const exp = Math.floor(Date.now() / 1000) + ttlSec;
  const payload = `${sessionId}.${exp}`;
  const sig = createHmac("sha256", secret()).update(payload).digest("base64url");
  return `${payload}.${sig}`;
}

export const KIT_COOKIE = "karukera_kit";

export function hashUnlock(nonce: string): string {
  return createHmac("sha256", secret()).update(`unlock:${nonce}`).digest("base64url");
}

export function unlockMatches(nonce: string, stored: string | null | undefined): boolean {
  if (!nonce || !stored) return false;
  const a = Buffer.from(hashUnlock(nonce));
  const b = Buffer.from(stored);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function verifyDownload(token: string): string | null {
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const [sessionId, expStr, sig] = parts;
  const exp = Number(expStr);
  if (!sessionId || !Number.isFinite(exp) || exp < Date.now() / 1000) return null;
  const payload = `${sessionId}.${expStr}`;
  const expected = createHmac("sha256", secret()).update(payload).digest("base64url");
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  return sessionId;
}
