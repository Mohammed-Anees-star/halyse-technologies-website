import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Target,
  Sparkles,
  Award,
  TrendingUp,
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

// ─── SIGNATURE OFFERINGS ────────────────────────────────────────────────────

const signatureOfferings = [
  {
    icon: Sparkles,
    tag: "Fixed Scope · 6 Weeks",
    title: "AI Rapid Pilot",
    desc: "From opportunity assessment to a live, production-ready AI pilot on Azure OpenAI — in six weeks. Includes use case selection, data readiness, prototype build, and business case for scale-out.",
    outcomes: [
      "1 production-grade AI pilot",
      "Executive scale-out business case",
      "Reference architecture & governance",
    ],
  },
  {
    icon: Target,
    tag: "Fixed Scope · 4 Weeks",
    title: "Power Platform Governance Kickstart",
    desc: "Stand up an enterprise-grade Power Platform Center of Excellence — environments, DLP policies, monitoring, maker enablement, and governance operating model — in one month.",
    outcomes: [
      "Full CoE toolkit deployment",
      "DLP & environment strategy",
      "Enablement + governance playbook",
    ],
  },
  {
    icon: TrendingUp,
    tag: "Fixed Scope · 3 Weeks",
    title: "Data & Analytics Accelerator",
    desc: "A structured sprint that assesses your data landscape, delivers a modern Fabric / Power BI reference architecture, and ships two working executive dashboards on real data.",
    outcomes: [
      "Data maturity assessment",
      "Reference architecture (Fabric-ready)",
      "2 live executive dashboards",
    ],
  },
];

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
            subtitle="Halyse helps organizations design, build, modernize, integrate, and support the technology platforms that underpin critical business operations. Our service lines cover enterprise applications, custom software, integration and automation, Azure cloud and data platforms, analytics, AI, business applications, and managed services — enabling clients to modernize legacy environments, connect systems, streamline processes, and scale with confidence. We deliver secure, scalable, and connected solutions across the Microsoft ecosystem with a clear focus on operational performance, governance, and long-term business value."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg shadow-blue-100 group-hover:scale-105 transition-transform">
                      <Icon size={22} className="text-white" />
                    </div>
                    <ArrowUpRight size={18} className="text-gray-300 group-hover:text-blue-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{s.title}</h3>
                  <p className="text-xs font-semibold text-blue-600 mb-3">{s.tagline}</p>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-4 mb-6 flex-1">{s.desc}</p>

                  <span className="inline-flex items-center justify-center gap-2 bg-blue-700 group-hover:bg-blue-800 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm w-full">
                    Learn More
                    <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SIGNATURE OFFERINGS */}
      <section className="py-24 bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            badge="Signature Offerings"
            title="Fixed-scope accelerators."
            subtitle="For enterprises that need momentum fast — our productized engagements deliver executive-visible outcomes within weeks, not quarters."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {signatureOfferings.map((o) => {
              const Icon = o.icon;
              return (
                <div
                  key={o.title}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] hover:border-blue-400/30 transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-5">
                    <Icon size={22} className="text-white" />
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-blue-300 font-semibold mb-2">
                    {o.tag}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{o.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-5">{o.desc}</p>
                  <div className="border-t border-white/10 pt-4">
                    <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-2">Outcomes</div>
                    <ul className="space-y-1.5">
                      {o.outcomes.map((out) => (
                        <li key={out} className="flex items-start gap-2 text-xs text-gray-300">
                          <CheckCircle2 size={13} className="text-cyan-400 mt-0.5 shrink-0" />
                          {out}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
            Ready to see what we can deliver together?
          </h2>
          <p className="text-blue-100 text-lg mb-9 max-w-2xl mx-auto leading-relaxed">
            Book a 30-minute discovery call. We&apos;ll listen to your priorities, share relevant experience, and follow up with a tailored proposal within 5 business days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors shadow-xl shadow-blue-900/30 text-sm"
            >
              Book a Discovery Call <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/15 border border-white/20 transition-colors text-sm"
            >
              Request Capabilities Deck
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
