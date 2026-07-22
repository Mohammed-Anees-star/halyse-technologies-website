import type { Metadata } from "next";
import {
  CheckCircle2,
  AlertTriangle,
  AppWindow,
  ShieldCheck,
  Rocket,
  Users,
  Award,
  Scale,
  Gauge,
  Layers,
  GitBranch,
  Sparkles,
  Wrench,
  Blocks,
  Repeat,
  Building2,
  Zap,
  UserCheck,
  Boxes,
} from "lucide-react";
import { getServiceBySlug } from "@/data/services";
import ServicePageHero from "@/components/ServicePageHero";
import RelatedServices from "@/components/RelatedServices";
import ServicePageCTA from "@/components/ServicePageCTA";
import SectionHeader from "@/components/SectionHeader";

const SLUG = "business-applications-low-code-platforms";
const service = getServiceBySlug(SLUG)!;

// ─── SEO ─────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `${service.title} | Halyse Technologies`,
  description:
    "Halyse designs, delivers, and governs business applications on Microsoft Power Platform, Dynamics 365, and Quickbase — combining low-code speed with the governance, security, and scalability enterprise operations require.",
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
  "Enterprises are under constant pressure to ship business applications faster — for operations, finance, HR, service teams, and the many day-to-day workflows that keep the business running. Traditional custom development is often too slow and too expensive for these needs, yet off-the-shelf software rarely fits the way the business actually operates.",
  "Halyse helps organizations design, implement, and extend business applications on Microsoft Power Platform, Dynamics 365, and Quickbase — combining the speed of low-code delivery with the governance, security, and scalability enterprise operations require. We build applications that fit the business exactly, adopt quickly, and remain maintainable over years.",
  "Every engagement is engineered against enterprise standards — solution architecture, ALM discipline, environment strategy, and a Center of Excellence approach — so speed today never becomes technical debt tomorrow. The goal is low-code that operates at enterprise scale.",
];

const challenges = [
  {
    icon: AlertTriangle,
    title: "Off-the-shelf products that don't fit",
    desc: "Standard SaaS applications that force teams into workarounds, shadow spreadsheets, and email-based processes because the product does not match how the business actually operates.",
  },
  {
    icon: Gauge,
    title: "Custom development that's too slow",
    desc: "Business needs that could be solved in weeks with low-code being routed through traditional dev cycles that take quarters — killing momentum and burning engineering capacity.",
  },
  {
    icon: Boxes,
    title: "Shadow IT and fragmented ownership",
    desc: "Business teams building their own Power Apps, flows, and Quickbase apps without governance — creating a growing estate of unmanaged, undocumented, and unsupported applications.",
  },
  {
    icon: UserCheck,
    title: "Low adoption of business applications",
    desc: "Applications that were technically delivered but never adopted — because user experience, change management, and the realities of daily work were not designed in from the start.",
  },
  {
    icon: Repeat,
    title: "Manual processes across departments",
    desc: "Approvals, onboarding, service requests, project intake, and dozens of everyday workflows still running on email, spreadsheets, and tribal knowledge.",
  },
  {
    icon: Scale,
    title: "Low-code estate that can't scale",
    desc: "A growing collection of Power Apps and flows that started small but now underpin real business processes — with no environment strategy, no ALM, and no confidence in what's in production.",
  },
];

const capabilities = [
  {
    title: "Power Platform Solution Delivery",
    desc: "End-to-end design and delivery of Power Apps (canvas & model-driven), Power Automate flows, Power Pages, and Dataverse solutions — from discovery through production and adoption.",
  },
  {
    title: "Dynamics 365 Implementation",
    desc: "Configuration, customization, and integration of Dynamics 365 Sales, Customer Service, Field Service, and Business Central — with the security, data model, and process design enterprises need.",
  },
  {
    title: "Quickbase Application Development",
    desc: "Design and build of Quickbase applications for operations, field teams, and custom workflows — with mobile-ready interfaces, Pipelines automation, and integration into the broader estate.",
  },
  {
    title: "Center of Excellence (CoE) & Governance",
    desc: "Establishment of a Power Platform Center of Excellence — environments, DLP policies, monitoring, maker enablement, and a governance operating model that keeps innovation safe.",
  },
  {
    title: "Application Lifecycle Management (ALM)",
    desc: "Source control, solution management, environment strategy, and CI/CD pipelines for low-code applications — using Azure DevOps and Power Platform pipelines to bring engineering discipline to low-code.",
  },
  {
    title: "Business Process Design & Modernization",
    desc: "Facilitated process discovery, business process reengineering, and the design of applications that make how the work happens visible, measurable, and improvable over time.",
  },
  {
    title: "Copilot Extensibility & AI-Native Apps",
    desc: "Building AI-native business applications on Copilot Studio and Power Platform — from custom copilots and topic-based agents to AI-assisted workflows across Power Automate and Dataverse.",
  },
  {
    title: "Citizen Developer Enablement",
    desc: "Training programs, standards, templates, and enablement pathways that empower business makers to build safely — with governance guardrails and pro-code support where it matters.",
  },
];

