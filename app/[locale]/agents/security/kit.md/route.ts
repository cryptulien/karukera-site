import { NextResponse } from "next/server";
import { isLocale, locales } from "@/lib/i18n";
import { kitBriefMarkdown } from "@/lib/kit-brief";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return new NextResponse("Not found", { status: 404 });
  }
  return new NextResponse(kitBriefMarkdown(locale), {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": 'inline; filename="karukera-security-kit.md"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
