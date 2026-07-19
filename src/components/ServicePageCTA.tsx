import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServicePageCTAProps {
  serviceTitle: string;
}

export default function ServicePageCTA({ serviceTitle }: ServicePageCTAProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-700 to-blue-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase mb-4 text-blue-200">
          Let&apos;s Talk
        </span>
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
          Discuss your {serviceTitle} priorities with a Halyse expert.
        </h2>
        <p className="text-blue-100 text-lg mb-9 max-w-2xl mx-auto leading-relaxed">
          Share your current environment, business goals, and challenges. We&apos;ll respond within one business day with relevant experience, a proposed approach, and next steps for a discovery conversation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors shadow-xl shadow-blue-900/30 text-sm"
          >
            Talk to an Expert <ArrowRight size={18} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/15 border border-white/20 transition-colors text-sm"
          >
            Request a Capabilities Deck
          </Link>
        </div>
      </div>
    </section>
  );
}
