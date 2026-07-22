"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Layers,
  GitMerge,
  Cloud,
  Database,
  TrendingUp,
  Award,
  Users,
  Globe2,
  Clock,
  Factory,
  BarChart3,
} from "lucide-react";
import { insights as allInsights } from "@/data/insights";
import { services as allServices } from "@/data/services";

// ─── DATA ──────────────────────────────────────────────────────────────────

// Outcome-driven positioning — NOT service categories.
// This is what makes Home distinct from /services.
const outcomePillars = [
  {
    number: "01",
    label: "Modernize",
    title: "Modernize critical platforms",
    body: "Replace brittle legacy systems with secure, scalable cloud-native foundations.",
  },
  {
    number: "02",
    label: "Integrate & Automate",
    title: "Integrate and automate operations",
    body: "Connect systems, reduce manual work, and streamline enterprise workflows.",
  },
  {
    number: "03",
    label: "Data & AI",
    title: "Turn data into business advantage",
    body: "Build the analytics and AI capability needed for faster, better decisions.",
  },
];

// Signature Offerings — now Home-only (removed from /services).
// Note: user specified 5 offerings here; PowerPlatform CoE moved off Home.
const signatureOfferings = [
  {
    icon: Layers,
    duration: "3 – 4 Weeks",
    title: "Application Modernization Blueprint",
    tagline: "Modernize with confidence before investing at scale.",
    outcomes: [
      "Assess a business-critical application and its modernization risks.",
      "Define a target architecture and phased modernization strategy.",
      "Receive a practical roadmap for migration or platform modernization.",
    ],
  },
  {
    icon: GitMerge,
    duration: "2 – 4 Weeks",
    title: "Integration & Automation Accelerator",
    tagline: "Connect systems, streamline operations, and eliminate manual effort.",
    outcomes: [
      "Map a high-priority business process across teams and systems.",
      "Design and implement secure integrations between key applications.",
      "Deliver a production-ready automation that improves efficiency.",
    ],
  },
  {
    icon: Cloud,
    duration: "2 – 3 Weeks",
    title: "Cloud Platform Readiness Sprint",
    tagline: "Build a secure, scalable cloud foundation for future growth.",
    outcomes: [
      "Assess your cloud environment, governance, and deployment practices.",
      "Establish platform controls for security, reliability, and scalability.",
      "Receive a prioritized roadmap to improve cloud readiness.",
    ],
  },
  {
    icon: TrendingUp,
    duration: "3 – 5 Weeks",
    title: "Data & Executive Analytics Accelerator",
    tagline: "Transform fragmented data into trusted business intelligence.",
    outcomes: [
      "Evaluate existing data sources, reporting gaps, and information flows.",
      "Define executive KPIs aligned with business objectives.",
      "Deliver an executive-ready dashboard on real business data.",
    ],
  },
  {
    icon: Sparkles,
    duration: "4 – 6 Weeks",
    title: "AI Rapid Pilot",
    tagline: "Validate a high-value AI opportunity before scaling with confidence.",
    outcomes: [
      "Prioritize a business-relevant AI use case with success criteria.",
      "Develop and validate a working pilot in a controlled environment.",
      "Receive recommendations for production adoption and governance.",
    ],
  },
];

// Featured case studies — pulled from /case-studies real content.
const featuredCaseStudies = [
  {
    icon: Factory,
    industry: "Manufacturing",
    label: "Data & Analytics",
    duration: "12–18 weeks",
    title: "Unified Operational Intelligence Platform",
    outcome: "From fragmented Excel reports to a hourly-refreshed enterprise data platform.",
    summary:
      "A manufacturer with data spread across ERP, MES, HR, and logistics systems replaced manual reporting with a centralized Microsoft Fabric platform — giving leadership a single source of truth across every business unit.",
    metrics: [
      { label: "Source Systems Unified", value: "4+" },
      { label: "Refresh Latency", value: "Hourly" },
      { label: "Manual Reporting", value: "Eliminated" },
    ],
    stack: ["Microsoft Fabric", "Azure SQL", "Power BI", "Azure Data Factory"],
  },
  {
    icon: BarChart3,
    industry: "Professional Services",
    label: "Process Automation",
    duration: "8–12 weeks",
    title: "End-to-End Approval Workflow Modernization",
    outcome: "Scattered email approvals replaced by governed, tracked, auditable workflows.",
    summary:
      "A consulting firm managing purchase requisitions and vendor onboarding via email chains and shared spreadsheets moved to Power Automate, Dataverse, and Power Apps — with SLA-tracked approvals and executive visibility.",
    metrics: [
      { label: "Workflows Modernized", value: "12" },
      { label: "Audit Visibility", value: "100%" },
      { label: "Approval Bottlenecks", value: "Removed" },
    ],
    stack: ["Power Automate", "Dataverse", "Power Apps", "Power BI"],
  },
];

