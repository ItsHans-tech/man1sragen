import SectionTitle from "@/components/SectionTitle";
import BeritaCard from "@/components/BeritaCard";
import { beritaList } from "@/data/berita";

export const metadata = {
  title: "Warta & Berita",
  description:
    "Kumpulan berita terkini, pengumuman resmi, dan informasi kegiatan di lingkungan MAN 1 Sragen.",
};

export default function BeritaPage() {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Header Halaman Berita */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-emerald-100 dark:border-emerald-900/60 pb-8 sm:pb-12">
          <SectionTitle
            align="left"
            title="Berita Madrasah"
            description="Informasi resmi seputar agenda pembelajaran, pengumuman akademik, dan aktivitas santri MAN 1 Sragen."
            className="mb-0!"
          />
        </div>
      </section>

      {/* Grid Berita (Minimal 6 Item) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {beritaList.map((berita) => (
            <BeritaCard key={berita.id} berita={berita} />
          ))}
        </div>
      </section>
    </div>
  );
}

