import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, X } from "lucide-react";

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
