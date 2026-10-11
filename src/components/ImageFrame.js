"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Komponen ImageFrame: Menampilkan foto lokal atau fallback bersahaja
 * jika gambar belum tersedia atau gagal dimuat.
 */
export default function ImageFrame({
  src,
  alt = "Dokumentasi MAN 1 Sragen",
  width,
  height,
  fill = false,
  className = "",
  priority = false,
  aspectRatio = "aspect-video",
}) {
  const [hasError, setHasError] = useState(false);

  const showFallback = !src || hasError;

  if (showFallback) {
    return (
      <div
        className={`flex flex-col items-center justify-center p-4 text-center bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 rounded-xl select-none ${aspectRatio} ${className}`}
        role="img"
        aria-label={alt || "Foto belum tersedia"}
      >
        <div className="p-3 mb-2 rounded-full bg-emerald-100/90 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300">
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
        <p className="text-xs sm:text-sm font-medium text-emerald-800 dark:text-emerald-300">
          Foto belum tersedia
        </p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-xl bg-emerald-950/10 dark:bg-black/30 ${fill ? aspectRatio : ""} ${className}`}>
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          onError={() => setHasError(true)}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width || 600}
          height={height || 400}
          priority={priority}
          className="w-full h-auto object-cover"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}

