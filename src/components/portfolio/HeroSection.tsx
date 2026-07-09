import { motion } from "framer-motion";
import { ArrowRight, Mail, Download } from "lucide-react";

const CV_URL = "https://drive.google.com/file/d/1Ub7p3o1Osg08Go2RxAZJaqpEBje8k6pF/view?usp=sharing";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header row */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-10 md:pb-14 mb-16 md:mb-20 gap-8"
        >
          <div className="space-y-5 max-w-3xl">
            <p className="editorial-eyebrow">Product Portfolio · 2026</p>
            <h1 className="font-serif italic leading-[0.9] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary">
              Fintech<br />Product Manager
            </h1>
          </div>
          <div className="md:text-right md:max-w-xs">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Oluwabusola Noah Ruth — building payment gateways, embedded finance, and API-first products merchants and engineers can rely on.
            </p>
          </div>
        </motion.header>

        {/* Body grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-8"
          >
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.08] mb-10 max-w-3xl">
              I build at the intersection of{" "}
              <span className="text-accent italic">technical rigor</span> and user intuition — turning ambiguous fintech problems into shipped, live infrastructure.
            </h2>

            <div className="flex flex-wrap gap-10">
              {[
                { v: "32.5%", l: "Merchant Base Growth" },
                { v: "40%", l: "Blocker Reduction / Sprint" },
                { v: "2,000+", l: "Learners Mentored" },
              ].map((m) => (
                <div key={m.l} className="border-l border-primary pl-5">
                  <p className="font-serif text-3xl md:text-4xl text-foreground">{m.v}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1.5">{m.l}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-12">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-accent transition-colors"
              >
                View Case Studies
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 border border-border px-7 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" /> Contact
              </button>
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
              >
                <Download className="w-4 h-4" /> Resume
              </a>
            </div>
          </motion.div>

          {/* Spotlight card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-4"
          >
            <div className="bg-card border border-border/70 p-8 h-full flex flex-col justify-between">
              <div>
                <p className="editorial-eyebrow mb-8">Recent Spotlight</p>
                <p className="font-serif italic text-2xl md:text-3xl mb-4 leading-tight text-foreground">
                  Pay with Transfer & Wallet Infrastructure
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Hypothesis: cutting card dependency and giving merchants native transfer visibility grows the acquiring base faster than any single UX fix.
                </p>
              </div>
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-accent mt-10 self-start"
              >
                Read Case Study
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Skills strip */}
        <div className="mt-24 md:mt-32 pt-10 border-t border-border flex flex-wrap gap-x-10 gap-y-4">
          {[
            "Payment Gateways",
            "Embedded Finance",
            "API-first Products",
            "Certified Scrum Master",
            "UAT & Regression",
          ].map((s) => (
            <span key={s} className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
