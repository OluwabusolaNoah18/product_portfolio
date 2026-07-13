import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "Product Roadmapping",
  "MVP Strategy",
  "Product Discovery",
  "PRDs & Specs",
  "Payment Systems",
  "API Design",
  "Alternative Payment Methods (APM)",
  "Embedded Finance",
  "SoftPOS",
  "KYC/AML",
  "Scrum Master",
  "Sprint Planning",
  "Jira",
  "Figma",
  "Confluence",
  "Mixpanel",
  "Postman",
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding border-t border-border" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="editorial-eyebrow mb-8">// Skills</p>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((s) => (
              <span
                key={s}
                className="text-xs md:text-sm border border-border px-4 py-2 text-foreground/85 hover:border-primary hover:text-primary transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
