import Image from "next/image";

const kalimat =
  "Ikuti terus kabar terbaru, prestasi siswa, dan pengumuman resmi MAN 1 Sragen melalui portal informasi madrasah kami.";

const pengulangan = 4;

function MarqueeGroup({ hidden = false }) {
  return (
    <div
      className="flex shrink-0 min-w-full items-center animate-marquee"
      aria-hidden={hidden ? "true" : undefined}
    >
      {Array.from({ length: pengulangan }).map((_, i) => (
        <div key={i} className="flex items-center gap-8 pr-8 whitespace-nowrap">
          <span className="text-base sm:text-lg font-semibold text-white drop-shadow-sm">
            {kalimat}
          </span>
          <Image
            src="/logoMan.jpg"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-full bg-white object-cover ring-2 ring-white/80"
          />
        </div>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div
      className="w-full overflow-hidden bg-amber-500 py-4 select-none"
      role="marquee"
      aria-label={kalimat}
    >
      <div className="flex w-full">
        <MarqueeGroup />
        <MarqueeGroup hidden />
      </div>
    </div>
  );
}