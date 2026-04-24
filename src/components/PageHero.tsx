interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ badge, title, subtitle }: PageHeroProps) {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-blue-800/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {badge && (
          <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full mb-4 border border-blue-500/30">
            {badge}
          </span>
        )}
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-blue-100 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
