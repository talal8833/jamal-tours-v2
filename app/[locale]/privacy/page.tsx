import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import LegalPageLayout from "../../components/LegalPageLayout";
import type { Locale } from "../../i18n/routing";
import { buildAlternates } from "../../siteConfig";

type Section = { heading: string; body: string[] };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.privacy" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates(locale, "/privacy"),
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacy");

  return (
    <LegalPageLayout
      badge={t("badge")}
      title={t("title")}
      subtitle={t("subtitle")}
      intro={t("intro")}
      lastUpdated={t("lastUpdated")}
      sections={t.raw("sections") as Section[]}
    />
  );
}
