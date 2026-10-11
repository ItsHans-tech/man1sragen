import { Plus_Jakarta_Sans, Merriweather } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  title: {
    default: "MAN 1 Sragen | Madrasah Aliyah Plus Keterampilan",
    template: "%s | MAN 1 Sragen",
  },
  description:
    "Portal Resmi MAN 1 Sragen (Madrasah Aliyah Negeri 1 Sragen). Madrasah Aliyah Plus Keterampilan berkarakter Cerdas, Mandiri, dan Agamis (CERIA), berwawasan lingkungan & nasionalis.",
  keywords: [
    "MAN 1 Sragen",
    "Madrasah Aliyah Negeri 1 Sragen",
    "Madrasah Aliyah Plus Keterampilan",
    "Madrasah Sragen",
    "Pendidikan Jawa Tengah",
  ],
};

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning className={`${sans.variable} ${serif.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#f8faf8] dark:bg-[#06150e] text-slate-800 dark:text-slate-100 transition-colors">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
