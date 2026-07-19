// ─── HALYSE SERVICES — CANONICAL SOURCE OF TRUTH ───────────────────────────
// This file is the approved reference for all six service lines.
// Homepage cards, /services overview, and individual /services/[slug] pages
// all read from here. Do not duplicate copy elsewhere.

import type { LucideIcon } from "lucide-react";
import {
  Layers,
  GitMerge,
  Cloud,
  Database,
  AppWindow,
  LifeBuoy,
} from "lucide-react";

export interface ServiceSummary {
  slug: string;
  title: string;
  tagline: string;
  desc: string;
  icon: LucideIcon;
}

export const services: ServiceSummary[] = [
  {
    slug: "enterprise-applications-modernization",
    icon: Layers,
    title: "Enterprise Applications & Modernization",
    tagline: "Designing and modernizing business-critical applications for scale.",
    desc: "Halyse helps organizations design, build, modernize, and extend enterprise applications that power critical business operations. We modernize legacy systems, develop custom business applications, and improve existing platforms to enhance performance, usability, security, and scalability. Through modern architecture and cloud-based technologies, we deliver reliable solutions that streamline operations, enable modernization, and create a strong foundation for future growth.",
  },
  {
    slug: "integration-apis-automation",
    icon: GitMerge,
    title: "Integration, APIs & Automation",
    tagline: "Connecting systems, automating processes, and enabling seamless data flow.",
    desc: "Halyse helps organizations integrate applications, data, and business processes across modern technology environments. We design and implement API-led integration, workflow automation, and event-driven solutions that reduce manual effort, improve interoperability, and streamline operations. From enterprise system integration and business process automation to cloud-native integration services, we deliver secure, scalable solutions that enable greater agility, operational efficiency, and long-term business resilience.",
  },
  {
    slug: "azure-cloud-platform-engineering",
    icon: Cloud,
    title: "Azure Cloud & Platform Engineering",
    tagline: "Building secure, scalable cloud foundations for modern enterprise applications.",
    desc: "Halyse helps organizations design, deploy, and optimize Azure-based cloud platforms that support business-critical applications, data, and integrations. We modernize cloud environments, migrate workloads, and implement Azure services that improve scalability, resilience, and operational efficiency. From application hosting and managed databases to storage, cloud integration, and platform optimization, we deliver secure, reliable solutions that provide a strong foundation for digital transformation and long-term growth.",
  },
  {
    slug: "data-analytics-ai",
    icon: Database,
    title: "Data Engineering, Analytics & AI",
    tagline: "Turning enterprise data into insight, intelligence, and better decisions.",
    desc: "Halyse helps organizations design, modernize, and optimize data platforms that improve reporting, analytics, and decision-making across the enterprise. We deliver modern data engineering, business intelligence, analytics, and AI solutions that unify data, strengthen governance, and create trusted foundations for insight and innovation. Our focus is on building scalable, secure, and well-governed data platforms that improve data accessibility, enable informed decision-making, and support long-term business growth.",
  },
  {
    slug: "business-applications-low-code-platforms",
    icon: AppWindow,
    title: "Business Applications & Low-Code Platforms",
    tagline: "Delivering agile business applications on trusted enterprise platforms.",
    desc: "Halyse helps organizations design, implement, and extend business applications using Microsoft Power Platform, Dynamics 365, and Quickbase. We help clients streamline business processes, improve user experience and adoption, and deliver solutions faster than traditional custom development while maintaining strong governance, scalability, and long-term maintainability. Our focus is on building practical, high-value applications that improve operational efficiency and evolve alongside changing business needs.",
  },
  {
    slug: "managed-services-application-support",
    icon: LifeBuoy,
    title: "Managed Services & Application Support",
    tagline: "Keeping enterprise applications secure, stable, and continuously improving.",
    desc: "Halyse helps organizations support, maintain, and optimize business-critical applications and platforms after go-live. Our managed services include application and platform monitoring, incident resolution, performance optimization, proactive maintenance, and ongoing enhancements that help clients maintain reliability, improve user experience, and reduce operational risk. We provide structured, responsive support that keeps enterprise systems operating effectively while enabling continuous improvement and long-term business value.",
  },
];

export function getServiceBySlug(slug: string): ServiceSummary | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(currentSlug: string): ServiceSummary[] {
  return services.filter((s) => s.slug !== currentSlug);
}
