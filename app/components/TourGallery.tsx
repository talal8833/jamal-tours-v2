"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react";

export default function TourGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const t = useTranslations("gallery");
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const count = images.length;

  const go = useCallback(
    (delta: number) => setIndex((prev) => (prev + delta + count) % count),
    [count]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, go]);

  return (
    <div>
      {/* Main image — click to open fullscreen */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full aspect-[16/10] overflow-hidden rounded-2xl shadow-lg"
        aria-label={t("open")}
      >
        <Image
          key={images[index]}
          src={images[index]}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 66vw"
          priority
        />
        <span
          dir="ltr"
          className="absolute bottom-3 end-3 inline-flex items-center gap-1.5 rounded-lg bg-black/55 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm"
        >
          <Expand className="w-3.5 h-3.5" />
          {index + 1} / {count}
        </span>
      </button>

      {/* Thumbnails */}
      {count > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${t("photo")} ${i + 1}`}
              aria-current={i === index}
              className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg border-2 transition ${
                i === index
                  ? "border-emerald-600"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="96px" />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label={t("close")}
            onClick={() => setOpen(false)}
            className="absolute top-4 end-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
          >
            <X className="w-6 h-6" />
          </button>

          {count > 1 && (
            <button
              type="button"
              aria-label={t("previous")}
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              className="absolute start-2 sm:start-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
            >
              <ChevronLeft className="w-7 h-7 rtl:rotate-180" />
            </button>
          )}

          <div
            className="relative h-[80vh] w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={images[index]}
              src={images[index]}
              alt={alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          {count > 1 && (
            <button
              type="button"
              aria-label={t("next")}
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              className="absolute end-2 sm:end-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
            >
              <ChevronRight className="w-7 h-7 rtl:rotate-180" />
            </button>
          )}

          <span
            dir="ltr"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/80"
          >
            {index + 1} / {count}
          </span>
        </div>
      )}
    </div>
  );
}
