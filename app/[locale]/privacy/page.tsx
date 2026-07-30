import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import LegalPageLayout from "../../components/LegalPageLayout";
import type { Locale } from "../../i18n/routing";

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
    // Self-referencing canonical + hreflang (otherwise this page inherits the
    // layout's homepage canonical, which would flag it as a duplicate).
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: {
        en: "/en/privacy",
        ar: "/ar/privacy",
        "x-default": "/en/privacy",
      },
    },
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
