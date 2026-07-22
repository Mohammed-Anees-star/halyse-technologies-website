import type { Metadata } from "next";
import {
  CheckCircle2,
  AlertTriangle,
  Cloud,
  ShieldCheck,
  Rocket,
  Users,
  Award,
  Scale,
  Gauge,
  Lock,
  GitBranch,
  Server,
  Network,
  Boxes,
  DollarSign,
  Activity,
  Layers,
  KeyRound,
} from "lucide-react";
import { getServiceBySlug } from "@/data/services";
import ServicePageHero from "@/components/ServicePageHero";
import RelatedServices from "@/components/RelatedServices";
import ServicePageCTA from "@/components/ServicePageCTA";
import SectionHeader from "@/components/SectionHeader";

const SLUG = "azure-cloud-platform-engineering";
const service = getServiceBySlug(SLUG)!;

// ─── SEO ─────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `${service.title} | Halyse Technologies`,
  description:
    "Halyse designs, deploys, and optimizes Azure cloud platforms — landing zones, workload migration, identity, security, FinOps, and platform engineering — giving enterprises a secure, scalable foundation to build the business on.",
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
  "Cloud infrastructure is no longer a discussion about servers — it's a discussion about the platform your business runs on. When that platform is designed well, applications ship faster, security holds up under scrutiny, costs stay predictable, and the business can absorb change without hesitation. When it isn't, everything above it slows down.",
  "Halyse helps enterprises design, deploy, and operate production-grade Azure platforms — from landing zone architecture and workload migration to identity, networking, security, and cost governance. We treat cloud as a product for the internal engineering teams that consume it, not just a hosting environment.",
  "Every platform we build is engineered against the Microsoft Cloud Adoption Framework and Well-Architected Framework — with reliability, security, performance, and cost efficiency built into the foundation. The goal is a platform enterprise leaders can trust with their most critical workloads, and one that engineering teams can move fast on for years.",
];

const challenges = [
  {
    icon: AlertTriangle,
    title: "Cloud that outgrew its original design",
    desc: "Azure environments that started small and grew organically — now hard to reason about, uneven in security posture, and increasingly expensive to operate at scale.",
  },
  {
    icon: DollarSign,
    title: "Cloud spend that keeps climbing",
    desc: "Unclear cost attribution, idle resources, oversized SKUs, and no FinOps discipline — leaving leadership unable to explain the growing bill to the board.",
  },
  {
    icon: Lock,
    title: "Security and compliance exposure",
    desc: "Fragmented identity models, inconsistent policy enforcement, gaps in audit evidence, and network configurations that no longer meet enterprise security standards.",
  },
  {
    icon: Scale,
    title: "Platform that can't scale with the business",
    desc: "Environments that worked for a handful of applications but can't sustain hundreds of workloads, multiple business units, or new geographies without breaking down.",
  },
  {
    icon: Server,
    title: "Legacy workloads holding the business back",
    desc: "On-premise systems that limit resilience, speed of delivery, and access to modern platform services — with no clear roadmap to move them safely.",
  },
  {
    icon: Gauge,
    title: "Slow and inconsistent delivery",
    desc: "Every engineering team building infrastructure their own way — no shared standards, no self-service, and long lead times for every new environment.",
  },
];

const capabilities = [
  {
    title: "Azure Landing Zone Design & Deployment",
    desc: "Enterprise-scale landing zones aligned to the Microsoft Cloud Adoption Framework — with governance, identity, networking, security, and management guardrails built in from day one.",
  },
  {
    title: "Cloud Migration & Modernization",
    desc: "Assessment, planning, and execution of workload migrations to Azure — rehost, refactor, replatform, and rebuild strategies chosen against business outcomes, not defaults.",
  },
  {
    title: "Identity & Access Architecture",
    desc: "Microsoft Entra ID architecture, conditional access, privileged identity management, and workload identity — with a single identity model across the estate.",
  },
  {
    title: "Cloud Networking & Connectivity",
    desc: "Hub-and-spoke virtual networks, private endpoints, ExpressRoute, VPN, DNS, and firewall design — engineered for security, performance, and predictable operations.",
  },
  {
    title: "Security Baseline & Compliance",
    desc: "Defender for Cloud, Azure Policy, secure baselines, audit-ready logging, and compliance frameworks (ISO 27001, HIPAA, PCI, GDPR) built into the platform — not bolted on later.",
  },
  {
    title: "Platform Engineering & Internal Developer Platforms",
    desc: "Reusable Bicep/Terraform modules, self-service workload templates, environment blueprints, and paved paths — treating the cloud platform as a product for internal teams.",
  },
  {
    title: "FinOps & Cost Optimization",
    desc: "Cost visibility, tagging strategy, showback/chargeback models, reservation strategies, right-sizing, and continuous optimization — with FinOps embedded in the operating model.",
  },
  {
    title: "Site Reliability & Operations",
    desc: "Azure Monitor, Application Insights, alerting, dashboards, runbooks, and incident response — with SLO-driven reliability engineering built into every workload.",
  },
];

