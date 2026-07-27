import Image from "next/image";
import type { Metadata } from "next";
import { ShieldCheck, Award, Languages, Heart, MapPin, ArrowRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "../../i18n/navigation";
import type { Locale } from "../../i18n/routing";

const featureIcons = [ShieldCheck, Languages, Heart, Award];

type FeatureCard = { title: string; desc: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.about" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const features = t.raw("features") as FeatureCard[];

  return (
    <main>
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
            {t("badge")}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">{t("title")}</h1>
          <p className="mt-4 text-emerald-100 text-lg max-w-2xl">{t("subtitle")}</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
              <Image
                src="/images/jamal-tour-guide.avif.avif"
                alt="Jamal - Tour Guide"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -end-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900">{t("badgeCardTitle")}</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
              {t("storyLabel")}
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              {t("whoHeading")}
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("whoParagraph1Prefix")}
              <strong className="text-gray-900">{t("whoName")}</strong>
              {t("whoParagraph1Suffix")}
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">{t("whoParagraph2")}</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-emerald-50 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-emerald-600">{t("statYearsValue")}</p>
                <p className="text-sm text-gray-600 mt-1">{t("statYearsLabel")}</p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-emerald-600">{t("statToursValue")}</p>
                <p className="text-sm text-gray-600 mt-1">{t("statToursLabel")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
              {t("featuresLabel")}
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              {t("featuresHeading")}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, i) => {
              const Icon = featureIcons[i];
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="mt-5 font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{t("ctaHeading")}</h2>
          <p className="mt-4 text-gray-600">{t("ctaText")}</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-600 text-white px-8 py-4 font-semibold hover:bg-emerald-700 transition-all shadow-lg"
          >
            {t("ctaButton")}
            <ArrowRight className="w-5 h-5 rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </main>
  );
}
