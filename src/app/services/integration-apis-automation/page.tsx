import type { Metadata } from "next";
import {
  CheckCircle2,
  AlertTriangle,
  Repeat,
  Layers,
  Workflow,
  Zap,
  ShieldCheck,
  Rocket,
  Users,
  Award,
  Scale,
  Gauge,
  Lock,
  TrendingUp,
  GitBranch,
  Cloud,
  Webhook,
  Network,
  Boxes,
  Cog,
} from "lucide-react";
import { getServiceBySlug } from "@/data/services";
import ServicePageHero from "@/components/ServicePageHero";
import RelatedServices from "@/components/RelatedServices";
import ServicePageCTA from "@/components/ServicePageCTA";
import SectionHeader from "@/components/SectionHeader";

const SLUG = "integration-apis-automation";
const service = getServiceBySlug(SLUG)!;

// ─── SEO ─────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `${service.title} | Halyse Technologies`,
  description:
    "Halyse designs and delivers API-led integration, workflow automation, and event-driven solutions on Microsoft Azure — connecting applications, streamlining processes, and enabling secure, reliable data flow across the enterprise.",
  alternates: { canonical: `/services/${SLUG}` },
  openGraph: {
    title: `${service.title} | Halyse Technologies`,
    description: service.tagline,
    type: "website",
    url: `/services/${SLUG}`,
  },
};

// ─── CONTENT ─────────────────────────────────────────────────────────────────

const overviewParagraphs = [
  "Enterprises rarely fail from a shortage of applications — they slow down because those applications don't talk to each other. When systems run in isolation, data lives in silos, teams patch gaps with manual work, and small process changes require weeks of rework.",
  "Halyse helps organizations design and implement modern integration and automation layers that connect applications, data, and business processes into one operational fabric. We build API-led integrations, event-driven flows, and workflow automations that reduce manual effort, improve interoperability, and give the business a foundation it can scale on.",
  "Every integration we design is built for the realities of enterprise operations — secure by default, observable end-to-end, and resilient enough to survive the platform changes that inevitably follow. The goal isn't just to move data between systems; it's to make the business operate as one connected whole.",
];

const challenges = [
  {
    icon: Boxes,
    title: "Systems that don't talk to each other",
    desc: "ERP, CRM, HR, finance, and operational platforms accumulated over years — each holding a piece of the truth, none of them sharing it in real time.",
  },
  {
    icon: Repeat,
    title: "Manual processes bridging the gaps",
    desc: "Teams keeping the business running by re-keying data between systems, running spreadsheets between departments, and firefighting when handoffs fail.",
  },
  {
    icon: AlertTriangle,
    title: "Brittle point-to-point integrations",
    desc: "A tangle of one-off connectors built over the years — hard to change, harder to observe, and impossible to reason about when things break at 2 a.m.",
  },
  {
    icon: Gauge,
    title: "Slow processes and long cycle times",
    desc: "Approvals, onboarding, order-to-cash, and support workflows that take days or weeks — because the process crosses systems that were never designed to work together.",
  },
  {
    icon: Lock,
    title: "Compliance and audit exposure",
    desc: "Integrations that were built quickly and never revisited — with unclear data flows, weak access controls, and no traceability when auditors ask for evidence.",
  },
  {
    icon: Scale,
    title: "Integration complexity that outgrows the business",
    desc: "As transaction volumes and system counts rise, the integration layer becomes the bottleneck — and every new initiative starts with 'first we need to connect this to…'",
  },
];

