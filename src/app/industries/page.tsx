import type { Metadata } from "next";
import Link from "next/link";
import {
  Factory,
  HeartPulse,
  Briefcase,
  HardHat,
  ShoppingBag,
  Truck,
  Landmark,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Halyse Technologies serves Manufacturing, Healthcare, Consulting, Construction, Retail, Logistics, and Government sectors with tailored enterprise solutions.",
};

const industries = [
  {
    icon: Factory,
    name: "Manufacturing",
    desc: "We help manufacturers digitize operations, automate production workflows, improve supply chain visibility, and build real-time OEE dashboards — all while integrating with existing ERP systems.",
    useCases: [
      "Production scheduling & MES integration",
      "Quality control and non-conformance tracking",
      "Supplier portal and procurement automation",
      "Inventory and warehouse management systems",
    ],
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    desc: "We support healthcare providers and health-tech companies with compliant, secure platforms for patient data management, clinical workflows, and operational analytics.",
    useCases: [
      "Patient intake and case management systems",
      "Clinical document automation",
      "Compliance tracking and audit reporting",
      "Cross-system integration (EMR, billing, labs)",
    ],
  },
  {
    icon: Briefcase,
    name: "Consulting",
    desc: "Professional services firms use our platforms to manage engagements, track deliverables, streamline billing, and create executive-facing dashboards that demonstrate value to clients.",
    useCases: [
      "Project and resource management portals",
      "Timesheet and billing automation",
      "Client reporting and KPI dashboards",
      "Knowledge base and document management",
    ],
  },
  {
    icon: HardHat,
    name: "Construction",
    desc: "We build field-ready applications and back-office platforms for construction companies — from project tracking and subcontractor management to safety compliance and cost control.",
    useCases: [
      "Project progress tracking and milestone management",
      "Subcontractor and vendor management",
      "Safety inspection and compliance forms",
      "Budget and cost variance dashboards",
    ],
  },
  {
    icon: ShoppingBag,
    name: "Retail",
    desc: "Retail organizations partner with us to unify their omnichannel data, automate replenishment, optimize pricing, and deliver personalized customer experiences through intelligent platforms.",
    useCases: [
      "Inventory and replenishment automation",
      "Customer 360 and loyalty platforms",
      "Sales performance and store analytics",
      "E-commerce and POS integration",
    ],
  },
  {
    icon: Truck,
    name: "Logistics",
    desc: "We help logistics and supply chain companies gain real-time visibility across their operations, automate dispatching and tracking, and reduce operational costs through data-driven decisions.",
    useCases: [
      "Fleet management and route optimization",
      "Shipment tracking and notification systems",
      "Freight billing and invoice automation",
      "Carrier and vendor portal development",
    ],
  },
  {
    icon: Landmark,
    name: "Government",
    desc: "We support government departments and public sector agencies in modernizing legacy systems, digitizing citizen-facing services, and building transparent reporting platforms.",
    useCases: [
      "Citizen service portals and digital forms",
      "Grant management and compliance tracking",
      "Inter-departmental data integration",
      "Public performance dashboards",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        badge="Industries"
        title="Solutions Tailored to Your Industry"
        subtitle="We understand that every sector has unique challenges, compliance requirements, and operational rhythms. Our solutions are built with that context in mind."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Sectors We Serve"
            title="Deep Domain Expertise Across Key Industries"
            subtitle="Our team brings cross-industry experience to every engagement, combining sector knowledge with deep technical capability."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map(({ icon: Icon, name, desc, useCases }) => (
              <div
                key={name}
                className="bg-white rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 p-8 group"
              >
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-13 h-13 bg-blue-700 rounded-xl p-3 flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-lg shadow-blue-100 shrink-0">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">
                      {name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 mt-4">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Common Use Cases
                  </p>
                  <ul className="space-y-2">
                    {useCases.map((uc) => (
                      <li key={uc} className="flex items-start gap-2">
                        <CheckCircle2 size={15} className="text-blue-500 mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-600">{uc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-950 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Your Industry. Your Solution.</h2>
          <p className="text-gray-400 mb-7 text-lg">
            Don&apos;t see your industry listed? We work across many sectors and adapt our approach to your specific context. Let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 rounded-lg transition-colors shadow-lg group"
          >
            Talk to an Expert <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
