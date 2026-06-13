interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ badge, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative bg-gray-950 text-white overflow-hidden pt-28 pb-20">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-700/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-900/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {badge && (
          <div className="inline-flex items-center gap-2.5 mb-6">
            <span className="w-6 h-px bg-blue-500" />
            <span className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase">
              {badge}
            </span>
          </div>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-6 max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
