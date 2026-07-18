import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

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
          className="mb-20"
        >
          <p className="editorial-eyebrow mb-6">Selected Case Studies</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] max-w-3xl">
            Product wins,<br />
            <span className="italic text-primary">from gap to live.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((project, i) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="group relative bg-card/40 border border-border p-8 md:p-10 flex flex-col overflow-hidden transition-colors hover:border-[var(--card-accent)]"
              style={{ ["--card-accent" as string]: project.accent }}
            >
              <span
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: project.accent }}
              />

              <div className="flex items-center justify-between mb-8">
                <p className="editorial-eyebrow" style={{ color: project.accent }}>
                  Case Study 0{i + 1}
                </p>
                <span
                  className="text-[10px] uppercase tracking-[0.2em] border px-2.5 py-1"
                  style={{ color: project.accent, borderColor: `${project.accent}66` }}
                >
                  {project.differentiator}
                </span>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl leading-[1.15] mb-5">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-[0.2em] border border-border px-2.5 py-1 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                to={`/case-studies/${project.slug}`}
                className="group/cta inline-flex items-center justify-between border-t border-border pt-5 text-[11px] uppercase tracking-[0.2em] font-semibold text-foreground transition-colors"
                style={{ color: undefined }}
                onMouseEnter={(e) => (e.currentTarget.style.color = project.accent)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                Read Case Study in Full
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
