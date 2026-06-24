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
  // Anees { label: "Contact", href: "/contact" }, end//
];

const markets = ["United States", "Australia", "United Arab Emirates", "India"];

export default function Footer() {
  return (
    /* Changed from bg-gray-9550 to bg-white */


 <footer className="bg-white text-gray-400"> 
     
          {/* Main footer body */}
      <div className="max-full px-4 sm:px-6 lg:px-8 pt-20 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-items-center"> 

          
          {/* Solutions */}
          <div>
            <h3 className="text-black text-[15px] font-bold uppercase tracking-widest mb-6">
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
            <h3 className="text-black text-[15px] font-bold uppercase tracking-widest mb-6">
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
            <h3 className="text-black text-[15px] font-bold uppercase tracking-widest mb-6">
              Contact
            </h3>
            <ul className="space-y-4 mb-8">
             

              <li>
    <Link
      href="/contact"
      className="text-gray-500 hover:text-blue-600 text-sm transition-colors"
    >
      Contact Us
    </Link>
  </li>


            
              <li className="flex items-start gap-3">
                {/* Anees <MapPin size={14} className="text-blue-500 mt-0.5 shrink-0" /> End */}
                <span className="text-gray-500 text-sm">
                  India · Global Delivery
                </span>
              </li>
            </ul>

           {/* -Anees amended  <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors group"
            >
              Get in Touch
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link> anees till here */ }          
          
          </div>


          
  {/* Support */}
<div>
  <h3 className="text-black text-[15px] font-bold uppercase tracking-widest mb-6">
    Support
  </h3>

  <ul className="space-y-3">
    <li>
      <Link
        href="/privacy"
        className="text-gray-500 hover:text-blue-600 text-sm transition-colors"
      >
        Privacy Policy
      </Link>
    </li>

    <li>
      <Link
        href="/terms"
        className="text-gray-500 hover:text-blue-600 text-sm transition-colors"
      >
        Terms of Service
      </Link>
    </li>
  </ul>
</div>




        </div>
      </div>


<div className="w-full border-t border-white/[0.06]">
  <div className="w-full px-4 sm:px-6 lg:px-8 py-5 flex justify-center">
    <p className="text-gray-600 text-xs">
      © {new Date().getFullYear()} Halyse Technologies Private Limited. All rights reserved.
    </p>
  </div>
</div>
      
    </footer>
  );
}
