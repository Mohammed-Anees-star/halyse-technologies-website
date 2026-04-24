import Link from "next/link";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const solutions = [
  { label: "Business Process Automation", href: "/solutions#automation" },
  { label: "Data & Analytics", href: "/solutions#analytics" },
  { label: "Custom Business Apps", href: "/solutions#apps" },
  { label: "System Integration", href: "/solutions#integration" },
  { label: "AI & Intelligent Solutions", href: "/solutions#ai" },
  { label: "CRM & ERP Solutions", href: "/solutions#crm" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center shadow-lg shadow-blue-900/50">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-tight">Halyse Technologies</div>
                <div className="text-blue-400 text-[10px] tracking-wider uppercase mt-0.5">Private Limited</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-7">
              Delivering enterprise-grade AI, Data, and Automation solutions that transform how modern businesses operate and compete globally.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors text-gray-300 text-xs font-bold border border-gray-700 hover:border-blue-600"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors text-gray-300 text-xs font-bold border border-gray-700 hover:border-blue-600"
                aria-label="Twitter / X"
              >
                𝕏
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors border border-gray-700 hover:border-blue-600"
                aria-label="Website"
              >
                <Globe size={15} className="text-gray-400" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold text-xs mb-6 uppercase tracking-widest">Solutions</h3>
            <ul className="space-y-3.5">
              {solutions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors leading-snug"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-xs mb-6 uppercase tracking-widest">Company</h3>
            <ul className="space-y-3.5">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-xs mb-6 uppercase tracking-widest">Contact</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-blue-400 mt-0.5 shrink-0" />
                <a
                  href="mailto:info@halysetechnologies.com"
                  className="text-gray-400 hover:text-blue-400 text-sm transition-colors break-all"
                >
                  info@halysetechnologies.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-blue-400 mt-0.5 shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-blue-400 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">India · Serving clients globally</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Halyse Technologies Private Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-400 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-400 text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
