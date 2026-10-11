import Image from "next/image";
import Button from "./Button";
import StatsBar from "./StatsBar";
import { schoolData } from "@/data/school";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-emerald-950 text-white min-h-[600px] lg:min-h-[680px] flex items-center">
      {/* Gambar Latar dengan efek zoom in - zoom out */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 animate-hero-zoom opacity-60">
          <Image
            src="/manDepan.jpg"
            alt="Gedung MAN 1 Sragen"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        {/* Overlay hijau (lebih cerah dari sebelumnya) */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-emerald-950/70 via-emerald-800/40 to-emerald-950/80"
          aria-hidden="true"
        />
      </div>

      {/* Konten Hero */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-6">
          {/* Judul */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight leading-tight drop-shadow-lg">
            Selamat Datang di
            <br />
            {schoolData.shortName}
          </h1>

          {/* Subjudul */}
          <p className="text-base sm:text-xl text-white/95 font-medium drop-shadow">
            Berkarakter Cerdas, Mandiri, dan Agamis (CERIA)
          </p>

          {/* Tombol Aksi */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Button href="/about" variant="secondary" size="lg">
              Jelajahi Profil
            </Button>
            <Button
              href="/berita"
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white/10 dark:text-white dark:border-white dark:hover:bg-white/10"
            >
              Berita
            </Button>
          </div>
        </div>

        {/* Statistik Madrasah */}
        <StatsBar />
      </div>
    </section>
  );
}