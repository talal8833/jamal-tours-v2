"use client";

import { useLocale, useTranslations } from "next-intl";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "../i18n/navigation";
import type { Locale } from "../i18n/routing";

export default function LanguageSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("nav");

  const other: Locale = locale === "ar" ? "en" : "ar";

  return (
    <button
      onClick={() => router.replace(pathname, { locale: other })}
      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/50 transition-all duration-200 ${className}`}
      aria-label={t("language")}
    >
      <Globe className="w-4 h-4" />
      {t("language")}
    </button>
  );
}
