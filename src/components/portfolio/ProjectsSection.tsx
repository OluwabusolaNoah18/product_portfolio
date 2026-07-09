import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Section = { heading: string; body?: string; bullets?: string[] };

type Project = {
  title: string;
  meta: string;
  scope?: string;
  tags: string[];
  sections: Section[];
  whyItMatters: string;
  footnote?: string;
};

const projects: Project[] = [
  {
    title: "Expanding Payment Options with Pay with Transfer",
    meta: "Product Manager · New Product Feature / Ecosystem Expansion · Prophius LTD",
    scope: "~11–12 months, delivered in four phases · Cross-functional team spanning Product, Backend, Frontend, QA, and Operations",
    tags: ["Payment Channels", "Virtual Accounts", "Bank Partnerships", "Ops Tooling"],
    sections: [
      {
        heading: "Problem",
        body:
          "Our payment ecosystem was almost entirely card-dependent, customers could only pay via card across POS terminals and web. This created customer friction (users increasingly preferred transfers as faster, card-less, and more trusted) and competitive exposure (other fintechs already offered transfer-based payments). Internally, we had no virtual account infrastructure, so transfers couldn't be reliably reconciled to the right merchant or customer.",
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
          "Phase 1 — Virtual Account Dashboard (~8 months): ops tooling for individual and bulk virtual account creation, and static account assignment to merchants",
          "Phase 2 — Virtual Account Provider Integration (~2–3 months): connected the Pay with Transfer flow to the provider for static and dynamic account issuance",
          "Phase 3 — Wallet Implementation (~3 months): merchants can view incoming transactions and withdraw to their settlement account across POS, SoftPOS, and the Merchant Portal, with admin-side visibility into wallet activity",
          "Phase 4 — Instant Settlement (~1 month): closed the loop so merchants could access funds without delay",
        ],
      },
      {
        heading: "Agile / Execution Approach",
        bullets: [
          "Stakeholder alignment with engineering, operations, and banking/MFI partners",
          "Backlog prioritization, virtual account issuance and dashboard tooling ahead of POS rollout",
          "Incremental sprints: gateway → web → dashboard → POS (no big-bang launch)",
          "Cross-functional collaboration so the admin dashboard matched real ops workflows",
        ],
      },
      {
        heading: "What I Learned Along the Way",
        body:
          "The initial MVP scope focused on getting transfer payments accepted end-to-end. Once it shipped and merchants started using it in production, real usage surfaced a gap the upfront analysis hadn't fully captured: merchants needed native visibility into incoming transfers and a way to withdraw funds to their settlement account, not just the ability to accept a payment. That became the Wallet phase. It reinforced a principle I now build into every rollout: ship the smallest usable version fast, watch how it's actually used, and treat the fast-follow as part of the plan rather than a sign something was missed.",
      },
      {
        heading: "Impact",
        bullets: [
          "Merchant base grew 32.5% in 17 months following the onboarding and payment-flow improvements (52 new merchants against a total base of 160 built over 7 years)",
          "Expanded the payment ecosystem beyond cards with a faster, more accessible option",
          "Strengthened competitive positioning against transfer-native fintechs",
          "Gave ops real-time visibility and control over transfer transactions for the first time",
          "Reduced dependency on card-only rails, improving resilience of the overall payment offering",
        ],
      },
    ],
    whyItMatters:
      "Demonstrates market awareness (spotting a shift in payment behavior early), product thinking beyond the feature (enabling transfers required new infrastructure and tooling, not just a UI toggle), cross-functional execution across external partners and internal teams, and clear business impact.",
    footnote:
      "PayContactless — one of the products this work supported — is live on the Google Play Store as a public Android app.",
  },
  {
    title: "MID Management & Payment Orchestration Platform",
    meta: "Product Manager (PRD ownership) · Core Infrastructure / Platform Capability · Prophius LTD · Shipped & Live",
    tags: ["Payment Orchestration", "MID Routing", "Failover", "PCI-DSS", "Platform"],
    sections: [
      {
        heading: "Problem",
        body:
          "Prophius's payment gateway needed to support multiple acquiring banks, but the existing model tightly coupled MIDs to individual merchants or PSPs. This meant no flexibility in acquirer usage, approval rates left on the table (no real-time routing to the most-likely-approver), no resilience against outages, and any routing/MID change required engineering, slowing down operations.",
      },
      {
        heading: "Goal",
        body:
          "Define and scope a MID management and orchestration system that decouples MIDs from merchants/PSPs, routes each transaction in real time to the acquirer most likely to approve it, automatically fails over to a secondary acquirer when needed, and puts routing configuration in the hands of non-technical admins.",
      },
      {
        heading: "What I Analyzed & Scoped",
        bullets: [
          "Current-state gaps in the MID-to-merchant coupling limiting approval rates and flexibility",
          "Routing logic parameters: transaction attributes, acquirer performance, per-MID volume caps, geographic fit, failover status",
          "Failure handling, which decline reasons should trigger retry on a different acquirer vs. not",
          "Admin/ops dashboard, rule creation, prioritization, MID management, and permissions with no dev dependency",
          "Compliance and audit, PCI-DSS requirements and a full audit trail for every routing decision and config change",
          "Extensibility, future acquirers or payment methods added without rearchitecting the core",
        ],
      },
      {
        heading: "Solution Scoped",
        bullets: [
          "MID Registry, a centralized, always-updatable registry decoupled from any single merchant/PSP",
          "Real-time rule-based routing engine with millisecond-level decisioning",
          "Cascading failover, automatic, invisible retry on a secondary acquirer when the primary fails",
          "Dynamic load balancing across MIDs/acquirers to avoid breaching contractual volume caps",
          "Admin dashboard, configure rules, manage MIDs, and control access with near real-time propagation",
          "Immutable, queryable audit log of every routing decision and configuration change",
        ],
      },
      {
        heading: "Agile / Execution Approach",
        bullets: [
          "Requirements-first scoping, full functional spec before implementation began",
          "Close collaboration with engineering on real-time rule evaluation and a plugin-based acquirer connector model",
          "Non-functional requirements (performance, availability, scalability, security) treated as first-class scope",
          "Plugin/adapter architecture from day one for future acquirers and payment methods",
          "Shipped, not just specified, saw the PRD through to a fully live system",
        ],
      },
      {
        heading: "Impact",
        bullets: [
          "Improved transaction approval rates through real-time, rule-based routing across multiple acquirers",
          "Increased resilience and uptime via automatic failover to secondary acquirers",
          "Reduced dependency on engineering for routing configuration, enabling faster business response",
          "Enabled scaling to multiple concurrent acquiring banks under a single orchestration layer",
          "Strengthened compliance posture with built-in PCI-DSS considerations and full audit trail",
        ],
      },
    ],
    whyItMatters:
      "Demonstrates systems-level product thinking (a platform capability spanning compliance, infrastructure, and operations), translating ambiguous business goals into buildable specs, proactive risk and compliance awareness, technical fluency with engineering on architecture tradeoffs, and ownership through delivery.",
  },
  {
    title: "Merchant Onboarding & Portal Growth",
    meta: "Product Manager · Conversion / UX Optimization · Prophius LTD",
    tags: ["Merchant Onboarding", "Portal UX", "Conversion Optimization"],
    sections: [
      {
        heading: "Problem",
        body:
          "Merchant onboarding on the Prophius portal ran through a long, multi-step creation flow. The friction wasn't just a UX annoyance, it was a direct constraint on how fast the merchant base could grow, since every new merchant had to get through that flow before they could start processing.",
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
          "Redesigned the merchant creation flow to cut unnecessary steps while preserving verification requirements. The same approach is currently being extended to the SoftPOS mobile onboarding flow to capture the same gains for mobile-acquired merchants.",
      },
      {
        heading: "Impact",
        bullets: [
          "Merchant base grew 32.5% in 17 months (52 new merchants against a total base of 160 built over the company's full 7-year history)",
          "Cleared a real growth constraint by reducing time-to-activate at the point of highest drop-off",
        ],
      },
    ],
    whyItMatters:
      "Shows a different register of product work from the other two case studies — growth-and-conversion thinking, not just infrastructure scoping. Demonstrates the ability to move a business metric (merchant base size) through a UX-level intervention, not just a technical build.",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-20"
        >
          <div className="md:col-span-4">
            <p className="editorial-eyebrow mb-6">Selected Case Studies</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">
              Product wins,<br />
              <span className="italic text-primary">from gap to live.</span>
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
              Three case studies from my time as a Product Manager on a fintech platform spanning POS terminal management, merchant onboarding, and payment processing — from spotting the gap to shipping the live product.
            </p>
          </div>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="border-t border-border pt-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
                <div className="md:col-span-4">
                  <p className="editorial-eyebrow mb-4">Case Study 0{i + 1}</p>
                  <h3 className="font-serif text-3xl md:text-4xl leading-[1.1] mb-4">
                    {project.title}
                  </h3>
                </div>
                <div className="md:col-span-8 space-y-4">
                  <p className="text-sm text-muted-foreground">{project.meta}</p>
                  {project.scope && (
                    <p className="text-[11px] uppercase tracking-[0.2em] text-primary">
                      {project.scope}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-[0.2em] border border-border px-3 py-1.5 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {project.sections.map((s) => (
                  <div key={s.heading}>
                    <h4 className="editorial-eyebrow mb-4">{s.heading}</h4>
                    {s.body && (
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {s.body}
                      </p>
                    )}
                    {s.bullets && (
                      <ul className="space-y-2.5">
                        {s.bullets.map((b) => (
                          <li
                            key={b}
                            className="text-sm md:text-base text-muted-foreground flex items-start gap-3 leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-10 border-t border-border grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <h4 className="editorial-eyebrow text-accent">Why This Matters</h4>
                </div>
                <div className="md:col-span-8">
                  <p className="font-serif italic text-xl md:text-2xl leading-snug text-foreground/90">
                    {project.whyItMatters}
                  </p>
                  {project.footnote && (
                    <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Note — {project.footnote}
                    </p>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;