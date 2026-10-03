import type { Metadata } from "next";
import { Clock, Users, ArrowRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "../../i18n/navigation";
import type { Locale } from "../../i18n/routing";
import { getTours } from "../../data/tours";
import { buildAlternates } from "../../siteConfig";
import TourImageCarousel from "../../components/TourImageCarousel";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.tours" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates(locale, "/tours"),
  };
}

export default async function ToursPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("tours");
  const tours = getTours(locale);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
            {t("badge")}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">{t("title")}</h1>
          <p className="mt-4 text-emerald-100 text-lg max-w-2xl">{t("subtitle")}</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 -mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <article
              key={tour.slug}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <TourImageCarousel
                  images={tour.images}
                  alt={tour.name}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-4 start-4 z-20 bg-white/90 backdrop-blur-sm text-emerald-700 font-bold px-4 py-1.5 rounded-full text-sm shadow">
                  {tour.price}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition">
                  {tour.name}
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {tour.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {tour.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {tour.groupSize}
                  </span>
                </div>

                <Link
                  href={`/tours/${tour.slug}`}
                  className="mt-5 inline-flex items-center gap-2 w-full justify-center rounded-xl bg-emerald-600 py-3 text-white font-semibold hover:bg-emerald-700 transition"
                >
                  {t("viewDetails")}
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-emerald-50 py-16">
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
    </div>
  );
}
