import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download } from "lucide-react";

const RESUME_URL =
  "https://drive.google.com/drive/folders/1nHpULQOdzAYnsSXycSJV2xvc-qaWlHwx?usp=drive_link";

const CurrentRoleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="currently" className="section-padding border-t border-border" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center"
        >
          <div className="md:col-span-7">
            <p className="editorial-eyebrow mb-6">// Currently</p>
            <p className="font-serif text-3xl md:text-4xl leading-[1.15]">
              Product Manager & Scrum Master at{" "}
              <span className="italic text-primary">Prophius Ltd</span>, leading fintech payment infrastructure across POS, SoftPOS, and digital channels.
            </p>
          </div>
          <div className="md:col-span-5 md:text-right">
            <p className="text-sm text-muted-foreground max-w-sm md:ml-auto mb-6 leading-relaxed">
              Full career history including Filton Avenue, MyPropifyNG, BeTechified, iTCloser, and YPIT lives in the resume.
            </p>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-accent transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Full Resume (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentRoleSection;