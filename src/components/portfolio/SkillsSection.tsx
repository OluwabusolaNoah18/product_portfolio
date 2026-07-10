import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Product Management",
    skills: ["Product Roadmapping", "MVP Strategy", "Product Discovery", "User Research", "Stakeholder Management", "PRDs & Specs"],
  },
  {
    title: "FinTech & Technical",
    skills: ["Payment Systems", "Alternative Payment Methods (APM) Integration", "Embedded Finance", "SoftPOS", "KYC/AML"],
  },
  {
    title: "Agile & Delivery",
    skills: ["Scrum Master", "Sprint Planning", "Retrospectives", "Kanban", "Velocity Tracking", "Release Management", "UAT & Regression"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Jira", "Figma", "Notion", "Miro", "Mobbin", "Stitch", "Claude", "Confluence", "Mixpanel", "Google Analytics", "Postman", "Slack"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-16"
        >
          <div className="md:col-span-4">
            <p className="editorial-eyebrow mb-6">Toolkit</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">
              The craft,<br />
              <span className="italic text-primary">stack by stack.</span>
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
              A working inventory of what I bring to a product team — spanning discovery, delivery, and the fintech-specific muscle needed to ship payment infrastructure.
            </p>
          </div>
        </motion.div>

        <div className="border-t border-border">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-10 md:py-12 border-b border-border"
            >
              <div className="md:col-span-4">
                <p className="font-serif italic text-primary text-2xl">0{i + 1}</p>
                <h3 className="font-serif text-2xl md:text-3xl mt-2">{cat.title}</h3>
              </div>
              <div className="md:col-span-8 flex flex-wrap gap-x-6 gap-y-3 md:pt-3">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-foreground/85 border-b border-transparent hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
