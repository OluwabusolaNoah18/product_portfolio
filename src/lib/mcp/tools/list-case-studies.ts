import { defineTool } from "@lovable.dev/mcp-js";

const caseStudies = [
  {
    number: "01",
    title: "Pay with Transfer",
    status: "Live",
    theme: "Payments Expansion",
    oneLiner:
      "Took Prophius payments beyond cards introduced transfer payments across web, gateway, and POS.",
    tags: ["Payment Channels", "Virtual Accounts", "Ops Tooling"],
    challenge:
      "Prophius's payment ecosystem was almost entirely card-dependent customers could only pay by card across POS and web, while competitors already offered transfer-based payments and users increasingly preferred them. There was no virtual account infrastructure to reconcile transfers to the right merchant or customer.",
    whatIDid:
      "I led competitive analysis and reviewed transaction and support data confirming the shift toward transfers, then scoped and delivered Pay with Transfer in four phases over roughly a year: an ops dashboard for virtual account creation and merchant assignment (8 months), integration with a virtual account provider for static and dynamic accounts (2 to 3 months), a merchant wallet for viewing and withdrawing transfer funds across POS, SoftPOS, and the portal (added once the first MVP release made clear merchants needed it), and instant settlement (~1 month). Each phase shipped incrementally, validated with engineering, operations, and banking partners along the way.",
    result:
      "Pay with Transfer is live across web, gateway, and POS. Operations gained real-time visibility into transfer transactions for the first time, reducing the platform's dependence on card-only rails and contributing, alongside a redesigned onboarding flow, to significant growth in the merchant base over the same period.",
  },
  {
    number: "02",
    title: "MID Management & Payment Orchestration",
    status: "Shipped & Live",
    theme: "Payment Orchestration",
    oneLiner:
      "Built the real-time routing engine that lets Prophius work with multiple acquiring banks.",
    tags: ["Payment Orchestration", "Failover", "PCI-DSS"],
    challenge:
      "Prophius's payment gateway needed to support multiple acquiring banks, but MIDs were tightly coupled to individual merchants and PSPs limiting acquirer flexibility, leaving approval rates on the table, offering no resilience against outages, and requiring engineering involvement for every routing change.",
    whatIDid:
      "I owned the PRD end-to-end for a MID management and orchestration platform: a centralized MID registry decoupled from any single merchant or PSP, a real-time rule-based routing engine, automatic failover to a secondary acquirer, and an admin dashboard letting non-technical operations staff manage rules and MIDs without engineering involvement. PCI-DSS compliance and a full audit trail were treated as core requirements from day one, and I worked closely with engineering on a plugin-based architecture so new acquirers could be added without rearchitecting the core system.",
    result:
      "The platform is shipped and live routing transactions in real time across multiple acquiring banks, improving approval rates, adding resilience through automatic failover, and removing engineering as a bottleneck for routing configuration changes.",
  },
  {
    number: "03",
    title: "Merchant Onboarding Redesign",
    status: "Live",
    theme: "Conversion & Growth",
    oneLiner:
      "Simplified merchant creation on the portal cut friction, grew the merchant base by a third.",
    tags: ["Merchant Onboarding", "Portal UX", "Conversion"],
    challenge:
      "Merchant onboarding on the Prophius portal ran through a long, multi-step creation flow a direct constraint on how fast the merchant base could grow, since every merchant had to clear it before they could start processing.",
    whatIDid:
      "I audited the flow to separate essential KYC and verification steps from redundant ones, identified where merchants were most likely to stall, and redesigned the flow to cut friction while keeping compliance intact. I'm now extending the same approach to SoftPOS mobile onboarding.",
    result:
      "Merchant base grew 32.5% in 17 months 52 new merchants against a total base of 160 built over the company's full 7-year history.",
  },
];

export default defineTool({
  name: "list_case_studies",
  title: "List case studies",
  description:
    "Return all product management case studies with the challenge, what I did, the result, tags, and status.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(caseStudies, null, 2) }],
    structuredContent: { caseStudies },
  }),
});