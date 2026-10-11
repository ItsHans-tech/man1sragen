import ImageFrame from "./ImageFrame";

/**
 * Komponen PrestasiCard: Menampilkan capaian prestasi peserta didik
 * dilengkapi lencana tingkatan, kategori.
 */
export default function PrestasiCard({ prestasi }) {
  const { title, level, year, category, description, image,} =
    prestasi;

  const levelColorMap = {
    Madrasah: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200",
    Kabupaten: "bg-emerald-100 text-emerald-900 dark:bg-emerald-900/60 dark:text-emerald-200",
    Provinsi: "bg-blue-100 text-blue-900 dark:bg-blue-950/70 dark:text-blue-200",
    Nasional: "bg-amber-100 text-amber-900 dark:bg-amber-950/80 dark:text-amber-200",
  };

  return (
    <div className="flex flex-col bg-white dark:bg-[#071d12] rounded-2xl border border-emerald-100 dark:border-emerald-900/60 overflow-hidden shadow-xs hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors">
      {/* Area Gambar dengan Fallback */}
      <div className="relative aspect-video">
        <ImageFrame
          src={image}
          alt={title}
          fill
          aspectRatio="aspect-video"
          className="rounded-none"
        />

      </div>

      {/* Konten Prestasi */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between gap-4">
        <div className="space-y-3">
          {/* Metadata: Kategori, Level, Tahun */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span
              className={`px-2.5 py-1 rounded-md font-semibold ${
                levelColorMap[level] || "bg-emerald-100 text-emerald-900"
              }`}
            >
              Tingkat {level}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-emerald-950/60 text-slate-700 dark:text-emerald-300 font-medium">
              {category}
            </span>
            <span className="text-slate-500 dark:text-slate-400 font-medium ml-auto">
              Tahun {year}
            </span>
          </div>

          {/* Judul Prestasi */}
          <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-emerald-50 leading-snug">
            {title}
          </h3>

          {/* Deskripsi Satu Kalimat */}
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

