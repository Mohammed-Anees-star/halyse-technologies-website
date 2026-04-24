import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Halyse Technologies Private Limited.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero badge="Legal" title="Terms of Service" />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 mb-6">Last updated: 2025</p>
          <p className="text-gray-600 leading-relaxed mb-6">By accessing or using the Halyse Technologies website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Use of Website</h2>
          <p className="text-gray-600 leading-relaxed mb-6">You may use this website for lawful purposes only. You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.</p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Intellectual Property</h2>
          <p className="text-gray-600 leading-relaxed mb-6">All content on this website, including text, graphics, logos, and images, is the property of Halyse Technologies Private Limited and is protected by applicable intellectual property laws.</p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Contact</h2>
          <p className="text-gray-600">For questions about these terms, please contact us at <a href="mailto:info@halysetechnologies.com" className="text-blue-700">info@halysetechnologies.com</a>.</p>
        </div>
      </section>
    </>
  );
}
