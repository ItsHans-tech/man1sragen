import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import BeritaCard from "@/components/BeritaCard";
import Button from "@/components/Button";
import { schoolData } from "@/data/school";
import { beritaList } from "@/data/berita";
import Marquee from "@/components/Marquee";

export const metadata = {
  title: "Beranda",
  description:
    "Portal resmi Madrasah Aliyah Negeri 1 Sragen (MAN 1 Sragen), Madrasah Aliyah Plus Keterampilan.",
};

export default function HomePage() {
  const latestNews = beritaList.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* 1. Hero Banner */}
      <div>
        <Hero />
        <Marquee />
      </div>


      {/* 3. Sambutan Kepala Madrasah */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#071d12] rounded-3xl border border-emerald-100 dark:border-emerald-900/60 p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Profil Kepala Madrasah */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-48 sm:w-56 lg:w-64 aspect-[3/4] rounded-2xl overflow-hidden border-4 border-emerald-700/80 dark:border-amber-400/80 shadow-lg bg-slate-200 dark:bg-emerald-950/60 mb-5">
                <Image
                  src="/kepalaSekolahHD.jpg"
                  alt={`Foto ${schoolData.headmaster.name}`}
                  fill
                  sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
                  className="object-cover object-top scale-[1.06] origin-top"
                />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 dark:text-emerald-50">
                {schoolData.headmaster.name}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-emerald-800 dark:text-amber-400 mt-1">
                {schoolData.headmaster.title} MAN 1 Sragen
              </p>
            </div>

            {/* Teks Sambutan Resmi */}
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 dark:text-white leading-snug">
                Membentuk Generasi Berintelektual, Mandiri, dan Berakhlak Qur&apos;ani
              </h2>
              {/* TODO: Ganti sambutan ini dengan teks sambutan resmi Kepala Madrasah sebelum pengumpulan. */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed italic border-l-4 border-amber-500 pl-4 py-1">
                &ldquo;{schoolData.headmaster.welcomeMessage}&rdquo;
              </p>
              <div className="pt-2">
                <Button href="/about" variant="outline" size="sm">
                  Pelajari Visi &amp; Misi Madrasah
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Sekilas Info & Visi Madrasah */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <SectionTitle
              align="left"
              title="Pendidikan Holistik Berbasis Vokasi dan Moral Islami"
              description="MAN 1 Sragen memadukan keunggulan akademik sains dan sosial dengan kecakapan hidup terapan di bawah pembinaan Kementerian Agama."
            />
            <div className="p-5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-900 dark:text-amber-400">
                Visi Utama Madrasah
              </span>
              <p className="font-serif text-lg font-bold text-emerald-950 dark:text-emerald-100 italic">
                &ldquo;{schoolData.vision}&rdquo;
              </p>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Dengan luas kampus {schoolData.statistics.landArea}, madrasah menyediakan lingkungan belajar asri yang kondusif. Fasilitas pembelajaran ditunjang sarana teknologi informasi terkini serta workshop vokasi modern.
            </p>
            <div>
              <Button href="/about" variant="primary" size="md">
                Baca Selengkapnya Profil Madrasah
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-emerald-100 dark:border-emerald-800 shadow-lg aspect-4/3">
              <Image
                src="/tugu.jpg"
                alt="Tugu Identitas MAN 1 Sragen"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent flex items-end p-6">
                <p className="text-xs sm:text-sm text-emerald-100 font-medium">
                  Tugu Gerbang Utama Kampus MAN 1 Sragen, Jl. Irian No.5 Nglorog, Sragen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 3 Berita Terbaru */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <SectionTitle
            align="left"
            title="Berita Terkini"
            description="Perkembangan agenda kegiatan, capaian siswa, serta pengumuman resmi madrasah."
            className="mb-0!"
          />
          <Link
            href="/berita"
            className="min-h-[44px] inline-flex items-center text-sm font-semibold text-emerald-800 dark:text-amber-400 hover:text-emerald-950 dark:hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm shrink-0"
          >
            Lihat Semua Berita &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {latestNews.map((berita) => (
            <BeritaCard key={berita.id} berita={berita} />
          ))}
        </div>
      </section>

      {/* 6. Aksi & Tautan Cepat */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 text-white rounded-3xl p-8 sm:p-12 border border-emerald-700/60 shadow-lg">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
              Ingin Mengetahui Lebih Jauh Mengenai MAN 1 Sragen?
            </h2>
            <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
              Jelajahi capaian prestasi siswa atau hubungi saluran informasi kami.
            </p>
            <div className="pt-2 flex flex-wrap gap-3 sm:gap-4">
              <Button href="/prestasi" variant="secondary" size="md">
                Lihat Prestasi Siswa
              </Button>
              <Button
                href="/kontak"
                variant="ghost"
                size="md"
                className="text-emerald-100 hover:bg-emerald-950/40 hover:text-white"
              >
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

