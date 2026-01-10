import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Users, MapPin, ArrowLeft, CheckCircle, MessageCircle } from "lucide-react";
import { tours } from "../../data/tours";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function TourDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const tour = tours.find((t) => t.slug === resolvedParams.slug);

  if (!tour) return notFound();

  const waPhone = "968XXXXXXXX";
  const waText = `Hello Jamal, I'm interested in the ${tour.name} tour.`;
  const whatsAppUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(waText)}`;

  return (
    <main>
      <div className="relative h-[50vh] min-h-[400px]">
        <Image
          src={tour.image}
          alt={tour.name}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-6xl mx-auto px-6 pb-10">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Tours
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">{tour.name}</h1>
          <div className="mt-4 flex flex-wrap gap-4 text-white/90 text-sm">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {tour.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {tour.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              {tour.groupSize}
            </span>
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Tour</h2>
              {tour.longDescription.map((p, idx) => (
                <p key={idx} className="text-gray-600 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </div>

            <div className="bg-emerald-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">What's Included</h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {tour.includes.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
              <div className="text-center mb-6">
                <p className="text-sm text-gray-500">Starting from</p>
                <p className="text-4xl font-bold text-emerald-600 mt-1">{tour.price.replace("From ", "")}</p>
                <p className="text-sm text-gray-500 mt-1">per person</p>
              </div>

              <Link
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-emerald-600 py-4 text-white font-semibold hover:bg-emerald-700 transition-all shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Book Now via WhatsApp
              </Link>

              <p className="text-center text-sm text-gray-500 mt-4">
                Or contact me to customize the tour
              </p>

              <Link
                href="/contact"
                className="mt-3 flex items-center justify-center w-full rounded-xl border-2 border-emerald-600 py-3 text-emerald-600 font-semibold hover:bg-emerald-50 transition"
              >
                Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}
