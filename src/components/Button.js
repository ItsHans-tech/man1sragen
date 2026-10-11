import Link from "next/link";

/**
 * Komponen Button serbaguna untuk aksi internal (Link) maupun elemen tombol.
 */
export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  external = false,
  ...props
}) {
  const baseStyles =
    "min-h-[44px] inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-150 text-center select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900";

  const sizeStyles = {
    sm: "px-3.5 py-2 text-xs sm:text-sm",
    md: "px-5 py-2.5 text-sm sm:text-base",
    lg: "px-6 py-3 text-base sm:text-lg font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 text-white shadow-xs dark:bg-emerald-700 dark:hover:bg-emerald-600 border border-emerald-900/30",
    secondary:
      "bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-semibold shadow-xs border border-amber-600/30",
    outline:
      "border-2 border-emerald-800 hover:bg-emerald-800/10 active:bg-emerald-800/20 text-emerald-900 dark:border-emerald-500 dark:text-emerald-200 dark:hover:bg-emerald-950/60",
    ghost:
      "text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100/60 dark:hover:bg-emerald-900/40",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedStyles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles} {...props}>
      {children}
    </button>
  );
}

