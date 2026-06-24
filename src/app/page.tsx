"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Zap,
  BarChart3,
  Layers,
  GitMerge,
  Brain,
  Users,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

// ─── DATA ──────────────────────────────────────────────────────────────────

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "15+", label: "Industries Served" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Post-Deployment Support" },
];

const services = [
  {
    id: "automation",
    icon: Zap,
    label: "Process Automation",
    headline: "Eliminate manual work. Scale with confidence.",
    body: "We transform fragmented, manual operations into seamless automated workflows — saving time, cutting errors, and freeing your teams for high-value work.",
    points: [
      "End-to-end workflow automation across departments",
      "Multi-step approval and escalation systems",
      "Power Automate flows for Microsoft 365",
      "Document processing and routing automation",
      "Event-driven triggers and real-time alerts",
    ],
    tech: ["Power Automate", "Power Platform", "SharePoint", "Logic Apps"],
    href: "/solutions#automation",
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Data & Analytics",
    headline: "Turn raw data into decisive action.",
    body: "We design analytics platforms that consolidate your data and surface it through intuitive dashboards — giving every decision-maker the clarity to act with confidence.",
    points: [
      "Power BI dashboards and executive reporting",
      "Data warehousing and lakehouse architecture",
      "Enterprise data modeling and governance",
      "KPI tracking and self-service analytics",
      "Real-time and scheduled reporting pipelines",
    ],
    tech: ["Power BI", "Azure Data Factory", "Fabric", "SQL Server"],
    href: "/solutions#analytics",
  },
  {
    id: "apps",
    icon: Layers,
    label: "Custom Applications",
    headline: "Software built around your exact process.",
    body: "Off-the-shelf tools rarely fit. We build tailored applications using Power Apps and Quickbase that match your workflows, team structures, and data — without the overhead of large software projects.",
    points: [
      "Canvas and model-driven Power Apps",
      "Quickbase relational database applications",
      "Mobile-ready field and operations portals",
      "Role-based access control and audit trails",
      "Offline-capable low-code solutions",
    ],
    tech: ["Power Apps", "Quickbase", "Dataverse", "Azure SQL"],
    href: "/solutions#apps",
  },
  {
    id: "integration",
    icon: GitMerge,
    label: "System Integration",
    headline: "Connect your ecosystem. Eliminate silos.",
    body: "Most businesses run on 5–15 disconnected tools. We architect integration layers that connect your systems in real time — so data flows automatically, accurately, and reliably.",
    points: [
      "RESTful and SOAP API design and implementation",
      "Third-party ERP, CRM, and HR integrations",
      "Real-time and batch data synchronization",
      "Legacy system modernization and bridging",
      "Integration monitoring and error handling",
    ],
    tech: ["Azure API Management", "Logic Apps", "MuleSoft", "Zapier"],
    href: "/solutions#integration",
  },
  {
    id: "ai",
    icon: Brain,
    label: "AI & Intelligent Solutions",
    headline: "Applied AI that moves the business needle.",
    body: "We deploy AI and machine learning where it creates tangible outcomes — from predicting demand to automating complex decisions that previously required human judgment.",
    points: [
      "Predictive analytics and demand forecasting",
      "AI-powered document understanding and extraction",
      "Natural language processing applications",
      "Azure OpenAI and Microsoft Copilot integrations",
      "Anomaly detection and intelligent risk scoring",
    ],
    tech: ["Azure OpenAI", "Copilot Studio", "Azure ML", "Cognitive Services"],
    href: "/solutions#ai",
  },
  {
    id: "crm",
    icon: Users,
    label: "CRM & ERP",
    headline: "Operational excellence from lead to ledger.",
    body: "We implement and customize Dynamics 365 and Business Central to unify your sales, service, finance, and supply chain — giving every team a single source of truth.",
    points: [
      "Dynamics 365 Sales and Customer Service",
      "Business Central finance and operations",
      "Custom modules and entity extensions",
      "CRM data migration and cleansing",
      "User training and change management",
    ],
    tech: ["Dynamics 365", "Business Central", "Power Platform", "Azure DevOps"],
    href: "/solutions#crm",
  },
];

const industries = [
  "Manufacturing",
  "Healthcare & Life Sciences",
  "Financial Services",
  "Construction & Real Estate",
  "Logistics & Supply Chain",
  "Professional Services",
  "Retail & Distribution",
  "Government & Public Sector",
];

