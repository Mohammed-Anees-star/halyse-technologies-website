import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  Wrench,
  ShieldCheck,
  LifeBuoy,
  UserPlus,
  GraduationCap,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Target,
  Sparkles,
  Award,
  TrendingUp,
  Users,
  Building2,
  Factory,
  HeartPulse,
  Landmark,
  HardHat,
  ShoppingBag,
  Truck,
  ChevronDown,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Halyse Technologies delivers end-to-end enterprise services — consulting, implementation, managed services, support, staff augmentation, and training — across Microsoft Cloud, Power Platform, Dynamics 365, Azure, and Quickbase.",
};

// ─── SERVICE LINES ──────────────────────────────────────────────────────────

const serviceLines = [
  {
    id: "consulting",
    icon: Compass,
    title: "Enterprise Applications & Modernization",
    tagline: "Designing and modernizing business-critical applications for scale.",
    desc: "Halyse helps organizations design, build, modernize, and extend enterprise applications that power critical business operations. We modernize legacy systems, develop custom business applications, and improve existing platforms to enhance performance, usability, security, and scalability. Through modern architecture and cloud-based technologies, we deliver reliable solutions that streamline operations, enable modernization, and create a strong foundation for future growth.",
    deliverables: [
      "Digital transformation strategy & business case",
      "Technology architecture assessment",
      "Microsoft Cloud & Power Platform readiness audit",
      "Data maturity & AI opportunity assessment",
      "ROI modeling and investment prioritization",
      "12–24 month technology roadmap",
    ],
    engagement: "Fixed-scope engagements",
    duration: "2 – 6 weeks",
    idealFor: "CIOs, CTOs, and Heads of Digital planning enterprise investments.",
  },
  {
    id: "implementation",
    icon: Wrench,
    title: "Integration, APIs & Automation",
    tagline: "Connecting systems, automating processes, and enabling seamless data flow.",
    desc: "Halyse helps organizations integrate applications, data, and business processes across modern technology environments. We design and implement API-led integration, workflow automation, and event-driven solutions that reduce manual effort, improve interoperability, and streamline operations. From enterprise system integration and business process automation to cloud-native integration services, we deliver secure, scalable solutions that enable greater agility, operational efficiency, and long-term business resilience.",
    deliverables: [
      "Power Platform & Dynamics 365 solution delivery",
      "Azure cloud architecture & DevOps setup",
      "Custom application development (ASP.NET Core, React)",
      "Data platform build-outs (Fabric, Synapse, Power BI)",
      "Integration & API layer engineering",
      "Migration from legacy platforms",
    ],
    engagement: "Fixed-price or T&M",
    duration: "6 – 20 weeks per phase",
    idealFor: "Enterprises modernizing operations, launching new digital products, or replatforming legacy systems.",
  },
  {
    id: "managed-services",
    icon: ShieldCheck,
    title: "Azure Cloud & Platform Engineering",
    tagline: "Building secure, scalable cloud foundations for modern enterprise applications.",
    desc: "Halyse helps organizations design, deploy, and optimize Azure-based cloud platforms that support business-critical applications, data, and integrations. We modernize cloud environments, migrate workloads, and implement Azure services that improve scalability, resilience, and operational efficiency. From application hosting and managed databases to storage, cloud integration, and platform optimization, we deliver secure, reliable solutions that provide a strong foundation for digital transformation and long-term growth.",
    deliverables: [
      "24×7 monitoring & incident response",
      "Environment & release management",
      "Security patching & compliance reporting",
      "Cost optimization (FinOps) reviews",
      "Backlog-driven continuous enhancement",
      "Monthly service reviews with KPIs",
    ],
    engagement: "Retainer with SLAs",
    duration: "12 – 36 month contracts",
    idealFor: "Enterprises with production workloads requiring 99.9%+ availability.",
  },
  {
    id: "support-ams",
    icon: LifeBuoy,
    title: "Data Engineering, Analytics & AI",
    tagline: "Turning enterprise data into insight, intelligence, and better decisions.",
    desc: "Halyse helps organizations design, modernize, and optimize data platforms that improve reporting, analytics, and decision-making across the enterprise. We deliver modern data engineering, business intelligence, analytics, and AI solutions that unify data, strengthen governance, and create trusted foundations for insight and innovation. Our focus is on building scalable, secure, and well-governed data platforms that improve data accessibility, enable informed decision-making, and support long-term business growth.",
    deliverables: [
      "L1 / L2 / L3 tiered support",
      "Bug triage and hotfix delivery",
      "Minor enhancement backlog capacity",
      "User access & administration",
      "Documentation & runbook maintenance",
      "Quarterly health checks",
    ],
    engagement: "Fixed monthly capacity",
    duration: "Rolling contracts",
    idealFor: "Product owners needing predictable post-launch support without hiring internal teams.",
  },
  {
    id: "staff-augmentation",
    icon: UserPlus,
    title: "Business Applications & Low-Code Platforms",
    tagline: "Delivering agile business applications on trusted enterprise platforms.",
    desc: "Halyse helps organizations design, implement, and extend business applications using Microsoft Power Platform, Dynamics 365, and Quickbase. We help clients streamline business processes, improve user experience and adoption, and deliver solutions faster than traditional custom development while maintaining strong governance, scalability, and long-term maintainability. Our focus is on building practical, high-value applications that improve operational efficiency and evolve alongside changing business needs.",
    deliverables: [
      "Senior Power Platform architects & developers",
      "Dynamics 365 functional & technical consultants",
      "Azure cloud & DevOps engineers",
      "Data engineers & BI specialists",
      "Full-stack .NET & React engineers",
      "Solution architects & tech leads",
    ],
    engagement: "Time & materials",
    duration: "3 – 24 month placements",
    idealFor: "Enterprises facing capacity gaps or specialist skill shortages inside internal teams.",
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "Managed Services & Application Support",
    tagline: "Keeping enterprise applications secure, stable, and continuously improving.",
    desc: "Halyse helps organizations support, maintain, and optimize business-critical applications and platforms after go-live. Our managed services include application and platform monitoring, incident resolution, performance optimization, proactive maintenance, and ongoing enhancements that help clients maintain reliability, improve user experience, and reduce operational risk. We provide structured, responsive support that keeps enterprise systems operating effectively while enabling continuous improvement and long-term business value.",
    deliverables: [
      "Executive & stakeholder workshops",
      "End-user training programs",
      "Power Platform Center of Excellence enablement",
      "Admin & developer certification prep",
      "Change management & communications support",
      "On-demand learning content & job aids",
    ],
    engagement: "Fixed-scope programs",
    duration: "2 – 8 week programs",
    idealFor: "Organizations rolling out new platforms or scaling internal capability.",
  },
];

