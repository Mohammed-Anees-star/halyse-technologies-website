import Link from "next/link";
import { Mail, MapPin, ArrowRight, ExternalLink } from "lucide-react";

const LinkedInIcon = ({ size = 14, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const solutions = [
  { label: "Business Process Automation", href: "/solutions#automation" },
  { label: "Data & Analytics", href: "/solutions#analytics" },
  { label: "Custom Business Applications", href: "/solutions#apps" },
  { label: "System Integration & APIs", href: "/solutions#integration" },
  { label: "AI & Intelligent Solutions", href: "/solutions#ai" },
  { label: "CRM & ERP Solutions", href: "/solutions#crm" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const support = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const techBadges = [
  "Microsoft Azure",
  "Power Platform",
  "Dynamics 365",
  "Quickbase",
  "ASP.NET Core",
  "Power BI",
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">

      {/* ── CTA Strip ── */}
      <div className="border-t border-white/[0.06] bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white text-sm font-medium">
            Ready to transform your business operations?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 text-xs font-bold px-5 py-2.5 rounded-lg transition-colors group shrink-0"
          >
            Book a Free Consultation
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* ── Brand Header ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 border-b border-white/[0.06]">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          {/* Logo + description */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-white text-xl font-extrabold tracking-tight">
                Halyse<span className="text-blue-400"> Technologies</span>
              </span>
            </div>
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
              Enterprise AI, Data &amp; Automation Solutions
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Microsoft-certified consulting firm delivering scalable cloud, automation, and
              data solutions for organizations across the US, Australia, and the Middle East.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://linkedin.com/company/halyse-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-blue-600 flex items-center justify-center transition-colors group"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={14} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://halyse.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-blue-600 flex items-center justify-center transition-colors group"
                aria-label="Website"
              >
                <ExternalLink size={14} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Tech badges */}
          <div className="lg:text-right">
            <p className="text-xs font-semibold text-gray-600 uppercase tracking-widest mb-3">
              Our Core Stack
            </p>
            <div className="flex flex-wrap lg:justify-end gap-2">
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-blue-300/70 bg-blue-900/30 border border-blue-800/40 px-3 py-1 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Main 4-Column Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Solutions */}
          <div>
            <h3 className="text-white text-[11px] font-bold uppercase tracking-widest mb-5">
              Solutions
            </h3>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-blue-400 text-sm transition-colors leading-snug"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-[11px] font-bold uppercase tracking-widest mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-blue-400 text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-[11px] font-bold uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors group"
                >
                  Get in Touch
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={13} className="text-blue-500 shrink-0" />
                <a
                  href="mailto:Mohammed.Anees@halyse.com"
                  className="text-gray-500 hover:text-blue-400 text-sm transition-colors"
                >
                  Mohammed.Anees@halyse.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={13} className="text-blue-500 shrink-0" />
                <span className="text-gray-500 text-sm">India · Global Delivery</span>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-[11px] font-bold uppercase tracking-widest mb-5">
              Support
            </h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-blue-400 text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Halyse Technologies Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Microsoft Partner", "Quickbase Expert", "Power Platform Certified"].map((badge) => (
              <span key={badge} className="flex items-center gap-1.5 text-xs text-gray-600">
                <span className="w-1 h-1 rounded-full bg-blue-600" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
