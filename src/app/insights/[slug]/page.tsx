import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, ArrowRight, Linkedin } from "lucide-react";
import { insights, getInsight } from "@/data/insights";

export async function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return { title: "Insight not found" };
  return {
    title: insight.title,
    description: insight.summary,
  };
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return notFound();

  const otherInsights = insights.filter((i) => i.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Article Hero */}
      <section className="relative bg-gray-950 text-white overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-[140px]" />
          <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] bg-blue-900/25 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-white text-sm mb-10 group transition-colors"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to Insights
          </Link>

          <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full bg-white/[0.08] text-blue-300 border border-white/[0.1] mb-6">
            {insight.category}
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-8">
            {insight.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Calendar size={14} />
              {formatDate(insight.publishedAt)}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} />
              {insight.readTime}
            </span>
            <span className="text-gray-500">·</span>
            <span>{insight.author}</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose-custom">
            {insight.content.map((block, i) => (
              <div key={i} className="mb-10">
                {block.heading && (
                  <h2 className="font-serif text-2xl lg:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                    {block.heading}
                  </h2>
                )}
                <p className="text-gray-700 text-lg leading-[1.8] font-light">
                  {block.body}
                </p>
              </div>
            ))}
          </article>

          {/* Share */}
          <div className="mt-16 pt-10 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              Found this useful? Share it with your team.
            </p>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https://halyse.com/insights/${insight.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              <Linkedin size={14} />
              Share on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-12">
            Continue reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherInsights.map((i) => (
              <Link
                key={i.slug}
                href={`/insights/${i.slug}`}
                className="group bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 mb-5 self-start">
                  {i.category}
                </span>
                <h3 className="font-serif text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug mb-3">
                  {i.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                  {i.summary}
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-700">
                  Read article
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
