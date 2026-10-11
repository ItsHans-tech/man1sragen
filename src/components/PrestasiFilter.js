"use client";

import { useState } from "react";
import PrestasiCard from "./PrestasiCard";
import { kategoriPrestasi } from "@/data/prestasi";

/**
 * Komponen PrestasiFilter: Filter kategori interaktif sisi-klien untuk menyaring
 * daftar capaian prestasi peserta didik MAN 1 Sragen.
 */
export default function PrestasiFilter({ items = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredItems =
    selectedCategory === "Semua"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Tombol Filter Kategori (Chips) */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
        {kategoriPrestasi.map((category) => {
          const isActive = selectedCategory === category;
          const count =
            category === "Semua"
              ? items.length
              : items.filter((it) => it.category === category).length;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                isActive
                  ? "bg-emerald-800 text-white dark:bg-emerald-700 shadow-xs border border-amber-400/60"
                  : "bg-white dark:bg-[#071d12] text-slate-700 dark:text-slate-300 border border-emerald-100 dark:border-emerald-800/80 hover:bg-emerald-50 dark:hover:bg-emerald-900/40"
              }`}
              aria-pressed={isActive}
            >
              <span>{category}</span>
              <span
                className={`ml-1.5 px-1.5 py-0.5 text-[11px] rounded-full font-bold ${
                  isActive
                    ? "bg-amber-400 text-slate-950"
                    : "bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-300"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid Prestasi yang Disaring */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((prestasi) => (
            <PrestasiCard key={prestasi.id} prestasi={prestasi} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-white dark:bg-[#071d12] rounded-2xl border border-emerald-100 dark:border-emerald-900/60">
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium">
            Belum ada data prestasi pada kategori {selectedCategory}.
          </p>
        </div>
      )}
    </div>
  );
}

