import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  GitMerge,
  BarChart3,
  Zap,
  Brain,
  Users,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
} from "lucide-react";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore representative engagements from Halyse Technologies — enterprise solutions across Power Platform, Azure, Dynamics 365, and Quickbase that deliver measurable business outcomes.",
};

const engagements = [
  {
    icon: Zap,
    label: "Process Automation",
    industry: "Professional Services",
    title: "End-to-End Approval Workflow Modernization",
    challenge:
      "A consulting firm was managing purchase requisitions, leave approvals, and vendor onboarding through scattered email chains and shared spreadsheets — leading to bottlenecks, missed approvals, and zero audit visibility.",
    approach:
      "We mapped the firm's twelve most critical workflows and rebuilt them using Power Automate, Dataverse, and Power Apps. A unified Power BI dashboard gave leadership real-time visibility into pending items, SLA breaches, and completion rates — with automated escalation rules.",
    capabilities: [
      "Workflow discovery and process mapping",
      "Multi-step approval and escalation flows",
      "Centralized dashboard with SLA tracking",
      "Role-based notifications and routing",
    ],
    technologies: ["Power Automate", "Power Apps", "Dataverse", "Power BI"],
    duration: "8–12 weeks",
  },
  {
    icon: BarChart3,
    label: "Data & Analytics",
    industry: "Manufacturing",
    title: "Unified Operational Intelligence Platform",
    challenge:
      "A manufacturer with multiple regional operations had data spread across ERP, MES, HR, and logistics systems. Leadership had no single source of truth — weekly reports were manually built in Excel and consistently outdated.",
    approach:
      "We architected a centralized data platform on Azure SQL and Microsoft Fabric, consolidating data from all source systems through Azure Data Factory pipelines. Power BI dashboards were tailored to each business unit, with hourly-refreshed executive views.",
    capabilities: [
      "Data warehouse and lakehouse architecture",
      "ETL/ELT pipelines from disparate sources",
      "Role-based KPI dashboards",
      "Real-time and scheduled refresh strategies",
    ],
    technologies: ["Power BI", "Microsoft Fabric", "Azure Data Factory", "Azure SQL"],
    duration: "12–18 weeks",
  },
  {
    icon: Users,
    label: "CRM & ERP",
    industry: "Financial Services",
    title: "Dynamics 365 Sales Implementation & Integration",
    challenge:
      "A financial services firm needed to migrate from a legacy CRM to Dynamics 365 Sales, with deep integration into their existing finance and document management systems — without disrupting active client workflows.",
    approach:
      "We delivered a phased Dynamics 365 implementation with custom Dataverse entities, sales pipeline configuration, and Power Automate flows connecting CRM to SharePoint and the firm's accounting platform. Plugins and custom workflows enforced business rules.",
    capabilities: [
      "Dynamics 365 Sales configuration & customization",
      "Custom entities, plugins, and business rules",
      "Data migration from legacy CRM",
      "Cross-system integrations via REST APIs",
    ],
    technologies: ["Dynamics 365", "Dataverse", "Power Automate", "ASP.NET Core APIs"],
    duration: "14–20 weeks",
  },
  {
    icon: FileText,
    label: "Custom Applications",
    industry: "Construction",
    title: "Quickbase Field Operations Platform",
    challenge:
      "A construction company needed a single platform to track project progress, manage subcontractor compliance, and capture safety inspections from the field — replacing a patchwork of spreadsheets and paper forms.",
    approach:
      "We designed and built a Quickbase application with mobile-ready interfaces for field teams, automated workflows for subcontractor onboarding, and integrated dashboards for project managers. Pipelines connected Quickbase with the company's accounting and document systems.",
    capabilities: [
      "Quickbase relational data model design",
      "Mobile-first field forms with photo capture",
      "Subcontractor onboarding automation",
      "Pipelines for ERP & document integration",
    ],
    technologies: ["Quickbase", "Quickbase Pipelines", "REST APIs", "Power BI"],
    duration: "10–14 weeks",
  },
  {
    icon: GitMerge,
    label: "System Integration",
    industry: "Healthcare",
    title: "Multi-System API Integration Layer",
    challenge:
      "A healthcare provider was running 8 disconnected systems — EMR, billing, scheduling, labs, HR — with manual data entry between them. Errors and delays were impacting both patient care and revenue cycle operations.",
    approach:
      "We built a centralized integration layer using Azure API Management, Azure Functions, and Logic Apps. Real-time and batch synchronization, with comprehensive error handling and monitoring through Application Insights. Sensitive data was secured with Azure Key Vault.",
    capabilities: [
      "API gateway architecture and design",
      "Event-driven and scheduled integrations",
      "Error handling, retry, and dead-letter patterns",
      "Compliance-ready security & monitoring",
    ],
    technologies: ["Azure API Management", "Azure Functions", "Logic Apps", "Service Bus"],
    duration: "12–16 weeks",
  },
  {
    icon: Brain,
    label: "AI & Intelligent Solutions",
    industry: "Retail",
    title: "AI-Powered Document Intelligence",
    challenge:
      "A retail organization was processing thousands of vendor invoices, purchase orders, and contracts manually — with high error rates and 5–7 day processing cycles slowing down accounts payable.",
    approach:
      "We deployed an Azure OpenAI–powered document understanding solution with Copilot Studio. The system extracts structured data from unstructured documents, validates against business rules, and routes exceptions to humans — with all activity logged in Dataverse.",
    capabilities: [
      "Document intake and OCR pipeline",
      "AI-powered data extraction and validation",
      "Human-in-the-loop exception handling",
      "Full audit trail and reporting",
    ],
    technologies: ["Azure OpenAI", "Copilot Studio", "Power Automate", "Dataverse"],
    duration: "10–14 weeks",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        badge="Case Studies"
        title="Representative"
        highlight="engagements."
        subtitle="A look at the kinds of problems we solve, the approach we take, and the technologies we apply. Every engagement is shaped by the specific context of the client."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro note */}
          <div className="max-w-3xl mb-16 p-6 rounded-2xl bg-blue-50/60 border border-blue-100">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-blue-700">A note on confidentiality:</strong> The engagements
              below represent the types of problems we work on, the methodology we apply, and the
              outcomes we design for. Specific client names, identifying details, and proprietary
              metrics are omitted to protect client confidentiality. We&apos;re happy to discuss
              relevant references privately under NDA.
            </p>
          </div>

          {/* Engagement cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {engagements.map(({ icon: Icon, label, industry, title, challenge, approach, capabilities, technologies, duration }, i) => (
              <article
                key={title}
                className="group bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-2xl hover:shadow-blue-100/50 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Header */}
                <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-gray-950 p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative z-10">
                    <div className="text-blue-300 text-xs font-bold tracking-widest mb-5">
                      {String(i + 1).padStart(2, "0")} · {label.toUpperCase()}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mb-5">
                      <span className="bg-white/10 backdrop-blur-sm text-white/80 text-[11px] px-2.5 py-1 rounded-full">
                        {industry}
                      </span>
                      <span className="bg-white/10 backdrop-blur-sm text-white/80 text-[11px] px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Clock size={11} />
                        {duration}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl lg:text-3xl font-bold leading-tight mb-2">
                      {title}
                    </h2>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-[10px] font-bold text-red-500 uppercase tracking-[0.2em] mb-3">
                      The Challenge
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-3">
                      Our Approach
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{approach}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-[10px] font-bold text-green-600 uppercase tracking-[0.2em] mb-3">
                      Capabilities Applied
                    </h3>
                    <ul className="space-y-2">
                      {capabilities.map((c) => (
                        <li key={c} className="flex items-start gap-2.5">
                          <CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" />
                          <span className="text-sm text-gray-700 leading-snug">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-auto pt-5 border-t border-gray-100">
                    {technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gray-950 rounded-[2rem] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-900/20 rounded-full blur-[80px]" />
            </div>
            <div className="relative z-10 px-8 py-20 sm:px-16 text-center max-w-3xl mx-auto">
              <span className="inline-block text-xs font-bold text-blue-400 tracking-[0.2em] uppercase mb-6">
                Have a similar challenge?
              </span>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-[1.05] mb-6">
                Let&apos;s discuss your{" "}
                <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                  project.
                </span>
              </h2>
              <p className="text-gray-400 mb-10 max-w-xl mx-auto font-light">
                Every project starts with a conversation. Tell us your context, your constraints,
                and your goals — we&apos;ll come back with a clear perspective.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-2xl shadow-blue-900/50 text-sm group"
              >
                Start a Conversation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
