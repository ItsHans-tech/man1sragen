import Link from "next/link";
import { notFound } from "next/navigation";
import ImageFrame from "@/components/ImageFrame";
import BeritaCard from "@/components/BeritaCard";
import Button from "@/components/Button";
import { beritaList } from "@/data/berita";

export const instant = false;

export function generateStaticParams() {
  return beritaList.map((berita) => ({
    id: berita.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const berita = beritaList.find((item) => item.id === id);

  if (!berita) {
    return {
      title: "Berita Tidak Ditemukan",
    };
  }

  return {
    title: berita.title,
    description: berita.summary,
  };
}

export default async function BeritaDetailPage({ params }) {
  const { id } = await params;
  const berita = beritaList.find((item) => item.id === id);

  if (!berita) {
    notFound();
  }

  // 2-3 berita terkait selain berita yang sedang dibuka
  const relatedNews = beritaList
    .filter((item) => item.id !== berita.id)
    .slice(0, 3);

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Artikel Utama */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Tombol Kembali & Navigasi Breadcrumb */}
        <div>
          <Link
            href="/berita"
            className="min-h-[44px] inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 dark:text-amber-400 hover:text-emerald-950 dark:hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
          >
            &larr; Kembali ke Daftar Berita
          </Link>
        </div>

        {/* Metadata Artikel */}
        <div className="space-y-4 border-b border-emerald-100 dark:border-emerald-900/60 pb-6">
          <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm">
            <span className="px-3 py-1 rounded-md font-semibold bg-emerald-100 dark:bg-emerald-900/60 text-emerald-900 dark:text-amber-300">
              {berita.category}
            </span>
            <span className="text-slate-400 dark:text-emerald-500">•</span>
            <time
              dateTime={berita.date}
              className="text-slate-600 dark:text-slate-300 font-medium"
            >
              Dipublikasikan pada {berita.date}
            </time>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-slate-900 dark:text-emerald-50 leading-tight">
            {berita.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed italic border-l-4 border-emerald-700 pl-4 py-1">
            {berita.summary}
          </p>
        </div>

        {/* Gambar Utama Artikel dengan Fallback ImageFrame */}
        <div className="overflow-hidden rounded-2xl border border-emerald-100 dark:border-emerald-900/60 shadow-md">
          <ImageFrame
            src={berita.image}
            alt={berita.title}
            width={1200}
            height={675}
            priority
            aspectRatio="aspect-16/9"
          />
        </div>

        {/* Isi Paragraf Berita Lengkap */}
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-5 text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
          {berita.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Footer Artikel & Tombol Aksi */}
        <div className="pt-8 border-t border-emerald-100 dark:border-emerald-900/60 flex flex-wrap items-center justify-between gap-4">
          <Button href="/berita" variant="outline" size="sm">
            &larr; Lihat Berita Lainnya
          </Button>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Sumber: Bagian Publikasi &amp; Humas MAN 1 Sragen
          </span>
        </div>
      </article>

      {/* Bagian Berita Terkait */}
      {relatedNews.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-emerald-100 dark:border-emerald-900/60">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-amber-400 block mb-1">
              Informasi Terkait
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 dark:text-emerald-50">
              Warta Madrasah Lainnya
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {relatedNews.map((item) => (
              <BeritaCard key={item.id} berita={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

