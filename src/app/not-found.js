import Link from "next/link";
import Button from "@/components/Button";

export const metadata = {
  title: "Halaman Tidak Ditemukan",
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white dark:bg-[#071d12] p-8 sm:p-10 rounded-3xl border border-emerald-100 dark:border-emerald-900/60 shadow-sm">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 dark:bg-amber-950/80 dark:text-amber-300">
          Galat 404
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-emerald-50 tracking-tight">
          Halaman Tidak Ditemukan
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Mohon maaf, halaman yang Anda tuju tidak tersedia atau telah dipindahkan. Silakan kembali ke beranda madrasah.
        </p>

        <div className="pt-2">
          <Button href="/" variant="primary" size="md">
            Kembali ke Beranda
          </Button>
        </div>
      </div>
    </div>
  );
}

