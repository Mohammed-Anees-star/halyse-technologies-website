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
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full mb-4 border border-blue-100">
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl lg:text-4xl font-bold leading-tight mb-4 ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-3xl leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-blue-100" : "text-gray-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