const capabilities = [
  {
    title: "API-Led Integration Architecture",
    desc: "Design and implementation of modern integration architectures — API gateways, service layers, canonical data models, and reusable APIs that decouple systems and enable governed reuse across the enterprise.",
  },
  {
    title: "Enterprise Application Integration",
    desc: "Real-time and batch integration between ERP, CRM, HR, finance, and operational systems — using Azure Integration Services, Logic Apps, Service Bus, and Power Automate.",
  },
  {
    title: "Event-Driven & Real-Time Integrations",
    desc: "Event-driven architectures using Azure Event Grid, Event Hubs, and Service Bus — enabling near real-time data flow, notifications, and reactive workflows across systems.",
  },
  {
    title: "Business Process Automation",
    desc: "End-to-end workflow automation across departments — approvals, onboarding, procurement, service requests — built on Power Automate, Logic Apps, and Dataverse with governance built in.",
  },
  {
    title: "API Design, Management & Security",
    desc: "REST and event-based API design, versioning, throttling, quotas, and secure exposure through Azure API Management — with authentication, authorization, and full observability.",
  },
  {
    title: "Legacy System Bridging & Modernization",
    desc: "Wrapping legacy systems with modern APIs, adapting them to event-driven architectures, and progressively modernizing integrations without disrupting the business.",
  },
  {
    title: "Data Integration & Synchronization",
    desc: "Reliable data movement between systems — batch, streaming, and change-data-capture — with schema management, transformation, and reconciliation built in.",
  },
  {
    title: "Integration Observability & Governance",
    desc: "Monitoring, alerting, and audit-ready logging across integrations — using Azure Monitor, Application Insights, and a central control plane so the integration estate is observable end-to-end.",
  },
];

const technologies = [
  {
    group: "Azure Integration Services",
    icon: Cloud,
    items: ["Azure API Management", "Logic Apps", "Service Bus", "Event Grid", "Event Hubs"],
  },
  {
    group: "Low-Code Automation",
    icon: Workflow,
    items: ["Power Automate", "Power Automate Desktop (RPA)", "Dataverse", "Power Apps"],
  },
  {
    group: "APIs & Messaging",
    icon: Webhook,
    items: ["REST APIs", "OpenAPI / Swagger", "Webhooks", "Async messaging", "GraphQL"],
  },
  {
    group: "Custom Integration",
    icon: Cog,
    items: ["ASP.NET Core", "Azure Functions", "TypeScript / Node.js", ".NET Workers"],
  },
  {
    group: "Observability & Security",
    icon: Network,
    items: ["Azure Monitor", "Application Insights", "Azure Key Vault", "Managed Identities"],
  },
];

const outcomes = [
  {
    icon: Zap,
    metric: "Faster Cycle Times",
    desc: "Processes that used to take days compress into minutes — approvals, onboarding, and cross-system workflows run without waiting on manual handoffs.",
  },
  {
    icon: Layers,
    metric: "Fewer Silos",
    desc: "Systems that were islands now share data automatically — giving every team, function, and dashboard a consistent view of the truth.",
  },
  {
    icon: TrendingUp,
    metric: "Higher Operational Productivity",
    desc: "Teams stop re-keying data between systems and start focusing on high-value work — measurable capacity returned to the business.",
  },
  {
    icon: ShieldCheck,
    metric: "Stronger Compliance Posture",
    desc: "Every integration is authenticated, authorized, and audit-ready — with logged, observable data flows that satisfy security and compliance requirements.",
  },
  {
    icon: Gauge,
    metric: "Better System Reliability",
    desc: "Brittle point-to-point connections replaced with resilient, retry-safe, event-driven patterns — fewer outages, cleaner recovery, less firefighting.",
  },
  {
    icon: Scale,
    metric: "Scalable Foundation",
    desc: "An integration layer that grows with the business — supporting new systems, new geographies, and new business models without a rewrite.",
  },
];

