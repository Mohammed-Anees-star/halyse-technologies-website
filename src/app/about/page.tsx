import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  CheckCircle2,
  ArrowRight,
  Cpu,
  BarChart3,
  Zap,
  Users,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Halyse Technologies Private Limited — our mission, vision, values, and the team behind our enterprise AI and data solutions.",
};

const technologies = [
  "Microsoft Power Platform",
  "Power BI & Analytics",
  "Power Apps & Automate",
  "Quickbase",
  "Dynamics 365",
  "Business Central",
  "Azure Services",
  "Azure OpenAI",
  "SharePoint Online",
  "REST & GraphQL APIs",
  "SQL & NoSQL Databases",
  "Azure Data Factory",
];

const values = [
  {
    icon: Target,
    title: "Outcome-First",
    desc: "We measure every decision against its impact on your business results. Technology is a means — not an end.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    desc: "No black boxes. You see our work, our decisions, and our progress at every stage of the engagement.",
  },
  {
    icon: Heart,
    title: "Long-Term Partnership",
    desc: "We build relationships, not transactions. Our clients stay with us because we keep delivering value after go-live.",
  },
  {
    icon: Cpu,
    title: "Technical Excellence",
    desc: "We hold ourselves to high engineering standards — clean code, solid architecture, and scalable designs.",
  },
];

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "15+", label: "Industries Served" },
  { value: "7+", label: "Years of Experience" },
  { value: "100%", label: "Client Retention Rate" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="About Halyse Technologies"
        subtitle="We are a specialized enterprise technology consulting firm, built to help ambitious organizations harness the power of AI, Data, and Automation."
      />

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full mb-4 border border-blue-100">
                Who We Are
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                Enterprise Consulting Built for the Modern Data Age
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Halyse Technologies Private Limited is an enterprise technology consulting firm
                  specializing in AI, Data, Business Process Automation, and Custom Application
                  development. We work with organizations across industries to design, build, and
                  deploy solutions that solve real problems and create measurable business value.
                </p>
                <p>
                  Our team brings deep expertise in the Microsoft ecosystem — Power Platform, Dynamics
                  365, Azure, and SharePoint — combined with strong Quickbase capability and a
                  pragmatic approach to emerging AI technologies. We are not a generalist firm that
                  dabbles in everything; we are specialists who go deep on what matters.
                </p>
                <p>
                  Founded with the belief that great technology consulting should be rigorous,
                  transparent, and genuinely client-focused, Halyse Technologies operates with a
                  partner mindset. We integrate into your team, respect your constraints, and stay
                  accountable to outcomes — not just deliverables.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-7 text-white text-center shadow-xl shadow-blue-200"
                >
                  <div className="text-4xl font-extrabold mb-1">{value}</div>
                  <div className="text-sm text-blue-200">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-blue-100">
                <Target size={22} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower organizations with enterprise-grade AI, Data, and Automation solutions
                that are practical, scalable, and aligned to real business outcomes — delivered with
                the transparency and rigor that complex problems deserve.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-blue-100">
                <Eye size={22} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted enterprise technology partner for organizations in India and
                globally — known for deep technical expertise, honest counsel, and a relentless focus
                on creating value that compounds over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Technology Stack"
            title="Technologies We Work With"
            subtitle="We specialize in a curated set of enterprise platforms and technologies — going deep rather than spreading thin."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="bg-blue-50 text-blue-800 border border-blue-100 text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-100 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Values"
            title="What We Stand For"
            subtitle="These are the principles that guide how we work and how we treat our clients."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors">
                <div className="w-11 h-11 bg-blue-700/40 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-blue-100 mb-7">
            If you&apos;re looking for a partner — not just a vendor — we&apos;d love to start the conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 font-bold px-8 py-3.5 rounded-lg hover:bg-blue-50 transition-colors shadow-xl shadow-blue-900/30 group"
            >
              Contact Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/our-approach"
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-8 py-3.5 rounded-lg border border-white/30 transition-colors"
            >
              Our Approach
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
