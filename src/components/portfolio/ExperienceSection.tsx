import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Prophius LTD",
    role: "Product Manager / Scrum Master",
    period: "Feb 2025 – Present",
    location: "Lagos, Nigeria",
    description:
      "Leading end-to-end delivery of fintech products across payment gateway, POS, and SoftPOS. Drove Pay with Transfer rollout across Hosted Checkout and mobile apps, delivered automated MID management & routing, shipped embedded/white-labelled payment apps in React Native, integrated APMs (PalmPay, OPay, InTouch), and cut PayContactless SoftPOS onboarding time by 25% through workflow redesign.",
    current: true,
  },
  {
    company: "Filton Avenue",
    role: "Product Owner (Contract) — Fintech FX Platform",
    period: "May 2026 – Jun 2026",
    location: "United Kingdom",
    description:
      "Reported directly to the CEO to drive Phase 1 go-live within a 1-month contract. Refined an existing FX solution into a structured MVP, delivered the Compare and Rate tab on mobile and Country Setup on the portal, and reached UAT within 2 weeks with stakeholder commendation.",
  },
  {
    company: "MyPropifyNG",
    role: "Lead Product Manager (Contract)",
    period: "Sep 2025 – May 2026",
    location: "Lagos, Nigeria",
    description:
      "Spearheaded 0-to-1 product development and launch. Defined MVP scope, PRDs, and user flows — improving delivery efficiency by 30%. Coordinated third-party partners and regulatory stakeholders, aligned go-to-market with product capabilities, and monitored post-launch metrics.",
  },
  {
    company: "BeTechified",
    role: "Product Mentor",
    period: "Apr 2025 – Oct 2025",
    location: "Lagos, Nigeria",
    description:
      "Mentored 1,000+ aspiring product managers through 1:1 sessions and workshops. Introduced new PM courses reaching 2,000+ learners globally, and reviewed mentees' PRDs and product flows to raise documentation quality.",
  },
  {
    company: "Young People in Tech (YPIT)",
    role: "Program Manager — Hackathon & Conference (Volunteer)",
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
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">// EXPERIENCE</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Career <span className="text-gradient">timeline</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="relative pl-12 md:pl-16"
              >
                <div className={`absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full border-2 ${
                  exp.current ? "bg-primary border-primary animate-pulse-glow" : "bg-background border-muted-foreground/30"
                }`} />

                <div className="glass rounded-xl p-5 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                    <h3 className="font-bold text-lg">{exp.company}</h3>
                    <span className={`text-xs font-mono px-2 py-1 rounded-md w-fit ${
                      exp.current ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"
                    }`}>
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary text-sm font-medium">{exp.role}</p>
                  <p className="text-xs text-muted-foreground mb-2">{exp.location}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;