import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Halyse Technologies Private Limited.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero badge="Legal" title="Privacy Policy" />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <p className="text-sm text-gray-500">Last updated: 2025</p>
          <p>Halyse Technologies Private Limited (&ldquo;Halyse&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or engage with our services.</p>
          <h2 className="text-xl font-bold mt-8 mb-3">Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you submit our contact form, including your name, email address, phone number, company name, and message content.</p>
          <h2 className="text-xl font-bold mt-8 mb-3">How We Use Your Information</h2>
          <p>We use the information we collect to respond to your enquiries, provide our consulting services, and improve our website and offerings. We do not sell your personal information to third parties.</p>
          <h2 className="text-xl font-bold mt-8 mb-3">Contact</h2>
          <p>For privacy-related questions, please contact us at <a href="mailto:mohammed.anees@halyse.com" className="text-blue-700">mohammed.anees@halyse.com</a>.</p>
        </div>
      </section>
    </>
  );
}
