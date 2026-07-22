import type { Metadata } from "next";
import {
  CheckCircle2,
  AlertTriangle,
  Database,
  ShieldCheck,
  Rocket,
  Users,
  Award,
  Scale,
  Gauge,
  Lock,
  Layers,
  GitBranch,
  Brain,
  BarChart3,
  Sparkles,
  LineChart,
  Boxes,
  Eye,
  FileText,
} from "lucide-react";
import { getServiceBySlug } from "@/data/services";
import ServicePageHero from "@/components/ServicePageHero";
import RelatedServices from "@/components/RelatedServices";
import ServicePageCTA from "@/components/ServicePageCTA";
import SectionHeader from "@/components/SectionHeader";

const SLUG = "data-analytics-ai";
const service = getServiceBySlug(SLUG)!;

// ─── SEO ─────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `${service.title} | Halyse Technologies`,
  description:
    "Halyse designs and delivers modern data platforms, analytics, and AI solutions on Microsoft Fabric, Power BI, and Azure OpenAI — unifying enterprise data, strengthening governance, and turning information into decisions.",
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
  "Every enterprise sits on more data than it can use — spread across ERP, CRM, HR, operational systems, spreadsheets, and increasingly, external SaaS platforms. The problem is rarely the amount of data. The problem is trust: which numbers to believe, which report to act on, and whether the AI opportunity everyone is talking about is real or theatrical.",
  "Halyse helps organizations design and deliver modern data platforms, analytics, and AI capabilities that turn scattered information into trusted business intelligence. We build on Microsoft Fabric, Azure Data Services, Power BI, and Azure OpenAI — with data governance, semantic modeling, and responsible AI practices designed into the foundation.",
  "The goal is not more dashboards. It is a data estate the business trusts — one that supports faster, better decisions today, and provides a defensible foundation for the AI investments the enterprise will make over the next several years.",
];

const challenges = [
  {
    icon: Boxes,
    title: "Data scattered across too many systems",
    desc: "Numbers live in ERP, CRM, spreadsheets, and departmental tools — with no single source of truth and no clear way to reconcile them for leadership.",
  },
  {
    icon: FileText,
    title: "Reports built manually, always outdated",
    desc: "Weekly and monthly reports assembled by hand in Excel — expensive to produce, error-prone, and consistently a few days behind the reality on the ground.",
  },
  {
    icon: AlertTriangle,
    title: "Low trust in the numbers",
    desc: "Different teams presenting different numbers for the same metric — because definitions, sources, and calculations were never governed as an enterprise asset.",
  },
  {
    icon: Lock,
    title: "Data governance and compliance gaps",
    desc: "Unclear data ownership, weak access controls, and no audit trail — leaving the business exposed to privacy regulations, security incidents, and audit findings.",
  },
  {
    icon: Brain,
    title: "AI ambition without a foundation",
    desc: "Leadership pressure to 'do something with AI' — but no clean data, no governance, and no clear use case with measurable business value.",
  },
  {
    icon: Scale,
    title: "Analytics stack that can't scale",
    desc: "Legacy data warehouses and BI tools that worked at one point but can no longer support the volume, complexity, or self-service demand the business now expects.",
  },
];

const capabilities = [
  {
    title: "Modern Data Platform Architecture",
    desc: "End-to-end data platforms built on Microsoft Fabric, OneLake, and Azure — with lakehouse architecture, medallion patterns, and clear zones for raw, curated, and business-ready data.",
  },
  {
    title: "Data Engineering & Pipelines",
    desc: "Scalable ingestion, transformation, and orchestration pipelines using Azure Data Factory, Fabric Data Pipelines, and Synapse — batch and streaming, with reliability and observability built in.",
  },
  {
    title: "Semantic Models & Business Logic",
    desc: "Governed semantic models on Fabric and Power BI that turn raw data into consistent, business-ready measures — one definition of revenue, one view of the customer, one truth for the enterprise.",
  },
  {
    title: "Business Intelligence & Executive Dashboards",
    desc: "Power BI dashboards designed for the audiences that use them — executive KPIs, operational visibility, self-service exploration — with role-based access and refresh strategies that fit the business.",
  },
  {
    title: "Data Governance & Cataloging",
    desc: "Data ownership, lineage, quality, and stewardship — implemented through Microsoft Purview, Fabric governance, and operating models that make governance sustainable, not ceremonial.",
  },
  {
    title: "AI Strategy & Use Case Prioritization",
    desc: "Assessment of AI opportunities against business value, data readiness, and risk — with prioritized roadmaps that turn AI ambition into a portfolio of pilots and production programs.",
  },
  {
    title: "Applied AI on Azure OpenAI & Copilot Studio",
    desc: "Production-grade AI solutions on Azure OpenAI, Copilot Studio, and Azure AI Foundry — from document intelligence and RAG patterns to custom copilots and agentic workflows.",
  },
  {
    title: "Responsible AI & Model Governance",
    desc: "Model documentation, evaluation, human-in-the-loop patterns, and guardrails aligned to Microsoft's Responsible AI standards — designed for enterprises that need AI they can defend.",
  },
];

