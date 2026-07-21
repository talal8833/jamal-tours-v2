"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TourImageCarousel({
  images,
  alt,
  sizes,
}: {
  images: string[];
  alt: string;
  sizes?: string;
}) {
  const t = useTranslations("gallery");
  const [index, setIndex] = useState(0);
  const count = images.length;

  const go = (delta: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex((prev) => (prev + delta + count) % count);
  };

  return (
    <div className="absolute inset-0">
      <Image
        key={images[index]}
        src={images[index]}
        alt={alt}
        fill
        className="object-cover"
        sizes={sizes}
      />

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label={t("previous")}
            onClick={(e) => go(-1, e)}
            className="absolute top-1/2 -translate-y-1/2 start-2 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white opacity-80 hover:bg-black/60 hover:opacity-100 transition"
          >
            <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
          </button>
          <button
            type="button"
            aria-label={t("next")}
            onClick={(e) => go(1, e)}
            className="absolute top-1/2 -translate-y-1/2 end-2 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white opacity-80 hover:bg-black/60 hover:opacity-100 transition"
          >
            <ChevronRight className="w-5 h-5 rtl:rotate-180" />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 flex gap-1.5">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-4 bg-white" : "w-1.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
