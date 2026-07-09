import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Prophius LTD",
    role: "Product Manager / Scrum Master",
    type: "Full-time",
    period: "Feb 2025 – Present",
    location: "Lagos, Nigeria",
    description:
      "Leading end-to-end delivery of fintech products across payment gateway, POS, and SoftPOS. Drove Pay with Transfer rollout across Hosted Checkout and mobile apps, delivered automated MID management & routing, shipped embedded/white-labelled payment apps in React Native, integrated APMs (PalmPay, OPay, InTouch), and cut PayContactless SoftPOS onboarding time by 25% through workflow redesign.",
    current: true,
  },
  {
    company: "Filton Avenue",
    role: "Product Owner, Fintech FX Platform",
    type: "Contract · 1-month fixed-scope",
    period: "May 2026 – Jun 2026",
    location: "United Kingdom",
    description:
      "Reported directly to the CEO to drive Phase 1 go-live within a 1-month contract. Refined an existing FX solution into a structured MVP, delivered the Compare and Rate tab on mobile and Country Setup on the portal, and reached UAT within 2 weeks with stakeholder commendation.",
  },
  {
    company: "MyPropifyNG",
    role: "Lead Product Manager",
    type: "Contract",
    period: "Sep 2025 – May 2026",
    location: "Lagos, Nigeria",
    description:
      "Spearheaded 0-to-1 product development and launch. Defined MVP scope, PRDs, and user flows, improving delivery efficiency by 30%. Coordinated third-party partners and regulatory stakeholders, aligned go-to-market with product capabilities, and monitored post-launch metrics.",
  },
  {
    company: "BeTechified",
    role: "Product Mentor",
    type: "Volunteer",
    period: "Apr 2025 – Oct 2025",
    location: "Lagos, Nigeria",
    description:
      "Mentored 1,000+ aspiring product managers through 1:1 sessions and workshops. Introduced new PM courses reaching 2,000+ learners globally, and reviewed mentees' PRDs and product flows to raise documentation quality.",
  },
  {
    company: "iTCloser",
    role: "Product Manager",
    type: "Contract · 3 months",
    period: "2024",
    location: "Remote",
    description:
      "Ran a structured A/B comparison between two design directions with the team to determine which delivered a stronger user experience before committing to build — the origin of the experimentation-first practice I still use.",
  },
  {
    company: "Young People in Tech (YPIT)",
    role: "Program Manager, Hackathon & Conference",
    type: "Volunteer",
    period: "Oct 2025 – Present",
    location: "Remote",
    description:
      "Leading planning and execution of the YPIT Artificial Future Hackathon — onboarding, community engagement, event ops, and stakeholder coordination across virtual and in-person attendees.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-card/40 border-y border-border" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-16"
        >
          <div className="md:col-span-4">
            <p className="editorial-eyebrow mb-6">Ledger</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">
              A career,<br />
              <span className="italic text-primary">entry by entry.</span>
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
              Full-time roles, contracts, and volunteer work — labeled honestly so the picture stays consistent with my resume.
            </p>
          </div>
        </motion.div>

        <div className="border-t border-border">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.company + exp.period}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-12 border-b border-border group"
            >
              <div className="md:col-span-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {exp.period}
                </p>
                <p className="text-[10px] uppercase tracking-[0.25em] mt-2 text-primary">
                  {exp.type}
                </p>
                {exp.current && (
                  <span className="inline-flex items-center gap-2 mt-3 text-[10px] uppercase tracking-[0.2em] text-accent">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> Current
                  </span>
                )}
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                  <h3 className="font-serif text-2xl md:text-3xl group-hover:text-primary transition-colors">
                    {exp.company}
                  </h3>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {exp.location}
                  </p>
                </div>
                <p className="text-primary text-sm mb-4 italic font-serif">{exp.role}</p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
                  {exp.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;