const insights = [
  {
    category: "Microsoft Power Platform",
    title: "How Power Platform is Redefining Enterprise Automation in 2025",
    summary:
      "Microsoft's Power Platform has evolved from a low-code tool into a full enterprise automation backbone. We explore what this means for mid-market organizations.",
    readTime: "5 min read",
  },
  {
    category: "Azure AI",
    title: "From Pilot to Production: Making Azure OpenAI Work at Enterprise Scale",
    summary:
      "Most AI pilots fail at scale. Here's the architecture, governance, and change management approach that gets enterprise AI into production — and keeps it there.",
    readTime: "7 min read",
  },
  {
    category: "Data Strategy",
    title: "The Modern Data Stack for Mid-Market Enterprises: A Practical Guide",
    summary:
      "Enterprise analytics doesn't require a Fortune 500 budget. This guide outlines a practical, cost-effective data architecture built on Microsoft Fabric and Power BI.",
    readTime: "6 min read",
  },
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
  "Azure Data Factory",
  "Copilot Studio",
];

// ─── SERVICES TABS (client component) ─────────────────────────────────────

function ServicesTabs() {
  const [active, setActive] = useState(0);
  const svc = services[active];
  const Icon = svc.icon;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-0 rounded-2xl overflow-hidden border border-gray-200 shadow-xl shadow-gray-100/80">
      {/* Tab list */}
      <div className="bg-gray-950 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible">
        {services.map((s, i) => {
          const TabIcon = s.icon;
          return (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-3 px-6 py-4 text-left transition-all duration-200 whitespace-nowrap lg:whitespace-normal border-b border-white/5 last:border-0 group ${
                active === i
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <TabIcon
                size={18}
                className={`shrink-0 ${active === i ? "text-white" : "text-gray-500 group-hover:text-blue-400"}`}
              />
              <span className="text-sm font-medium">{s.label}</span>
              {active === i && (
                <ChevronRight size={14} className="ml-auto shrink-0 hidden lg:block" />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab panel */}
      <div className="bg-white p-8 lg:p-10">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-100 shrink-0">
            <Icon size={22} className="text-white" />
          </div>
          <div>
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">
              {svc.label}
            </p>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 leading-snug">
              {svc.headline}
            </h3>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed mb-7 text-[15px]">{svc.body}</p>

        <ul className="space-y-2.5 mb-8">
          {svc.points.map((pt) => (
            <li key={pt} className="flex items-start gap-3">
              <CheckCircle2 size={17} className="text-blue-600 mt-0.5 shrink-0" />
              <span className="text-sm text-gray-700 leading-relaxed">{pt}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex flex-wrap gap-2 flex-1">
            {svc.tech.map((t) => (
              <span
                key={t}
                className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-full font-medium"
              >
                {t}
              </span>
            ))}
          </div>
          <Link
            href={svc.href}
            className="inline-flex items-center gap-1.5 text-sm text-blue-700 font-semibold hover:gap-2.5 transition-all group"
          >
            Learn more <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── PAGE ──────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════ */}
      <section className="relative bg-gray-950 text-white overflow-hidden min-h-[92vh] flex flex-col">
        {/* Background texture */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Grid lines */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          {/* Glow orbs */}
          <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-blue-700/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 flex-1 flex flex-col justify-center">
            <div className="max-w-4xl">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 mb-8">
                <span className="w-8 h-px bg-blue-500" />
                <span className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase">
                  Enterprise AI & Data Consulting
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-8">
                Transform How
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300">
                  Your Business
                </span>
                <br />
                Operates.
              </h1>

              <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl">
                Halyse Technologies delivers enterprise-grade AI, Data, and Automation solutions
                built on Microsoft and Quickbase — helping organizations across the US, Australia,
                and Middle East unlock measurable, lasting business value.
              </p>

              <div className="flex flex-wrap gap-4 mb-16">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 shadow-lg shadow-blue-900/50 group text-sm"
                >
                  Book a Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2.5 text-white/80 hover:text-white font-semibold px-7 py-3.5 rounded-lg border border-white/15 hover:border-white/35 transition-all duration-200 text-sm"
                >
                  Explore Solutions
                </Link>
              </div>

              {/* Trust marks */}
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {["Microsoft Partner", "Quickbase Expert", "Power Platform Certified", "Azure Solutions"].map(
                  (tag) => (
                    <div key={tag} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-blue-500" />
                      <span className="text-xs text-gray-500 font-medium">{tag}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="border-t border-white/8 bg-white/[0.03] backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                  <div key={stat.label} className={`${i > 0 ? "lg:border-l lg:border-white/10 lg:pl-6" : ""}`}>
                    <div className="text-3xl font-extrabold text-white tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-1 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SERVICES (tabbed)
      ════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="inline-block text-xs font-bold text-blue-600 tracking-[0.15em] uppercase mb-4">
              Our Services
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              Comprehensive Enterprise Solutions
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              From automation and analytics to AI and ERP — end-to-end capabilities
              that power modern enterprises.
            </p>
          </div>
          <ServicesTabs />
          <div className="mt-10 flex justify-end">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 group"
            >
              View all solutions
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          INDUSTRIES
      ════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div className="max-w-xl">
              <span className="inline-block text-xs font-bold text-blue-600 tracking-[0.15em] uppercase mb-4">
                Industries We Serve
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Deep Domain Expertise Across Sectors
              </h2>
            </div>
            <p className="text-gray-500 leading-relaxed max-w-md lg:text-right">
              We apply our technical capabilities within the specific context of your industry —
              understanding its data, its processes, and its regulatory landscape.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="group bg-white rounded-xl px-6 py-5 border border-gray-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50 transition-all duration-200 cursor-default"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors leading-snug">
                    {industry}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-gray-300 group-hover:text-blue-500 transition-colors shrink-0 ml-2"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 group"
            >
              See industry solutions
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          WHY HALYSE
      ════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-gray-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <span className="inline-block text-xs font-bold text-blue-400 tracking-[0.15em] uppercase mb-5">
                Why Halyse
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                Built for Enterprise.
                <br />
                <span className="text-blue-400">Focused on Outcomes.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                We combine deep technical expertise across the Microsoft ecosystem with a
                business-first mindset — delivering solutions that move the needle, not just
                go live.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm group"
              >
                About Halyse
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right — differentiators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Enterprise-Grade Architecture",
                  desc: "Scalable, secure, and standards-aligned solutions built to last.",
                },
                {
                  title: "Microsoft & Quickbase Depth",
                  desc: "Specialists, not generalists — deep proficiency across the full stack.",
                },
                {
                  title: "End-to-End Ownership",
                  desc: "From discovery through deployment and beyond — we own the full lifecycle.",
                },
                {
                  title: "Measurable Business ROI",
                  desc: "Every engagement is anchored to real outcomes: cost, speed, and accuracy.",
                },
                {
                  title: "Global Delivery",
                  desc: "Serving clients in the US, Australia, UAE, and India with a follow-the-sun model.",
                },
                {
                  title: "Dedicated Partnership",
                  desc: "We integrate into your team and stay accountable beyond go-live.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-blue-500/30 transition-all duration-200"
                >
                  <div className="w-6 h-0.5 bg-blue-500 mb-4" />
                  <h3 className="text-sm font-bold text-white mb-2 leading-snug">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech strip */}
          <div className="mt-20 pt-12 border-t border-white/8">
            <p className="text-xs font-semibold text-gray-600 uppercase tracking-widest text-center mb-7">
              Platforms &amp; Technologies We Specialise In
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-blue-300/80 bg-blue-900/30 border border-blue-800/40 px-4 py-2 rounded-full font-medium hover:bg-blue-800/40 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          INSIGHTS
      ════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <span className="inline-block text-xs font-bold text-blue-600 tracking-[0.15em] uppercase mb-4">
                Insights
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Perspectives &amp; Thinking
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 group whitespace-nowrap"
            >
              Subscribe to insights
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {insights.map((insight, i) => (
              <article
                key={insight.title}
                className={`group rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl hover:shadow-gray-100 hover:-translate-y-1 ${
                  i === 0
                    ? "border-blue-200 bg-gradient-to-br from-blue-700 to-blue-900 text-white"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="p-8">
                  <div className="mb-5">
                    <span
                      className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
                        i === 0
                          ? "bg-white/15 text-blue-200"
                          : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      {insight.category}
                    </span>
                  </div>
                  <h3
                    className={`font-bold leading-snug mb-4 text-base ${
                      i === 0 ? "text-white" : "text-gray-900 group-hover:text-blue-700"
                    } transition-colors`}
                  >
                    {insight.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      i === 0 ? "text-blue-100/80" : "text-gray-500"
                    }`}
                  >
                    {insight.summary}
                  </p>
                  <div
                    className={`flex items-center justify-between text-xs font-medium ${
                      i === 0 ? "text-blue-300" : "text-gray-400"
                    }`}
                  >
                    <span>{insight.readTime}</span>
                    <ArrowUpRight
                      size={15}
                      className={`${
                        i === 0 ? "text-blue-300" : "text-gray-400 group-hover:text-blue-600"
                      } transition-colors`}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          CTA
      ════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-gray-50 border-t border-gray-100">
        <div className="max-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-950 rounded-3xl overflow-hidden relative">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-700/15 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-900/15 rounded-full blur-[80px]" />
            </div>

            <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 lg:px-20">
              <div className="max-w-3xl">
                <span className="inline-block text-xs font-bold text-blue-400 tracking-[0.15em] uppercase mb-6">
                  Ready to Start?
                </span>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                  Let&apos;s Build Something
                  <br />
                  <span className="text-blue-400">That Lasts.</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                  Tell us about your challenge. We&apos;ll come back with a clear perspective on the
                  opportunity, a recommended approach, and an honest assessment of fit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/50 group text-sm"
                  >
                    Book a Consultation
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/solutions"
                    className="inline-flex items-center justify-center gap-2.5 text-white font-semibold px-8 py-4 rounded-xl border border-white/15 hover:border-white/35 hover:bg-white/5 transition-all duration-200 text-sm"
                  >
                    Explore Solutions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
