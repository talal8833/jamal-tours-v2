import type { Metadata } from "next";
import { Star, Quote } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "../../i18n/navigation";
import type { Locale } from "../../i18n/routing";
import { getReviews } from "../../data/reviews";
import { buildAlternates } from "../../siteConfig";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.reviews" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates(locale, "/reviews"),
  };
}

function Stars({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${value} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < value ? "text-amber-400 fill-amber-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("reviews");
  const reviews = getReviews(locale);

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

      <section className="max-w-6xl mx-auto px-6 py-16 -mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="absolute top-4 end-4 w-8 h-8 text-emerald-100" />

              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-bold text-xl">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{r.name}</p>
                  <p className="text-sm text-gray-500">
                    {r.countryFlag} {r.countryName}
                  </p>
                </div>
              </div>

              <Stars value={r.rating} />
              <p className="mt-4 text-gray-700 leading-relaxed">{r.text}</p>
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
          </Link>
        </div>
      </section>
    </main>
  );
}
