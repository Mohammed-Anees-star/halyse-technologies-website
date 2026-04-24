import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  GitMerge,
  BarChart3,
  TrendingUp,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore Halyse Technologies case studies: real-world enterprise solutions that delivered measurable business outcomes.",
};

const caseStudies = [
  {
    icon: FileText,
    label: "Document Management",
    industry: "Professional Services",
    title: "Enterprise Document Management System",
    problem:
      "A professional services firm was managing thousands of contracts, compliance documents, and internal policies across shared drives, email, and paper. Document retrieval took hours, version control was non-existent, and compliance audits were a quarterly crisis.",
    solution:
      "We designed and implemented a centralized document management platform on SharePoint with Power Automate-powered approval workflows, automatic metadata tagging, role-based access control, and real-time audit trails. Power Apps provided a clean interface for document submission, review, and retrieval.",
    outcomes: [
      "75% reduction in document retrieval time",
      "100% digital audit trail — zero paper dependency",
      "Automated compliance reporting cut audit prep from 3 weeks to 2 days",
      "18% reduction in compliance-related risk events in the first year",
    ],
    technologies: ["SharePoint Online", "Power Automate", "Power Apps", "Azure AD"],
    duration: "14 weeks",
  },
  {
    icon: GitMerge,
    label: "Workflow Automation",
    industry: "Manufacturing",
    title: "Multi-Department Workflow Automation System",
    problem:
      "A mid-sized manufacturing company relied on manual approval chains via email for purchase requisitions, leave requests, and vendor onboarding. Process delays were causing procurement bottlenecks and employee frustration, with requests regularly falling through the cracks.",
    solution:
      "We mapped 12 critical business workflows and automated them using Power Automate and Dataverse. A centralized dashboard gave management real-time visibility into pending items, SLA breaches, and completion rates. Role-based notifications ensured every stakeholder had the right information at the right time.",
    outcomes: [
      "83% faster average approval cycle time (from 4 days to 16 hours)",
      "Zero missed approvals — automated escalation after 24 hours",
      "Saved estimated 120 hours/month across departments",
      "Employee satisfaction score for internal processes improved by 40%",
    ],
    technologies: ["Power Automate", "Dataverse", "Power BI", "Microsoft Teams"],
    duration: "10 weeks",
  },
  {
    icon: BarChart3,
    label: "Analytics Platform",
    industry: "Retail",
    title: "Unified Business Intelligence Dashboard Suite",
    problem:
      "A retail organization with 6 regional operations had data spread across separate ERP, POS, HR, and logistics systems. Leadership had no single view of performance — reports were manually compiled every week in Excel and were often outdated or inaccurate before they reached the board.",
    solution:
      "We built a unified data platform using Azure Data Factory to consolidate data from all source systems into a centralized SQL data warehouse. Power BI dashboards were developed for each business unit — finance, operations, HR, and logistics — with a C-suite executive summary view refreshed hourly.",
    outcomes: [
      "Real-time visibility into $24M in annual revenue operations",
      "Reduced weekly report preparation from 3 days to 0 (fully automated)",
      "Identified $400K in annual savings through inventory optimization insights",
      "Decision-making cycle for senior leadership reduced from weeks to hours",
    ],
    technologies: ["Power BI", "Azure Data Factory", "Azure SQL", "Power Automate"],
    duration: "18 weeks",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        badge="Case Studies"
        title="Real Solutions. Measurable Outcomes."
        subtitle="Every engagement is different. These case studies demonstrate how we approach complex business challenges and deliver solutions that create lasting impact."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map(({ icon: Icon, label, industry, title, problem, solution, outcomes, technologies, duration }, idx) => (
            <article
              key={title}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-blue-900 to-gray-950 p-8 text-white">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full border border-blue-500/30">
                    <Icon size={13} />
                    {label}
                  </span>
                  <span className="bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full">
                    {industry}
                  </span>
                  <span className="bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full flex items-center gap-1">
                    <Clock size={12} />
                    {duration}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">{title}</h2>
              </div>

              {/* Body */}
              <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-red-300" />
                    The Problem
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{problem}</p>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-blue-300" />
                    Our Solution
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{solution}</p>

                  {/* Technologies */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md font-medium border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-green-300" />
                    Outcomes
                  </h3>
                  <ul className="space-y-3">
                    {outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <TrendingUp size={15} className="text-green-500 mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-700 font-medium leading-snug">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-blue-100 mb-7">
            Every project starts with a conversation. Let&apos;s understand your challenges and explore what&apos;s possible together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-800 font-bold px-8 py-3.5 rounded-lg hover:bg-blue-50 transition-colors shadow-xl shadow-blue-900/30 group"
          >
            Start a Conversation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
