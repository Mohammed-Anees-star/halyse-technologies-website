interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span
          className={`inline-block text-xs font-bold tracking-[0.15em] uppercase mb-4 ${
            light ? "text-blue-400" : "text-blue-600"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-4xl lg:text-5xl font-extrabold leading-tight mb-5 ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg leading-relaxed max-w-3xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-gray-400" : "text-gray-500"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