const whyHalyse = [
  {
    icon: Award,
    title: "Enterprise integration expertise",
    desc: "Deep, hands-on experience designing production-grade integration architectures across Microsoft Azure, Power Platform, Dynamics 365, and third-party enterprise systems.",
  },
  {
    icon: Users,
    title: "Microsoft ecosystem depth",
    desc: "As a Microsoft Partner, our teams work fluently across Azure Integration Services, Power Automate, and Dynamics 365 — with reference architectures ready to adapt to your environment.",
  },
  {
    icon: ShieldCheck,
    title: "Secure and observable by design",
    desc: "Every integration we deliver is authenticated, encrypted in transit, and observable end-to-end — meeting the security and audit standards enterprise environments demand.",
  },
  {
    icon: Rocket,
    title: "Focused on business outcomes",
    desc: "We design integrations against the outcomes they enable — faster cycle times, lower manual effort, cleaner data — not just the technical connections they create.",
  },
  {
    icon: Cog,
    title: "Senior-led delivery teams",
    desc: "Integration and automation architects with real-world enterprise experience — leading design decisions, code reviews, and the trade-offs that matter over the long term.",
  },
  {
    icon: GitBranch,
    title: "Long-term partnership",
    desc: "Integrations are living systems. We stay engaged through evolution, absorbing new systems, adapting patterns, and continuously improving the integration estate.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function IntegrationApisAutomationPage() {
  return (
    <>
      <ServicePageHero
        breadcrumb={service.title}
        icon={service.icon}
        title={service.title}
        tagline={service.tagline}
        intro="From dissolving system silos to automating business-critical workflows, Halyse designs and delivers integration and automation layers that connect the enterprise — reducing manual effort, improving interoperability, and giving the business a foundation it can scale on."
      />

      {/* 2. OVERVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase mb-4 text-blue-600">
                Service Overview
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                Connect the systems that run your business.
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Where integration meets business operations.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-5">
              {overviewParagraphs.map((p, i) => (
                <p key={i} className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. BUSINESS CHALLENGES */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Business Challenges We Solve"
            title="The friction that slows enterprises down."
            subtitle="These are the recurring signals that an integration and automation layer is overdue — the day-to-day realities we hear about in every conversation with enterprise operations, IT, and finance leaders."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {challenges.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/40 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-red-600" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{c.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CORE CAPABILITIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Core Capabilities"
            title="What Halyse delivers."
            subtitle="Our capabilities in Integration, APIs & Automation span the full stack — from strategic integration architecture through delivery, operations, and long-term evolution."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {capabilities.map((c, i) => (
              <div
                key={c.title}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-7 border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{c.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGIES & PLATFORMS */}
      <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            badge="Technologies & Platforms"
            title="Built on Azure Integration Services."
            subtitle="Deep, current expertise across the Microsoft integration and automation stack — plus the surrounding open technologies that make production-grade integrations possible."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {technologies.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.group}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-blue-400/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-blue-300 font-bold mb-3">
                    {t.group}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {t.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs bg-white/5 text-white/85 px-2.5 py-1 rounded-md border border-white/10 font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. BUSINESS OUTCOMES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Business Outcomes"
            title="Measurable operational impact."
            subtitle="Integration and automation are engineering disciplines — but the outcomes that matter are business ones: faster cycles, lower cost to serve, cleaner data, and a foundation the enterprise can scale on."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {outcomes.map((o) => {
              const Icon = o.icon;
              return (
                <div
                  key={o.metric}
                  className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-7 border border-blue-100 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-blue-100 flex items-center justify-center mb-5 shadow-sm">
                    <Icon size={22} className="text-blue-700" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{o.metric}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{o.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. WHY HALYSE */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Why Halyse"
            title="Why enterprise leaders choose Halyse for integration and automation."
            subtitle="The difference is not the tooling — it is how we combine Microsoft ecosystem depth with a delivery model designed for the realities of enterprise operations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyHalyse.map((w) => {
              const Icon = w.icon;
              return (
                <div
                  key={w.title}
                  className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/40 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-blue-700" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{w.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{w.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Supporting stats */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
              <div className="text-3xl font-black text-blue-700 mb-1">50+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
              <div className="text-3xl font-black text-blue-700 mb-1">8+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Years of Experience</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
              <div className="text-3xl font-black text-blue-700 mb-1">98%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Client Satisfaction</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 text-center flex flex-col items-center justify-center">
              <CheckCircle2 size={22} className="text-blue-700 mb-1" />
              <div className="text-xs font-bold text-gray-900">Microsoft Partner</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Well-Architected</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. RELATED SERVICES */}
      <RelatedServices currentSlug={SLUG} />

      {/* 9. CTA */}
      <ServicePageCTA serviceTitle={service.title} />
    </>
  );
}
