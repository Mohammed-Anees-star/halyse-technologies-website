export type Insight = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  readTime: string;
  publishedAt: string;
  author: string;
  content: { heading?: string; body: string }[];
};

export const insights: Insight[] = [
  {
    slug: "power-platform-enterprise-automation-2026",
    category: "Power Platform",
    title: "How Power Platform is Redefining Enterprise Automation in 2026",
    summary:
      "Microsoft's Power Platform has evolved from a low-code tool into a full enterprise automation backbone. We explore what this means for mid-market organizations.",
    readTime: "5 min read",
    publishedAt: "2026-06-10",
    author: "Halyse Technologies",
    content: [
      {
        body: "Five years ago, Power Platform was widely seen as a productivity add-on — a tool for IT teams to build internal forms and basic dashboards. In 2026, that perception is dramatically out of date. Power Platform has matured into a full enterprise-grade automation stack, complete with governance controls, AI capabilities through Copilot Studio, and deep integration with Azure, Dynamics 365, and the broader Microsoft cloud.",
      },
      {
        heading: "What's actually changed",
        body: "Three things have transformed Power Platform's enterprise position: Dataverse as a managed enterprise data layer with strong security and audit; the rise of Copilot Studio for building production-grade conversational AI; and the deep integration with Microsoft Fabric for analytics. Combined, these make Power Platform a credible alternative to traditional enterprise development for a wide range of business applications.",
      },
      {
        heading: "Where it makes sense for mid-market",
        body: "Mid-market organizations get the biggest leverage. Custom application development that would have required a 6–9 month engagement can often be delivered in 8–12 weeks. The catch: Power Platform is not a shortcut. It demands the same architectural discipline as any enterprise platform — proper environment strategy, ALM practices, security model design, and integration patterns.",
      },
      {
        heading: "What to watch for",
        body: "The biggest risk we see is treating Power Platform as a citizen-developer free-for-all. Without governance — managed environments, DLP policies, solution-based ALM — organizations end up with hundreds of unmanaged apps and flows that become a maintenance nightmare. Done right, Power Platform delivers enterprise outcomes at a fraction of the traditional cost. Done wrong, it becomes shadow IT at scale.",
      },
    ],
  },
  {
    slug: "azure-openai-production-scale",
    category: "Azure AI",
    title: "From Pilot to Production: Making Azure OpenAI Work at Enterprise Scale",
    summary:
      "Most AI pilots fail at scale. Here's the architecture, governance, and change management approach that gets enterprise AI into production — and keeps it there.",
    readTime: "7 min read",
    publishedAt: "2026-05-22",
    author: "Halyse Technologies",
    content: [
      {
        body: "Industry surveys consistently show that 70–80% of enterprise AI pilots never reach production. The technology is rarely the bottleneck. The bottleneck is architecture, governance, and the organizational readiness to operate AI as a production system rather than as an experiment.",
      },
      {
        heading: "The architecture pattern that works",
        body: "Successful Azure OpenAI deployments share a common pattern: a clear retrieval-augmented generation (RAG) architecture with grounding data managed separately from the model; a robust prompt management strategy with versioning; rate limiting and cost controls at the API gateway layer; and comprehensive observability — logging every prompt, response, and downstream action.",
      },
      {
        heading: "Governance is non-negotiable",
        body: "Production AI requires governance that startups can skip: model approval workflows, prompt change management, audit logging that satisfies compliance, and human-in-the-loop checkpoints for high-stakes decisions. Without these, the first incident — a hallucinated response, a data leak, an unintended action — will sink the program.",
      },
      {
        heading: "Change management often determines success",
        body: "The hardest part of enterprise AI is not the model. It's the organizational shift required to trust, monitor, and continuously improve AI-augmented processes. We've seen technically excellent AI solutions stall because end-users didn't trust the outputs, and we've seen modest AI implementations succeed because the rollout invested heavily in training, transparency, and feedback loops.",
      },
    ],
  },
  {
    slug: "modern-data-stack-mid-market",
    category: "Data Strategy",
    title: "The Modern Data Stack for Mid-Market Enterprises: A Practical Guide",
    summary:
      "Enterprise analytics doesn't require a Fortune 500 budget. This guide outlines a practical, cost-effective data architecture built on Microsoft Fabric and Power BI.",
    readTime: "6 min read",
    publishedAt: "2026-04-15",
    author: "Halyse Technologies",
    content: [
      {
        body: "There's a persistent myth that enterprise-grade analytics requires Snowflake, Databricks, dbt, Fivetran, and a team of data engineers. For most mid-market organizations, that's both expensive and unnecessary. The Microsoft Fabric + Power BI stack now offers a credible, integrated, cost-effective alternative.",
      },
      {
        heading: "The recommended architecture",
        body: "For a mid-market organization (revenue $50M–$500M), we typically recommend: Microsoft Fabric for the unified data platform (OneLake, Data Factory, Synapse); Power BI for visualization and self-service; Azure SQL or Fabric Warehouse for structured analytical workloads; and a clear medallion architecture (bronze/silver/gold) with proper data governance via Microsoft Purview.",
      },
      {
        heading: "What it actually costs",
        body: "A well-designed Fabric + Power BI stack can be built and operated for a fraction of the cost of comparable best-of-breed stacks — typically 40–60% less when you account for licensing, infrastructure, and consulting overhead. The trade-off is that you commit to the Microsoft ecosystem, which is usually a non-issue for organizations already running on Microsoft 365.",
      },
      {
        heading: "Where it falls short",
        body: "Fabric is not the right choice for every scenario. Highly specialized data engineering workloads, real-time streaming at massive scale, and certain advanced ML scenarios may still demand specialized tools. For 80% of mid-market analytics needs, Fabric + Power BI is more than enough — and the integration with Power Platform and Dynamics 365 makes it dramatically easier to operationalize insights.",
      },
    ],
  },
  {
    slug: "quickbase-vs-power-platform",
    category: "Low-Code",
    title: "Quickbase vs Power Platform: How to Choose the Right Low-Code Platform",
    summary:
      "Both Quickbase and Power Platform are excellent low-code platforms. They solve different problems. Here's a practical framework for choosing.",
    readTime: "5 min read",
    publishedAt: "2026-03-28",
    author: "Halyse Technologies",
    content: [
      {
        body: "We work extensively with both Quickbase and Power Platform, and the question we hear most often is: which one should we use? The honest answer is that they're different tools optimized for different problems. The choice should be driven by the problem, not by the platform.",
      },
      {
        heading: "When Quickbase wins",
        body: "Quickbase shines when you need a relational database-first application with strong reporting, where the data model is the heart of the solution. Operations dashboards, project tracking systems, asset management, vendor portals — Quickbase often delivers these faster than Power Platform, with less platform expertise required. Pipelines make integrations straightforward.",
      },
      {
        heading: "When Power Platform wins",
        body: "Power Platform is the better fit when you're deeply embedded in the Microsoft ecosystem, when you need sophisticated workflow automation across Microsoft 365, when AI capabilities through Copilot are central to the solution, or when the application needs to integrate tightly with Dynamics 365 or SharePoint. Dataverse offers strong relational data capabilities once you understand the platform.",
      },
      {
        heading: "When you might use both",
        body: "Some of our most successful clients run both — Quickbase for operations-heavy applications and Power Platform for Microsoft 365-integrated workflows. The two integrate cleanly through APIs, Quickbase Pipelines, and Power Automate connectors. Choosing one platform for everything is rarely the right answer.",
      },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}
