import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";
import NotFound from "@/pages/NotFound";
import { useEffect } from "react";

const CaseStudyPage = () => {
  const { slug = "" } = useParams();
  const project = getCaseStudy(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!project) return <NotFound />;

  const idx = caseStudies.findIndex((c) => c.slug === slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <div className="min-h-screen">
      <Navbar />
      <article className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </Link>

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border-b border-border pb-12 mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <p className="editorial-eyebrow" style={{ color: project.accent }}>
                Case Study 0{idx + 1}
              </p>
              <span
                className="text-[10px] uppercase tracking-[0.2em] border px-2.5 py-1"
                style={{ color: project.accent, borderColor: `${project.accent}66` }}
              >
                {project.differentiator}
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl leading-[1.02] mb-8">
              {project.title}
            </h1>
            <p className="text-sm text-muted-foreground mb-3">{project.meta}</p>
            {project.scope && (
              <p className="text-[11px] uppercase tracking-[0.2em] text-primary mb-6">
                {project.scope}
              </p>
            )}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-[0.2em] border border-border px-3 py-1.5 text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.liveNote && (
              <div className="inline-flex items-center gap-2 border border-accent/40 bg-accent/10 px-4 py-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0" />
                <p className="text-xs md:text-sm text-foreground/90">{project.liveNote}</p>
              </div>
            )}
          </motion.header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {project.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="editorial-eyebrow mb-4">{s.heading}</h2>
                {s.body && (
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {s.body}
                  </p>
                )}
                {s.bullets && (
                  <ul className="space-y-2.5">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-sm md:text-base text-muted-foreground flex items-start gap-3 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <Link
            to={`/case-studies/${next.slug}`}
            className="group mt-20 flex items-center justify-between border-t border-border pt-8 hover:text-primary transition-colors"
          >
            <div>
              <p className="editorial-eyebrow mb-2">Next Case Study</p>
              <p className="font-serif text-xl md:text-2xl italic">{next.title}</p>
            </div>
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default CaseStudyPage;
