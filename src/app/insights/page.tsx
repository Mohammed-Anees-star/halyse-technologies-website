import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import PageHero from "@/components/PageHero";
import { insights } from "@/data/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives, frameworks, and practical thinking on enterprise AI, Power Platform, Azure, and modern data architecture from Halyse Technologies.",
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function InsightsPage() {
  const [featured, ...rest] = insights;

  return (
    <>
      <PageHero
        badge="Insights"
        title="Perspectives &amp;"
        highlight="thinking."
        subtitle="Practical frameworks, honest takes, and lessons from the field — on enterprise AI, Power Platform, Azure architecture, and the realities of modern data strategy."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured article */}
          <Link
            href={`/insights/${featured.slug}`}
            className="group block mb-16 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-blue-950 text-white shadow-2xl shadow-blue-200 hover:shadow-blue-300 transition-all duration-300 relative"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px]" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[80px]" />
            </div>
            <div className="relative z-10 p-10 lg:p-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-end">
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full bg-white/15 text-blue-100">
                    Featured · {featured.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-blue-200">
                    <Calendar size={12} />
                    {formatDate(featured.publishedAt)}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-blue-200">
                    <Clock size={12} />
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-[1.05] mb-6 group-hover:text-blue-50 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-blue-100/80 text-lg leading-relaxed font-light mb-8">
                  {featured.summary}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all">
                  Read full article
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          {/* Rest of articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="group bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-2xl hover:shadow-blue-100/50 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 mb-5 self-start">
                  {insight.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug mb-4">
                  {insight.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                  {insight.summary}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400 font-semibold pt-5 border-t border-gray-100">
                  <span>{formatDate(insight.publishedAt)}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {insight.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Want our thinking{" "}
            <span className="italic font-light text-blue-600">in your inbox?</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10 font-light max-w-xl mx-auto">
            We share frameworks and observations on enterprise technology — only when we have
            something useful to say.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-lg transition-all shadow-xl shadow-blue-200 text-sm group"
          >
            Get in Touch
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
