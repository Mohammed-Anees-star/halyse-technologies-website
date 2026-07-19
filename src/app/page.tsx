"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Layers,
  GitMerge,
  Cloud,
  Database,
  AppWindow,
  LifeBuoy,
} from "lucide-react";
import { insights as allInsights } from "@/data/insights";

// ─── DATA ──────────────────────────────────────────────────────────────────

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "8+", label: "Years of Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Post-Deployment Support" },
];

// Six approved services (source of truth: src/data/services.ts).
// Homepage shows condensed cards with the approved tagline + a short teaser
// that links to the dedicated service page.
const services = [
  {
    id: "enterprise-applications-modernization",
    icon: Layers,
    label: "Enterprise Applications & Modernization",
    headline: "Designing and modernizing business-critical applications for scale.",
    body: "We modernize legacy systems, develop custom business applications, and improve existing platforms — enhancing performance, usability, security, and scalability through modern architecture and cloud-based technologies.",
    tech: ["ASP.NET Core", "Azure", "React", "Cloud-Native"],
    href: "/services/enterprise-applications-modernization",
  },
  {
    id: "integration-apis-automation",
    icon: GitMerge,
    label: "Integration, APIs & Automation",
    headline: "Connecting systems, automating processes, and enabling seamless data flow.",
    body: "We design and implement API-led integration, workflow automation, and event-driven solutions — reducing manual effort, improving interoperability, and streamlining operations across enterprise environments.",
    tech: ["Azure API Mgmt", "Logic Apps", "Power Automate", "Service Bus"],
    href: "/services/integration-apis-automation",
  },
  {
    id: "azure-cloud-platform-engineering",
    icon: Cloud,
    label: "Azure Cloud & Platform Engineering",
    headline: "Building secure, scalable cloud foundations for modern applications.",
    body: "We design, deploy, and optimize Azure-based cloud platforms — modernizing environments, migrating workloads, and implementing Azure services that improve scalability, resilience, and operational efficiency.",
    tech: ["Azure", "AKS", "App Service", "Well-Architected"],
    href: "/services/azure-cloud-platform-engineering",
  },
  {
    id: "data-analytics-ai",
    icon: Database,
    label: "Data Engineering, Analytics & AI",
    headline: "Turning enterprise data into insight, intelligence, and better decisions.",
    body: "We deliver modern data engineering, business intelligence, analytics, and AI solutions that unify data, strengthen governance, and create trusted foundations for insight and innovation across the enterprise.",
    tech: ["Microsoft Fabric", "Power BI", "Azure OpenAI", "Synapse"],
    href: "/services/data-analytics-ai",
  },
  {
    id: "business-applications-low-code-platforms",
    icon: AppWindow,
    label: "Business Applications & Low-Code Platforms",
    headline: "Delivering agile business applications on trusted enterprise platforms.",
    body: "We design, implement, and extend business applications on Microsoft Power Platform, Dynamics 365, and Quickbase — delivering faster than traditional custom development while maintaining enterprise governance.",
    tech: ["Power Platform", "Dynamics 365", "Dataverse", "Quickbase"],
    href: "/services/business-applications-low-code-platforms",
  },
  {
    id: "managed-services-application-support",
    icon: LifeBuoy,
    label: "Managed Services & Application Support",
    headline: "Keeping enterprise applications secure, stable, and continuously improving.",
    body: "We support, maintain, and optimize business-critical applications post go-live — through monitoring, incident resolution, performance optimization, proactive maintenance, and ongoing enhancement.",
    tech: ["24×7 Support", "SLAs", "AMS", "FinOps"],
    href: "/services/managed-services-application-support",
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

const insights = allInsights.slice(0, 3);

const techMarquee = [
  "Microsoft Azure",
  "Power Platform",
  "Dynamics 365",
  "Quickbase",
  "ASP.NET Core",
  "Power BI",
  "Azure OpenAI",
  "Copilot Studio",
  "Azure Functions",
  "Logic Apps",
];

// ─── PAGE ──────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════
          HERO — Infosys-inspired cinematic
      ════════════════════════════════════════════════════════ */}
      <section className="relative bg-gray-950 text-white overflow-hidden min-h-screen flex flex-col">
        {/* Animated gradient orbs */}
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

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 lg:pt-44 pb-20 flex-1 flex flex-col justify-center">
            <div className="max-w-5xl">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-3 mb-10 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.1] backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-blue-200 text-xs font-semibold tracking-wider uppercase">
                  Enterprise AI &amp; Cloud Consulting
                </span>
              </div>

              {/* Massive serif-style headline */}
              <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tight mb-10">
                Transform
                <br />
                how your <br />
                business{" "}
                <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400">
                  operates.
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-400 leading-relaxed mb-12 max-w-2xl font-light">
                Halyse Technologies delivers enterprise-grade AI, Data, and Automation
                solutions built on Microsoft Azure, Power Platform, Dynamics 365, and
                Quickbase — unlocking measurable business value for organizations across
                the US, Australia, and the Middle East.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-20">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-2xl shadow-blue-900/50 group text-sm"
                >
                  Book a Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2.5 text-white font-semibold px-8 py-4 rounded-lg border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-200 text-sm"
                >
                  Explore Solutions
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
                <span key={i} className="mx-8 text-sm font-semibold text-blue-100 tracking-wide flex items-center gap-4">
                  {tech}
                  <span className="text-cyan-400 text-lg">◆</span>
                </span>
              ))}
            </div>
          </div>

          {/* Stats bar */}
          <div className="bg-white/[0.03] backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                  <div key={stat.label} className={`${i > 0 ? "lg:border-l lg:border-white/10 lg:pl-6" : ""}`}>
                    <div className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs lg:text-sm text-gray-500 mt-2 font-medium tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SERVICES — Card grid (Infosys-style)
      ════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-block text-xs font-bold text-blue-600 tracking-[0.2em] uppercase mb-5">
              What We Do
            </span>
            <h2 className="font-serif text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05] mb-6">
              Enterprise technology,{" "}
              <span className="italic font-light text-blue-600">delivered end-to-end.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
              Six integrated service lines that help organizations design, build, integrate,
              modernize, and run business-critical technology across the Microsoft ecosystem.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <Link
                  key={svc.id}
                  href={svc.href}
                  className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-100/50 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/40 group-hover:to-transparent transition-all duration-500" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <Icon size={24} className="text-white" />
                    </div>

                    {/* Label */}
                    <p className="text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-2">
                      {svc.label}
                    </p>

                    {/* Headline */}
                    <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3 leading-tight">
                      {svc.headline}
                    </h3>

                    {/* Body */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{svc.body}</p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {svc.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-700 group-hover:gap-2.5 transition-all">
                      Learn more
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 bg-gray-950 hover:bg-blue-700 text-white text-sm font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-gray-200 hover:shadow-blue-200 hover:scale-105 group"
            >
              Explore All Services
              <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                <ArrowRight size={14} className="text-white group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          WHY HALYSE — Dark section
      ════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-gray-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-700/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div className="lg:sticky lg:top-32">
              <span className="inline-block text-xs font-bold text-blue-400 tracking-[0.2em] uppercase mb-6">
                Why Halyse
              </span>
              <h2 className="font-serif text-5xl lg:text-6xl font-bold leading-[1.05] mb-8">
                Built for enterprise.<br />
                Focused on{" "}
                <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                  outcomes.
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md font-light">
                We combine deep technical expertise across the Microsoft ecosystem with a
                business-first mindset — delivering solutions that move the needle, not just
                go live.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 text-sm shadow-lg shadow-blue-900/50 group"
              >
                About Halyse
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right — differentiators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  num: "01",
                  title: "Microsoft Partner",
                  desc: "Certified expertise across Azure, Power Platform & Dynamics 365.",
                },
                {
                  num: "02",
                  title: "Enterprise Architecture",
                  desc: "Scalable, secure, standards-aligned solutions built to last.",
                },
                {
                  num: "03",
                  title: "End-to-End Ownership",
                  desc: "Discovery through deployment and beyond — we own the lifecycle.",
                },
                {
                  num: "04",
                  title: "Measurable ROI",
                  desc: "Every engagement anchored to outcomes — cost, speed, accuracy.",
                },
                {
                  num: "05",
                  title: "Global Coverage",
                  desc: "US, Australia, UAE, Middle East — follow-the-sun delivery.",
                },
                {
                  num: "06",
                  title: "8+ Years Delivery",
                  desc: "Deep experience across manufacturing, healthcare, finance, construction.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-7 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-blue-500/40 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-3 right-4 font-serif text-5xl font-bold text-white/[0.08] group-hover:text-blue-400/20 leading-none pointer-events-none transition-colors italic">
                    {item.num}
                  </div>
                  <div className="relative z-10">
                    <div className="text-blue-400 text-[11px] font-bold tracking-[0.2em] mb-5">
                      {item.num}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-white mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          INDUSTRIES
      ════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-bold text-blue-600 tracking-[0.2em] uppercase mb-5">
                Industries
              </span>
              <h2 className="font-serif text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05]">
                Deep domain{" "}
                <span className="italic font-light text-blue-600">expertise.</span>
              </h2>
            </div>
            <p className="text-gray-500 leading-relaxed max-w-md lg:text-right text-base">
              We apply our technical capabilities within the specific context of your
              industry — understanding its data, its processes, and its regulatory landscape.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, i) => (
              <div
                key={industry}
                className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden"
              >
                <div className="absolute top-1 right-3 font-serif text-6xl font-bold text-blue-100 group-hover:text-blue-200 leading-none pointer-events-none transition-colors italic">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="relative z-10 pt-16">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-base font-bold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug">
                      {industry}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-gray-300 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link
              href="/industries"
              className="inline-flex items-center gap-3 bg-white hover:bg-blue-700 text-gray-900 hover:text-white text-sm font-semibold px-8 py-4 rounded-full border border-gray-200 hover:border-blue-700 transition-all duration-300 shadow-lg shadow-gray-200/50 hover:shadow-blue-200 hover:scale-105 group"
            >
              See industry solutions
              <span className="w-7 h-7 rounded-full bg-blue-50 group-hover:bg-white/15 flex items-center justify-center transition-colors">
                <ArrowRight size={14} className="text-blue-700 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          INSIGHTS
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
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
                        i === 0
                          ? "bg-white/15 text-blue-100"
                          : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      {insight.category}
                    </span>
                  </div>
                  <h3
                    className={`font-serif font-bold leading-snug mb-5 text-xl ${
                      i === 0 ? "text-white" : "text-gray-900 group-hover:text-blue-700"
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
                      i === 0 ? "border-white/15 text-blue-200" : "border-gray-100 text-gray-400"
                    }`}
                  >
                    <span>{insight.readTime}</span>
                    <ArrowUpRight
                      size={16}
                      className={`${
                        i === 0 ? "text-blue-200" : "text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      } transition-all`}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link
              href="/insights"
              className="inline-flex items-center gap-3 bg-gray-950 hover:bg-blue-700 text-white text-sm font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-gray-200 hover:shadow-blue-200 hover:scale-105 group"
            >
              Read all insights
              <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                <ArrowRight size={14} className="text-white group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          CTA — Final
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
                  Ready to start?
                </span>
                <h2 className="font-serif text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-8">
                  Let&apos;s build something{" "}
                  <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                    that lasts.
                  </span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl font-light">
                  Tell us about your challenge. We&apos;ll come back with a clear perspective on the
                  opportunity, a recommended approach, and an honest assessment of fit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-2xl shadow-blue-900/50 group text-sm"
                  >
                    Book a Consultation
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/solutions"
                    className="inline-flex items-center justify-center gap-2.5 text-white font-semibold px-8 py-4 rounded-lg border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-200 text-sm"
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
