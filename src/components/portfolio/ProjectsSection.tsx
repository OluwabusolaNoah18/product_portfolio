import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Banknote, Network } from "lucide-react";

type Section = { heading: string; body?: string; bullets?: string[] };

type Project = {
  icon: typeof Banknote;
  title: string;
  meta: string;
  tags: string[];
  sections: Section[];
  whyItMatters: string;
};

const projects: Project[] = [
  {
    icon: Banknote,
    title: "Expanding Payment Options with \"Pay with Transfer\"",
    meta: "Product Manager · New Product Feature / Ecosystem Expansion",
    tags: ["Payment Channels", "Virtual Accounts", "Bank Partnerships", "Ops Tooling"],
    sections: [
      {
        heading: "Problem",
        body:
          "Our payment ecosystem was almost entirely card-dependent — customers could only pay via card across POS terminals and web. This created customer friction (users increasingly preferred transfers as faster, card-less, and more trusted) and competitive exposure (other fintechs already offered transfer-based payments). Internally, we had no virtual account infrastructure, so transfers couldn't be reliably reconciled to the right merchant or customer.",
      },
      {
        heading: "Goal",
        body:
          "Introduce a reliable \"Pay with Transfer\" option across web, gateway, and POS without disrupting existing card flows, while giving internal teams the tools to monitor and manage transfer transactions.",
      },
      {
        heading: "What I Analyzed",
        bullets: [
          "Customer payment behavior — transaction data and support tickets showing rising preference for transfers",
          "Competitor offerings — how other fintechs structured transfer/virtual account products",
          "Internal technical readiness — no virtual account support, no monitoring dashboard",
          "Partnership landscape — banks/MFIs that could issue static and dynamic virtual accounts at scale",
        ],
      },
      {
        heading: "Proposed Solution",
        bullets: [
          "Multi-channel enablement across e-commerce/web, payment gateway, and POS devices",
          "Virtual account infrastructure — partnered with banks and MFIs to issue static (merchant-specific) and dynamic (transaction-specific) virtual accounts",
          "Internal tooling — a virtual account management dashboard for ops to track, reconcile, and monitor transfer transactions",
          "Phased rollout — gateway/web first, POS following once reconciliation was validated",
        ],
      },
      {
        heading: "Agile / Execution Approach",
        bullets: [
          "Stakeholder alignment with engineering, operations, and banking/MFI partners",
          "Backlog prioritization — virtual account issuance and dashboard tooling ahead of POS rollout",
          "Incremental sprints: gateway → web → dashboard → POS (no big-bang launch)",
          "Cross-functional collaboration so the admin dashboard matched real ops workflows",
        ],
      },
      {
        heading: "Impact",
        bullets: [
          "Expanded the payment ecosystem beyond cards with a faster, more accessible option",
          "Strengthened competitive positioning against transfer-native fintechs",
          "Gave ops real-time visibility and control over transfer transactions for the first time",
          "Reduced dependency on card-only rails, improving resilience of the overall payment offering",
        ],
      },
    ],
    whyItMatters:
      "Demonstrates market awareness (spotting a shift in payment behavior early), product thinking beyond the feature (enabling transfers required new infrastructure and tooling, not just a UI toggle), cross-functional execution across external partners and internal teams, and clear business impact.",
  },
  {
    icon: Network,
    title: "MID Management & Payment Orchestration Platform",
    meta: "Product Manager (PRD ownership) · Core Infrastructure / Platform Capability · Shipped & Live",
    tags: ["Payment Orchestration", "MID Routing", "Failover", "PCI-DSS", "Platform"],
    sections: [
      {
        heading: "Problem",
        body:
          "Prophius's payment gateway needed to support multiple acquiring banks, but the existing model tightly coupled MIDs to individual merchants or PSPs. This meant no flexibility in acquirer usage, approval rates left on the table (no real-time routing to the most-likely-approver), no resilience against outages, and any routing/MID change required engineering — slowing down operations.",
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
          "Failure handling — which decline reasons should trigger retry on a different acquirer vs. not",
          "Admin/ops dashboard — rule creation, prioritization, MID management, and permissions with no dev dependency",
          "Compliance and audit — PCI-DSS requirements and a full audit trail for every routing decision and config change",
          "Extensibility — future acquirers or payment methods added without rearchitecting the core",
        ],
      },
      {
        heading: "Solution Scoped",
        bullets: [
          "MID Registry — a centralized, always-updatable registry decoupled from any single merchant/PSP",
          "Real-time rule-based routing engine with millisecond-level decisioning",
          "Cascading failover — automatic, invisible retry on a secondary acquirer when the primary fails",
          "Dynamic load balancing across MIDs/acquirers to avoid breaching contractual volume caps",
          "Admin dashboard — configure rules, manage MIDs, and control access with near real-time propagation",
          "Immutable, queryable audit log of every routing decision and configuration change",
        ],
      },
      {
        heading: "Agile / Execution Approach",
        bullets: [
          "Requirements-first scoping — full functional spec before implementation began",
          "Close collaboration with engineering on real-time rule evaluation and a plugin-based acquirer connector model",
          "Non-functional requirements (performance, availability, scalability, security) treated as first-class scope",
          "Plugin/adapter architecture from day one for future acquirers and payment methods",
          "Shipped, not just specified — saw the PRD through to a fully live system",
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
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">// FEATURED CASE STUDIES</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Product wins & <span className="text-gradient">impact</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-12 leading-relaxed">
            Two major product wins from my time as a Product Manager on a fintech platform spanning POS
            terminal management, merchant onboarding, and payment processing — from spotting the gap to
            shipping the live product.
          </p>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass rounded-2xl p-6 md:p-10 hover:border-primary/30 transition-all group"
            >
              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                  <project.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-mono text-muted-foreground mb-1">Case Study {i + 1}</p>
                  <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors flex items-start gap-2">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{project.meta}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono px-2 py-1 rounded-md bg-secondary text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {project.sections.map((s) => (
                  <div key={s.heading}>
                    <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
                      {s.heading}
                    </h4>
                    {s.body && (
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                    )}
                    {s.bullets && (
                      <ul className="space-y-1.5">
                        {s.bullets.map((b) => (
                          <li key={b} className="text-sm text-muted-foreground flex items-start gap-2 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border/50">
                <h4 className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                  Why This Matters
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.whyItMatters}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;