const technologies = [
  {
    group: "Microsoft Fabric & Lakehouse",
    icon: Layers,
    items: ["Microsoft Fabric", "OneLake", "Lakehouse", "Data Warehouse", "Medallion Architecture"],
  },
  {
    group: "Data Engineering",
    icon: Database,
    items: ["Azure Data Factory", "Fabric Data Pipelines", "Synapse", "Azure SQL", "Delta Lake"],
  },
  {
    group: "Analytics & BI",
    icon: BarChart3,
    items: ["Power BI", "Fabric Semantic Models", "DAX", "Paginated Reports", "Embedded Analytics"],
  },
  {
    group: "AI & Machine Learning",
    icon: Sparkles,
    items: ["Azure OpenAI", "Copilot Studio", "Azure AI Foundry", "Azure ML", "AI Search (RAG)"],
  },
  {
    group: "Governance & Security",
    icon: ShieldCheck,
    items: ["Microsoft Purview", "Row-Level Security", "Sensitivity Labels", "Data Lineage", "Access Controls"],
  },
];

const outcomes = [
  {
    icon: LineChart,
    metric: "Better, Faster Decisions",
    desc: "Executive and operational dashboards on trusted data — decisions made against fresh numbers instead of last week's manual reports.",
  },
  {
    icon: Eye,
    metric: "A Single Source of Truth",
    desc: "One definition of revenue, one view of the customer, one number leadership can defend — replacing the reconciliation debates that consume every review.",
  },
  {
    icon: Rocket,
    metric: "AI That Ships to Production",
    desc: "Prioritized AI use cases move from slideware to production — with the data foundation, governance, and delivery discipline to make scale-out real.",
  },
  {
    icon: ShieldCheck,
    metric: "Stronger Data Governance",
    desc: "Data ownership, lineage, and quality embedded into the platform — reducing audit exposure and strengthening the enterprise's data posture.",
  },
  {
    icon: Gauge,
    metric: "Lower Cost to Insight",
    desc: "Manual reporting effort replaced by governed self-service and automated refresh — capacity returned to teams that were producing reports instead of analyzing them.",
  },
  {
    icon: Scale,
    metric: "A Foundation for What's Next",
    desc: "A data estate designed to absorb new sources, new business models, and future AI investments — without a rebuild every three years.",
  },
];

const whyHalyse = [
  {
    icon: Award,
    title: "Microsoft data & AI expertise",
    desc: "Deep, current expertise across Microsoft Fabric, Power BI, Azure Data Services, and Azure OpenAI — including reference architectures ready to adapt to your data estate.",
  },
  {
    icon: ShieldCheck,
    title: "Governance-first data design",
    desc: "We design data platforms with lineage, quality, security, and ownership built in from day one — not remediated after the first audit or the first incident.",
  },
  {
    icon: Brain,
    title: "AI grounded in business value",
    desc: "We prioritize AI use cases against measurable outcomes and delivery feasibility — not against novelty. Every pilot is designed to answer: is this worth scaling?",
  },
  {
    icon: Users,
    title: "Senior-led delivery teams",
    desc: "Data architects, ML engineers, and analytics leads with real-world enterprise experience — owning design decisions, model quality, and the trade-offs that matter over time.",
  },
  {
    icon: Rocket,
    title: "Focused on business outcomes",
    desc: "We measure success in decisions made, hours returned to the business, and AI shipped to production — not in dashboards published.",
  },
  {
    icon: GitBranch,
    title: "Long-term partnership",
    desc: "Data platforms are living systems. We stay engaged as data volumes grow, sources evolve, and AI investments scale — bringing continuous discipline to the estate.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function DataAnalyticsAiPage() {
  return (
    <>
      <ServicePageHero
        breadcrumb={service.title}
        icon={service.icon}
        title={service.title}
        tagline={service.tagline}
        intro="From modern data platforms and executive analytics to production-grade AI on Azure OpenAI, Halyse helps enterprises turn scattered information into trusted intelligence — with governance, semantic modeling, and responsible AI built into the foundation."
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
                A data estate the business can trust.
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Where trusted data, disciplined analytics, and responsible AI meet.
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
            title="The signals that data and AI need a foundation."
            subtitle="These are the recurring themes we see across enterprises whose data estate has grown faster than the governance holding it together — and whose AI ambitions need a platform they can actually build on."
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
            subtitle="Our capabilities in Data Engineering, Analytics & AI span the full stack — from platform architecture and engineering through analytics, applied AI, and the governance that makes it all defensible."
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
            title="Built on Microsoft Fabric and Azure AI."
            subtitle="Deep, current expertise across the Microsoft data and AI ecosystem — with reference patterns tested in production for enterprise-scale analytics and applied AI."
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
            title="Measurable data and AI value."
            subtitle="Data platforms and AI programs are means, not ends. The outcomes that matter are the ones the business feels — better decisions, trusted numbers, and AI that ships beyond the pilot phase."
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
            title="Why enterprise leaders choose Halyse for data and AI."
            subtitle="The difference is not the platform — it is how we combine Microsoft data and AI depth with a delivery model that keeps governance, trust, and business value at the center."
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