const whyHalyse = [
  {
    title: "Deep in the Microsoft ecosystem.",
    body: "As a Microsoft Partner, our teams hold hands-on expertise across Azure, Power Platform, Dynamics 365, and Microsoft Fabric — and design every engagement against the Well-Architected Framework.",
    icon: Award,
  },
  {
    title: "Senior-led. Every engagement.",
    body: "You get senior architects and consultants — not junior teams learning on your project. Every workstream is owned by a proven expert with real enterprise delivery experience.",
    icon: Users,
  },
  {
    title: "Global reach. Local depth.",
    body: "Delivery hubs in India, with client-facing consultants across the United States, Australia, and the Middle East — combining follow-the-sun productivity with on-the-ground presence.",
    icon: Globe2,
  },
];

const insights = allInsights.slice(0, 3);

// Homepage tech marquee — kept from previous design (adds motion + reinforces stack).
const techMarquee = [
  "Microsoft Azure",
  "Power Platform",
  "Dynamics 365",
  "Microsoft Fabric",
  "Quickbase",
  "ASP.NET Core",
  "Power BI",
  "Azure OpenAI",
  "Copilot Studio",
  "Logic Apps",
];

// ─── PAGE ──────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════
          1. HERO — Outcome-driven positioning
          Two-column composition on desktop: content (7/12) + subtle
          architectural anchor (5/12). Distinct from /services which
          uses PageHero component.
      ════════════════════════════════════════════════════════ */}
      <section className="relative bg-gray-950 text-white overflow-hidden min-h-[85vh] lg:min-h-[88vh] flex flex-col">
        {/* Ambient background — subtle grid + blurred orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute top-[-15%] right-[-10%] w-[800px] h-[800px] bg-blue-600/25 rounded-full blur-[140px] animate-pulse-slow" />
          <div className="absolute bottom-[-15%] left-[-10%] w-[700px] h-[700px] bg-blue-900/30 rounded-full blur-[120px]" />
          <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
        </div>

        {/* Right-side architectural anchor — restrained enterprise motif.
            Positioned absolutely so it doesn't compete with headline width.
            Concentric rings + soft radial glow + fine SVG grid + node dots.
            Hidden below lg. */}
        <div
          className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none z-[1]"
          aria-hidden="true"
        >
          <div className="relative w-[560px] h-[560px] xl:w-[640px] xl:h-[640px] translate-x-[15%]">
            {/* Radial glow */}
            <div className="absolute inset-[12%] rounded-full bg-blue-500/[0.05] blur-3xl" />

            {/* Concentric rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-full h-full rounded-full border border-white/[0.04]" />
              <div className="absolute w-[80%] h-[80%] rounded-full border border-white/[0.05]" />
              <div className="absolute w-[60%] h-[60%] rounded-full border border-white/[0.07]" />
              <div className="absolute w-[40%] h-[40%] rounded-full border border-white/[0.09]" />
              <div className="absolute w-[20%] h-[20%] rounded-full border border-blue-300/[0.18]" />
            </div>

            {/* Central node — soft cyan pulse */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-300/60 shadow-[0_0_20px_rgba(103,232,249,0.5)]" />
            </div>

            {/* Anchor node dots — subtle graph vertices */}
            <div className="absolute top-[18%] left-[22%] w-1.5 h-1.5 rounded-full bg-blue-300/35" />
            <div className="absolute top-[28%] right-[20%] w-1.5 h-1.5 rounded-full bg-blue-300/35" />
            <div className="absolute bottom-[24%] left-[27%] w-1.5 h-1.5 rounded-full bg-blue-300/35" />
            <div className="absolute bottom-[20%] right-[24%] w-1.5 h-1.5 rounded-full bg-blue-300/35" />
            <div className="absolute top-[50%] left-[10%] w-1 h-1 rounded-full bg-blue-200/25" />
            <div className="absolute top-[50%] right-[10%] w-1 h-1 rounded-full bg-blue-200/25" />

            {/* Fine SVG grid with radial mask */}
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.05]"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern id="hero-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.12" />
                </pattern>
                <radialGradient id="hero-grid-fade" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="white" stopOpacity="1" />
                  <stop offset="70%" stopColor="white" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <mask id="hero-grid-mask">
                  <rect width="100" height="100" fill="url(#hero-grid-fade)" />
                </mask>
              </defs>
              <rect width="100" height="100" fill="url(#hero-grid)" mask="url(#hero-grid-mask)" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 lg:pt-32 pb-16 flex-1 flex flex-col justify-center">
            {/* Content spans wider than before so the 2-line headline can breathe.
                Anchor sits behind and to the right (see absolute block above). */}
            <div className="max-w-[1080px]">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-3 mb-9 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.1] backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-blue-200 text-xs font-semibold tracking-wider uppercase">
                  Enterprise Technology Consulting
                </span>
              </div>

              {/*
                2-line headline (preferred):
                  Line 1: We help enterprises turn technology into
                  Line 2: measurable business outcomes.

                Line 1 in Playfair 60px needs ~1090px to fit on one line.
                Content max-width is 1080px so at lg/xl it hits the target;
                on very narrow desktops (~1024–1150px) it may wrap to 3
                lines, which is the acceptable fallback the user specified.
                Line 2 uses `lg:whitespace-nowrap` so "outcomes." is never
                orphaned as its own line.
              */}
              <h1 className="font-serif text-[42px] sm:text-5xl lg:text-[52px] xl:text-[60px] font-semibold leading-[1.06] tracking-tight mb-8 max-w-[1080px]">
                We help enterprises turn technology into{" "}
                <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 lg:whitespace-nowrap">
                  measurable business outcomes.
                </span>
              </h1>

              <p className="text-base lg:text-lg text-gray-400 leading-[1.7] mb-14 max-w-2xl font-light">
                Halyse Technologies partners with enterprise leaders to modernize
                applications, integrate systems, harness data and AI, and run
                mission-critical workloads on Microsoft Azure, Power Platform, Dynamics
                365, and Quickbase — across the United States, Australia, and the Middle
                East.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-2xl shadow-blue-900/50 group text-sm"
                >
                  Schedule a Discovery Session
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2.5 text-white font-semibold px-8 py-4 rounded-lg border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-200 text-sm"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>

          {/* Tech marquee */}
          <div className="relative border-y border-white/[0.08] bg-gradient-to-r from-blue-950/40 via-blue-900/20 to-blue-950/40 backdrop-blur-sm py-5 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" />
            <div className="flex animate-marquee whitespace-nowrap">
              {[...techMarquee, ...techMarquee].map((tech, i) => (
                <span
                  key={i}
                  className="mx-8 text-sm font-semibold text-blue-100 tracking-wide flex items-center gap-4"
                >
                  {tech}
                  <span className="text-cyan-400 text-lg">◆</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          2. CREDIBILITY RIBBON — Immediate trust signal
          Compact horizontal strip. Distinct from /services trust strip
          which uses vertical stat blocks.
      ════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-400 shrink-0">
              Trusted by enterprise leaders
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Award size={16} className="text-blue-700" />
                <span className="font-semibold text-gray-900">Microsoft Partner</span>
              </div>
              <span className="text-gray-300 hidden md:inline">·</span>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-blue-700" />
                <span className="text-gray-700">
                  <span className="font-bold text-gray-900">8+</span> years delivering
                </span>
              </div>
              <span className="text-gray-300 hidden md:inline">·</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-700" />
                <span className="text-gray-700">
                  <span className="font-bold text-gray-900">50+</span> enterprise projects
                </span>
              </div>
              <span className="text-gray-300 hidden md:inline">·</span>
              <div className="flex items-center gap-2">
                <Globe2 size={16} className="text-blue-700" />
                <span className="text-gray-700">US · Australia · Middle East</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          3. OUTCOME PILLARS — Three outcomes. One partner.
          Refined typography, restrained numbers, stronger left rail.
      ════════════════════════════════════════════════════════ */}
      <section className="py-28 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header — sits on the left rail so header + rows share a vertical axis */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 mb-16 lg:mb-20">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold text-blue-600 tracking-[0.2em] uppercase">
                How We Create Value
              </p>
            </div>
            <div className="lg:col-span-8">
              <h2 className="font-serif text-[48px] sm:text-[56px] lg:text-[64px] font-semibold text-gray-900 leading-[1.02] tracking-tight max-w-3xl">
                Three outcomes.{" "}
                <span className="text-gray-400">One partner.</span>
              </h2>
            </div>
          </div>

          {/* Outcome rows */}
          <div className="divide-y divide-gray-100 border-t border-gray-100">
            {outcomePillars.map((p) => (
              <div
                key={p.number}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 py-14 lg:py-20"
              >
                {/* Left rail — number + label, tightly grouped */}
                <div className="lg:col-span-4">
                  <div className="flex items-baseline gap-5">
                    <span className="font-serif text-5xl lg:text-6xl font-light text-gray-300 leading-none tabular-nums">
                      {p.number}
                    </span>
                    <span className="text-xs font-semibold text-gray-900 tracking-[0.2em] uppercase">
                      {p.label}
                    </span>
                  </div>
                </div>

                {/* Right — title + body */}
                <div className="lg:col-span-8">
                  <h3 className="font-serif text-[28px] lg:text-[36px] font-semibold text-gray-900 leading-[1.15] tracking-tight mb-5 max-w-2xl">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 text-base lg:text-lg leading-[1.65] max-w-2xl">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          4. CAPABILITY PREVIEW — Six pillars, minimal teaser
          Radically compact vs /services. Teaser only, no descriptions.
          Fulfills requirement to keep six pillars, without duplication.
      ════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-bold text-blue-600 tracking-[0.2em] uppercase mb-4">
                Capabilities
              </span>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.1]">
                Six service pillars that power modern enterprises.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 group whitespace-nowrap"
            >
              Explore all six services
              <ArrowUpRight
                size={15}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {allServices.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-center gap-4 bg-white rounded-xl p-5 border border-gray-100 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 shrink-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-md shadow-blue-100">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-gray-900 leading-snug truncate group-hover:text-blue-700 transition-colors">
                      {s.title}
                    </h3>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-gray-300 group-hover:text-blue-600 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          5. SIGNATURE OFFERINGS — Home-only conversion mechanism
          Fixed-scope, low-risk entry points. Removed from /services.
      ════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-14">
            <span className="inline-block text-xs font-bold text-blue-300 tracking-[0.2em] uppercase mb-5">
              Signature Offerings
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-[1.1] mb-6">
              Fixed-scope engagements to{" "}
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                start with confidence.
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl font-light">
              Structured consulting sprints designed to validate direction, reduce delivery risk,
              and accelerate outcomes — before committing to enterprise-scale investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {signatureOfferings.map((o) => {
              const Icon = o.icon;
              return (
                <div
                  key={o.title}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] hover:border-blue-400/30 transition-all flex flex-col"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Icon size={22} className="text-white" />
                    </div>
                    <span className="text-[11px] font-semibold text-blue-200 bg-white/[0.06] border border-white/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {o.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">{o.title}</h3>
                  <p className="text-sm italic text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 mb-5 leading-relaxed">
                    {o.tagline}
                  </p>
                  <div className="border-t border-white/10 pt-4 mt-auto">
                    <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-3">
                      What you&apos;ll achieve
                    </div>
                    <ul className="space-y-2">
                      {o.outcomes.map((out) => (
                        <li
                          key={out}
                          className="flex items-start gap-2 text-xs text-gray-300 leading-relaxed"
                        >
                          <CheckCircle2
                            size={13}
                            className="text-cyan-400 mt-0.5 shrink-0"
                          />
                          {out}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-blue-800 hover:bg-blue-50 text-sm font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-2xl shadow-blue-900/50 group"
            >
              Talk to us about your priorities
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          6. PROOF — Featured case studies with metrics
          Magazine-style editorial layout. Nothing like this on /services.
      ════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-bold text-blue-600 tracking-[0.2em] uppercase mb-5">
                Proof
              </span>
              <h2 className="font-serif text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05]">
                Real outcomes. Real{" "}
                <span className="italic font-light text-blue-600">engagements.</span>
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 group whitespace-nowrap"
            >
              View all case studies
              <ArrowUpRight
                size={15}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCaseStudies.map((c, i) => {
              const Icon = c.icon;
              return (
                <Link
                  key={c.title}
                  href="/case-studies"
                  className="group bg-white rounded-3xl border border-gray-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Header — dark gradient panel */}
                  <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-gray-950 p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                          <Icon size={18} className="text-blue-200" />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold tracking-[0.2em] text-blue-300 uppercase">
                            {String(i + 1).padStart(2, "0")} · {c.label}
                          </div>
                          <div className="text-xs text-blue-100/80 mt-0.5">
                            {c.industry} · {c.duration}
                          </div>
                        </div>
                      </div>
                      <h3 className="font-serif text-2xl lg:text-3xl font-bold leading-tight mb-3">
                        {c.title}
                      </h3>
                      <p className="text-sm text-blue-100/90 leading-relaxed italic font-light">
                        {c.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Body — summary + metrics + stack */}
                  <div className="p-8 flex-1 flex flex-col">
                    <p className="text-sm text-gray-600 leading-relaxed mb-7">{c.summary}</p>

                    {/* Metrics strip */}
                    <div className="grid grid-cols-3 gap-4 mb-7 py-5 border-y border-gray-100">
                      {c.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="text-xl lg:text-2xl font-black text-blue-700 mb-1 leading-none">
                            {m.value}
                          </div>
                          <div className="text-[10px] text-gray-500 uppercase tracking-wider leading-tight">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {c.stack.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <p className="text-center text-xs text-gray-400 mt-8 max-w-xl mx-auto leading-relaxed">
            Client names, identifying details, and proprietary metrics have been omitted to protect
            confidentiality. Relevant references available privately under NDA.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          7. WHY HALYSE — Compressed to 3 editorial statements
          Horizontal editorial layout, NOT cards. Distinct DNA.
      ════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-gray-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-700/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="inline-block text-xs font-bold text-blue-400 tracking-[0.2em] uppercase mb-5">
              Why Halyse
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-[1.1]">
              What enterprise leaders get{" "}
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                working with us.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-14">
            {whyHalyse.map((w, i) => {
              const Icon = w.icon;
              return (
                <div key={w.title} className="relative">
                  <div className="text-blue-400/60 text-[11px] font-bold tracking-[0.2em] uppercase mb-5">
                    Reason 0{i + 1}
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/[0.1] flex items-center justify-center mb-6">
                    <Icon size={18} className="text-blue-300" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold leading-snug mb-4">{w.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed font-light">{w.body}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <p className="text-gray-500 text-sm max-w-xl">
              A closer look at how we work — our engagement models, delivery framework, and
              approach to enterprise-grade governance.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-white transition-colors group whitespace-nowrap"
            >
              About Halyse
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          8. INSIGHTS — Editorial credibility (kept, lightly refined)
      ════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-bold text-blue-600 tracking-[0.2em] uppercase mb-5">
                Insights
              </span>
              <h2 className="font-serif text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05]">
                Perspectives &amp;{" "}
                <span className="italic font-light text-blue-600">thinking.</span>
              </h2>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 group whitespace-nowrap"
            >
              View all insights
              <ArrowUpRight
                size={15}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((insight, i) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className={`group rounded-3xl overflow-hidden border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 block ${
                  i === 0
                    ? "border-transparent bg-gradient-to-br from-blue-700 via-blue-800 to-blue-950 text-white shadow-2xl shadow-blue-200"
                    : "border-gray-200 bg-white hover:border-blue-200 hover:shadow-blue-100/50"
                }`}
              >
                <div className="p-8 lg:p-10">
                  <div className="mb-6">
                    <span
                      className={`text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full ${
                        i === 0 ? "bg-white/15 text-blue-100" : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      {insight.category}
                    </span>
                  </div>
                  <h3
                    className={`font-serif font-bold leading-snug mb-5 text-xl ${
                      i === 0
                        ? "text-white"
                        : "text-gray-900 group-hover:text-blue-700"
                    } transition-colors`}
                  >
                    {insight.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-8 ${
                      i === 0 ? "text-blue-100/80" : "text-gray-500"
                    }`}
                  >
                    {insight.summary}
                  </p>
                  <div
                    className={`flex items-center justify-between text-xs font-semibold pt-5 border-t ${
                      i === 0
                        ? "border-white/15 text-blue-200"
                        : "border-gray-100 text-gray-400"
                    }`}
                  >
                    <span>{insight.readTime}</span>
                    <ArrowUpRight
                      size={16}
                      className={`${
                        i === 0
                          ? "text-blue-200"
                          : "text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      } transition-all`}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          9. FINAL CTA — Outcome-focused close
      ════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gray-950 rounded-[2rem] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[80px]" />
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />
            </div>

            <div className="relative z-10 px-8 py-20 sm:px-16 lg:px-24">
              <div className="max-w-3xl">
                <span className="inline-block text-xs font-bold text-blue-400 tracking-[0.2em] uppercase mb-6">
                  Let&apos;s Talk
                </span>
                <h2 className="font-serif text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-8">
                  Let&apos;s turn your next initiative into{" "}
                  <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                    measurable business impact.
                  </span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl font-light">
                  Whether you&apos;re modernizing applications, strengthening your cloud
                  platform, unlocking data, or piloting AI — our structured consulting
                  engagements provide a low-risk path from strategy to measurable results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-2xl shadow-blue-900/50 group text-sm"
                  >
                    Schedule a Discovery Session
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2.5 text-white font-semibold px-8 py-4 rounded-lg border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-200 text-sm"
                  >
                    Talk to Our Team
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
