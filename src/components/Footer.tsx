import Link from "next/link";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

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
  { label: "Contact", href: "/contact" },
];

const markets = ["United States", "Australia", "United Arab Emirates", "India"];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand — wider column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-900/50">
                <span className="text-white font-black text-base">H</span>
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-tight">Halyse Technologies</div>
                <div className="text-blue-500 text-[9px] tracking-[0.15em] uppercase mt-0.5 font-semibold">
                  Private Limited
                </div>
              </div>
            </Link>

            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Enterprise-grade AI, Data, and Automation solutions built on Microsoft
              and Quickbase — delivering measurable outcomes for ambitious organisations.
            </p>

            {/* Markets */}
            <div className="mb-7">
              <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-3">
                Markets Served
              </p>
              <div className="flex flex-wrap gap-2">
                {markets.map((m) => (
                  <span
                    key={m}
                    className="text-[11px] text-gray-500 bg-white/5 border border-white/8 px-3 py-1 rounded-full"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-2.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-600 border border-white/8 hover:border-blue-600 flex items-center justify-center transition-all text-[11px] font-black text-gray-400 hover:text-white"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-600 border border-white/8 hover:border-blue-600 flex items-center justify-center transition-all text-[11px] font-black text-gray-400 hover:text-white"
                aria-label="X / Twitter"
              >
                𝕏
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white text-[10px] font-bold uppercase tracking-widest mb-6">
              Solutions
            </h3>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-gray-300 text-sm transition-colors leading-snug inline-flex items-start gap-1 group"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-[10px] font-bold uppercase tracking-widest mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-[10px] font-bold uppercase tracking-widest mb-6">
              Contact
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-blue-500 mt-0.5 shrink-0" />
                <a
                  href="mailto:mohammed.anees@halyse.com"
                  className="text-gray-500 hover:text-gray-300 text-sm transition-colors break-all"
                >
                  mohammed.anees@halyse.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-blue-500 mt-0.5 shrink-0" />
                <span className="text-gray-500 text-sm">
                  India · Global Delivery
                </span>
              </li>
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors group"
            >
              Get in Touch
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Halyse Technologies Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-gray-600 hover:text-gray-400 text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-600 hover:text-gray-400 text-xs transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
