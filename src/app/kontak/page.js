import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import { schoolData } from "@/data/school";

export const metadata = {
  title: "Kontak & Lokasi",
  description:
    "Informasi kontak resmi, alamat kampus, layanan WhatsApp, email, dan panduan lokasi MAN 1 Sragen.",
};

export default function KontakPage() {
  const { contacts } = schoolData;

  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Header Halaman Kontak */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-emerald-100 dark:border-emerald-900/60 pb-8 sm:pb-12">
          <SectionTitle
            align="left"
            title="Hubungi MAN 1 Sragen"
            description="Layanan informasi terpadu dan saluran komunikasi resmi madrasah bagi calon peserta didik, wali murid, dan masyarakat umum."
            className="mb-0!"
          />
        </div>
      </section>

      {/* Konten Utama Kontak & Lokasi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Kartu Informasi Resmi */}
          <div className="lg:col-span-7 space-y-6">
            {/* Alamat Fisik */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#071d12] border border-emerald-100 dark:border-emerald-900/60 shadow-xs space-y-3">
              <div className="flex items-center gap-2.5 text-emerald-800 dark:text-amber-400">
                <svg
                  className="w-5 h-5 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                  Alamat Kampus Madrasah
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {contacts.address}
              </p>
              <div className="pt-2">
                <Button
                  href={contacts.mapsSearchUrl}
                  external
                  variant="outline"
                  size="sm"
                >
                  Buka di Google Maps &rarr;
                </Button>
              </div>
            </div>

            {/* Saluran Kontak Komunikasi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WhatsApp */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#071d12] border border-emerald-100 dark:border-emerald-900/60 shadow-xs space-y-2">
                <span className="text-xs font-semibold uppercase text-emerald-800 dark:text-amber-400 block">
                  Layanan WhatsApp
                </span>
                <p className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                  {contacts.whatsapp}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Konsultasi informasi &amp; administrasi
                </p>
                <div className="pt-2">
                  <Button
                    href={contacts.whatsappLink}
                    external
                    variant="secondary"
                    size="sm"
                    className="w-full"
                  >
                    Kirim Pesan WhatsApp
                  </Button>
                </div>
              </div>

              {/* Email */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#071d12] border border-emerald-100 dark:border-emerald-900/60 shadow-xs space-y-2">
                <span className="text-xs font-semibold uppercase text-emerald-800 dark:text-amber-400 block">
                  Surat Elektronik (Email)
                </span>
                <p className="font-serif text-base font-bold text-slate-900 dark:text-white break-all">
                  {contacts.email}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Korespondensi dinas &amp; akademik
                </p>
                <div className="pt-2">
                  <a
                    href={`mailto:${contacts.email}`}
                    className="min-h-[44px] inline-flex items-center justify-center w-full px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-800/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  >
                    Kirim Email Resmi
                  </a>
                </div>
              </div>
            </div>

            {/* Situs Web */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#071d12] border border-emerald-100 dark:border-emerald-900/60 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block">
                  Portal Situs Web Resmi
                </span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">
                  {contacts.website}
                </span>
              </div>
              <a
                href={contacts.website}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] px-4 inline-flex items-center text-xs font-semibold rounded-lg bg-slate-100 dark:bg-emerald-950 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-emerald-900 transition-colors"
              >
                Kunjungi Situs &rarr;
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Panduan Kunjungan & Jam Layanan */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex-1 flex flex-col bg-emerald-900 text-white rounded-3xl p-6 sm:p-8 border border-emerald-800 shadow-md space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-300 block mb-2">
                  Layanan Tata Usaha
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Jam Operasional Kantor
                </h3>
              </div>

              <div className="flex-1 flex flex-col text-sm sm:text-base text-emerald-100">
                <div className="flex-1 min-h-[3rem] flex items-center justify-between border-b border-emerald-800">
                  <span className="font-medium">Senin - Kamis</span>
                  <span>07.00 - 15.30 WIB</span>
                </div>
                <div className="flex-1 min-h-[3rem] flex items-center justify-between border-b border-emerald-800">
                  <span className="font-medium">Jum&apos;at</span>
                  <span>07.00 - 14.30 WIB</span>
                </div>
                <div className="flex-1 min-h-[3rem] flex items-center justify-between border-b border-emerald-800">
                  <span className="font-medium">Sabtu - Minggu</span>
                  <span className="text-amber-300 font-semibold">Tutup (Libur)</span>
                </div>
              </div>

              <p className="text-xs text-emerald-200/90 leading-relaxed italic">
                Pelayanan tatap muka bertempat di Ruang Administrasi Tata Usaha Gedung Pembelajaran Utama MAN 1 Sragen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

