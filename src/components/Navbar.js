"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang" },
  { href: "/berita", label: "Berita" },
  { href: "/prestasi", label: "Prestasi" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Sesuaikan state menu saat rute berpindah tanpa efek samping cascading
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Tangani tombol Escape untuk menutup menu mobile
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#06150e]/95 backdrop-blur-md border-b border-emerald-100 dark:border-emerald-900/60 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Identitas Madrasah */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-700 dark:border-amber-400 bg-white shrink-0">
              <Image
                src="/logoMan.jpg"
                alt="Logo MAN 1 Sragen"
                fill
                sizes="48px"
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold font-serif text-emerald-950 dark:text-emerald-100 tracking-tight group-hover:text-emerald-700 dark:group-hover:text-amber-400 transition-colors">
                MAN 1 Sragen
              </span>
            </div>
          </Link>

          {/* Navigasi Desktop */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Navigasi Utama">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`min-h-[44px] inline-flex items-center px-3.5 py-2 rounded-lg text-sm font-medium transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                    isActive
                    ? "text-amber-500 dark:text-amber-400 font-semibold"
                    : "text-slate-700 dark:text-slate-200 hover:text-emerald-800 dark:hover:text-emerald-300 hover:bg-slate-100 dark:hover:bg-emerald-950/40"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-amber-500 rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Aksi Kanan (ThemeToggle & Hamburger) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            {/* Tombol Hamburger Mobile */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2 rounded-lg border border-emerald-200/80 dark:border-emerald-800/80 text-emerald-950 dark:text-emerald-200 hover:bg-emerald-50 dark:hover:bg-emerald-900/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            >
              {mobileMenuOpen ? (
                // Ikon Silang (Tutup)
                <svg
                  className="w-6 h-6 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                // Ikon Menu (Hamburger)
                <svg
                  className="w-6 h-6 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-t border-emerald-100 dark:border-emerald-900/60 bg-white dark:bg-[#06150e] px-4 pt-3 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top-2 duration-150"
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`min-h-[44px] flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  isActive
                    ? "bg-emerald-800 text-white font-semibold dark:bg-emerald-800/80 dark:text-amber-400"
                    : "text-slate-800 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/60"
                }`}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-amber-400" aria-hidden="true" />
                )}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
