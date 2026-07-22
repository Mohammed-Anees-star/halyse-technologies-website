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
          Simplified: centered, no label prefix, no dot separators —
          just four credentials in a clean rhythm. Less visual noise
          before the story starts.
      ════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-2.5 text-[13px]">
            <div className="flex items-center gap-2 text-gray-600">
              <Award size={14} className="text-gray-400" strokeWidth={1.75} />
              <span>Microsoft Partner</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock size={14} className="text-gray-400" strokeWidth={1.75} />
              <span>
                <span className="font-semibold text-gray-800">8+</span> years delivering
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <CheckCircle2 size={14} className="text-gray-400" strokeWidth={1.75} />
              <span>
                <span className="font-semibold text-gray-800">50+</span> enterprise projects
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Globe2 size={14} className="text-gray-400" strokeWidth={1.75} />
              <span>US · Australia · Middle East</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          3. OUTCOMES + CAPABILITIES — Unified section
          One story, two parts:
            Part A — Three outcomes we create
            Bridge — one sentence naming capabilities as the answer
            Part B — Six capabilities that make those outcomes possible

          Kept on a single white background (no gray-50 break) so both
          parts feel like chapters of one narrative, not stacked modules.
      ════════════════════════════════════════════════════════ */}
      <section className="pt-28 pb-24 lg:pt-36 lg:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── PART A: OUTCOMES ─────────────────────────────── */}

          {/* Section header — number/eyebrow lives on the left rail so
              the header and every outcome row share a single vertical
              axis. */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 mb-20 lg:mb-28">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold text-blue-600 tracking-[0.2em] uppercase">
                How We Create Value
              </p>
            </div>
            <div className="lg:col-span-8">
              <h2 className="font-serif text-[44px] sm:text-[52px] lg:text-[60px] font-semibold text-gray-900 leading-[1.04] tracking-tight max-w-3xl">
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
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 py-12 lg:py-16"
              >
                {/* Left rail — number + label share a baseline; the
                    lg:pt-1.5 optically seats the light gray number against
                    the h3 title's cap-height on the right column. */}
                <div className="lg:col-span-4 lg:pt-1.5">
                  <div className="flex items-baseline gap-5">
                    <span className="font-serif text-5xl lg:text-[56px] font-light text-gray-300 leading-none tabular-nums">
                      {p.number}
                    </span>
                    <span className="text-[11px] font-semibold text-gray-900 tracking-[0.2em] uppercase">
                      {p.label}
                    </span>
                  </div>
                </div>

                {/* Right — title + body */}
                <div className="lg:col-span-8">
                  <h3 className="font-serif text-[26px] lg:text-[32px] font-semibold text-gray-900 leading-[1.2] tracking-tight mb-4 max-w-2xl">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 text-base lg:text-lg leading-[1.65] max-w-2xl">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── TRANSITION BRIDGE ────────────────────────────
              A single editorial sentence that connects the outcomes
              above (Part A) to the capabilities below (Part B).
              Uses the same left-rail axis so it reads as part of
              the same narrative, not a separate section header. */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 pt-16 lg:pt-20 border-t border-gray-100">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold text-blue-600 tracking-[0.2em] uppercase">
                What Makes Them Possible
              </p>
            </div>
            <div className="lg:col-span-8">
              <p className="font-serif text-[24px] lg:text-[30px] text-gray-900 leading-[1.25] tracking-tight max-w-3xl">
                Six capabilities across the Microsoft ecosystem —
                <span className="text-gray-400"> the foundation behind every outcome.</span>
              </p>
            </div>
          </div>

          {/* ── PART B: CAPABILITIES ─────────────────────────
              Compressed preview — no descriptions, minimal weight.
              Grid is left-aligned to the same 8-column content column
              used by the outcomes above, reinforcing the shared axis. */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 mt-10 lg:mt-14">
            <div className="hidden lg:block lg:col-span-4">
              {/* Empty left rail — preserves shared axis alignment */}
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {allServices.map((s) => {
                  const Icon = s.icon;
                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="group flex items-center gap-3.5 py-3.5 px-4 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200"
                    >
                      <div className="w-8 h-8 shrink-0 bg-gray-900 rounded-md flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                        <Icon size={15} className="text-white" />
                      </div>
                      <span className="flex-1 min-w-0 text-[13px] font-semibold text-gray-900 leading-snug truncate">
                        {s.title}
                      </span>
                      <ArrowUpRight
                        size={14}
                        className="text-gray-300 group-hover:text-blue-600 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                      />
                    </Link>
                  );
                })}
              </div>

              {/* Handoff to Services page */}
              <div className="mt-10">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 group"
                >
                  Explore all six services in detail
                  <ArrowUpRight
                    size={15}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          5. SIGNATURE OFFERINGS — Home-only conversion mechanism
          Light treatment (moved off dark) so the page has fewer
          dark breaks. Uses a subtle blue-tint gradient background +
          strong card shadows to signal 'premium conversion moment'
          without going dark like Hero/Why Halyse/Final CTA.
      ════════════════════════════════════════════════════════ */}
      <section className="py-28 lg:py-32 bg-gradient-to-b from-blue-50/40 via-white to-white relative overflow-hidden border-t border-b border-gray-100">
        {/* Very soft ambient tint — restrained on light background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-15%] w-[700px] h-[700px] bg-blue-200/20 rounded-full blur-[140px]" />
          <div className="absolute bottom-[-25%] left-[-15%] w-[500px] h-[500px] bg-cyan-100/25 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-14">
            <span className="inline-block text-xs font-semibold text-blue-700 tracking-[0.2em] uppercase mb-5">
              Signature Offerings
            </span>
            <h2 className="font-serif text-[40px] sm:text-5xl lg:text-[56px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-6">
              Fixed-scope engagements to{" "}
              <span className="italic font-light text-blue-700">
                start with confidence.
              </span>
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-[1.65] max-w-2xl font-light">
              Structured consulting sprints designed to validate direction, reduce delivery risk,
              and accelerate outcomes — before committing to enterprise-scale investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {signatureOfferings.map((o) => {
              const Icon = o.icon;
              return (
                <div
                  key={o.title}
                  className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100/60 hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-md shadow-blue-100 group-hover:scale-105 transition-transform">
                      <Icon size={22} className="text-white" />
                    </div>
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                      {o.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{o.title}</h3>
                  <p className="text-sm italic text-blue-700 mb-5 leading-relaxed font-light">
                    {o.tagline}
                  </p>
                  <div className="border-t border-gray-100 pt-4 mt-auto">
                    <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-3">
                      What you&apos;ll achieve
                    </div>
                    <ul className="space-y-2">
                      {o.outcomes.map((out) => (
                        <li
                          key={out}
                          className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed"
                        >
                          <CheckCircle2
                            size={13}
                            className="text-blue-600 mt-0.5 shrink-0"
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
              className="inline-flex items-center gap-2.5 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-xl shadow-blue-200 group"
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
          8. INSIGHTS — Editorial credibility
          Three visually consistent cards (no mixed dark/light).
          Uniform card treatment, generous internal padding, wider
          gutters, prominent 'View all insights' pill CTA.
      ════════════════════════════════════════════════════════ */}
      <section className="py-28 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 lg:mb-16">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-semibold text-blue-600 tracking-[0.2em] uppercase mb-5">
                Insights
              </span>
              <h2 className="font-serif text-[40px] sm:text-5xl lg:text-[56px] font-semibold text-gray-900 leading-[1.05] tracking-tight">
                Perspectives &amp;{" "}
                <span className="text-gray-400">thinking.</span>
              </h2>
            </div>

            {/* Pill CTA — more visually prominent than the previous text link */}
            <Link
              href="/insights"
              className="inline-flex items-center gap-2.5 self-start md:self-auto px-6 py-3 rounded-full border border-gray-200 bg-white hover:bg-blue-700 hover:border-blue-700 hover:text-white text-sm font-semibold text-gray-900 transition-all duration-200 group whitespace-nowrap shadow-sm hover:shadow-md hover:shadow-blue-200"
            >
              View all insights
              <ArrowUpRight
                size={15}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </div>

          {/* Uniform 3-card grid — same treatment, no mixed dark/light */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {insights.map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-1"
              >
                <div className="p-8 lg:p-10 flex-1 flex flex-col">
                  {/* Category chip */}
                  <div className="mb-7">
                    <span className="text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full bg-blue-50 text-blue-700">
                      {insight.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl lg:text-[22px] font-semibold leading-[1.3] tracking-tight text-gray-900 group-hover:text-blue-700 transition-colors mb-4">
                    {insight.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-gray-600 leading-[1.65] mb-8 flex-1">
                    {insight.summary}
                  </p>

                  {/* Footer meta row */}
                  <div className="flex items-center justify-between text-xs font-medium pt-5 border-t border-gray-100 text-gray-500 mt-auto">
                    <span className="tracking-wide">{insight.readTime}</span>
                    <ArrowUpRight
                      size={16}
                      className="text-gray-300 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
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
          Two-column composition inside the rounded card so the right
          side is intentionally filled (not empty). Left = message +
          CTAs. Right = supporting trust signals that answer 'what
          happens if I click?' — a technique used by top enterprise
          consultancies (Deloitte, McKinsey, Accenture).
      ════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-28 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gray-950 rounded-[2rem] overflow-hidden">
            {/* Ambient background */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px]" />
              <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]" />
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />
            </div>

            {/* Content — increased internal padding on all sides */}
            <div className="relative z-10 px-8 py-24 sm:px-14 sm:py-28 lg:px-20 lg:py-32 xl:px-24">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                {/* ── LEFT — Message + CTAs (col 7/12) ────────── */}
                <div className="lg:col-span-7">
                  <span className="inline-block text-xs font-semibold text-blue-400 tracking-[0.2em] uppercase mb-6">
                    Let&apos;s Talk
                  </span>
                  <h2 className="font-serif text-[42px] sm:text-5xl lg:text-[56px] font-semibold text-white leading-[1.05] tracking-tight mb-7">
                    Let&apos;s turn your next initiative into{" "}
                    <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                      measurable business impact.
                    </span>
                  </h2>
                  <p className="text-gray-400 text-base lg:text-lg leading-[1.7] mb-10 max-w-xl font-light">
                    Whether you&apos;re modernizing applications, strengthening your cloud
                    platform, unlocking data, or piloting AI — our structured consulting
                    engagements provide a low-risk path from strategy to measurable results.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-4 rounded-lg transition-all duration-200 shadow-2xl shadow-blue-900/50 group text-sm"
                    >
                      Schedule a Discovery Session
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2.5 text-white font-semibold px-7 py-4 rounded-lg border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-200 text-sm"
                    >
                      Talk to Our Team
                    </Link>
                  </div>
                </div>

                {/* ── RIGHT — Supporting trust signals (col 5/12) ─
                    Answers "what happens if I click?" — no fluff,
                    just three concrete commitments that lower the
                    barrier to conversion. */}
                <div className="lg:col-span-5">
                  <div className="lg:border-l lg:border-white/10 lg:pl-12">
                    <p className="text-[11px] font-semibold text-blue-400 tracking-[0.2em] uppercase mb-8">
                      What to expect
                    </p>
                    <ul className="space-y-6">
                      <li className="flex items-start gap-4">
                        <div className="shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                          <Clock size={14} className="text-blue-300" strokeWidth={1.75} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white leading-snug mb-1">
                            30-minute discovery call
                          </p>
                          <p className="text-[13px] text-gray-500 leading-relaxed">
                            A focused conversation about your priorities and constraints.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                          <CheckCircle2 size={14} className="text-blue-300" strokeWidth={1.75} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white leading-snug mb-1">
                            Response within 1 business day
                          </p>
                          <p className="text-[13px] text-gray-500 leading-relaxed">
                            You&apos;ll hear back from a senior consultant, not a form-filler.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                          <Award size={14} className="text-blue-300" strokeWidth={1.75} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white leading-snug mb-1">
                            No obligation, no sales pressure
                          </p>
                          <p className="text-[13px] text-gray-500 leading-relaxed">
                            If we&apos;re not the right fit, we&apos;ll say so.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
