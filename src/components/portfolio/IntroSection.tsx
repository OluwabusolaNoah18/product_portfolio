import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const IntroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="intro" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="editorial-eyebrow mb-8">// Intro</p>
          <p className="font-serif text-2xl md:text-4xl leading-[1.3] text-foreground">
            I'm a Product Manager and Certified Scrum Master who moved into product from design and QA with a First-Class background in biochemistry that shaped a{" "}
            <span className="italic text-primary">hypothesis-driven approach</span> to shipping: define the question, test it, measure the result. I build fintech payment infrastructure that ships, scales, and holds up under real usage, and I'm actively growing toward opportunities at the intersection of{" "}
            <span className="italic text-primary">healthcare and technology</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;