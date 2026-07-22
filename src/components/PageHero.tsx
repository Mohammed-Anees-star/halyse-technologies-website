interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  highlight?: string;
}

export default function PageHero({ badge, title, subtitle, highlight }: PageHeroProps) {
  return (
    <section className="relative bg-gray-950 text-white overflow-hidden pt-36 pb-20 lg:pt-40 lg:pb-24">
      {/* Ambient background — restrained */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-25%] left-[-10%] w-[500px] h-[500px] bg-blue-900/25 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {badge && (
          <div className="inline-flex items-center gap-3 mb-7 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.1] backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-blue-200 text-xs font-semibold tracking-wider uppercase">
              {badge}
            </span>
          </div>
        )}
        {/*
          Tight display leading (1.05) keeps the two headline lines
          visually connected as one statement, not two separate lines
          separated by a giant gap.
          max-w-4xl caps title width so the eye completes each line
          quickly on wide displays.
        */}
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.05] tracking-tight mb-6 max-w-4xl">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400">
                {highlight}
              </span>
            </>
          )}
        </h1>
        {subtitle && (
          <p className="text-base lg:text-lg text-gray-400 max-w-3xl leading-[1.65] font-light">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
