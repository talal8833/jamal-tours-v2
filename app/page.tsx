import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Car, Sparkles, MapPin, Star, ArrowRight } from "lucide-react";
import { tours } from "./data/tours";

const popularTours = [
  {
    name: "Discover Magical Muscat",
    slug: "desert-safari-adventure",
    price: "From $195",
    image: "/images/tour-desert.jfif",
  },
  {
    name: "Explore Wadi Shab",
    slug: "mountain-hiking-experience",
    price: "From $290",
    image: "/images/tour-mountain.jpg",
  },
  {
    name: "Discover Nizwa Mountains and Markets",
    slug: "wadi-swimming-escape",
    price: "From $290",
    image: "/images/tour-wadi.svg",
  },
];

const reviews = [
  {
    name: "Sarah M.",
    text: "Amazing experience! Jamal customized the tour to our interests and showed us beautiful hidden spots.",
    rating: 5,
  },
  {
    name: "Omar A.",
    text: "Professional, friendly, and very knowledgeable about the local culture. Highly recommend!",
    rating: 5,
  },
  {
    name: "Lina K.",
    text: "The mountain views were breathtaking and the pace was perfect for our group.",
    rating: 5,
  },
];

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

export default function HomePage() {
  return (
    <main>
      <section className="relative w-full min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-oman.jpg"
            alt="Oman landscape"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 sm:py-32">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-medium mb-6 backdrop-blur-sm border border-emerald-400/30">
              Certified Tour Guide in Oman
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Discover the Magic
              <span className="block text-emerald-400 mt-2">of Oman with Jamal</span>
            </h1>
            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              Authentic adventures and customized tours through Oman's stunning landscapes with a certified local expert.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/tours"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-8 py-4 text-white font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 hover:-translate-y-0.5"
              >
                Explore Tours
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 font-semibold hover:bg-white/20 transition-all"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
              <Image
                src="/images/jamal-tour-guide.avif.avif"
                alt="Jamal - Tour Guide"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900">10+ Years</p>
                <p className="text-sm text-gray-500">Guiding Experience</p>
              </div>
            </div>
          </div>
          <div>
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">About Jamal</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Your Trusted Guide to Discovering Oman
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              With years of experience as a certified local guide, I design authentic journeys that reveal Oman's culture, landscapes, and hidden gems. Every tour is tailored to suit your interests and pace.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-2xl font-bold text-emerald-600">500+</p>
                <p className="text-sm text-gray-600">Successful Tours</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-2xl font-bold text-emerald-600">100%</p>
                <p className="text-sm text-gray-600">Customer Satisfaction</p>
              </div>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition"
            >
              Learn More About Me
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Tours</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Most Popular Tours</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Choose from a variety of tours designed to suit all tastes and adventures
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularTours.map((tour) => (
              <article
                key={tour.slug}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300"
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
                  <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-emerald-700 font-bold px-4 py-1.5 rounded-full text-sm">
                    {tour.price}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition">
                    {tour.name}
                  </h3>
                  <Link
                    href={`/tours/${tour.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-emerald-600 text-emerald-600 px-8 py-3 font-semibold hover:bg-emerald-600 hover:text-white transition-all"
            >
              View All Tours
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Why Jamal?</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Benefits of Traveling with Me</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: "Certified Expert Guide",
              desc: "A certified local expert with years of experience in tour guiding",
            },
            {
              icon: Car,
              title: "Comfortable Transport",
              desc: "Clean, safe, and comfortable vehicles for every trip",
            },
            {
              icon: Sparkles,
              title: "Customized Experiences",
              desc: "Tours designed specifically to suit your interests and pace",
            },
            {
              icon: MapPin,
              title: "Hidden Gems",
              desc: "Discover places only known by the locals",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl border border-gray-100 p-6 hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition">
                <item.icon className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="mt-5 font-bold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-emerald-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Reviews</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">What Travelers Say</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition-all duration-300"
              >
                <Stars value={r.rating} />
                <p className="mt-4 text-gray-700 leading-relaxed">{r.text}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-bold text-lg">
                    {r.name.charAt(0)}
                  </div>
                  <span className="font-semibold text-gray-900">{r.name}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition"
            >
              View All Reviews
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-800" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Explore Oman?
          </h2>
          <p className="mt-4 text-emerald-100 text-lg">
            Contact me now and let's plan your perfect trip in the Sultanate of Oman
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/968XXXXXXXX?text=${encodeURIComponent(
                "Hello Jamal, I would like to book a tour."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-emerald-700 px-8 py-4 font-bold hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Book Your Tour Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 font-semibold hover:bg-white/20 transition-all"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
