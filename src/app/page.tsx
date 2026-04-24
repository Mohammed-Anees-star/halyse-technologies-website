import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
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
    desc: "Eliminate manual work through intelligent workflow automation, approval systems, and Power Automate integrations.",
    href: "/solutions#automation",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics Platforms",
    desc: "Unlock the full value of your data with Power BI dashboards, data modeling, and enterprise reporting systems.",
    href: "/solutions#analytics",
  },
  {
    icon: Layers,
    title: "Custom Business Applications",
    desc: "Build tailored apps with Power Apps and Quickbase that precisely fit your business workflows and teams.",
    href: "/solutions#apps",
  },
  {
    icon: GitMerge,
    title: "System Integration & APIs",
    desc: "Connect disparate systems seamlessly using REST APIs, third-party integrations, and real-time data sync.",
    href: "/solutions#integration",
  },
  {
    icon: Brain,
    title: "AI & Intelligent Solutions",
    desc: "Leverage predictive analytics, machine learning, and AI-driven insights to stay ahead of the competition.",
    href: "/solutions#ai",
  },
  {
    icon: Users,
    title: "CRM & ERP Solutions",
    desc: "Implement and optimize Dynamics 365 and Business Central to streamline operations and customer relationships.",
    href: "/solutions#crm",
  },
];

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Architecture",
    desc: "Solutions built to scale, secured by design, and aligned with enterprise standards.",
  },
  {
    icon: Cpu,
    title: "Microsoft & Quickbase Expertise",
    desc: "Deep technical proficiency across the Microsoft stack and Quickbase platform.",
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
    desc: "Focused on measurable ROI — reduced costs, faster processes, and better decisions.",
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

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 text-white overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl translate-x-1/2" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-800/10 rounded-full blur-3xl translate-y-1/2" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full mb-6 border border-blue-500/30">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              Enterprise AI &amp; Data Consulting
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
              Transform Your Business with{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                AI, Data, and Intelligent Applications
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-8 max-w-3xl">
              We design and deliver enterprise-grade solutions using Microsoft, Quickbase, and modern
              technologies to automate workflows, integrate systems, and unlock actionable insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 shadow-lg shadow-blue-900/40 hover:shadow-blue-700/40 group"
              >
                Explore Solutions
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap gap-3">
              {["Microsoft Partner", "Quickbase Expert", "Power Platform", "Azure Services"].map((b) => (
                <span
                  key={b}
                  className="text-xs text-blue-200 bg-blue-900/40 px-3 py-1.5 rounded-md border border-blue-700/40"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {problemSolutions.map(({ problem, solution, icon: Icon }) => (
              <div
                key={problem}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all group"
              >
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                  <Icon size={20} className="text-red-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <p className="text-sm text-gray-500 line-through mb-1">{problem}</p>
                <div className="flex items-center gap-2 my-2">
                  <div className="w-6 h-px bg-blue-300" />
                  <ArrowRight size={14} className="text-blue-500" />
                </div>
                <p className="text-base font-semibold text-gray-900">{solution}</p>
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
            subtitle="From automation and analytics to AI and ERP — we deliver end-to-end capabilities that power modern enterprises."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionCards.map(({ icon: Icon, title, desc, href }) => (
              <Link
                key={title}
                href={href}
                className="group p-7 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors shadow-lg shadow-blue-100">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{desc}</p>
                <span className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium group-hover:gap-2 transition-all">
                  Learn more <ChevronRight size={14} />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-sm hover:shadow-md"
            >
              View All Solutions <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────────── */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Why Halyse"
            title="Built for Enterprise. Focused on Outcomes."
            subtitle="We combine deep technical expertise with a business-first mindset to deliver solutions that actually move the needle."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-blue-500/40 transition-all group"
              >
                <div className="w-11 h-11 bg-blue-700/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/40 transition-colors">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            Ready to Transform Your Business with AI, Automation, and Analytics?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your challenges and explore how Halyse Technologies can drive real outcomes for your organization.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-800 font-bold px-9 py-4 rounded-lg hover:bg-blue-50 transition-colors shadow-xl shadow-blue-900/30 group"
          >
            Contact Halyse Technologies
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
