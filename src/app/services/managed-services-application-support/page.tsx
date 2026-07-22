import type { Metadata } from "next";
import {
  CheckCircle2,
  AlertTriangle,
  LifeBuoy,
  ShieldCheck,
  Rocket,
  Users,
  Award,
  Scale,
  Lock,
  Clock,
  Layers,
  GitBranch,
  Activity,
  BarChart3,
  Bell,
  Wrench,
  RefreshCw,
  TrendingDown,
  HeartPulse,
} from "lucide-react";
import { getServiceBySlug } from "@/data/services";
import ServicePageHero from "@/components/ServicePageHero";
import RelatedServices from "@/components/RelatedServices";
import ServicePageCTA from "@/components/ServicePageCTA";
import SectionHeader from "@/components/SectionHeader";

const SLUG = "managed-services-application-support";
const service = getServiceBySlug(SLUG)!;

// ─── SEO ─────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `${service.title} | Halyse Technologies`,
  description:
    "Halyse operates, supports, and continuously improves business-critical applications after go-live — with SLA-backed monitoring, incident response, performance optimization, and structured enhancement across Microsoft Azure, Power Platform, Dynamics 365, and Quickbase.",
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
  "Go-live is not the finish line. It is the beginning of the longest, most expensive, and most consequential phase of an application's life. Enterprises that invest heavily in building the right systems often underinvest in running them well — and pay for it in outages, escalating support costs, drifting security posture, and applications that quietly stop earning their place on the balance sheet.",
  "Halyse operates, supports, and continuously improves business-critical applications after go-live. Our managed services and application support engagements combine SLA-backed monitoring, structured incident response, performance optimization, and a steady rhythm of enhancement work — keeping enterprise systems stable, secure, and continuously evolving alongside the business.",
  "We treat managed services as a discipline, not a staffing model. Every engagement is built around defined SLAs, transparent reporting, and a continuous improvement backlog — so operations leaders know exactly what they are getting, and applications don't just survive in production, they get better.",
];

const challenges = [
  {
    icon: AlertTriangle,
    title: "Applications that degrade after go-live",
    desc: "Systems that shipped well but slowly become slower, less reliable, and more expensive to run — with no dedicated ownership for keeping them healthy.",
  },
  {
    icon: Bell,
    title: "Reactive firefighting, no structured response",
    desc: "Issues discovered by users instead of monitoring, escalations routed through the wrong people, and no clear playbook when things break at 2 a.m.",
  },
  {
    icon: Lock,
    title: "Security and compliance drift",
    desc: "Patches deferred, access reviews delayed, audit evidence hard to produce — an accumulating security debt that eventually surfaces during an incident or an audit.",
  },
  {
    icon: TrendingDown,
    title: "Support costs that keep climbing",
    desc: "Growing headcount, retained knowledge in a few individuals, and unpredictable spend — with no clear picture of what is actually being delivered against the cost.",
  },
  {
    icon: RefreshCw,
    title: "Enhancement backlog that never moves",
    desc: "Small improvements requested by the business that quietly stall in queue — because the team is fully consumed keeping the lights on with no capacity to evolve.",
  },
  {
    icon: Scale,
    title: "Managed services that feel like staff aug",
    desc: "Existing arrangements that put bodies on the problem without SLAs, without transparent reporting, and without accountability for outcomes.",
  },
];

const capabilities = [
  {
    title: "SLA-Backed Application Support (L1 – L3)",
    desc: "Tiered support model with defined response and resolution SLAs — from first-line triage through L2 diagnostic support to L3 engineering fixes, with clear escalation paths and hand-offs.",
  },
  {
    title: "24×7 Monitoring & Incident Response",
    desc: "Proactive monitoring, alerting, and on-call incident response using Azure Monitor, Application Insights, and structured runbooks — issues found by us before they reach the business.",
  },
  {
    title: "Environment & Release Management",
    desc: "Governed change management across development, test, and production environments — with CI/CD pipelines, promotion controls, and rollback plans for every release.",
  },
  {
    title: "Security Patching & Vulnerability Management",
    desc: "Continuous vulnerability scanning, patching cadence, security baseline maintenance, and audit-ready evidence — keeping systems compliant and defensible against modern threats.",
  },
  {
    title: "Performance & Cost Optimization",
    desc: "Ongoing performance tuning, resource right-sizing, and FinOps reviews — keeping applications responsive and cloud spend predictable as usage patterns evolve over time.",
  },
  {
    title: "Continuous Enhancement Backlog",
    desc: "Ring-fenced capacity for minor enhancements, small feature work, and configuration changes — so the application keeps improving alongside the business, not just staying alive.",
  },
  {
    title: "Documentation, Runbooks & Knowledge Base",
    desc: "Maintained system documentation, incident runbooks, and knowledge base — reducing dependency on individuals and shortening onboarding for new team members on both sides.",
  },
  {
    title: "Service Governance & Executive Reporting",
    desc: "Monthly service reviews, SLA and KPI reporting, root-cause reviews for major incidents, and a rolling improvement roadmap — giving leadership complete visibility into what is being delivered.",
  },
];

