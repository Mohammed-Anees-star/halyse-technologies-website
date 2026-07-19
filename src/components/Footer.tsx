import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Grid */}
      <div className="max-w-5xl mx-auto px-5 lg:translate-x-10 lg:px-12 pt-20 pb-16">
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-18 gap-y-20">
          <div>
            <h3 className="text-gray-900 text-xs font-semibold uppercase tracking-[0.22em] mb-5">
              Solutions
            </h3>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 text-sm leading-relaxed transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 text-xs font-semibold uppercase tracking-[0.22em] mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 text-xs font-semibold uppercase tracking-[0.22em] mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-blue-600 shrink-0 mt-0.5" />
                <a
                  href="mailto:Mohammed.Anees@halyse.com"
                  className="text-gray-600 hover:text-blue-600 text-sm transition-colors break-all"
                >
                  Mohammed.Anees@halyse.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-600 shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">
                  India · Global Delivery
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 text-xs font-semibold uppercase tracking-[0.22em] mb-5">
              Support
            </h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  
      
      

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Halyse Technologies Private Limited. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            {["Microsoft Partner", "Quickbase Expert", "Power Platform Certified"].map((badge) => (
              <span key={badge} className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
