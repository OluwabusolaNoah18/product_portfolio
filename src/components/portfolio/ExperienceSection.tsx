import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Prophius",
    role: "Product Manager / Scrum Master",
    period: "Current",
    description: "Leading fintech product development across payment gateway, SoftPOS, and APM integration products. Driving agile transformation and delivery excellence.",
    current: true,
  },
  {
    company: "MyPropifyNG",
    role: "Product Manager Lead",
    period: "Previous",
    description: "Led product strategy for a proptech platform, managing end-to-end product lifecycle from discovery to delivery with a focus on user-centric design.",
  },
  {
    company: "BeTechified",
    role: "Product Mentor",
    period: "Ongoing",
    description: "Mentoring aspiring product managers and tech professionals. Trained 100+ mentees and reached 2,000+ learners through workshops and content.",
  },
  {
    company: "iTCloser",
    role: "Product Manager",
    period: "Previous",
    description: "Managed product development for a B2B SaaS platform, improving delivery efficiency by 30% through agile process improvements.",
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
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="relative pl-12 md:pl-16"
              >
                {/* Dot */}
                <div className={`absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full border-2 ${
                  exp.current ? "bg-primary border-primary animate-pulse-glow" : "bg-background border-muted-foreground/30"
                }`} />

                <div className="glass rounded-xl p-5 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-bold text-lg">{exp.company}</h3>
                    <span className={`text-xs font-mono px-2 py-1 rounded-md ${
                      exp.current ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"
                    }`}>
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary text-sm font-medium mb-2">{exp.role}</p>
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
