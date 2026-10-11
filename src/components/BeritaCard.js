import Link from "next/link";
import ImageFrame from "./ImageFrame";

/**
 * Komponen BeritaCard: Kartu berita yang memuat gambar, tanggal, ringkasan 2 baris,
 * dan tautan internal menuju halaman rute dinamis /berita/[id].
 */
export default function BeritaCard({ berita }) {
  const { id, title, date, category, image, summary } = berita;

  return (
    <article className="group flex flex-col bg-white dark:bg-[#071d12] rounded-2xl border border-emerald-100 dark:border-emerald-900/60 overflow-hidden shadow-xs hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-200">
      {/* Gambar Berita dengan ImageFrame */}
      <div className="relative overflow-hidden aspect-video">
        <ImageFrame
          src={image}
          alt={title}
          fill
          aspectRatio="aspect-video"
          className="rounded-none"
        />
        {category && (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-md bg-emerald-900/90 text-amber-300 backdrop-blur-xs border border-amber-400/30">
            {category}
          </span>
        )}
      </div>

      {/* Konten Kartu Berita */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
        <div className="space-y-3">
          {/* Tanggal */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-emerald-300/80">
            <svg
              className="w-4 h-4 stroke-current shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <time dateTime={date}>{date}</time>
          </div>

          {/* Judul Berita */}
          <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-emerald-50 leading-snug group-hover:text-emerald-800 dark:group-hover:text-amber-400 transition-colors">
            <Link
              href={`/berita/${id}`}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-xs"
            >
              {title}
            </Link>
          </h3>

          {/* Ringkasan 2 Baris */}
          <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
            {summary}
          </p>
        </div>

        {/* Tombol Baca Selengkapnya */}
        <div className="pt-4 mt-2 border-t border-slate-100 dark:border-emerald-900/40">
          <Link
            href={`/berita/${id}`}
            className="min-h-[44px] inline-flex items-center text-sm font-semibold text-emerald-800 dark:text-amber-400 hover:text-emerald-950 dark:hover:text-amber-300 group-hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
          >
            Baca Selengkapnya &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}

