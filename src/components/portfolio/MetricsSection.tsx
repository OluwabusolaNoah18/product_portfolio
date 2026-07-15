import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  {
    value: "32.5%",
    label: "Merchant Base Growth",
    desc: "Delivered via the onboarding flow redesign and Pay with Transfer rollout at Prophius.",
  },
  {
    value: "40%",
    label: "Blocker Reduction / Sprint",
    desc: "Proactive blocker triage and resolution tracking as Scrum Master, keeping engineering unblocked within sprint cycles.",
  },
  {
    value: "25%",
    label: "Onboarding Time Cut",
    desc: "PayContactless SoftPOS onboarding workflow redesign measured against the pre-redesign baseline.",
  },
  {
    value: "2,000+",
    label: "Learners Mentored",
    desc: "PM curriculum and 1:1 mentorship reaching aspiring product managers globally through BeTechified.",
  },
];

const MetricsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-14"
        >
          <div className="md:col-span-4">
            <p className="editorial-eyebrow mb-6">Impact</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">
              Numbers with<br />
              <span className="italic text-primary">receipts.</span>
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
              Every figure below is anchored to a specific initiative, timeframe, and company not a résumé metric floating without context.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="bg-background p-8 md:p-10"
            >
              <p className="font-serif italic text-6xl md:text-7xl text-primary leading-none mb-4">
                {m.value}
              </p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-foreground mb-3">
                {m.label}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
