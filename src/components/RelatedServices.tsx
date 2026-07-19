import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getRelatedServices } from "@/data/services";

interface RelatedServicesProps {
  currentSlug: string;
}

export default function RelatedServices({ currentSlug }: RelatedServicesProps) {
  const related = getRelatedServices(currentSlug);

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase mb-3 text-blue-600">
            Explore More Services
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
            Related capabilities across the Halyse portfolio.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {related.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-md shadow-blue-100 group-hover:scale-105 transition-transform">
                    <Icon size={20} className="text-white" />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-gray-300 group-hover:text-blue-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1.5 leading-snug">{s.title}</h3>
                <p className="text-xs font-semibold text-blue-600 mb-2">{s.tagline}</p>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{s.desc}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
