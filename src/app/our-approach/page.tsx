import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  Pencil,
  Code2,
  GitMerge,
  Rocket,
  LifeBuoy,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "Learn how Halyse Technologies delivers enterprise solutions through a structured Discover → Design → Build → Integrate → Deploy → Support methodology.",
};

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    tagline: "Understand before we build.",
    desc: "We invest significant time in understanding your business — the current state, the pain points, the data, and the desired outcomes. This is not a formality; it is where the real work begins. We run stakeholder interviews, process workshops, and data audits to define the problem with precision.",
    deliverables: [
      "Business requirements document (BRD)",
      "As-Is process maps and gap analysis",
      "Technology landscape assessment",
      "Risk and dependency register",
    ],
  },
  {
    number: "02",
    icon: Pencil,
    title: "Design",
    tagline: "Architect with intention.",
    desc: "Based on discovery findings, we design the solution architecture, user experience, and data model. We produce detailed technical and functional specifications and validate them with your team before a single line of code is written. This stage eliminates ambiguity and aligns all stakeholders.",
    deliverables: [
      "Solution architecture diagram",
      "Data model and integration design",
      "UI/UX wireframes and prototypes",
      "Technical specification documents",
    ],
  },
  {
    number: "03",
    icon: Code2,
    title: "Build",
    tagline: "Deliver with quality.",
    desc: "Our engineers build the solution in iterative sprints using Agile methodology. We maintain full transparency — weekly demos, sprint reviews, and a shared project tracker keep you in the loop at every stage. We enforce code quality standards, peer reviews, and automated testing throughout.",
    deliverables: [
      "Working software in iterative sprints",
      "Unit and integration test coverage",
      "Code review documentation",
      "Sprint review presentations",
    ],
  },
  {
    number: "04",
    icon: GitMerge,
    title: "Integrate",
    tagline: "Connect your ecosystem.",
    desc: "We integrate the new solution with your existing systems, data sources, and workflows. Whether connecting to a legacy ERP, a cloud CRM, or a third-party API, we ensure data flows reliably and accurately across your entire technology stack — with robust error handling and monitoring built in.",
    deliverables: [
      "Integration test plans and results",
      "API documentation and contracts",
      "Data migration scripts and validation",
      "End-to-end testing sign-off",
    ],
  },
  {
    number: "05",
    icon: Rocket,
    title: "Deploy",
    tagline: "Go live with confidence.",
    desc: "We manage every aspect of deployment — environment setup, data migration, user acceptance testing (UAT), and cutover planning. We prepare comprehensive user training materials and conduct live training sessions to ensure your team is ready and confident from day one.",
    deliverables: [
      "Deployment and rollback plan",
      "User training materials and videos",
      "UAT sign-off documentation",
      "Go-live checklist and cutover execution",
    ],
  },
  {
    number: "06",
    icon: LifeBuoy,
    title: "Support",
    tagline: "Stay with you beyond launch.",
    desc: "Our engagement doesn't end at go-live. We offer structured post-deployment support, performance monitoring, and continuous improvement programs. As your business evolves, we evolve the solution with it — adding features, optimizing processes, and ensuring the platform keeps delivering value.",
    deliverables: [
      "Support SLA and incident management",
      "Performance monitoring dashboards",
      "Monthly review and optimization reports",
      "Enhancement and change request pipeline",
    ],
  },
];

const principles = [
  "We don't start building until we fully understand the problem.",
  "Transparency is non-negotiable — you see everything we do.",
  "We prefer boring, proven technology over cutting-edge risk.",
  "Every deliverable is documented and handed over cleanly.",
  "We measure success by outcomes, not outputs.",
  "Long-term partnerships matter more than single projects.",
];

export default function OurApproachPage() {
  return (
    <>
      <PageHero
        badge="Our Approach"
        title="A Methodology Built on Rigor and Partnership"
        subtitle="We follow a structured, transparent process that eliminates ambiguity, manages risk, and consistently delivers solutions that work in the real world."
      />

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="6-Stage Process"
            title="From Discovery to Ongoing Success"
            subtitle="Each stage is designed to reduce risk, increase alignment, and ensure we deliver exactly what your business needs."
          />

          {/* Timeline */}
          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 -translate-x-1/2" />

            <div className="space-y-12">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isLeft = idx % 2 === 0;
                return (
                  <div key={step.number} className="relative">
                    {/* Center node */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-8 z-10 w-14 h-14 bg-blue-700 rounded-full items-center justify-center shadow-lg shadow-blue-200">
                      <Icon size={22} className="text-white" />
                    </div>

                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24`}>
                      {/* Left side */}
                      <div className={isLeft ? "lg:text-right" : "lg:col-start-2"}>
                        <div
                          className={`bg-white rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all p-7 ${
                            isLeft ? "lg:ml-auto" : ""
                          }`}
                        >
                          {/* Mobile icon */}
                          <div className="flex items-center gap-3 mb-4 lg:hidden">
                            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
                              <Icon size={18} className="text-white" />
                            </div>
                            <span className="text-4xl font-black text-blue-100">{step.number}</span>
                          </div>

                          <div className={`${isLeft ? "lg:flex lg:flex-col lg:items-end" : ""}`}>
                            <span className="hidden lg:block text-5xl font-black text-blue-100 mb-1">
                              {step.number}
                            </span>
                            <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider">
                              {step.tagline}
                            </span>
                            <h3 className="text-2xl font-bold text-gray-900 mt-1 mb-3">{step.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-5">{step.desc}</p>
                            <div className={`bg-gray-50 rounded-xl p-4 ${isLeft ? "lg:text-left" : ""}`}>
                              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                Key Deliverables
                              </p>
                              <ul className="space-y-1.5">
                                {step.deliverables.map((d) => (
                                  <li key={d} className="flex items-start gap-2">
                                    <CheckCircle2 size={14} className="text-blue-500 mt-0.5 shrink-0" />
                                    <span className="text-xs text-gray-600">{d}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Principles"
            title="How We Think. How We Work."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {principles.map((p, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white/5 rounded-xl p-5 border border-white/10"
              >
                <span className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-sm text-gray-300 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Difference</h2>
          <p className="text-blue-100 mb-7">
            Most projects fail due to poor requirements and misaligned expectations — not technology. Our process is designed to eliminate both. Let&apos;s get started.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-800 font-bold px-8 py-3.5 rounded-lg hover:bg-blue-50 transition-colors shadow-xl shadow-blue-900/30 group"
          >
            Begin Your Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
