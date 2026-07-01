import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, isLocale, type Locale } from "@/lib/i18n";

// Pays francophones (métropole, Outre-mer, Afrique francophone, etc.)
const FR_COUNTRIES = new Set([
  "FR", "BE", "CH", "LU", "MC", "GP", "MQ", "GF", "RE", "YT", "PM", "BL", "MF",
  "WF", "PF", "NC", "TF", "SN", "CI", "ML", "BF", "NE", "TG", "BJ", "GN", "CG",
  "CD", "CM", "GA", "TD", "CF", "DJ", "KM", "MG", "HT", "VU", "SC", "RW", "BI",
  "MR", "MU",
]);

// Pays hispanophones
const ES_COUNTRIES = new Set([
  "ES", "MX", "AR", "CO", "PE", "VE", "CL", "EC", "GT", "CU", "BO", "DO", "HN",
  "PY", "SV", "NI", "CR", "PA", "UY", "GQ", "PR",
]);

function detectLocale(req: NextRequest): Locale {
  // 1. Choix explicite mémorisé (sélecteur)
  const cookie = req.cookies.get("NEXT_LOCALE")?.value;
  if (cookie && isLocale(cookie)) return cookie;

  // 2. Lieu de vie (géolocalisation IP fournie par Vercel)
  const country = req.headers.get("x-vercel-ip-country")?.toUpperCase();
  if (country) {
    if (FR_COUNTRIES.has(country)) return "fr";
    if (ES_COUNTRIES.has(country)) return "es";
    return "en";
  }

  // 3. Langue du navigateur (repli, ex. en local sans géoloc)
  const accept = req.headers.get("accept-language")?.toLowerCase() ?? "";
  const primary = accept.split(",")[0]?.trim().slice(0, 2);
  if (primary && isLocale(primary)) return primary;

  // 4. Défaut
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return NextResponse.next();

  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // exclut assets Next, fichiers statiques (avec extension) et métadonnées
  matcher: ["/((?!_next|images|.*\\..*).*)"],
};
