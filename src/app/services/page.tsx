import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  ChevronDown,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Halyse Technologies delivers senior-led technology consulting and delivery services across enterprise applications, integration, Azure cloud, data & AI, low-code platforms, and managed services.",
};

// ─── ENGAGEMENT MODELS ──────────────────────────────────────────────────────

const engagementModels = [
  { name: "Discovery Workshop", desc: "1–2 week fixed engagement to align on scope, outcomes, and roadmap." },
  { name: "Fixed-Price Project", desc: "Defined scope, defined outcomes, defined price. Ideal for well-scoped builds." },
  { name: "Time & Materials", desc: "Flexible model for evolving scopes and iterative delivery." },
  { name: "Dedicated Team", desc: "A long-term, ring-fenced team scaled to your program." },
  { name: "Managed Services", desc: "Outcome-based retainers with SLAs, monitoring, and enhancement capacity." },
];

// ─── FAQS ───────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "How quickly can you mobilize a delivery team?",
    a: "Discovery engagements typically start within 1–2 weeks of signature. Full delivery teams — including senior architects — can be onboarded within 2–4 weeks depending on skill mix and clearance requirements.",
  },
  {
    q: "How do you handle intellectual property and data security?",
    a: "You retain full ownership of all code, artifacts, and data produced during the engagement. We operate under strict NDAs, follow Microsoft's Well-Architected security baselines, and can align with client-specific security controls, ISO 27001 processes, or industry regulations (HIPAA, PCI, etc.) on request.",
  },
  {
    q: "Do you provide fixed-price engagements?",
    a: "Yes — for well-scoped work, we prefer fixed-price. Our discovery process defines scope, outcomes, timeline, and price up front. For evolving or ambiguous scopes, we recommend Time & Materials with weekly transparency.",
  },
  {
    q: "Can you work alongside our internal team?",
    a: "Absolutely. Most of our engagements are joint delivery — we embed senior consultants and architects alongside your internal teams, transferring knowledge continuously so you build long-term capability rather than dependency.",
  },
  {
    q: "What SLAs do you offer for managed services?",
    a: "Standard tiers include 99.5%, 99.9%, and 99.95% availability with corresponding response and resolution times. SLAs are tailored during contract design to match business criticality and the underlying platform architecture.",
  },
  {
    q: "Do you support offshore, hybrid, or onsite delivery?",
    a: "All three. We deliver from India as the primary hub, with client-facing consultants and architects available onsite or hybrid across the US, Australia, and the Middle East depending on engagement needs.",
  },
];

// ─── PAGE ───────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Our Services"
        title="Senior-led technology consulting"
        highlight="and delivery services."
        subtitle="Halyse helps organizations plan, build, deliver, and run business-critical technology across Microsoft Cloud, Power Platform, Dynamics 365, Azure, and Quickbase. From early strategy through ongoing support, our teams work alongside enterprise leaders to modernize operations, reduce delivery risk, and create measurable business value."
      />

      {/* TRUST STRIP */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            <div className="text-center md:text-left">
              <div className="text-3xl font-black text-gray-900">50+</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl font-black text-gray-900">8+</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Years of Experience</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl font-black text-gray-900">98%</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Client Satisfaction</div>
            </div>
            <div className="text-center md:text-left flex md:justify-start justify-center items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                <Award size={20} className="text-blue-700" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">Microsoft Partner</div>
                <div className="text-xs text-gray-500">PMC Pro-enabled</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE LINES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Service Lines"
            title="Enterprise applications, integrations, and automation engineered for scale."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg shadow-blue-100 group-hover:scale-105 transition-transform">
                      <Icon size={22} className="text-white" />
                    </div>
                    <ArrowUpRight size={20} className="text-gray-300 group-hover:text-blue-600 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{s.title}</h3>
                  <p className="text-xs font-semibold text-blue-600 mb-4">{s.tagline}</p>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">{s.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Engagement Models"
            title="Contract the way that works for you."
            subtitle="From short discovery workshops to multi-year managed services, we offer the commercial flexibility enterprises need."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {engagementModels.map((m, i) => (
              <div key={m.name} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
                <div className="text-xs font-bold text-blue-600 mb-2">0{i + 1}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{m.name}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Frequently Asked"
            title="What enterprise buyers ask us."
            subtitle="The questions that come up in every procurement conversation — answered up front."
          />

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 list-none">
                  <span className="text-base font-semibold text-gray-900 pr-8">{f.q}</span>
                  <ChevronDown size={20} className="text-blue-600 shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-5 -mt-1 text-sm text-gray-600 leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-950 text-white relative overflow-hidden">
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
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
            Ready to accelerate your next initiative?
          </h2>
          <p className="text-blue-100 text-lg mb-9 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re modernizing applications, strengthening your cloud platform, improving data capabilities, or exploring AI — our structured consulting engagements provide a low-risk path from strategy to measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors shadow-xl shadow-blue-900/30 text-sm"
            >
              Schedule a Discovery Session <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/15 border border-white/20 transition-colors text-sm"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