const technologies = [
  {
    group: "Microsoft Power Platform",
    icon: Blocks,
    items: ["Power Apps", "Power Automate", "Power Pages", "Copilot Studio", "AI Builder"],
  },
  {
    group: "Dataverse & Data",
    icon: Layers,
    items: ["Dataverse", "Virtual Tables", "Dual-Write", "Data Model Design", "Row-Level Security"],
  },
  {
    group: "Dynamics 365",
    icon: Building2,
    items: ["Sales", "Customer Service", "Field Service", "Business Central", "Customer Insights"],
  },
  {
    group: "Quickbase",
    icon: AppWindow,
    items: ["Quickbase Apps", "Pipelines", "Automations", "Mobile Interfaces", "Formula Fields"],
  },
  {
    group: "Governance & ALM",
    icon: ShieldCheck,
    items: ["CoE Toolkit", "Azure DevOps", "Power Platform Pipelines", "Environment Strategy", "DLP Policies"],
  },
];

const outcomes = [
  {
    icon: Rocket,
    metric: "Faster Time to Value",
    desc: "Business applications delivered in weeks, not quarters — freeing engineering capacity for the work that truly requires custom development.",
  },
  {
    icon: UserCheck,
    metric: "Higher User Adoption",
    desc: "Applications designed for how the work actually happens — with user experience, change management, and enablement built into delivery, not bolted on after go-live.",
  },
  {
    icon: ShieldCheck,
    metric: "Governed, Safe Innovation",
    desc: "A Power Platform estate with environments, DLP, monitoring, and standards — enabling business makers to build safely without creating shadow IT.",
  },
  {
    icon: Layers,
    metric: "Lower Total Cost of Ownership",
    desc: "Low-code applications that are easier to change and maintain than equivalent custom builds — reducing engineering effort and long-term run cost.",
  },
  {
    icon: Zap,
    metric: "Operational Efficiency",
    desc: "Manual, email-based, spreadsheet-based processes replaced with governed applications — returning capacity to the teams that were running the workarounds.",
  },
  {
    icon: Scale,
    metric: "Scalable Business Applications",
    desc: "A low-code estate designed to grow with the business — with governance, ALM, and reusable patterns that support hundreds of apps, not just a handful.",
  },
];

const whyHalyse = [
  {
    icon: Award,
    title: "Deep Microsoft business applications expertise",
    desc: "Hands-on experience across Power Platform, Dynamics 365, and Copilot Studio — plus real-world Quickbase delivery — applied to enterprise environments, not just proofs of concept.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade governance",
    desc: "Every Power Platform delivery is engineered against ALM, environment strategy, DLP, and CoE standards — bringing engineering discipline to low-code without slowing it down.",
  },
  {
    icon: Users,
    title: "Adoption-first delivery",
    desc: "We design for the humans who will use the applications — running user research, prototyping, and change management alongside the build so applications actually get used.",
  },
  {
    icon: Sparkles,
    title: "Copilot and AI-native ready",
    desc: "Applications designed to work with Copilot Studio, AI Builder, and Azure OpenAI where it adds business value — not AI-for-AI's-sake, but AI grounded in workflows.",
  },
  {
    icon: Wrench,
    title: "Senior-led delivery teams",
    desc: "Solution architects and functional consultants with real enterprise experience — leading design decisions, security, integration, and the trade-offs that matter over years.",
  },
  {
    icon: GitBranch,
    title: "Long-term partnership",
    desc: "Business applications evolve constantly. We stay engaged as the platform grows — expanding coverage, absorbing new use cases, and maturing the CoE over time.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function BusinessApplicationsLowCodePlatformsPage() {
  return (
    <>
      <ServicePageHero
        breadcrumb={service.title}
        icon={service.icon}
        title={service.title}
        tagline={service.tagline}
        intro="From Power Platform and Dynamics 365 to Quickbase, Halyse designs, delivers, and governs business applications that combine low-code speed with the security, ALM discipline, and scalability enterprise operations demand."
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
                Low-code that operates at enterprise scale.
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Where low-code speed meets enterprise discipline.
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
            title="The tension between speed and enterprise discipline."
            subtitle="These are the recurring realities we hear from CIOs, operations leaders, and business technology teams — the gap between what the business needs delivered quickly and what enterprise IT can safely support."
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
            subtitle="Our capabilities span the full business applications lifecycle — from solution delivery and platform governance through citizen enablement, ALM discipline, and long-term evolution of the low-code estate."
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
            title="Deep expertise across the Microsoft business applications stack."
            subtitle="Current, hands-on capability across Power Platform, Dynamics 365, Copilot Studio, Dataverse, and Quickbase — with reference patterns tested in production for enterprise operations."
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
            title="Measurable business impact."
            subtitle="Low-code platforms create real business value — faster delivery, higher adoption, safer innovation — but only when governance, ALM, and adoption discipline are engineered in from day one."
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
            title="Why enterprise leaders choose Halyse for business applications."
            subtitle="The difference is not the platform — it is how we combine Microsoft business applications depth with governance and adoption discipline that keep low-code sustainable at enterprise scale."
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
