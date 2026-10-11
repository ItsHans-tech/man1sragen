/**
 * Komponen SectionTitle: Judul bagian formal berkarakter akademis
 * dengan penanda aksen emas dan tipografi proporsional.
 */
export default function SectionTitle({
  tag,
  title,
  description,
  align = "center",
  className = "",
}) {
  const alignmentClass =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-8 sm:mb-12 ${alignmentClass} ${className}`}>
      {tag && (
        <div className="inline-flex items-center gap-2 mb-2.5">
          <span className="w-2 h-2 rounded-full bg-amber-500" aria-hidden="true" />
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-emerald-800 dark:text-amber-400">
            {tag}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-slate-900 dark:text-emerald-50 tracking-tight leading-snug">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