// ─── SIGNATURE OFFERINGS ────────────────────────────────────────────────────

const signatureOfferings = [
  {
    icon: Sparkles,
    tag: "Fixed Scope · 6 Weeks",
    title: "AI Rapid Pilot",
    desc: "From opportunity assessment to a live, production-ready AI pilot on Azure OpenAI — in six weeks. Includes use case selection, data readiness, prototype build, and business case for scale-out.",
    outcomes: [
      "1 production-grade AI pilot",
      "Executive scale-out business case",
      "Reference architecture & governance",
    ],
  },
  {
    icon: Target,
    tag: "Fixed Scope · 4 Weeks",
    title: "Power Platform Governance Kickstart",
    desc: "Stand up an enterprise-grade Power Platform Center of Excellence — environments, DLP policies, monitoring, maker enablement, and governance operating model — in one month.",
    outcomes: [
      "Full CoE toolkit deployment",
      "DLP & environment strategy",
      "Enablement + governance playbook",
    ],
  },
  {
    icon: TrendingUp,
    tag: "Fixed Scope · 3 Weeks",
    title: "Data & Analytics Accelerator",
    desc: "A structured sprint that assesses your data landscape, delivers a modern Fabric / Power BI reference architecture, and ships two working executive dashboards on real data.",
    outcomes: [
      "Data maturity assessment",
      "Reference architecture (Fabric-ready)",
      "2 live executive dashboards",
    ],
  },
];

// ─── DELIVERY PRINCIPLES ────────────────────────────────────────────────────

const principles = [
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Governance",
    desc: "Every engagement runs on Azure DevOps with source control, code reviews, environment strategy, and traceable requirements from day one.",
  },
  {
    icon: Users,
    title: "Senior-Led Delivery",
    desc: "You get senior architects and consultants — not junior teams learning on your project. Every workstream is led by a proven expert.",
  },
  {
    icon: Award,
    title: "Microsoft Partner Standards",
    desc: "As a Microsoft Partner, we deliver against Microsoft's Well-Architected Framework and cloud adoption best practices — every time.",
  },
  {
    icon: Clock,
    title: "Predictable & Transparent",
    desc: "Weekly status, burn-down tracking, and clear change-control. No surprises. No scope creep. No opaque timesheets.",
  },
];

// ─── ENGAGEMENT MODELS ──────────────────────────────────────────────────────

const engagementModels = [
  { name: "Discovery Workshop", desc: "1–2 week fixed engagement to align on scope, outcomes, and roadmap." },
  { name: "Fixed-Price Project", desc: "Defined scope, defined outcomes, defined price. Ideal for well-scoped builds." },
  { name: "Time & Materials", desc: "Flexible model for evolving scopes and iterative delivery." },
  { name: "Dedicated Team", desc: "A long-term, ring-fenced team scaled to your program." },
  { name: "Managed Services", desc: "Outcome-based retainers with SLAs, monitoring, and enhancement capacity." },
];

