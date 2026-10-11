"use client";

import { useSyncExternalStore } from "react";

function subscribeTheme(callback) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  window.addEventListener("storage", callback);
  return () => {
    observer.disconnect();
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  return false;
}

/**
 * Komponen ThemeToggle: Pengalih tema gelap/terang yang membaca state DOM
 * secara idiomatik menggunakan useSyncExternalStore tanpa efek setState cascading.
 */
export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribeTheme, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const nextDark = !isDark;
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2 rounded-lg border border-emerald-200/80 dark:border-emerald-800/70 bg-white/80 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 hover:bg-emerald-50 dark:hover:bg-emerald-900/50 hover:border-amber-400 dark:hover:border-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 transition-colors cursor-pointer"
      aria-label={isDark ? "Beralih ke mode terang" : "Beralih ke mode gelap"}
      title={isDark ? "Beralih ke mode terang" : "Beralih ke mode gelap"}
    >
      {isDark ? (
        // Ikon Matahari (Mode Terang)
        <svg
          className="w-5 h-5 text-amber-400 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        // Ikon Bulan (Mode Gelap)
        <svg
          className="w-5 h-5 text-emerald-800 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
