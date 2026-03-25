import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CreditCard, Code2, BarChart3, Users } from "lucide-react";

const highlights = [
  { icon: CreditCard, label: "Payment Gateways", desc: "End-to-end payment platform development" },
  { icon: Code2, label: "API Integrations", desc: "Designing developer-first API experiences" },
  { icon: BarChart3, label: "Data-Driven PM", desc: "Metrics-led product decisions" },
  { icon: Users, label: "Cross-Functional Leadership", desc: "Aligning engineering, design & business" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">// ABOUT ME</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Turning complex fintech challenges into{" "}
            <span className="text-gradient">elegant solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            I'm a Product Manager and Certified Scrum Master with deep expertise in fintech, 
            payment systems, and platform products. I specialize in building scalable payment 
            gateways, embedded finance solutions, and API-first products that drive measurable 
            business impact. My approach combines data-driven decision making with agile 
            methodologies to deliver products that users love and businesses rely on.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-colors group"
            >
              <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-1">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
