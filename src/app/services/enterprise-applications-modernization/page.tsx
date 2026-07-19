import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Code2,
  Shuffle,
  Wrench,
  ShieldCheck,
  Rocket,
  Users,
  Award,
  Layers,
  Scale,
  Gauge,
  Lock,
  TrendingUp,
  GitBranch,
  Database,
  Cloud,
  Boxes,
} from "lucide-react";
import { getServiceBySlug } from "@/data/services";
import ServicePageHero from "@/components/ServicePageHero";
import RelatedServices from "@/components/RelatedServices";
import ServicePageCTA from "@/components/ServicePageCTA";
import SectionHeader from "@/components/SectionHeader";

const SLUG = "enterprise-applications-modernization";
const service = getServiceBySlug(SLUG)!;

// ─── SEO ─────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `${service.title} | Halyse Technologies`,
  description:
    "Halyse designs, modernizes, and extends business-critical enterprise applications — replacing legacy systems, building custom solutions, and improving performance, security, and scalability on modern cloud architectures.",
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
  "Enterprise applications are the systems your business runs on — the platforms your teams use every day to serve customers, run operations, and make decisions. When they perform, the business moves faster. When they struggle, everything slows down.",
  "Halyse partners with organizations to modernize and extend these business-critical applications. Whether the goal is replacing an aging legacy platform, building a new custom application to support a differentiated process, or improving the performance and usability of a system already in production, we deliver solutions engineered around long-term business outcomes — not short-term technical fixes.",
  "Our approach combines modern architecture, cloud-native technologies, and enterprise engineering standards to deliver applications that are secure by design, cost-efficient to operate, and easy to evolve as business needs change.",
];

const challenges = [
  {
    icon: AlertTriangle,
    title: "Aging legacy systems constraining the business",
    desc: "Systems built years ago that are difficult to extend, expensive to maintain, and increasingly disconnected from modern platforms.",
  },
  {
    icon: Code2,
    title: "Off-the-shelf products that don't fit",
    desc: "Standard products that force teams into workarounds, spreadsheets, and shadow processes because they don't match how the business actually operates.",
  },
  {
    icon: Shuffle,
    title: "Fragmented applications across departments",
    desc: "A patchwork of tools accumulated over time that duplicates data, breaks user experience, and makes governance nearly impossible.",
  },
  {
    icon: Gauge,
    title: "Poor performance and user experience",
    desc: "Applications that are slow, unstable, or hard to use — driving productivity losses, escalating support costs, and low adoption.",
  },
  {
    icon: Lock,
    title: "Security, compliance, and technical debt risk",
    desc: "Older platforms that no longer meet modern security, compliance, or auditability requirements — and where technical debt is slowing every release.",
  },
  {
    icon: Scale,
    title: "Systems that don't scale with the business",
    desc: "Applications that worked for a smaller organization but can no longer handle the volume, complexity, or geographic reach the business now demands.",
  },
];

const capabilities = [
  {
    title: "Application Modernization & Re-platforming",
    desc: "Assessment, target-state architecture, and phased modernization of legacy applications — moving from monolithic, on-premise systems to modern, cloud-based platforms while protecting existing business value.",
  },
  {
    title: "Custom Enterprise Application Development",
    desc: "End-to-end design and build of tailored applications using modern frameworks (ASP.NET Core, React, TypeScript) — engineered to fit exactly how the business operates, with clean architecture and enterprise-grade quality.",
  },
  {
    title: "Legacy System Rationalization",
    desc: "Portfolio-level assessment of existing applications, identifying which systems to retain, retire, replace, or consolidate — with clear business cases and migration roadmaps.",
  },
  {
    title: "Cloud-Native Application Engineering",
    desc: "Applications built on Azure App Service, Azure Kubernetes Service, and serverless architectures — designed for elasticity, resilience, and cost efficiency from day one.",
  },
  {
    title: "Application Performance & UX Improvement",
    desc: "Targeted engagements to improve slow, unstable, or hard-to-use applications — through performance tuning, UX redesign, refactoring, and modernization of critical user journeys.",
  },
  {
    title: "Application Security & Compliance Uplift",
    desc: "Security architecture reviews, identity and access modernization, secure development lifecycle adoption, and remediation of known risks in existing applications.",
  },
  {
    title: "Enterprise Integration & Extensibility",
    desc: "Extending existing applications with modern APIs, integrations, and event-driven capabilities — connecting them to CRM, ERP, data platforms, and downstream systems.",
  },
  {
    title: "Application Portfolio Assessments & Roadmaps",
    desc: "Structured assessments of your application landscape that produce a prioritized, business-aligned modernization roadmap ready for executive approval.",
  },
];

