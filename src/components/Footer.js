import Link from "next/link";
import Image from "next/image";
import { schoolData } from "@/data/school";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-emerald-950 text-slate-200 border-t border-emerald-900/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Kolom 1: Profil & Identitas */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 shrink-0 border border-amber-400">
                <Image
                  src="/logo%20man.jpg"
                  alt="Logo MAN 1 Sragen"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white tracking-tight">
                  MAN 1 Sragen
                </h3>
                <p className="text-xs text-amber-300 font-medium">
                  Madrasah Aliyah Plus Keterampilan
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Membina generasi muda berkarakter cerdas, mandiri, dan agamis (CERIA), berwawasan kelestarian lingkungan hidup serta berjiwa nasionalis.
            </p>
            <p className="text-xs text-emerald-300/90 font-medium">
              {schoolData.foundingLabel}
            </p>
          </div>

          {/* Kolom 2: Navigasi Halaman */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider">
              Tautan Halaman
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded-sm"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded-sm"
                >
                  Profil & Fasilitas
                </Link>
              </li>
              <li>
                <Link
                  href="/berita"
                  className="hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded-sm"
                >
                  Berita & Pengumuman
                </Link>
              </li>
              <li>
                <Link
                  href="/prestasi"
                  className="hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded-sm"
                >
                  Prestasi Siswa dan Siswi
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded-sm"
                >
                  Hubungi Madrasah
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Alamat & Kontak Resmi */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider">
              Alamat Resmi
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {schoolData.contacts.address}
            </p>
            <div className="pt-2">
              <a
                href={schoolData.contacts.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 hover:underline"
              >
                <span>Buka Penelusuran Google Maps</span>
                <svg
                  className="w-3.5 h-3.5 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Kolom 4: Komunikasi Cepat */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider">
              Saluran Informasi
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <span className="block text-xs text-emerald-400">WhatsApp Resmi:</span>
                <a
                  href={schoolData.contacts.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors font-medium"
                >
                  {schoolData.contacts.whatsapp}
                </a>
              </li>
              <li>
                <span className="block text-xs text-emerald-400">Pos-el (Email):</span>
                <a
                  href={`mailto:${schoolData.contacts.email}`}
                  className="hover:text-amber-400 transition-colors"
                >
                  {schoolData.contacts.email}
                </a>
              </li>
              <li>
                <span className="block text-xs text-emerald-400">Situs Web:</span>
                <a
                  href={schoolData.contacts.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  {schoolData.contacts.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Garis batas dan Hak Cipta */}
        <div className="mt-12 pt-6 border-t border-emerald-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} {schoolData.name}. Hak cipta dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
}

