import SectionTitle from "@/components/SectionTitle";
import PrestasiFilter from "@/components/PrestasiFilter";
import { prestasiList } from "@/data/prestasi";

export const metadata = {
  title: "Prestasi Siswa",
  description:
    "Daftar capaian prestasi siswa/siswi MAN 1 Sragen di bidang akademik, riset ilmiah, keterampilan vokasi, keagamaan, dan olahraga.",
};

export default function PrestasiPage() {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Header Halaman Prestasi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-emerald-100 dark:border-emerald-900/60 pb-8 sm:pb-12">
          <SectionTitle
            align="left"
            title="Prestasi Siswa MAN 1 Sragen"
            description="Rekam jejak keunggulan siswa di berbagai ajang kompetisi tingkat madrasah, kabupaten, provinsi, hingga nasional."
            className="mb-0!"
          />
        </div>
      </section>

      {/* Filter Kategori Interaktif dan Daftar Kartu Prestasi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PrestasiFilter items={prestasiList} />
      </section>
    </div>
  );
}

