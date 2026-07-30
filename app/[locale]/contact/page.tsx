import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "../../i18n/routing";
import { buildAlternates } from "../../siteConfig";
import ContactContent from "./ContactContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { alternates: buildAlternates(locale, "/contact") };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactContent />;
}
