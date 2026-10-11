import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import { schoolData } from "@/data/school";

export const metadata = {
  title: "Tentang Madrasah",
  description:
    "Profil lengkap, sejarah singkat, visi, misi, data ketenagaan, sarana prasarana, serta program keterampilan MAN 1 Sragen.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24">
      {/* Header Halaman */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-emerald-100 dark:border-emerald-900/60 pb-8 sm:pb-12">
          <div className="inline-flex items-center gap-2 mb-3">
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 dark:text-emerald-50 tracking-tight">
            Tentang MAN 1 Sragen
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            Mengenal lebih dekat sejarah, visi kelembagaan, ketenagaan pendidik, fasilitas pembelajaran interaktif, serta workshop vokasi keterampilan di MAN 1 Sragen.
          </p>
        </div>
      </section>

      {/* 1. Profil & Sejarah Singkat */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <SectionTitle
              align="left"
              title="Dedikasi Pendidikan Islami Sejak 1980"
              className="mb-4!"
            />
            <div className="inline-block px-3 py-1 text-xs font-semibold rounded-md bg-emerald-700 text-white dark:bg-emerald-900/60 dark:text-amber-300 border border-emerald-200 dark:border-emerald-700">
              {schoolData.foundingLabel}
            </div>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {schoolData.history}
            </p>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#071d12] border border-slate-200 dark:border-emerald-900/80">
              <span className="text-xs font-semibold uppercase text-slate-500 dark:text-emerald-400 block mb-1">
                Lokasi Geografis & Alamat Kampus
              </span>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                {schoolData.contacts.address}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-emerald-100 dark:border-emerald-800 shadow-lg aspect-4/3">
              <Image
                src="/man%20dari%20depan.jpg"
                alt="Gedung MAN 1 Sragen dari Depan"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-xs text-white font-medium">
                  Gedung Sekolah MAN 1 Sragen seluas {schoolData.statistics.landArea}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Visi dan Misi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#071d12] rounded-3xl border border-emerald-100 dark:border-emerald-900/60 p-6 sm:p-10 lg:p-12 shadow-sm space-y-10">
          {/* Visi */}
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-amber-400">
              Visi Madrasah
            </span>
            <blockquote className="mt-3 text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-slate-900 dark:text-emerald-50 leading-snug">
              &ldquo;{schoolData.vision}&rdquo;
            </blockquote>
          </div>

          {/* Misi (Daftar berangka rapi) */}
          <div className="pt-6 border-t border-slate-100 dark:border-emerald-900/50">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-amber-400 block mb-6">
              Misi Madrasah
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {schoolData.missions.map((misi, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl dark:bg-emerald-950/30 dark:border-emerald-900/40"
                >
                  <span className="w-8 h-8 rounded-full bg-emerald-800 text-white dark:bg-emerald-700 font-serif font-bold text-sm flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {misi}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Ketenagaan dan Siswa (Layout: Stat Split Spotlight) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          align="left"
          title="Ketenagaan dan Peserta Didik"
          description="Komposisi dewan guru profesional dan siswa madrasah dengan rasio bimbingan yang proporsional."
        />

        <div className="bg-emerald-900 text-white rounded-3xl p-6 sm:p-10 border border-emerald-800 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-emerald-800/80">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                Pendidik &amp; Tenaga Kependidikan
              </span>
              <p className="text-3xl sm:text-4xl font-bold font-serif text-white">
                {schoolData.statistics.teachersAndStaff} Orang
              </p>
              <p className="text-xs sm:text-sm text-emerald-200">
                Dewan guru mata pelajaran umum, keagamaan, instruktur vokasi, dan tenaga kependidikan.
              </p>
            </div>

            <div className="space-y-2 pt-6 sm:pt-0 sm:pl-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                Jumlah Peserta Didik
              </span>
              <p className="text-3xl sm:text-4xl font-bold font-serif text-white">
                {schoolData.statistics.students}
              </p>
              <p className="text-xs sm:text-sm text-emerald-200">
                Siswa terdistribusi di seluruh jenjang kelas X, XI, dan XII.
              </p>
            </div>

            <div className="space-y-2 pt-6 sm:pt-0 sm:pl-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                Rasio Guru dan Siswa
              </span>
              <p className="text-3xl sm:text-4xl font-bold font-serif text-white">
                {schoolData.statistics.teacherStudentRatio}
              </p>
              <p className="text-xs sm:text-sm text-emerald-200">
                Rasio proporsional yang memungkinkan pendampingan intensif bagi setiap siswa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Rombongan Belajar & Program Kelas (Layout: Dual Section Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          align="left"
          title="Rombongan Belajar dan Program Peminatan"
          description={`MAN 1 Sragen mengelola ${schoolData.statistics.studyGroups} yang terbagi dalam peminatan reguler dan program peminatan khusus.`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Kolom Kiri: Peminatan Reguler */}
          <div className="lg:col-span-5 bg-white dark:bg-[#071d12] rounded-3xl p-6 sm:p-8 border border-emerald-100 dark:border-emerald-900/60 shadow-xs space-y-4">
            <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-emerald-50">
              Peminatan Akademik Reguler
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Kurikulum nasional yang diperkaya nilai-nilai keislaman dan pembekalan vokasi.
            </p>
            <ul className="space-y-3 pt-2">
              {schoolData.classPrograms.regular.map((prog) => (
                <li
                  key={prog}
                  className="flex items-center gap-3 p-3 rounded-xl text-sm font-semibold text-slate-800 dark:text-emerald-200"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-amber-400" aria-hidden="true" />
                  <span>{prog}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom Kanan: Kelas Khusus */}
          <div className="lg:col-span-7 bg-white dark:bg-[#071d12] rounded-3xl p-6 sm:p-8 border border-emerald-100 dark:border-emerald-900/60 shadow-xs space-y-4">
            <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-emerald-50">
              Program Kelas Khusus
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Fasilitasi bakat spesifik santri untuk pengembangan prestasi tingkat kompetitif.
            </p>
            <div className="space-y-3 pt-2">
              {schoolData.classPrograms.special.map((item) => (
                <div
                  key={item.name}
                  className="p-4 rounded-xl"
                >
                  <h4 className="font-semibold text-sm text-emerald-950 dark:text-amber-400">
                    {item.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Fasilitas Kelas (Layout: Tech Spotlight Showcase) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-50/80 dark:bg-[#071d12] rounded-3xl border border-emerald-200 dark:border-emerald-800/80 p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-900 dark:text-amber-400">
                Fasilitas Kelas Modern
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 dark:text-white leading-snug">
                Smart TV di Seluruh Ruang Kelas Utama
              </h3>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {schoolData.facilities.classroomTechLabel}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 italic">
                Fitur ini mempermudah guru dan siswa dalam menampilkan bahan ajar interaktif, simulasi visual, serta diskusi daring terpadu di setiap sesi pembelajaran.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-xs p-6 rounded-2xl bg-white dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-center space-y-3 shadow-xs">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-100 dark:bg-emerald-900/80 text-emerald-800 dark:text-amber-300 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                    <polyline points="17 2 12 7 7 2" />
                  </svg>
                </div>
                <h4 className="font-semibold text-sm text-slate-900 dark:text-white">
                  Smart Classroom
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Layar monitor Smart TV interaktif di seluruh ruang kelas utama MAN 1 Sragen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Gedung dan Workshop Keterampilan (Layout: Dual Campus Zones) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          align="left"
          title="Gedung dan Workshop Keterampilan"
          description="Tata letak kampus MAN 1 Sragen terbagi menjadi dua area fungsional utama untuk menunjang kegiatan belajar teori dan praktik vokasi."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Zona 1: Gedung Pembelajaran Utama */}
          <div className="bg-white dark:bg-[#071d12] rounded-3xl p-6 sm:p-8 border border-emerald-100 dark:border-emerald-900/60 shadow-xs space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 text-xs font-semibold">
              <span>Area 1</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-emerald-50">
              {schoolData.facilities.campusLayout.zone1.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {schoolData.facilities.campusLayout.zone1.description}
            </p>
          </div>

          {/* Zona 2: Gedung Workshop Keterampilan */}
          <div className="bg-white dark:bg-[#071d12] rounded-3xl p-6 sm:p-8 border border-emerald-100 dark:border-emerald-900/60 shadow-xs space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 text-xs font-semibold">
              <span>Area 2</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-emerald-50">
              {schoolData.facilities.campusLayout.zone2.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {schoolData.facilities.campusLayout.zone2.description}
            </p>
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase text-slate-500 dark:text-emerald-400 block mb-2">
                Bidang Kecakapan Hidup (Vokasi):
              </span>
              <div className="flex flex-wrap gap-2">
                {schoolData.facilities.campusLayout.zone2.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-lg font-medium bg-slate-100 dark:bg-emerald-950/60 text-slate-700 dark:text-emerald-300 border border-slate-200 dark:border-emerald-900/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Ekstrakurikuler */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          align="left"
          title="Ekstrakurikuler dan Pengembangan Diri"
          description="Berbagai wadah pembinaan minat, bakat, kepemimpinan, dan keolahragaan peserta didik."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {schoolData.extracurriculars.map((ekstra) => (
            <div
              key={ekstra}
              className="p-4 rounded-2xl bg-white dark:bg-[#071d12] border border-emerald-100 dark:border-emerald-900/60 shadow-xs flex items-center gap-3"
            >
              <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                {ekstra}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Tautan Kontak */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center p-8 rounded-3xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/60">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 dark:text-emerald-50 mb-2">
            Pertanyaan Lebih Lanjut Mengenai Madrasah Kami?
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 max-w-xl mx-auto">
            Silakan hubungi bagian informasi madrasah melalui WhatsApp resmi atau kunjungi kampus kami.
          </p>
          <Button href="/kontak" variant="primary" size="md">
            Buka Halaman Kontak &amp; Lokasi
          </Button>
        </div>
      </section>
    </div>
  );
}

