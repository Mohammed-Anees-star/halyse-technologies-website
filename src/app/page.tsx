import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  BarChart3,
  Database,
  Layers,
  Brain,
  Users,
  GitMerge,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Globe,
  ChevronRight,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Halyse Technologies | AI & Data Solutions for Modern Businesses",
  description:
    "Transform your business with enterprise-grade AI, Data, and Automation solutions from Halyse Technologies.",
};

const problemSolutions = [
  { problem: "Manual Processes", solution: "Automated Workflows", icon: Zap },
  { problem: "Disconnected Systems", solution: "Integrated Platforms", icon: GitMerge },
  { problem: "Scattered Data", solution: "Unified Analytics", icon: Database },
  { problem: "Lack of Insights", solution: "Real-time Dashboards", icon: BarChart3 },
];

const solutionCards = [
  {
    icon: Zap,
    title: "Business Process Automation",
    desc: "Automate workflows and approval systems with Power Automate.",
    href: "/solutions#automation",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics Platforms",
    desc: "Power BI dashboards, data modeling, and enterprise reporting.",
    href: "/solutions#analytics",
  },
  {
    icon: Layers,
    title: "Custom Business Applications",
    desc: "Tailored apps with Power Apps and Quickbase for your exact needs.",
    href: "/solutions#apps",
  },
  {
    icon: GitMerge,
    title: "System Integration & APIs",
    desc: "Connect all your systems with REST APIs and real-time data sync.",
    href: "/solutions#integration",
  },
  {
    icon: Brain,
    title: "AI & Intelligent Solutions",
    desc: "Predictive analytics and AI-driven insights for smarter decisions.",
    href: "/solutions#ai",
  },
  {
    icon: Users,
    title: "CRM & ERP Solutions",
    desc: "Dynamics 365 and Business Central implementation and optimization.",
    href: "/solutions#crm",
  },
];

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Architecture",
    desc: "Solutions built to scale, secured by design, aligned with enterprise standards.",
  },
  {
    icon: Cpu,
    title: "Microsoft & Quickbase Expertise",
    desc: "Deep technical proficiency across the full Microsoft and Quickbase platform stack.",
  },
  {
    icon: TrendingUp,
    title: "Scalable & Secure Solutions",
    desc: "Future-proof architectures that grow with your business and protect your data.",
  },
  {
    icon: Layers,
    title: "End-to-End Implementation",
    desc: "From discovery through deployment and support — we own the full lifecycle.",
  },
  {
    icon: Globe,
    title: "Real Business Outcomes",
    desc: "Focused on measurable ROI — reduced costs, faster processes, better decisions.",
  },
  {
    icon: Users,
    title: "Dedicated Partner Approach",
    desc: "We become an extension of your team, committed to long-term success.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "15+", label: "Industries Served" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Post-Deployment Support" },
];

