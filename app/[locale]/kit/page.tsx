import { redirect } from "next/navigation";
import { isLocale } from "@/lib/i18n";

export default async function KitRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) redirect("/fr/agents/security/kit");
  redirect(`/${locale}/agents/security/kit`);
}
