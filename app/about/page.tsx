import Image from "next/image";
import { ShieldCheck, Award, Languages, Heart, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Jamal | Jamal Tours",
  description: "Meet Jamal, your certified tour guide in the Sultanate of Oman",
};

const features = [
  {
    icon: ShieldCheck,
    title: "Officially Certified Guide",
    desc: "Licensed by the Omani Ministry of Heritage and Tourism",
  },
  {
    icon: Languages,
    title: "Multilingual",
    desc: "Fluent in Arabic and English with excellent communication skills",
  },
  {
    icon: Heart,
    title: "Customized Tours",
    desc: "Each tour is designed to suit your preferences and travel style",
  },
  {
    icon: Award,
    title: "Authentic Experiences",
    desc: "From Omani cuisine to secret spots off the beaten path",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
            Get to Know Me
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">About Jamal</h1>
          <p className="mt-4 text-emerald-100 text-lg max-w-2xl">
            Discover the story behind Jamal Tours — your gateway to authentic Omani adventures.
          </p>
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
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Muscat, Oman</p>
                <p className="text-sm text-gray-500">Headquarters</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">My Story</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Who I Am</h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              My name is <strong className="text-gray-900">Jamal</strong>, a certified tour guide based in Oman with over 10 years of experience guiding visitors from around the world. My mission is to share the beauty, history, and culture of Oman through customized tours that create unforgettable memories.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Whether it's exploring the golden dunes of Wahiba Sands, walking through ancient forts, or enjoying refreshing wadis — I'm here to make your trip safe, informative, and truly Omani.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-emerald-50 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-emerald-600">10+</p>
                <p className="text-sm text-gray-600 mt-1">Years Experience</p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-emerald-600">500+</p>
                <p className="text-sm text-gray-600 mt-1">Successful Tours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Features</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Why Choose Me</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="mt-5 font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Ready for an Adventure?
          </h2>
          <p className="mt-4 text-gray-600">
            Contact me today and let's plan your perfect trip in the Sultanate of Oman.
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
    </main>
  );
}
