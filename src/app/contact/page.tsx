import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Halyse Technologies. Let's discuss your AI, Data, and Automation challenges and how we can help.",
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email Us",
    value: "mohammed.anees@halyse.com",
    sub: "We respond within 1 business day",
    href: "mailto:mohammed.anees@halyse.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 123 456 7890",
    sub: "Mon–Fri, 9AM–6PM IST",
    href: "tel:+911234567890",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    sub: "Serving clients globally",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "< 24 Hours",
    sub: "For all business enquiries",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact Us"
        title="Let's Start a Conversation"
        subtitle="Tell us about your challenges and objectives. We'll come prepared with ideas, not just a pitch."
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: Details */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Whether you have a specific project in mind or are just exploring what&apos;s possible,
                  we&apos;d love to hear from you. No hard sell — just an honest conversation.
                </p>
              </div>

              <div className="space-y-4">
                {contactDetails.map(({ icon: Icon, label, value, sub, href }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
                  >
                    <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-semibold text-gray-900 hover:text-blue-700 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-gray-900">{value}</p>
                      )}
                      <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* LinkedIn */}
              <div className="bg-blue-700 rounded-xl p-5 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-sm">in</span>
                  <span className="font-semibold text-sm">Connect on LinkedIn</span>
                </div>
                <p className="text-xs text-blue-200 mb-3">
                  Follow us for insights on AI, automation, and enterprise technology.
                </p>
                <a
                  href="#"
                  className="inline-block text-xs bg-white/20 hover:bg-white/30 text-white font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  Visit our LinkedIn Page →
                </a>
              </div>

              {/* What to expect */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare size={16} className="text-blue-600" />
                  <span className="text-sm font-bold text-gray-900">What to Expect</span>
                </div>
                <ol className="space-y-2 text-xs text-gray-600">
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">1.</span> We respond within 1 business day</li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">2.</span> A brief intro call to understand your needs</li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">3.</span> A tailored proposal or discovery session</li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">4.</span> Clear next steps — no pressure</li>
                </ol>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