const technologies = [
  {
    group: "Cloud & Runtime",
    icon: Cloud,
    items: ["Microsoft Azure", "Azure App Service", "Azure Kubernetes Service", "Azure Functions", "Azure Container Apps"],
  },
  {
    group: "Development Frameworks",
    icon: Code2,
    items: ["ASP.NET Core", "C# / .NET 8+", "React", "TypeScript", "Next.js", "Node.js"],
  },
  {
    group: "Data & Storage",
    icon: Database,
    items: ["Azure SQL", "Cosmos DB", "PostgreSQL", "Redis Cache", "Azure Blob Storage"],
  },
  {
    group: "Engineering & DevOps",
    icon: GitBranch,
    items: ["Azure DevOps", "GitHub", "CI/CD Pipelines", "Infrastructure as Code", "Application Insights"],
  },
  {
    group: "Architecture Patterns",
    icon: Boxes,
    items: ["Microservices", "Event-driven", "API-first", "Domain-driven design", "Well-Architected Framework"],
  },
];

const outcomes = [
  {
    icon: TrendingUp,
    metric: "Faster Delivery",
    desc: "Modern engineering practices and cloud-native architectures compress release cycles from months to weeks — enabling the business to respond faster.",
  },
  {
    icon: Scale,
    metric: "Improved Scalability",
    desc: "Applications architected to scale elastically with demand — supporting business growth, seasonal peaks, and geographic expansion without re-architecting.",
  },
  {
    icon: ShieldCheck,
    metric: "Enhanced Security",
    desc: "Security embedded into architecture, identity, and the software delivery lifecycle — reducing risk while meeting modern compliance requirements.",
  },
  {
    icon: Gauge,
    metric: "Better Performance & UX",
    desc: "Faster, more stable, and easier-to-use applications drive higher adoption, lower support cost, and measurable productivity gains across teams.",
  },
  {
    icon: Layers,
    metric: "Reduced Technical Debt",
    desc: "Legacy systems replaced or restructured with modern architectures — cutting maintenance cost and freeing engineering capacity for innovation.",
  },
  {
    icon: Lock,
    metric: "Lower Operational Risk",
    desc: "Fewer outages, cleaner audit trails, and modern observability — giving IT leadership the confidence and visibility they need over critical systems.",
  },
];

const whyHalyse = [
  {
    icon: Award,
    title: "Enterprise-first approach",
    desc: "We design for the realities of enterprise environments — governance, security, integration, and long-term maintainability — not just short-term delivery.",
  },
  {
    icon: Users,
    title: "Microsoft ecosystem expertise",
    desc: "As a Microsoft Partner, our teams bring deep, hands-on experience across Azure, .NET, Power Platform, Dynamics 365, and the Microsoft Well-Architected Framework.",
  },
  {
    icon: ShieldCheck,
    title: "Secure and scalable by design",
    desc: "Security, resilience, and scalability are architectural decisions — built in from the first line of code, not bolted on before go-live.",
  },
  {
    icon: Rocket,
    title: "Business-focused outcomes",
    desc: "We measure success in business terms — faster processes, better user adoption, lower run cost, and reduced risk — not lines of code delivered.",
  },
  {
    icon: Wrench,
    title: "Senior-led delivery teams",
    desc: "Every engagement is led by senior architects and consultants with real-world enterprise experience — not junior teams learning on your project.",
  },
  {
    icon: Users,
    title: "Long-term partnership",
    desc: "Our engagement doesn't end at go-live. We support, evolve, and continuously improve the applications we deliver over the long term.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function EnterpriseApplicationsModernizationPage() {
  return (
    <>
      <ServicePageHero
        breadcrumb={service.title}
        icon={service.icon}
        title={service.title}
        tagline={service.tagline}
        intro="From modernizing legacy platforms to building custom enterprise applications from the ground up, Halyse delivers business-critical software engineered for performance, security, and long-term evolution — grounded in modern architecture and the Microsoft cloud ecosystem."
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
                Modern enterprise applications, built to last.
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Where digital business meets engineering discipline.
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
            title="The realities that put enterprise applications at risk."
            subtitle="These are the recurring themes we see across the mid-market and enterprise organizations we partner with — the signals that an application landscape needs a modernization plan."
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
            subtitle="Our capabilities in Enterprise Applications & Modernization span the full lifecycle — from portfolio-level assessments through custom build, modernization, and continuous improvement."
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
            title="Engineered on the Microsoft cloud."
            subtitle="Our teams hold deep, current expertise across the Microsoft ecosystem and the surrounding open technologies that power modern enterprise applications."
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
            title="Measurable business value, not technical activity."
            subtitle="Every engagement is designed around the outcomes that matter to the business — the ones executive teams recognize on the P&L, the balance sheet, and in team satisfaction."
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
            title="Why enterprise leaders choose Halyse for application modernization."
            subtitle="The difference is not in the technology alone — it is in how we combine engineering discipline, Microsoft ecosystem depth, and a partnership-first delivery model."
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
