"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin, MessageCircle, Copy, Check, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "96899266868";
const PHONE_NUMBER = "+96899266868";

export default function ContactContent() {
  const t = useTranslations("contact");
  const [copied, setCopied] = useState(false);
  const email = t("emailValue");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard unavailable (e.g. insecure context) — the mailto link still works.
    }
  };

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

      <section className="max-w-4xl mx-auto px-6 py-16 -mt-8">
        {/* Primary: email */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t("directHeading")}</h2>
          </div>
          <p className="text-gray-600 mb-6">{t("directText")}</p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
            <span className="flex-1 font-medium text-gray-900 break-all">{email}</span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-lg border border-emerald-600 px-4 py-2.5 text-emerald-700 font-semibold hover:bg-emerald-50 transition"
                aria-live="polite"
              >
                {copied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                {copied ? t("copied") : t("copyEmail")}
              </button>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-white font-semibold hover:bg-emerald-700 transition shadow"
              >
                {t("sendEmail")}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </a>
            </div>
          </div>
        </div>

        {/* Secondary: WhatsApp, Phone, Location */}
        <div className="grid sm:grid-cols-3 gap-6 mt-6">
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 p-6 rounded-2xl text-white flex flex-col">
            <MessageCircle className="w-9 h-9 mb-3" />
            <h3 className="font-bold text-lg mb-1">{t("whatsappHeading")}</h3>
            <p className="text-emerald-100 text-sm mb-4 flex-1">{t("whatsappText")}</p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-emerald-700 px-4 py-3 font-semibold hover:bg-emerald-50 transition"
            >
              {t("whatsappButton")}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="w-11 h-11 rounded-lg bg-emerald-50 flex items-center justify-center mb-3">
              <Phone className="w-5 h-5 text-emerald-600" />
            </div>
            <p className="text-sm text-gray-500">{t("phoneLabel")}</p>
            <a
              href={`tel:${PHONE_NUMBER}`}
              dir="ltr"
              className="font-semibold text-gray-900 hover:text-emerald-600 transition"
            >
              {t("phoneValue")}
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="w-11 h-11 rounded-lg bg-emerald-50 flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5 text-emerald-600" />
            </div>
            <p className="text-sm text-gray-500">{t("locationLabel")}</p>
            <p className="font-semibold text-gray-900">{t("locationValue")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
