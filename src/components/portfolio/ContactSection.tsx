import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, Download } from "lucide-react";

const RESUME_URL =
  "https://drive.google.com/drive/folders/1nHpULQOdzAYnsSXycSJV2xvc-qaWlHwx?usp=drive_link";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding border-t border-border" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="editorial-eyebrow mb-8">// Get in Touch</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-8 max-w-4xl">
            Open to Product Manager roles in fintech, payments, and platform companies and actively growing toward opportunities at the intersection of{" "}
            <span className="italic text-primary">healthcare and technology</span>.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border"
        >
          <div className="bg-background p-8">
            <p className="editorial-eyebrow mb-3">Name</p>
            <p className="font-serif text-2xl italic">Oluwabusola Noah Ruth</p>
          </div>
          <a
            href="mailto:noaholuwabusola3@gmail.com"
            className="bg-background p-8 group hover:bg-card/50 transition-colors"
          >
            <p className="editorial-eyebrow mb-3 flex items-center gap-2">
              <Mail className="w-3 h-3" /> Email
            </p>
            <p className="font-serif text-xl md:text-2xl italic text-foreground group-hover:text-primary transition-colors break-all">
              noaholuwabusola3@gmail.com
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/oluwabusola-noah"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background p-8 group hover:bg-card/50 transition-colors"
          >
            <p className="editorial-eyebrow mb-3 flex items-center gap-2">
              <Linkedin className="w-3 h-3" /> LinkedIn
            </p>
            <p className="font-serif text-xl md:text-2xl italic text-foreground group-hover:text-primary transition-colors">
              /in/oluwabusola-noah
            </p>
          </a>
        </motion.div>

        <div className="mt-12">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-5 text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-accent transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
