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

export function emailsMatch(a: string | null | undefined, b: string | null | undefined): boolean {
  if (!a || !b) return false;
  const left = a.trim().toLowerCase();
  const right = b.trim().toLowerCase();
  if (!left || !right || left.length !== right.length) return false;
  const x = Buffer.from(left);
  const y = Buffer.from(right);
  if (x.length !== y.length) return false;
  return timingSafeEqual(x, y);
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