// ─── TECHNOLOGY STACK ───────────────────────────────────────────────────────

const stack = [
  { group: "Microsoft Cloud", items: ["Azure", "Microsoft 365", "Azure DevOps", "Azure OpenAI"] },
  { group: "Business Applications", items: ["Dynamics 365", "Business Central", "Dataverse", "Power Platform"] },
  { group: "Low-Code Platforms", items: ["Power Apps", "Power Automate", "Power Pages", "Quickbase"] },
  { group: "Data & AI", items: ["Microsoft Fabric", "Power BI", "Azure ML", "Copilot Studio"] },
  { group: "Custom Engineering", items: ["ASP.NET Core", "React", "TypeScript", "SQL Server"] },
];

// ─── INDUSTRIES ─────────────────────────────────────────────────────────────

const industries = [
  { icon: Factory, name: "Manufacturing" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Landmark, name: "Financial Services" },
  { icon: HardHat, name: "Construction" },
  { icon: Building2, name: "Professional Services" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: Truck, name: "Logistics" },
];

// ─── FAQS ───────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "How quickly can you mobilize a delivery team?",
    a: "Discovery engagements typically start within 1–2 weeks of signature. Full delivery teams — including senior architects — can be onboarded within 2–4 weeks depending on skill mix and clearance requirements.",
  },
  {
    q: "How do you handle intellectual property and data security?",
    a: "You retain full ownership of all code, artifacts, and data produced during the engagement. We operate under strict NDAs, follow Microsoft's Well-Architected security baselines, and can align with client-specific security controls, ISO 27001 processes, or industry regulations (HIPAA, PCI, etc.) on request.",
  },
  {
    q: "Do you provide fixed-price engagements?",
    a: "Yes — for well-scoped work, we prefer fixed-price. Our discovery process defines scope, outcomes, timeline, and price up front. For evolving or ambiguous scopes, we recommend Time & Materials with weekly transparency.",
  },
  {
    q: "Can you work alongside our internal team?",
    a: "Absolutely. Most of our engagements are joint delivery — we embed senior consultants and architects alongside your internal teams, transferring knowledge continuously so you build long-term capability rather than dependency.",
  },
  {
    q: "What SLAs do you offer for managed services?",
    a: "Standard tiers include 99.5%, 99.9%, and 99.95% availability with corresponding response and resolution times. SLAs are tailored during contract design to match business criticality and the underlying platform architecture.",
  },
  {
    q: "Do you support offshore, hybrid, or onsite delivery?",
    a: "All three. We deliver from India as the primary hub, with client-facing consultants and architects available onsite or hybrid across the US, Australia, and the Middle East depending on engagement needs.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────s──────────────────

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Our Services"
        title="Senior-led technology consulting and delivery services"
        subtitle="Halyse helps organizations plan, build, deliver, and run business-critical technology across Microsoft Cloud, Power Platform, Dynamics 365, Azure, and Quickbase. From early strategy through ongoing support, our teams work alongside enterprise leaders to modernize operations, reduce delivery risk, and create measurable business value."
      />

      {/* TRUST STRIP */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            <div className="text-center md:text-left">
              <div className="text-3xl font-black text-gray-900">50+</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl font-black text-gray-900">8+</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Years of Experience</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl font-black text-gray-900">98%</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Client Satisfaction</div>
            </div>
            <div className="text-center md:text-left flex md:justify-start justify-center items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                <Award size={20} className="text-blue-700" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">Microsoft Partner</div>
                <div className="text-xs text-gray-500">PMC Pro-enabled</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE LINES OVERVIEW */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Service Lines"
            title="Enterprise applications, integrations, and automation engineered for scale."
            subtitle="Halyse helps organizations design, build, modernize, integrate, and support business-critical technology solutions. Our expertise spans enterprise applications, custom software, system integrations, business process automation, Azure cloud solutions, data engineering, Microsoft Fabric, analytics, AI, and Microsoft business platforms including Power Platform, Dynamics 365, and Quickbase. We deliver secure, scalable, and connected solutions that modernize legacy environments, streamline operations, improve data accessibility, and enable long-term business growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceLines.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg shadow-blue-100 group-hover:scale-105 transition-transform">
                      <Icon size={22} className="text-white" />
                    </div>
                    <ArrowUpRight size={18} className="text-gray-300 group-hover:text-blue-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1.5">{s.title}</h3>
                  <p className="text-xs font-semibold text-blue-600 mb-3">{s.tagline}</p>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{s.desc}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* DETAILED SERVICE LINES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceLines.map((s, idx) => {
            const Icon = s.icon;
            const isEven = idx % 2 === 0;
            return (
              <div
                key={s.id}
                id={s.id}
                className="mb-20 pb-20 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0 scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Content */}
                  <div className={isEven ? "order-1" : "order-1 lg:order-2"}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-100">
                        <Icon size={22} className="text-white" />
                      </div>
                      <span className="text-blue-600 text-sm font-semibold">{s.tagline}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{s.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-7">
                      <div className="border-l-2 border-blue-600 pl-3">
                        <div className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">Engagement</div>
                        <div className="text-sm font-semibold text-gray-900">{s.engagement}</div>
                      </div>
                      <div className="border-l-2 border-blue-600 pl-3">
                        <div className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">Duration</div>
                        <div className="text-sm font-semibold text-gray-900">{s.duration}</div>
                      </div>
                      <div className="border-l-2 border-blue-600 pl-3">
                        <div className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">Ideal For</div>
                        <div className="text-xs text-gray-700 leading-snug">{s.idealFor}</div>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm group"
                    >
                      Discuss This Service
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Deliverables */}
                  <div className={isEven ? "order-2" : "order-2 lg:order-1"}>
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-5">
                        What&apos;s Included
                      </h3>
                      <ul className="space-y-3">
                        {s.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-3">
                            <CheckCircle2 size={18} className="text-blue-600 mt-0.5 shrink-0" />
                            <span className="text-sm text-gray-700 leading-relaxed">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SIGNATURE OFFERINGS */}
      <section className="py-24 bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            badge="Signature Offerings"
            title="Fixed-scope accelerators."
            subtitle="For enterprises that need momentum fast — our productized engagements deliver executive-visible outcomes within weeks, not quarters."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {signatureOfferings.map((o) => {
              const Icon = o.icon;
              return (
                <div
                  key={o.title}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] hover:border-blue-400/30 transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-5">
                    <Icon size={22} className="text-white" />
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-blue-300 font-semibold mb-2">
                    {o.tag}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{o.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-5">{o.desc}</p>
                  <div className="border-t border-white/10 pt-4">
                    <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-2">Outcomes</div>
                    <ul className="space-y-1.5">
                      {o.outcomes.map((out) => (
                        <li key={out} className="flex items-start gap-2 text-xs text-gray-300">
                          <CheckCircle2 size={13} className="text-cyan-400 mt-0.5 shrink-0" />
                          {out}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DELIVERY PRINCIPLES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Why Halyse"
            title="How enterprise-grade actually feels."
            subtitle="Behind every service line is a delivery model built for scrutiny — the kind that satisfies procurement, security, and the board."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-blue-200 transition-colors">
                  <div className="w-11 h-11 bg-white rounded-xl border border-blue-100 flex items-center justify-center mb-5 shadow-sm">
                    <Icon size={20} className="text-blue-700" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Engagement Models"
            title="Contract the way that works for you."
            subtitle="From short discovery workshops to multi-year managed services, we offer the commercial flexibility enterprises need."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {engagementModels.map((m, i) => (
              <div key={m.name} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
                <div className="text-xs font-bold text-blue-600 mb-2">0{i + 1}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{m.name}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Technology Stack"
            title="Deep in the Microsoft ecosystem."
            subtitle="Our teams hold current, hands-on expertise across the platforms that matter most to modern enterprises."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {stack.map((s) => (
              <div key={s.group} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-3">{s.group}</div>
                <div className="flex flex-wrap gap-1.5">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs bg-white text-gray-700 px-2.5 py-1 rounded-md border border-gray-200 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES STRIP */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-10">
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase mb-3 text-blue-400">
                Industries
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
                Domain fluency across regulated & complex sectors.
              </h2>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-white transition-colors self-start lg:self-auto"
            >
              Explore industry expertise
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {industries.map((i) => {
              const Icon = i.icon;
              return (
                <div
                  key={i.name}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-white/[0.08] hover:border-blue-400/30 transition-all"
                >
                  <Icon size={22} className="text-blue-300" />
                  <span className="text-xs text-white/90 font-medium text-center">{i.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Frequently Asked"
            title="What enterprise buyers ask us."
            subtitle="The questions that come up in every procurement conversation — answered up front."
          />

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 list-none">
                  <span className="text-base font-semibold text-gray-900 pr-8">{f.q}</span>
                  <ChevronDown size={20} className="text-blue-600 shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-5 -mt-1 text-sm text-gray-600 leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
            Ready to see what we can deliver together?
          </h2>
          <p className="text-blue-100 text-lg mb-9 max-w-2xl mx-auto leading-relaxed">
            Book a 30-minute discovery call. We&apos;ll listen to your priorities, share relevant experience, and follow up with a tailored proposal within 5 business days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors shadow-xl shadow-blue-900/30 text-sm"
            >
              Book a Discovery Call <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/15 border border-white/20 transition-colors text-sm"
            >
              Request Capabilities Deck
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
