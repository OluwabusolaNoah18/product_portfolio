export type Section = { heading: string; body?: string; bullets?: string[] };

export type CaseStudy = {
  slug: string;
  title: string;
  meta: string;
  scope?: string;
  summary: string;
  differentiator: string;
  accent: string;
  tags: string[];
  sections: Section[];
  liveNote?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "pay-with-transfer",
    title: "Expanding Payment Options with Pay with Transfer",
    meta: "Product Manager · New Product Feature / Ecosystem Expansion · Prophius LTD",
    scope: "~11 12 months, delivered in four phases · Cross functional team spanning Product, Backend, Frontend, QA, and Operations",
    summary:
      "Broke a card only payment ecosystem open by shipping virtual accounts, wallet, and instant settlement across web, gateway, and POS.",
    differentiator: "Ecosystem Expansion",
    accent: "#c9a84c",
    tags: ["Payment Channels", "Virtual Accounts", "Bank Partnerships", "Ops Tooling"],
    sections: [
      {
        heading: "Problem",
        body:
          "Our payment ecosystem was almost entirely card dependent, customers could only pay via card across POS terminals and web. This created customer friction (users increasingly preferred transfers as faster, card less, and more trusted) and competitive exposure (other fintechs already offered transfer based payments). Internally, we had no virtual account infrastructure, so transfers couldn't be reliably reconciled to the right merchant or customer.",
      },
      {
        heading: "Goal",
        body:
          "Introduce a reliable Pay with Transfer option across web, gateway, and POS without disrupting existing card flows, while giving internal teams the tools to monitor and manage transfer transactions.",
      },
      {
        heading: "What I Analyzed",
        bullets: [
          "Customer payment behavior, transaction data and support tickets showing rising preference for transfers",
          "Competitor offerings, how other fintechs structured transfer/virtual account products, plus APM research into PalmPay, OPay, and InTouch",
          "Internal technical readiness, no virtual account support, no monitoring dashboard",
          "Partnership landscape, banks/MFIs that could issue static and dynamic virtual accounts at scale",
        ],
      },
      {
        heading: "Proposed Solution & Phased Delivery",
        bullets: [
          "Phase 1 Virtual Account Dashboard (~8 months): ops tooling for individual and bulk virtual account creation, and static account assignment to merchants",
          "Phase 2 Virtual Account Provider Integration (~2 3 months): connected the Pay with Transfer flow to the provider for static and dynamic account issuance",
          "Phase 3 Wallet Implementation (~3 months): merchants can view incoming transactions and withdraw to their settlement account across POS, SoftPOS, and the Merchant Portal, with admin side visibility into wallet activity",
          "Phase 4 Instant Settlement (~1 month): closed the loop so merchants could access funds without delay",
        ],
      },
      {
        heading: "Agile / Execution Approach",
        bullets: [
          "Stakeholder alignment with engineering, operations, and banking/MFI partners",
          "Backlog prioritization, virtual account issuance and dashboard tooling ahead of POS rollout",
          "Incremental sprints: gateway → web → dashboard → POS (no big bang launch)",
          "Cross functional collaboration so the admin dashboard matched real ops workflows",
        ],
      },
      {
        heading: "What I Learned Along the Way",
        body:
          "The initial MVP scope focused on getting transfer payments accepted end to end. Once it shipped and merchants started using it in production, real usage surfaced a gap the upfront analysis hadn't fully captured: merchants needed native visibility into incoming transfers and a way to withdraw funds to their settlement account, not just the ability to accept a payment. That became the Wallet phase. It reinforced a principle I now build into every rollout: ship the smallest usable version fast, watch how it's actually used, and treat the fast follow as part of the plan rather than a sign something was missed.",
      },
      {
        heading: "Impact",
        bullets: [
          "Merchant base grew 32.5% in 17 months following the onboarding and payment flow improvements",
          "Expanded the payment ecosystem beyond cards with a faster, more accessible option",
          "Strengthened competitive positioning against transfer native fintechs",
          "Gave ops real time visibility and control over transfer transactions for the first time",
          "Reduced dependency on card only rails, improving resilience of the overall payment offering",
        ],
      },
    ],
    liveNote: "One of the products this work supported, PayContactless, is live on the Google Play Store as a public Android app.",
  },
  {
    slug: "mid-orchestration",
    title: "MID Management & Payment Orchestration Platform",
    meta: "Product Manager (PRD ownership) · Core Infrastructure / Platform Capability · Prophius LTD · Shipped & Live",
    summary:
      "Decoupled MIDs from merchants and shipped a rule based routing engine with cascading failover, dynamic load balancing, and non technical admin control.",
    differentiator: "Platform Infrastructure",
    accent: "#7ea8a3",
    tags: ["Payment Orchestration", "MID Routing", "Failover", "PCI-DSS", "Platform"],
    sections: [
      {
        heading: "Problem",
        body:
          "Prophius's payment gateway needed to support multiple acquiring banks, but the existing model tightly coupled MIDs to individual merchants or PSPs. This meant no flexibility in acquirer usage, approval rates left on the table (no real time routing to the most likely approver), no resilience against outages, and any routing/MID change required engineering, slowing down operations.",
      },
      {
        heading: "Goal",
        body:
          "Define and scope a MID management and orchestration system that decouples MIDs from merchants/PSPs, routes each transaction in real time to the acquirer most likely to approve it, automatically fails over to a secondary acquirer when needed, and puts routing configuration in the hands of non technical admins.",
      },
      {
        heading: "What I Analyzed & Scoped",
        bullets: [
          "Current state gaps in the MID to merchant coupling limiting approval rates and flexibility",
          "Routing logic parameters: transaction attributes, acquirer performance, per MID volume caps, geographic fit, failover status",
          "Failure handling, which decline reasons should trigger retry on a different acquirer vs. not",
          "Admin/ops dashboard, rule creation, prioritization, MID management, and permissions with no dev dependency",
          "Compliance and audit, PCI-DSS requirements and a full audit trail for every routing decision and config change",
          "Extensibility, future acquirers or payment methods added without rearchitecting the core",
          "MID Registry, a centralized, always updatable registry decoupled from any single merchant/PSP",
          "Real time rule based routing engine with millisecond level decisioning",
          "Cascading failover, automatic, invisible retry on a secondary acquirer when the primary fails",
          "Dynamic load balancing across MIDs/acquirers to avoid breaching contractual volume caps",
          "Admin dashboard, configure rules, manage MIDs, and control access with near real time propagation",
          "Immutable, queryable audit log of every routing decision and configuration change",
        ],
      },
      {
        heading: "Agile / Execution Approach",
        bullets: [
          "Requirements first scoping, full functional spec before implementation began",
          "Close collaboration with engineering on real time rule evaluation and a plugin based acquirer connector model",
          "Non functional requirements (performance, availability, scalability, security) treated as first class scope",
          "Plugin/adapter architecture from day one for future acquirers and payment methods",
          "Shipped, not just specified, saw the PRD through to a fully live system",
        ],
      },
      {
        heading: "Impact",
        bullets: [
          "Improved transaction approval rates through real time, rule based routing across multiple acquirers",
          "Increased resilience and uptime via automatic failover to secondary acquirers",
          "Reduced dependency on engineering for routing configuration, enabling faster business response",
          "Enabled scaling to multiple concurrent acquiring banks under a single orchestration layer",
          "Strengthened compliance posture with built in PCI-DSS considerations and full audit trail",
        ],
      },
      {
        heading: "Lessons Learned",
        body:
          "Meeting every requirement in the original spec was only the start. Once the platform went live, real transaction patterns and scale surfaced things no design document could fully anticipate, and several rounds of refactoring followed the first MVP deployment. That wasn't a sign the plan was wrong — it reinforced a principle I carry into every platform launch: no product is ever fully finished at first release, and continuous iteration after go-live is expected, not exceptional.",
      },
    ],
  },
  {
    slug: "merchant-onboarding",
    title: "Merchant Onboarding Revamp",
    meta: "Product Manager · Conversion / UX Optimization · Prophius LTD",
    summary:
      "Cut friction in the merchant creation flow without weakening KYC, unlocking a 32.5% merchant base growth in 17 months.",
    differentiator: "Growth & Conversion",
    accent: "#c07a68",
    tags: ["Merchant Onboarding", "Portal UX", "Conversion Optimization"],
    sections: [
      {
        heading: "Problem",
        body:
          "Merchant onboarding on the Prophius portal ran through a long, multi step creation flow. The friction wasn't just a UX annoyance, it was a direct constraint on how fast the merchant base could grow, since every new merchant had to get through that flow before they could start processing.",
      },
      {
        heading: "Goal",
        body:
          "Simplify merchant creation on the portal to reduce friction and drive faster merchant activation, without compromising the KYC/verification steps the flow existed to enforce.",
      },
      {
        heading: "What I Analyzed",
        bullets: [
          "Existing flow structure, identifying which steps were essential vs. redundant",
          "Where in the flow merchants were most likely to stall or abandon",
          "Compliance and KYC requirements that had to stay intact regardless of simplification",
        ],
      },
      {
        heading: "Solution",
        body:
          "Redesigned the merchant creation flow to cut unnecessary steps while preserving verification requirements. The same approach is currently being extended to the SoftPOS mobile onboarding flow to capture the same gains for mobile acquired merchants.",
      },
      {
        heading: "Impact",
        bullets: [
          "Merchant base grew 32.5% in 17 months",
          "Cleared a real growth constraint by reducing time to activate at the point of highest drop off",
        ],
      },
      {
        heading: "Lessons Learned",
        body:
          "Simplicity was the goal going in, but not everything in the flow could be cut — steps like KYC were non-negotiable regardless of how much friction they added. The bigger surprise came during the build phase: several parts of the original flow turned out to be dependent on earlier implementation decisions that hadn't been factored into the initial redesign plan. Untangling those dependencies mid-build reshaped the scope of the project and reinforced how much of onboarding work is really about respecting what's already load-bearing underneath the flow, not just simplifying what's visible on the surface.",
      },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