const technologies = [
  {
    group: "Core Azure Platform",
    icon: Cloud,
    items: ["Azure", "Microsoft Entra ID", "Azure Policy", "Management Groups", "Blueprints"],
  },
  {
    group: "Compute & Containers",
    icon: Boxes,
    items: ["App Service", "AKS", "Container Apps", "Azure Functions", "Virtual Machines"],
  },
  {
    group: "Networking & Data",
    icon: Network,
    items: ["Virtual Network", "Private Endpoints", "Azure Firewall", "Front Door", "Azure SQL"],
  },
  {
    group: "Security & Identity",
    icon: KeyRound,
    items: ["Defender for Cloud", "Key Vault", "Managed Identities", "Sentinel", "Conditional Access"],
  },
  {
    group: "DevOps & Observability",
    icon: Activity,
    items: ["Azure DevOps", "GitHub Actions", "Bicep / Terraform", "Azure Monitor", "App Insights"],
  },
];

const outcomes = [
  {
    icon: Rocket,
    metric: "Faster Delivery",
    desc: "Self-service platforms and paved paths cut environment lead times from weeks to hours — engineering teams ship faster with fewer handoffs.",
  },
  {
    icon: Scale,
    metric: "Elastic Scalability",
    desc: "Workloads that scale up for demand spikes and scale down when idle — supporting growth, seasonality, and new geographies without re-architecting.",
  },
  {
    icon: ShieldCheck,
    metric: "Stronger Security Posture",
    desc: "Consistent identity, policy, and network controls across the estate — with audit-ready evidence that satisfies security teams, procurement, and regulators.",
  },
  {
    icon: DollarSign,
    metric: "Predictable Cloud Cost",
    desc: "FinOps discipline, right-sized resources, and reservation strategies — giving leadership a defensible, transparent view of cloud spend against business value.",
  },
  {
    icon: Gauge,
    metric: "Higher Reliability",
    desc: "Well-Architected workloads with observability, alerting, and runbooks baked in — fewer outages, cleaner recovery, less firefighting for on-call teams.",
  },
  {
    icon: Layers,
    metric: "Platform That Scales",
    desc: "A foundation designed to absorb new workloads, new business units, and new regulations — without a rebuild every eighteen months.",
  },
];

const whyHalyse = [
  {
    icon: Award,
    title: "Microsoft Partner cloud expertise",
    desc: "Deep, current expertise across the Azure platform — Cloud Adoption Framework, Well-Architected Framework, and Enterprise-Scale Landing Zone patterns applied to real enterprise environments.",
  },
  {
    icon: ShieldCheck,
    title: "Secure and compliant by design",
    desc: "Security, identity, and compliance baselines built into the platform from day one — not remediated after audit findings. Enterprise-grade from the first deployment.",
  },
  {
    icon: DollarSign,
    title: "FinOps-first mindset",
    desc: "We design cloud platforms with cost visibility, tagging, showback, and optimization built in — so the business can grow the estate without losing control of the bill.",
  },
  {
    icon: Users,
    title: "Platform-as-a-product thinking",
    desc: "We build platforms for the engineering teams that consume them — with self-service, paved paths, and shared standards that scale delivery across the organization.",
  },
  {
    icon: Rocket,
    title: "Senior-led delivery teams",
    desc: "Cloud and platform architects with real-world enterprise experience — leading design decisions, security reviews, and the trade-offs that matter at scale.",
  },
  {
    icon: GitBranch,
    title: "Long-term partnership",
    desc: "Cloud platforms are living systems. We stay engaged as workloads grow, regulations change, and the estate evolves — bringing continuous improvement to the foundation.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function AzureCloudPlatformEngineeringPage() {
  return (
    <>
      <ServicePageHero
        breadcrumb={service.title}
        icon={service.icon}
        title={service.title}
        tagline={service.tagline}
        intro="From landing zone architecture and workload migration to identity, security, and FinOps, Halyse designs and delivers production-grade Azure platforms — giving enterprises a secure, scalable, cost-efficient foundation to build the business on."
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
                A cloud platform your business can build on.
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Where engineering discipline meets enterprise reality.
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
            title="The signals that a cloud platform needs attention."
            subtitle="These are the recurring themes we see across enterprises whose cloud estates have grown faster than the discipline holding them together — the day-to-day realities we hear from CIOs, platform leads, and finance."
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
            subtitle="Our capabilities in Azure Cloud & Platform Engineering span the full lifecycle — from strategy and landing zone design through migration, platform engineering, and long-term optimization."
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
            title="Engineered on Microsoft Azure."
            subtitle="Deep, current expertise across the Azure platform — Cloud Adoption Framework, Well-Architected Framework, and enterprise-scale landing zone patterns applied to production environments."
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
            title="Measurable platform value."
            subtitle="Cloud platform engineering is a means, not an end. The outcomes that matter are the ones the business feels — faster delivery, stronger security, predictable cost, and a foundation that scales."
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
            title="Why enterprise leaders choose Halyse for Azure platform engineering."
            subtitle="The difference is not the platform — it's how we combine Microsoft ecosystem depth with a delivery model designed for the realities of enterprise cloud operations."
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