const techStack = [
  "Microsoft Power Platform",
  "Power BI",
  "Power Apps",
  "Power Automate",
  "Dynamics 365",
  "Business Central",
  "Quickbase",
  "Azure",
  "Azure OpenAI",
  "SharePoint",
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 text-white overflow-hidden pt-20">
        {/* Subtle grid background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-800/8 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        {/* Main hero content */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-10 pb-0 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className="flex flex-col justify-center py-10">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-blue-500/30 w-fit">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse shrink-0" />
                Enterprise AI &amp; Data Consulting
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold leading-[1.2] mb-5 tracking-tight">
                Transform Your Business
                <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  with AI, Data &amp; Intelligent Applications
                </span>
              </h1>

              <p className="text-base text-blue-100/80 leading-relaxed mb-8 max-w-lg">
                We design and deliver enterprise-grade solutions using Microsoft, Quickbase, and modern
                technologies — automating workflows, connecting systems, and unlocking actionable insights.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-blue-900/50 group text-sm"
                >
                  Explore Solutions
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/18 text-white font-semibold px-6 py-3 rounded-lg border border-white/25 hover:border-white/45 transition-all duration-200 text-sm"
                >
                  Book a Consultation
                </Link>
              </div>

              {/* Trust tags */}
              <div className="flex flex-wrap gap-2">
                {["Microsoft Partner", "Quickbase Expert", "Power Platform", "Azure"].map((b) => (
                  <span key={b} className="text-xs text-blue-200/70 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT — Analytics Dashboard Panel */}
            <div className="hidden lg:flex items-center justify-center py-10">
              <div className="relative w-full max-w-md">
                <div className="bg-white/5 border border-white/12 rounded-2xl p-6 backdrop-blur-sm shadow-2xl shadow-black/30">
                  {/* Window chrome */}
                  <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/10">
                    <div className="w-3 h-3 rounded-full bg-red-400/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                    <div className="w-3 h-3 rounded-full bg-green-400/60" />
                    <span className="ml-2 text-xs text-white/35 font-mono tracking-wide">Halyse Analytics Platform</span>
                    <span className="ml-auto text-xs bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-0.5 rounded-full">● Live</span>
                  </div>

                  {/* KPI grid */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {[
                      { label: "Workflow Efficiency", value: "+83%", color: "text-green-400", bg: "bg-green-500/10 border-green-500/20" },
                      { label: "Data Sources", value: "12 Live", color: "text-blue-300", bg: "bg-blue-500/10 border-blue-500/20" },
                      { label: "Cost Reduction", value: "↓ 40%", color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/20" },
                      { label: "Hours Saved / Wk", value: "120 hrs", color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20" },
                    ].map((m) => (
                      <div key={m.label} className={`rounded-xl p-4 border ${m.bg}`}>
                        <p className="text-[11px] text-white/45 mb-1.5 leading-tight">{m.label}</p>
                        <p className={`text-xl font-bold ${m.color}`}>{m.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Progress bars */}
                  <div className="bg-white/4 rounded-xl p-4 border border-white/8">
                    <p className="text-[11px] text-white/45 mb-3 font-medium uppercase tracking-wider">
                      Process Automation Coverage
                    </p>
                    <div className="space-y-3">
                      {[
                        { name: "Finance & Accounting", pct: 92, color: "from-blue-500 to-blue-400" },
                        { name: "Operations", pct: 78, color: "from-cyan-500 to-cyan-400" },
                        { name: "HR & Administration", pct: 85, color: "from-purple-500 to-purple-400" },
                        { name: "Customer Operations", pct: 65, color: "from-green-500 to-green-400" },
                      ].map((bar) => (
                        <div key={bar.name}>
                          <div className="flex justify-between mb-1">
                            <span className="text-[11px] text-white/50">{bar.name}</span>
                            <span className="text-[11px] text-white/50 font-medium">{bar.pct}%</span>
                          </div>
                          <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${bar.color} rounded-full`}
                              style={{ width: `${bar.pct}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600/15 rounded-full blur-2xl" />
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-cyan-600/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="border-t border-white/8 bg-black/15 backdrop-blur-sm mt-0">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-x divide-white/8">
              {stats.map((stat, i) => (
                <div key={stat.label} className={`text-center ${i > 0 ? "pl-6" : ""}`}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-blue-300/70 mt-0.5 tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE SOLVE ────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="What We Solve"
            title="Turning Business Challenges into Competitive Advantage"
            subtitle="We identify the root causes of operational friction and deliver solutions that create lasting, measurable impact."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {problemSolutions.map(({ problem, solution, icon: Icon }) => (
              <div
                key={problem}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-blue-100/50 hover:border-blue-100 hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors duration-300">
                  <Icon size={22} className="text-red-400 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <p className="text-sm text-gray-400 line-through mb-2 font-medium">{problem}</p>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex-1 h-px bg-gradient-to-r from-blue-300 to-blue-100" />
                  <ArrowRight size={14} className="text-blue-500 shrink-0" />
                </div>
                <p className="text-base font-bold text-gray-900 leading-snug">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTIONS OVERVIEW ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Our Solutions"
            title="Comprehensive Enterprise Solutions"
            subtitle="From automation and analytics to AI and ERP — end-to-end capabilities that power modern enterprises."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionCards.map(({ icon: Icon, title, desc, href }) => (
              <Link
                key={title}
                href={href}
                className="group flex flex-col p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-50 transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors shadow-lg shadow-blue-100">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2.5 group-hover:text-blue-700 transition-colors leading-snug">
                  {title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{desc}</p>
                <div className="flex items-center gap-1.5 mt-6 text-sm text-blue-600 font-semibold group-hover:gap-2.5 transition-all">
                  Learn more <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-14">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-blue-200/60 group text-sm"
            >
              View All Solutions
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY HALYSE / BUILT FOR ENTERPRISE ───────────────── */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Why Halyse"
            title="Built for Enterprise. Focused on Outcomes."
            subtitle="We combine deep technical expertise with a business-first mindset to deliver solutions that actually move the needle."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {whyChooseUs.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col p-7 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="w-11 h-11 bg-blue-700/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600/40 transition-colors">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2 leading-snug">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Tech strip */}
          <div className="border-t border-white/8 pt-12">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest text-center mb-6">
              Technologies &amp; Platforms We Specialise In
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-blue-300/80 bg-blue-900/30 border border-blue-700/30 px-4 py-2 rounded-full font-medium hover:bg-blue-800/40 hover:border-blue-600/50 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-28 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-950 text-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold text-blue-300 tracking-widest uppercase mb-5 bg-white/10 px-4 py-2 rounded-full border border-white/15">
            Ready to Get Started?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight">
            Ready to Streamline Operations, Integrate Systems, and Unlock Real Business Insights?
          </h2>
          <p className="text-blue-100/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s discuss how Halyse Technologies can deliver measurable outcomes for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 font-bold px-10 py-4 rounded-xl hover:bg-blue-50 hover:scale-[1.02] transition-all duration-200 shadow-2xl shadow-blue-900/40 group"
            >
              Book a Consultation
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 bg-white/12 hover:bg-white/20 text-white font-semibold px-10 py-4 rounded-xl border border-white/25 hover:border-white/45 transition-all duration-200"
            >
              View Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
