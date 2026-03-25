import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Zap, Shield, GraduationCap } from "lucide-react";

const metrics = [
  { icon: TrendingUp, value: "25%", label: "Onboarding Time Reduction", desc: "SoftPOS workflow optimization" },
  { icon: Zap, value: "30%", label: "Delivery Efficiency Gain", desc: "Agile process improvements" },
  { icon: Shield, value: "40%", label: "Blocker Reduction", desc: "Cross-functional alignment" },
  { icon: GraduationCap, value: "2000+", label: "Learners Reached", desc: "Product mentorship & training" },
];

const MetricsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">// IMPACT</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Metrics that <span className="text-gradient">matter</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="glass rounded-xl p-6 text-center hover:border-primary/30 transition-all group"
            >
              <m.icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-3xl md:text-4xl font-bold text-gradient mb-1">{m.value}</p>
              <p className="font-semibold text-sm mb-1">{m.label}</p>
              <p className="text-xs text-muted-foreground">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
