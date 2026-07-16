import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Download } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="editorial-eyebrow mb-6">Contact</p>
        </motion.div>

        <div className="border-t border-border pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <p className="editorial-eyebrow mb-3">Email</p>
              <a
                href="mailto:noaholuwabusola3@gmail.com"
                className="font-serif text-2xl md:text-3xl italic text-foreground hover:text-primary transition-colors break-all"
              >
                noaholuwabusola3@gmail.com
              </a>
            </div>
            <div>
              <p className="editorial-eyebrow mb-3">Elsewhere</p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.linkedin.com/in/oluwabusola-noah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm">LinkedIn</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary">
                    /in/oluwabusola-noah
                  </span>
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1nHpULQOdzAYnsSXycSJV2xvc-qaWlHwx?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span className="text-sm">Résumé (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
