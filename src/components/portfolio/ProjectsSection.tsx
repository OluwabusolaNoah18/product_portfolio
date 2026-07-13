import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Plus, X } from "lucide-react";

type Project = {
  number: string;
  title: string;
  badge: string;
  oneLiner: string;
  tags: string[];
  accent: "gold" | "ivory" | "ember";
  challenge: string;
  did: string;
  result: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Pay with Transfer",
    badge: "Live · Payments Expansion",
    oneLiner:
      "Took Prophius payments beyond cards introduced transfer payments across web, gateway, and POS.",
    tags: ["Payment Channels", "Virtual Accounts", "Ops Tooling"],
    accent: "gold",
    challenge:
      "Prophius's payment ecosystem was almost entirely card-dependent customers could only pay by card across POS and web, while competitors already offered transfer-based payments and users increasingly preferred them. There was no virtual account infrastructure to reconcile transfers to the right merchant or customer.",
    did:
      "I led competitive analysis and reviewed transaction and support data confirming the shift toward transfers, then scoped and delivered Pay with Transfer in four phases over roughly a year: an ops dashboard for virtual account creation and merchant assignment (8 months), integration with a virtual account provider for static and dynamic accounts (2 to 3 months), a merchant wallet for viewing and withdrawing transfer funds across POS, SoftPOS, and the portal added once the first MVP release made clear merchants needed it, not just the ability to accept a transfer and instant settlement (~1 month). Each phase shipped incrementally, validated with engineering, operations, and banking partners along the way.",
    result:
      "Pay with Transfer is live across web, gateway, and POS. Operations gained real-time visibility into transfer transactions for the first time, reducing the platform's dependence on card-only rails and contributing, alongside a redesigned onboarding flow, to significant growth in the merchant base over the same period.",
  },
  {
    number: "02",
    title: "MID Management & Payment Orchestration",
    badge: "Shipped & Live",
    oneLiner:
      "Built the real-time routing engine that lets Prophius work with multiple acquiring banks.",
    tags: ["Payment Orchestration", "Failover", "PCI-DSS"],
    accent: "ivory",
    challenge:
      "Prophius's payment gateway needed to support multiple acquiring banks, but MIDs were tightly coupled to individual merchants and PSPs limiting acquirer flexibility, leaving approval rates on the table, offering no resilience against outages, and requiring engineering involvement for every routing change.",
    did:
      "I owned the PRD end-to-end for a MID management and orchestration platform: a centralized MID registry decoupled from any single merchant or PSP, a real-time rule-based routing engine, automatic failover to a secondary acquirer, and an admin dashboard letting non-technical operations staff manage rules and MIDs without engineering involvement. PCI-DSS compliance and a full audit trail were treated as core requirements from day one, and I worked closely with engineering on a plugin-based architecture so new acquirers could be added without rearchitecting the core system.",
    result:
      "The platform is shipped and live routing transactions in real time across multiple acquiring banks, improving approval rates, adding resilience through automatic failover, and removing engineering as a bottleneck for routing configuration changes.",
  },
  {
    number: "03",
    title: "Merchant Onboarding Redesign",
    badge: "32.5% Merchant Growth",
    oneLiner:
      "Simplified merchant creation on the portal cut friction, grew the merchant base by a third.",
    tags: ["Merchant Onboarding", "Portal UX", "Conversion"],
    accent: "ember",
    challenge:
      "Merchant onboarding on the Prophius portal ran through a long, multi-step creation flow a direct constraint on how fast the merchant base could grow, since every merchant had to clear it before they could start processing.",
    did:
      "I audited the flow to separate essential KYC and verification steps from redundant ones, identified where merchants were most likely to stall, and redesigned the flow to cut friction while keeping compliance intact. I'm now extending the same approach to SoftPOS mobile onboarding.",
    result:
      "Merchant base grew 32.5% in 17 months 52 new merchants against a total base of 160 built over the company's full 7-year history.",
  },
];

