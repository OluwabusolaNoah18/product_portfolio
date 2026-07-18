import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const CV_URL = "https://drive.google.com/file/d/1ocDuxu-2kcxNvZtrjkEhbGY_iHiuR01E/view?usp=drive_link";

const experiences = [
  {
    company: "Prophius LTD",
    role: "Product Manager / Scrum Master",
    type: "Full-time",
    period: "Feb 2025 – Present",
    location: "Lagos, Nigeria",
    current: true,
  },
  {
    company: "Filton Avenue",
    role: "Product Owner, Fintech FX Platform",
    type: "Contract · 1-month fixed-scope",
    period: "May 2026 – Jun 2026",
    location: "United Kingdom",
  },
  {
    company: "MyPropifyNG",
    role: "Lead Product Manager",
    type: "Contract",
    period: "Sep 2025 – May 2026",
    location: "Lagos, Nigeria",
  },
  {
    company: "BeTechified",
    role: "Product Mentor",
    type: "Volunteer",
    period: "Apr 2025 – Oct 2025",
    location: "Lagos, Nigeria",
  },
  {
    company: "iTCloser",
    role: "Product Manager",
    type: "Contract · 3 months",
    period: "Dec 2025 – Feb 2026",
    location: "Remote",
  },
  {
    company: "Young People in Tech (YPIT)",
    role: "Program Manager, Hackathon & Conference",
    type: "Volunteer",
    period: "Oct 2025 – Present",
    location: "Remote",
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
            <p className="editorial-eyebrow mb-6">Experiences</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">
              Where I've<br />
              <span className="italic text-primary">built and led.</span>
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
              Full-time roles, contracts, and volunteer work — full detail on each lives in my resume.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.company + exp.period}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="group bg-background p-7 md:p-8 flex flex-col hover:bg-card/60 transition-colors"
            >
              <div className="flex items-center justify-between mb-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {exp.period}
                </p>
                {exp.current && (
                  <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-accent">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> Current
                  </span>
                )}
              </div>

              <h3 className="font-serif text-2xl md:text-[1.75rem] leading-tight group-hover:text-primary transition-colors mb-1.5">
                {exp.company}
              </h3>
              <p className="text-primary text-sm italic font-serif mb-5">{exp.role}</p>

              <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-border/60">
                <span className="text-[10px] uppercase tracking-[0.2em] border border-border px-2.5 py-1 text-muted-foreground">
                  {exp.type}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] border border-border px-2.5 py-1 text-muted-foreground">
                  {exp.location}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 + 0.05 * experiences.length }}
          className="mt-10 flex justify-center"
        >
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-primary hover:text-accent transition-colors"
          >
            See Full Experience Details in My Résumé
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
