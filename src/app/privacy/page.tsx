import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Halyse Technologies Private Limited. Learn how we collect, use, and protect your personal information.",
};

const sections = [
  {
    id: "overview",
    title: "1. Overview",
    content: `Halyse Technologies Private Limited ("Halyse", "we", "us", or "our") is committed to protecting your privacy and handling your personal information with transparency and care. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our consulting services.

This policy applies to all visitors, clients, and prospects who interact with our website (halyse.com) or our business services. By using our website, you acknowledge that you have read and understood this Privacy Policy.

We serve clients across multiple jurisdictions including the United States, Australia, the United Arab Emirates, India, and the European Union. We comply with applicable privacy laws in each region, including the GDPR, CCPA, Australian Privacy Act 1988, and the UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL).`,
  },
  {
    id: "information-collected",
    title: "2. Information We Collect",
    content: `We collect information in the following ways:

**Information You Provide Directly**
When you interact with our website or contact us, you may provide:
• Full name and job title
• Company name and industry
• Business email address and phone number
• Details about your project, requirements, or enquiry
• Any other information you voluntarily share in messages or forms

**Information Collected Automatically**
When you visit our website, we automatically collect certain technical data:
• IP address and approximate geographic location
• Browser type, version, and operating system
• Pages visited, time spent, and navigation paths
• Referring website or search terms
• Device type (desktop, mobile, tablet)

**Cookies and Tracking Technologies**
We use cookies and similar technologies to improve your browsing experience and understand how visitors use our site. See Section 5 (Cookies) for full details.

**Information from Third Parties**
We may receive information about you from LinkedIn, referral partners, or other professional networks when you engage with our content or are referred to us.`,
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    content: `We use your personal information for the following purposes:

**Service Delivery & Communication**
• Responding to your enquiries and consultation requests
• Providing consulting, implementation, and support services
• Sending proposals, contracts, and project updates
• Scheduling meetings and follow-ups

**Business Operations**
• Improving our website, services, and user experience
• Conducting internal analysis and reporting
• Fraud prevention and security monitoring
• Legal compliance and record-keeping

**Marketing & Outreach (where permitted)**
• Sending relevant updates about our services and industry insights
• Sharing case studies, whitepapers, and educational content
• Following up on proposals or previous discussions

We will never sell, rent, or trade your personal information to third parties for their own marketing purposes. All marketing communications include an unsubscribe option.

**Legal Basis (for GDPR/EEA residents)**
• Contract performance — when you engage our services
• Legitimate interests — business communication and security
• Consent — for marketing emails (which you can withdraw at any time)
• Legal obligation — compliance with applicable laws`,
  },
  {
    id: "cookies",
    title: "4. Cookies & Tracking",
    content: `Our website uses the following types of cookies:

**Essential Cookies**
Required for the website to function. These cannot be disabled. They include session management and security cookies.

**Analytics Cookies**
Help us understand how visitors use our website (e.g., which pages are most visited, how users navigate). We may use tools such as Google Analytics. Data collected is anonymised and aggregated.

**Preference Cookies**
Remember your settings and preferences to improve your experience on return visits.

**Third-Party Cookies**
Some embedded content (such as videos or social share buttons) may set cookies from third-party providers. We do not control these cookies.

**Managing Cookies**
You can control cookies through your browser settings. Note that disabling cookies may affect certain features of our website. You can also opt out of Google Analytics at: https://tools.google.com/dlpage/gaoptout

Most modern browsers allow you to:
• View and delete cookies
• Block third-party cookies
• Block all cookies (may break functionality)
• Be notified when cookies are set`,
  },
  {
    id: "sharing",
    title: "5. Data Sharing & Disclosure",
    content: `We do not sell, rent, or share your personal data with third parties for their commercial purposes. We may share your information in these limited circumstances:

**Service Providers**
We work with trusted third-party vendors who assist us in operating our business:
• Cloud hosting and infrastructure (Microsoft Azure)
• Email and communication platforms (Microsoft 365)
• CRM and project management tools
• Website analytics providers

All service providers are bound by contractual obligations to protect your data and process it only as directed by us.

**Microsoft Partner Network**
As a Microsoft Partner, certain business information may be shared with Microsoft in relation to our partnership agreements. This is subject to Microsoft's privacy policies.

**Legal Requirements**
We may disclose your information if required by law, court order, or governmental authority, or to protect the rights, property, or safety of Halyse Technologies, our clients, or the public.

**Business Transfers**
In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you via email or a prominent notice on our website before your data becomes subject to a different privacy policy.`,
  },
  {
    id: "international",
    title: "6. International Data Transfers",
    content: `Halyse Technologies is headquartered in India and operates globally, serving clients in the US, Australia, UAE, and EU. Your personal data may be transferred to and processed in countries other than your country of residence.

When transferring data internationally, we ensure appropriate safeguards are in place, including:
• Standard Contractual Clauses (SCCs) for transfers from the EEA
• Adequacy decisions where applicable
• Contractual protections with all service providers

For Australian residents: Our transfers comply with the Australian Privacy Principles (APPs) and the Privacy Act 1988.

For UAE residents: We comply with the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL).

For California residents (CCPA): See Section 8 for your specific rights.`,
  },
  {
    id: "retention",
    title: "7. Data Retention",
    content: `We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required or permitted by law.

**General Retention Periods**
• Enquiry/contact form data: 2 years from last contact
• Active client data: Duration of the engagement + 7 years (for legal/accounting purposes)
• Marketing data: Until you unsubscribe or request deletion
• Website analytics: 26 months (per Google Analytics default)

When your data is no longer needed, we securely delete or anonymise it. You may request deletion of your data at any time (subject to legal retention obligations) — see Section 8 for your rights.`,
  },
  {
    id: "rights",
    title: "8. Your Privacy Rights",
    content: `Depending on your location, you may have the following rights regarding your personal data:

**For All Users**
• Right to be informed — know what data we hold about you
• Right to access — request a copy of your personal data
• Right to correction — update inaccurate or incomplete data
• Right to deletion — request we delete your data ("right to be forgotten")
• Right to opt out of marketing communications at any time

**For EU/EEA Residents (GDPR)**
In addition to the above:
• Right to restrict processing
• Right to data portability
• Right to object to processing based on legitimate interests
• Right to withdraw consent at any time (without affecting prior processing)
• Right to lodge a complaint with your local supervisory authority

**For California Residents (CCPA/CPRA)**
You have the right to:
• Know what personal information is collected and how it's used
• Delete your personal information (with certain exceptions)
• Opt out of the "sale" of personal information (we do not sell data)
• Non-discrimination for exercising your privacy rights
• Correct inaccurate personal information

**For Australian Residents (Privacy Act 1988)**
You may access and correct personal information we hold about you. Requests are subject to identity verification.

**For UAE Residents (PDPL)**
You have rights of access, correction, deletion, and objection to processing, subject to applicable conditions under the UAE PDPL.

**How to Exercise Your Rights**
Email us at: mohammed.anees@halyse.com with the subject line "Privacy Rights Request". We will respond within 30 days (or as required by applicable law).`,
  },
  {
    id: "security",
    title: "9. Data Security",
    content: `We take the security of your personal data seriously and implement industry-standard technical and organisational measures to protect it, including:

• Encrypted data transmission (HTTPS/TLS)
• Secure cloud infrastructure hosted on Microsoft Azure
• Access controls and role-based permissions
• Regular security reviews and assessments
• Staff training on data privacy and security practices

However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.

If you believe your data has been compromised, please contact us immediately at mohammed.anees@halyse.com.`,
  },
  {
    id: "children",
    title: "10. Children's Privacy",
    content: `Our website and services are directed exclusively at business professionals and enterprise clients. We do not knowingly collect personal information from children under the age of 16 (or the applicable age of consent in your jurisdiction).

If you believe we have inadvertently collected information from a minor, please contact us immediately and we will take steps to delete such information.`,
  },
  {
    id: "third-party",
    title: "11. Third-Party Links",
    content: `Our website may contain links to third-party websites, including Microsoft partner resources, LinkedIn, and industry publications. These sites have their own privacy policies, which we strongly encourage you to review.

We are not responsible for the privacy practices or content of third-party websites. Clicking on third-party links means you are leaving our website and this Privacy Policy no longer applies.`,
  },
  {
    id: "changes",
    title: "12. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or services. When we make material changes, we will:

• Update the "Last Updated" date at the top of this page
• Post a notice on our website
• Where appropriate, notify you by email

We encourage you to review this policy periodically. Your continued use of our website after any changes constitutes your acceptance of the updated policy.`,
  },
  {
    id: "contact",
    title: "13. Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

**Halyse Technologies Private Limited**
Data Privacy Enquiries
Email: mohammed.anees@halyse.com
Website: https://halyse.com/contact

We are committed to resolving any privacy concerns promptly and transparently. If you are not satisfied with our response, you have the right to lodge a complaint with the relevant supervisory authority in your jurisdiction.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        badge="Legal"
        title="Privacy Policy"
        subtitle="How Halyse Technologies collects, uses, and protects your personal information. Last updated: June 2025."
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Sidebar TOC */}
            <aside className="lg:w-64 shrink-0">
              <div className="sticky top-24 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                  Table of Contents
                </p>
                <nav className="space-y-1">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors leading-snug"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-400 mb-3">Questions about your data?</p>
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 min-w-0">
              {/* Compliance badges */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                  Compliance Frameworks
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "GDPR", desc: "EU/EEA", color: "bg-blue-50 border-blue-200 text-blue-700" },
                    { label: "CCPA/CPRA", desc: "California", color: "bg-green-50 border-green-200 text-green-700" },
                    { label: "Privacy Act 1988", desc: "Australia", color: "bg-purple-50 border-purple-200 text-purple-700" },
                    { label: "UAE PDPL", desc: "United Arab Emirates", color: "bg-amber-50 border-amber-200 text-amber-700" },
                    { label: "IT Act 2000", desc: "India", color: "bg-orange-50 border-orange-200 text-orange-700" },
                  ].map((badge) => (
                    <div
                      key={badge.label}
                      className={`inline-flex flex-col px-4 py-2.5 rounded-xl border text-center ${badge.color}`}
                    >
                      <span className="text-xs font-bold leading-tight">{badge.label}</span>
                      <span className="text-[10px] opacity-70 leading-tight mt-0.5">{badge.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Policy sections */}
              <div className="space-y-6">
                {sections.map((section) => (
                  <div
                    key={section.id}
                    id={section.id}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 scroll-mt-24"
                  >
                    <h2 className="text-lg font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">
                      {section.title}
                    </h2>
                    <div className="text-sm text-gray-600 leading-relaxed space-y-3">
                      {section.content.split("\n\n").map((para, i) => {
                        if (para.startsWith("**") && para.endsWith("**")) {
                          // Standalone bold heading
                          return (
                            <p key={i} className="font-semibold text-gray-900 mt-5 first:mt-0">
                              {para.replace(/\*\*/g, "")}
                            </p>
                          );
                        }
                        // Process inline bold (**text**) and bullet points
                        const lines = para.split("\n");
                        return (
                          <div key={i}>
                            {lines.map((line, j) => {
                              const isBullet = line.startsWith("• ");
                              const isHeading = line.startsWith("**") && line.endsWith("**");
                              if (isHeading) {
                                return (
                                  <p key={j} className="font-semibold text-gray-900 mt-4 mb-1">
                                    {line.replace(/\*\*/g, "")}
                                  </p>
                                );
                              }
                              if (isBullet) {
                                return (
                                  <div key={j} className="flex gap-2 items-start">
                                    <span className="text-blue-500 mt-0.5 shrink-0">•</span>
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: line
                                          .replace(/^• /, "")
                                          .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"),
                                      }}
                                    />
                                  </div>
                                );
                              }
                              return (
                                <p
                                  key={j}
                                  dangerouslySetInnerHTML={{
                                    __html: line.replace(
                                      /\*\*(.+?)\*\*/g,
                                      "<strong>$1</strong>"
                                    ),
                                  }}
                                />
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-8 bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 text-white text-center">
                <h3 className="text-lg font-bold mb-2">Have Privacy Questions?</h3>
                <p className="text-blue-100 text-sm mb-5 max-w-md mx-auto">
                  We&apos;re committed to transparency. Reach out to us with any questions about how we handle your data.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-white text-blue-800 font-semibold text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    Contact Us
                  </Link>
                  <a
                    href="mailto:mohammed.anees@halyse.com"
                    className="inline-flex items-center justify-center bg-white/15 hover:bg-white/25 text-white font-semibold text-sm px-6 py-3 rounded-xl border border-white/25 transition-colors"
                  >
                    Email Directly
                  </a>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
