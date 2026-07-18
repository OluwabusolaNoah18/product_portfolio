import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-20"
        >
          <div className="md:col-span-4">
            <p className="editorial-eyebrow mb-6">About</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">
              A non-linear path,<br />
              <span className="italic text-primary">by design.</span>
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
            <p>
              I'm a Product Manager and Certified Scrum Master with deep expertise in fintech, payment systems, and platform products. My path here wasn't linear I started my tech career as a Product Designer, transitioned into Product Management, and later completed coursework in QA Engineering so I could properly validate a product before it ships (I still lead UAT and regression testing today).
            </p>
            <p>
              Underneath it all is my background in biochemistry research: the same instinct that trained me to form a hypothesis, test it, and let evidence not assumption decide the next step now shows up in how I scope and validate product decisions.
            </p>
            <p>
              I specialize in building scalable products that drive measurable business impact. My approach combines data-driven decision making with agile methodologies to deliver products that users love and businesses rely on.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
