import { motion } from "framer-motion";
import { ArrowRight, Mail, Download } from "lucide-react";

const CV_URL =
  "https://drive.google.com/drive/folders/1nHpULQOdzAYnsSXycSJV2xvc-qaWlHwx?usp=drive_link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-b border-border pb-10 md:pb-14 mb-14 md:mb-16"
        >
          <p className="editorial-eyebrow mb-6">Product Portfolio · 2026</p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-5xl"
        >
          <h1 className="font-serif italic leading-[0.9] text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-primary mb-8">
            Product Manager<br />& Scrum Master
          </h1>
          <p className="font-serif text-2xl md:text-3xl leading-tight text-foreground mb-8 max-w-3xl">
            Building Scalable FinTech Products & Payment Solutions
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mb-12">
            I'm Oluwabusola Noah Ruth, a product leader specializing in payment gateways, API integrations, and embedded finance. I turn complex fintech challenges into seamless, scalable products.
          </p>

          <div className="flex flex-wrap gap-4">
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
              <Mail className="w-4 h-4" /> Contact Me
            </button>
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border px-7 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
