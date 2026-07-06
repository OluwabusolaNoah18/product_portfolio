import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Product Management",
    color: "primary",
    skills: ["Product Roadmapping", "MVP Strategy", "Product Discovery", "User Research", "Stakeholder Management", "PRDs & Specs"],
  },
  {
    title: "FinTech & Technical",
    color: "accent",
    skills: ["Payment Systems", "API Design", "APM Integrations", "Embedded Finance", "SoftPOS", "KYC/AML"],
  },
  {
    title: "Agile & Delivery",
    color: "primary",
    skills: ["Scrum Master", "Sprint Planning", "Retrospectives", "Kanban", "Velocity Tracking", "Release Management"],
  },
  {
    title: "Tools & Platforms",
    color: "accent",
    skills: ["Jira", "Figma", "Notion", "Miro", "Confluence", "Mixpanel", "Google Analytics", "Postman", "Slack"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">// SKILLS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            My <span className="text-gradient">toolkit</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="glass rounded-xl p-6"
            >
              <h3 className={`font-semibold text-lg mb-4 ${cat.color === "accent" ? "text-accent" : "text-primary"}`}>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
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
