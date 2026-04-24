import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap,
  BarChart3,
  Layers,
  GitMerge,
  Brain,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore Halyse Technologies' enterprise solutions: Business Process Automation, Data & Analytics, Custom Apps, System Integration, AI, and CRM/ERP.",
};

const solutions = [
  {
    id: "automation",
    icon: Zap,
    title: "Business Process Automation",
    tagline: "Eliminate manual effort. Scale operations.",
    desc: "We help organizations move from fragmented, manual operations to seamless, automated workflows that save time, reduce errors, and free your teams to focus on high-value work.",
    capabilities: [
      "End-to-end workflow automation across departments",
      "Multi-step approval and escalation systems",
      "Power Automate flows for Microsoft 365 environments",
      "Document processing and routing automation",
      "Notifications, alerts, and event-driven triggers",
      "Robotic process automation (RPA) integrations",
    ],
    technologies: ["Microsoft Power Automate", "Power Platform", "SharePoint", "Logic Apps"],
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Data & Analytics Platforms",
    tagline: "Turn raw data into strategic decisions.",
    desc: "We design and implement analytics platforms that consolidate your data and present it through intuitive dashboards — giving leadership and operations teams the visibility they need to act with confidence.",
    capabilities: [
      "Power BI dashboards and interactive reports",
      "Data warehousing and lake architecture",
      "Enterprise data modeling and governance",
      "KPI tracking and performance reporting",
      "Self-service analytics platforms",
      "Scheduled and real-time reporting pipelines",
    ],
    technologies: ["Microsoft Power BI", "Azure Data Factory", "SQL Server", "Fabric"],
  },
  {
    id: "apps",
    icon: Layers,
    title: "Custom Business Applications",
    tagline: "Software that fits your business exactly.",
    desc: "Off-the-shelf software rarely fits. We build custom applications using Power Apps and Quickbase that are tailored to your unique processes, team structures, and data — without the overhead of enterprise software projects.",
    capabilities: [
      "Canvas and model-driven Power Apps",
      "Quickbase relational database applications",
      "Administrative and operations portals",
      "Mobile-ready field applications",
      "Role-based access control and audit trails",
      "Offline and low-code solution delivery",
    ],
    technologies: ["Microsoft Power Apps", "Quickbase", "Dataverse", "Azure SQL"],
  },
  {
    id: "integration",
    icon: GitMerge,
    title: "System Integration & APIs",
    tagline: "Connect your ecosystem. Eliminate silos.",
    desc: "Most businesses run on 5–15 disconnected tools. We architect integration layers that connect your systems in real-time — ensuring data flows automatically, accurately, and reliably across your entire technology stack.",
    capabilities: [
      "RESTful and SOAP API design and implementation",
      "Third-party platform integrations (ERP, CRM, HR)",
      "Real-time and batch data synchronization",
      "Event-driven integration with message queues",
      "Legacy system bridging and modernization",
      "Integration monitoring and error handling",
    ],
    technologies: ["Azure API Management", "Logic Apps", "MuleSoft", "Zapier"],
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI & Intelligent Solutions",
    tagline: "Intelligence that compounds your business value.",
    desc: "We apply AI and machine learning where it creates tangible business impact — from predicting outcomes to automating complex decisions that previously required human judgment.",
    capabilities: [
      "Predictive analytics and demand forecasting",
      "Natural language processing (NLP) applications",
      "AI-powered document understanding and extraction",
      "Intelligent recommendation engines",
      "Anomaly detection and risk scoring",
      "Azure OpenAI and Copilot integrations",
    ],
    technologies: ["Azure OpenAI", "Azure ML", "Copilot Studio", "Cognitive Services"],
  },
  {
    id: "crm",
    icon: Users,
    title: "CRM & ERP Solutions",
    tagline: "Operational excellence from lead to ledger.",
    desc: "We implement and customize Dynamics 365 and Business Central to unify your sales, customer service, finance, and supply chain operations — giving every department a single source of truth.",
    capabilities: [
      "Dynamics 365 Sales and Customer Service",
      "Business Central finance and operations",
      "Custom modules and entity extensions",
      "CRM data migration and cleansing",
      "Sales pipeline and forecasting setup",
      "User training and change management",
    ],
    technologies: ["Dynamics 365", "Business Central", "Power Platform", "Azure DevOps"],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        badge="Our Solutions"
        title="Enterprise Solutions Engineered for Impact"
        subtitle="We don't offer generic services. Every solution is designed around your business objectives, your data, and your team — then delivered with precision."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {solutions.map((sol, idx) => {
            const Icon = sol.icon;
            const isEven = idx % 2 === 0;
            return (
              <div
                key={sol.id}
                id={sol.id}
                className={`mb-20 pb-20 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0 scroll-mt-24`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start`}>
                  {/* Content */}
                  <div className={isEven ? "order-1" : "order-1 lg:order-2"}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-100">
                        <Icon size={22} className="text-white" />
                      </div>
                      <span className="text-blue-600 text-sm font-semibold">{sol.tagline}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{sol.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{sol.desc}</p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {sol.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium border border-blue-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm group"
                    >
                      Discuss This Solution
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Capabilities list */}
                  <div className={isEven ? "order-2" : "order-2 lg:order-1"}>
                    <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-5">
                        Key Capabilities
                      </h3>
                      <ul className="space-y-3">
                        {sol.capabilities.map((cap) => (
                          <li key={cap} className="flex items-start gap-3">
                            <CheckCircle2 size={18} className="text-blue-600 mt-0.5 shrink-0" />
                            <span className="text-sm text-gray-700 leading-relaxed">{cap}</span>
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure Where to Start?</h2>
          <p className="text-blue-100 mb-7">
            Book a free discovery call. We&apos;ll assess your current state, identify the biggest opportunities, and recommend a roadmap tailored to your goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-800 font-bold px-8 py-3.5 rounded-lg hover:bg-blue-50 transition-colors shadow-xl shadow-blue-900/30"
          >
            Schedule a Discovery Call <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