const technologies = [
  {
    group: "Monitoring & Observability",
    icon: Activity,
    items: ["Azure Monitor", "Application Insights", "Log Analytics", "Dashboards", "Alert Rules"],
  },
  {
    group: "Ticketing & ITSM",
    icon: LifeBuoy,
    items: ["ServiceNow", "Jira Service Management", "Azure DevOps Boards", "SLA Tracking"],
  },
  {
    group: "Release & Change Management",
    icon: GitBranch,
    items: ["Azure DevOps", "GitHub Actions", "Power Platform Pipelines", "Environment Strategy"],
  },
  {
    group: "Security & Compliance",
    icon: ShieldCheck,
    items: ["Defender for Cloud", "Sentinel", "Azure Policy", "Key Vault", "Access Reviews"],
  },
  {
    group: "Application Estate",
    icon: Layers,
    items: ["Azure Workloads", "Power Platform", "Dynamics 365", "Quickbase", "Custom .NET"],
  },
];

const outcomes = [
  {
    icon: HeartPulse,
    metric: "Higher Reliability",
    desc: "Fewer outages, faster recovery, and cleaner root-cause resolution — measurable uptime improvements against defined SLAs the business can rely on.",
  },
  {
    icon: Clock,
    metric: "Faster Incident Response",
    desc: "Issues detected by monitoring before they reach users, and resolved within SLA — reducing business disruption and rebuilding trust in the application estate.",
  },
  {
    icon: ShieldCheck,
    metric: "Stronger Security Posture",
    desc: "Timely patching, active vulnerability management, and audit-ready evidence — reducing the risk of incidents and audit findings across the application estate.",
  },
  {
    icon: TrendingDown,
    metric: "Predictable Operating Costs",
    desc: "Fixed monthly capacity with transparent reporting — replacing unpredictable staffing costs and letting finance forecast the run cost of applications with confidence.",
  },
  {
    icon: Rocket,
    metric: "Applications That Keep Improving",
    desc: "Ring-fenced enhancement capacity means applications evolve alongside the business — instead of ossifying the day the original project team disbands.",
  },
  {
    icon: BarChart3,
    metric: "Executive Visibility",
    desc: "Monthly service reports, SLA scorecards, and improvement roadmaps — giving leadership continuous, defensible visibility into the health of the application estate.",
  },
];

const whyHalyse = [
  {
    icon: Award,
    title: "Managed services as a discipline",
    desc: "Every engagement is built around defined SLAs, transparent reporting, and structured governance — not staff-augmentation with a nicer name.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade operational discipline",
    desc: "Monitoring, incident response, change management, and audit-ready evidence built in from day one — the operational baseline enterprise environments require.",
  },
  {
    icon: Users,
    title: "Senior-led delivery teams",
    desc: "Support and platform engineers with real enterprise operations experience — not scripted L1 teams reading from a knowledge base.",
  },
  {
    icon: RefreshCw,
    title: "Built-in continuous improvement",
    desc: "Every engagement includes ring-fenced enhancement capacity, so applications keep evolving instead of just being kept alive.",
  },
  {
    icon: Wrench,
    title: "Deep Microsoft ecosystem expertise",
    desc: "Operational fluency across Azure, Power Platform, Dynamics 365, and Quickbase — supporting applications on the same stack we design and build them on.",
  },
  {
    icon: GitBranch,
    title: "Long-term partnership",
    desc: "Managed services are multi-year commitments. We stay engaged as the estate evolves — absorbing new applications, adapting SLAs, and maturing the operating model over time.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function ManagedServicesApplicationSupportPage() {
  return (
    <>
      <ServicePageHero
        breadcrumb={service.title}
        icon={service.icon}
        title={service.title}
        tagline={service.tagline}
        intro="From SLA-backed application support and 24×7 monitoring to continuous improvement and executive reporting, Halyse operates business-critical applications post go-live — keeping them stable, secure, and continuously evolving alongside the business."
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
                Applications that keep earning their place.
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Where operational discipline meets long-term business value.
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
            title="The signals that support needs to become a discipline."
            subtitle="These are the recurring realities we see across enterprises whose application estate has grown faster than their operating model — the day-to-day symptoms of reactive support carrying more weight than it should."
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
            subtitle="Our managed services and application support capabilities span the operational lifecycle — from monitoring and incident response through security, release management, and continuous enhancement of the estate."
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
            title="Built on modern operations tooling."
            subtitle="Deep, current expertise across the Microsoft operations stack — the monitoring, ITSM, release, and security tooling that make production-grade managed services possible at enterprise scale."
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
            title="Measurable operational value."
            subtitle="Managed services are a means, not an end. The outcomes that matter are the ones the business feels — higher reliability, stronger security posture, predictable cost, and applications that keep improving over time."
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
            title="Why enterprise leaders choose Halyse for managed services and application support."
            subtitle="The difference is not the ticketing tool — it is how we combine deep Microsoft ecosystem expertise with the operational discipline enterprise environments require."
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
