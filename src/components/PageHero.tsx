interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  highlight?: string;
}

export default function PageHero({ badge, title, subtitle, highlight }: PageHeroProps) {
  return (
    <section className="relative bg-gray-950 text-white overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-900/25 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {badge && (
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.1] backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-blue-200 text-xs font-semibold tracking-wider uppercase">
              {badge}
            </span>
          </div>
        )}
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.98] tracking-tight mb-8 max-w-4xl">
          {title}
          {highlight && (
            <>
              <br />
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400">
                {highlight}
              </span>
            </>
          )}
        </h1>
        {subtitle && (
          <p className="text-lg lg:text-xl text-gray-400 max-w-2xl leading-relaxed font-light">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
