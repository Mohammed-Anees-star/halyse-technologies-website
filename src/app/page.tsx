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
  CheckCircle2,
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

// Technology stack logos/badges for the "Why Choose Us" tech strip
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
      {/* ─── HERO — 75vh two-column ───────────────────────────── */}
      <section className="relative flex items-center bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 text-white overflow-hidden min-h-[75vh]">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 right-0 w-[480px] h-[480px] bg-blue-600/10 rounded-full blur-3xl translate-x-1/3" />
          <div className="absolute bottom-0 left-1/4 w-[360px] h-[360px] bg-blue-800/10 rounded-full blur-3xl translate-y-1/3" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10 w-full">
          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT: Text + CTA */}
            <div>
              <span className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full mb-5 border border-blue-500/30">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                Enterprise AI &amp; Data Consulting
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5 tracking-tight">
                Transform Your Business with{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  AI, Data &amp; Intelligent Applications
                </span>
              </h1>

              <p className="text-base sm:text-lg text-blue-100 leading-relaxed mb-7 max-w-xl">
                We design and deliver enterprise-grade solutions using Microsoft, Quickbase, and modern
                technologies to automate workflows, integrate systems, and unlock actionable insights.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-blue-900/40 hover:shadow-blue-700/40 group text-sm"
                >
                  Explore Solutions
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-200 text-sm"
                >
                  Book a Consultation
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2">
                {["Microsoft Partner", "Quickbase Expert", "Power Platform", "Azure"].map((b) => (
                  <span
                    key={b}
                    className="text-xs text-blue-200 bg-blue-900/40 px-3 py-1.5 rounded-md border border-blue-700/40"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT: Visual panel */}
            <div className="hidden lg:block">
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                {/* Header bar */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <div className="w-3 h-3 rounded-full bg-green-400/70" />
                  <span className="ml-3 text-xs text-white/40 font-mono">Halyse Analytics Platform</span>
                </div>

                {/* Mock dashboard metrics */}
                <div className="grid grid-cols-2 gap-4 mb-5">
                  {[
                    { label: "Workflow Efficiency", value: "+83%", color: "text-green-400" },
                    { label: "Data Integration", value: "12 Sources", color: "text-blue-400" },
                    { label: "Cost Reduction", value: "↓ 40%", color: "text-cyan-400" },
                    { label: "Time Saved / Week", value: "120 hrs", color: "text-purple-400" },
                  ].map((m) => (
                    <div key={m.label} className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <p className="text-xs text-white/50 mb-1">{m.label}</p>
                      <p className={`text-2xl font-bold ${m.color}`}>{m.value}</p>
                    </div>
                  ))}
                </div>

                {/* Mock bar chart */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-xs text-white/50 mb-3">Process Automation Coverage</p>
                  <div className="space-y-2.5">
                    {[
                      { name: "Finance", pct: 92 },
                      { name: "Operations", pct: 78 },
                      { name: "HR & Admin", pct: 85 },
                      { name: "Customer Ops", pct: 65 },
                    ].map((bar) => (
                      <div key={bar.name}>
                        <div className="flex justify-between text-xs text-white/50 mb-1">
                          <span>{bar.name}</span>
                          <span>{bar.pct}%</span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                            style={{ width: `${bar.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg shadow-blue-900/50 border border-blue-500">
                  ✓ Live Dashboard
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar at bottom — ensures next section is visible */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-blue-300 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE SOLVE ────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="What We Solve"
            title="Turning Business Challenges into Competitive Advantage"
            subtitle="We identify the root causes of operational friction and deliver solutions that create lasting impact."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {problemSolutions.map(({ problem, solution, icon: Icon }) => (
              <div
                key={problem}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-50 transition-colors">
                  <Icon size={22} className="text-red-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <p className="text-sm text-gray-400 line-through mb-2">{problem}</p>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-px bg-blue-300" />
                  <ArrowRight size={14} className="text-blue-500" />
                </div>
                <p className="text-base font-bold text-gray-900 leading-snug">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTIONS OVERVIEW ───────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Solutions"
            title="Comprehensive Enterprise Solutions"
            subtitle="From automation and analytics to AI and ERP — end-to-end capabilities that power modern enterprises."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {solutionCards.map(({ icon: Icon, title, desc, href }) => (
              <Link
                key={title}
                href={href}
                className="group flex flex-col p-7 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors shadow-md shadow-blue-100">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{desc}</p>
                <span className="inline-flex items-center gap-1 text-sm text-blue-600 font-semibold mt-5 group-hover:gap-2 transition-all">
                  Learn more <ChevronRight size={14} />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-10 py-3.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-blue-200 group"
            >
              View All Solutions <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BUILT FOR ENTERPRISE / WHY CHOOSE US ─────────────── */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Why Halyse"
            title="Built for Enterprise. Focused on Outcomes."
            subtitle="We combine deep technical expertise with a business-first mindset to deliver solutions that actually move the needle."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {whyChooseUs.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-blue-500/40 transition-all duration-300 group"
              >
                <div className="w-11 h-11 bg-blue-700/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/40 transition-colors">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Technology strip */}
          <div className="border-t border-white/10 pt-10">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest text-center mb-6">
              Technologies &amp; Platforms We Specialise In
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-blue-300 bg-blue-900/30 border border-blue-700/40 px-4 py-2 rounded-full font-medium hover:bg-blue-800/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 leading-tight">
            Ready to Streamline Operations, Integrate Systems, and Unlock Real Business Insights?
          </h2>
          <p className="text-blue-100 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s discuss how Halyse Technologies can deliver measurable outcomes for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 font-bold px-10 py-4 rounded-lg hover:bg-blue-50 hover:scale-[1.02] transition-all duration-200 shadow-2xl shadow-blue-900/40 group text-base"
            >
              Book a Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-10 py-4 rounded-lg border border-white/30 hover:border-white/50 transition-all duration-200 text-base"
            >
              View Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
