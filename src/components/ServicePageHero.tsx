import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServicePageHeroProps {
  breadcrumb: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  intro: string;
}

export default function ServicePageHero({
  breadcrumb,
  icon: Icon,
  title,
  tagline,
  intro,
}: ServicePageHeroProps) {
  return (
    <section className="relative bg-gray-950 text-white overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
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
        <div className="absolute bottom-[-30%] left-[-10%] w-[500px] h-[500px] bg-blue-900/25 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs text-white/60 font-medium">
            <li>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li aria-hidden><ChevronRight size={12} className="text-white/40" /></li>
            <li>
              <Link href="/services" className="hover:text-white transition-colors">Our Services</Link>
            </li>
            <li aria-hidden><ChevronRight size={12} className="text-white/40" /></li>
            <li className="text-white/90 truncate max-w-[220px] sm:max-w-none" aria-current="page">
              {breadcrumb}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left — Title + intro */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.1] backdrop-blur-sm">
              <Icon size={14} className="text-blue-300" />
              <span className="text-blue-200 text-xs font-semibold tracking-wider uppercase">
                Halyse Service
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.02] tracking-tight mb-6">
              {title}
            </h1>

            <p className="text-lg lg:text-xl font-light italic text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 mb-7">
              {tagline}
            </p>

            <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-3xl mb-9 font-light">
              {intro}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 font-bold px-7 py-3.5 rounded-lg hover:bg-blue-50 transition-colors shadow-xl shadow-blue-900/30 text-sm"
              >
                Talk to an Expert <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/15 border border-white/20 transition-colors text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right — Icon panel */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-10 aspect-square flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-500/10" />
              <div className="relative w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-800 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-900/50">
                <Icon size={56} className="text-white" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