const accentStyles: Record<Project["accent"], { bar: string; badge: string; num: string; hover: string }> = {
  gold: {
    bar: "bg-primary",
    badge: "bg-primary text-primary-foreground",
    num: "text-primary",
    hover: "hover:border-primary",
  },
  ivory: {
    bar: "bg-accent",
    badge: "bg-accent text-accent-foreground",
    num: "text-accent",
    hover: "hover:border-accent",
  },
  ember: {
    bar: "bg-foreground",
    badge: "bg-foreground text-background",
    num: "text-foreground",
    hover: "hover:border-foreground",
  },
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="projects" className="section-padding bg-card/40 border-y border-border" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20 flex items-end justify-between flex-wrap gap-6"
        >
          <div>
            <p className="editorial-eyebrow mb-6">// Case Studies</p>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.95]">
              The work,<br />
              <span className="italic text-primary">in three chapters.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs">
            Click a card to read the full challenge, what I did, and the outcome.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const style = accentStyles[p.accent];
            const isOpen = open === p.number;
            return (
              <motion.button
                key={p.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                onClick={() => setOpen(p.number)}
                className={`group text-left bg-background border border-border ${style.hover} transition-colors flex flex-col`}
              >
                <div className={`h-1 w-full ${style.bar}`} />
                <div className="p-7 md:p-8 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className={`font-serif italic text-4xl ${style.num}`}>{p.number}</span>
                    <span className={`text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 ${style.badge}`}>
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl leading-tight mb-4">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    {p.oneLiner}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase tracking-[0.2em] border border-border px-2.5 py-1 text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className={`inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-semibold ${style.num}`}>
                    <Plus className="w-3.5 h-3.5" /> Read Case Study
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {open && (() => {
          const p = projects.find((x) => x.number === open)!;
          const style = accentStyles[p.accent];
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-background/85 backdrop-blur-sm overflow-y-auto"
              onClick={() => setOpen(null)}
            >
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{ duration: 0.35 }}
                onClick={(e) => e.stopPropagation()}
                className="min-h-screen max-w-4xl mx-auto p-6 md:p-16"
              >
                <div className="bg-background border border-border">
                  <div className={`h-1.5 w-full ${style.bar}`} />
                  <div className="p-8 md:p-14">
                    <div className="flex items-start justify-between mb-10 gap-6">
                      <div>
                        <p className={`editorial-eyebrow mb-3 ${style.num}`}>Case Study {p.number}</p>
                        <h3 className="font-serif text-3xl md:text-5xl leading-[1.05] mb-4">{p.title}</h3>
                        <span className={`inline-block text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 ${style.badge}`}>
                          {p.badge}
                        </span>
                      </div>
                      <button
                        onClick={() => setOpen(null)}
                        aria-label="Close"
                        className="text-muted-foreground hover:text-foreground transition-colors p-2"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="space-y-10">
                      <div>
                        <p className={`editorial-eyebrow mb-4 ${style.num}`}>The Challenge</p>
                        <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
                          {p.challenge}
                        </p>
                      </div>
                      <div>
                        <p className={`editorial-eyebrow mb-4 ${style.num}`}>What I Did</p>
                        <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
                          {p.did}
                        </p>
                      </div>
                      <div>
                        <p className={`editorial-eyebrow mb-4 ${style.num}`}>The Result</p>
                        <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
                          {p.result}
                        </p>
                      </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] uppercase tracking-[0.2em] border border-border px-3 py-1.5 text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;

// legacy export placeholder guard removed
const _unused: unknown[] = [ArrowRight];
void _unused;
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
          "Phase 1 Virtual Account Dashboard (~8 months): ops tooling for individual and bulk virtual account creation, and static account assignment to merchants",
          "Phase 2 Virtual Account Provider Integration (~2–3 months): connected the Pay with Transfer flow to the provider for static and dynamic account issuance",
          "Phase 3 Wallet Implementation (~3 months): merchants can view incoming transactions and withdraw to their settlement account across POS, SoftPOS, and the Merchant Portal, with admin-side visibility into wallet activity",
          "Phase 4 Instant Settlement (~1 month): closed the loop so merchants could access funds without delay",
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
          "Merchant base grew 32.5% in 17 months following the onboarding and payment-flow improvements",
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
      "PayContactless one of the products this work supported is live on the Google Play Store as a public Android app.",
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
          "Merchant base grew 32.5% in 17 months",
          "Cleared a real growth constraint by reducing time-to-activate at the point of highest drop-off",
        ],
      },
    ],
    whyItMatters:
      "Shows a different register of product work from the other two case studies growth-and-conversion thinking, not just infrastructure scoping. Demonstrates the ability to move a business metric (merchant base size) through a UX-level intervention, not just a technical build.",
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
              Three case studies from my time as a Product Manager on a fintech platform spanning Payment Channel Expansion, Merchant Onboarding Processing, and Seamless payment processing and transaction routing.
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
                      Note {project.footnote}
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