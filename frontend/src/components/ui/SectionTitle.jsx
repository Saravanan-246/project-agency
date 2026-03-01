import clsx from "clsx";

function SectionTitle({
  title,
  subtitle,
  align = "center",
  highlight,
  className,
}) {
  return (
    <div
      className={clsx(
        "mb-16 md:mb-20",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {/* Subtle Accent Line */}
      <div
        className={clsx(
          "mb-6 h-px w-12 bg-gradient-to-r from-indigo-500 to-cyan-500",
          align === "center" && "mx-auto"
        )}
      />

      {/* Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15]">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={clsx(
            "mt-6 text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;