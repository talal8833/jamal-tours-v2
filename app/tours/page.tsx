import Image from "next/image";
import Link from "next/link";
import { Clock, Users, ArrowRight } from "lucide-react";
import { tours } from "../data/tours";

export default function ToursPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
            Tour Packages
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Discover My Tours</h1>
          <p className="mt-4 text-emerald-100 text-lg max-w-2xl">
            Browse a curated selection of tours across Oman. Every experience can be customized to your interests and schedule.
          </p>
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
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-emerald-700 font-bold px-4 py-1.5 rounded-full text-sm shadow">
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
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-emerald-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Can't find what you're looking for?
          </h2>
          <p className="mt-4 text-gray-600">
            I can design a custom tour tailored exactly to your wishes and interests. Contact me to discuss your ideal trip.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-600 text-white px-8 py-4 font-semibold hover:bg-emerald-700 transition-all shadow-lg"
          >
            Contact Me
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
