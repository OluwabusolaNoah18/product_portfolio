import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const methods = [
  {
    tag: "Competitive & Market Research",
    company: "Prophius",
    body:
      "Before scoping Pay with Transfer and the PalmPay/OPay integrations, I ran competitive analysis on how other fintechs structured their transfer and alternative-payment products, and reviewed transaction data and support tickets showing rising customer preference for non-card payment. That research shaped a multi-channel rollout sequence rather than a single \"add a button\" launch.",
  },
  {
    tag: "Behavioral Experimentation",
    company: "MyPropifyNG",
    body:
      "Ran usage experiments on a specific build to identify where users were dropping off, then used the findings to prioritize what to fix before wider rollout.",
  },
  {
    tag: "A/B Testing",
    company: "iTCloser",
    body:
      "Ran a structured A/B comparison between two design directions with the team to determine which delivered a stronger user experience before committing to build.",
  },
];

const ApproachSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="approach" className="section-padding bg-card/40 border-y border-border">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-16"
        >
          <div className="md:col-span-4">
            <p className="editorial-eyebrow mb-6">Method</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">
              How I approach<br />
              <span className="italic text-primary">product decisions.</span>
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
              Every product bet gets treated like a hypothesis scoped small enough to test, validated with real evidence, and expanded only when the data earns it. Below are three examples of that muscle in practice, each tied to the company where it happened.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {methods.map((m, i) => (
            <motion.article
              key={m.tag}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="bg-background p-8 md:p-10 flex flex-col"
            >
              <p className="font-serif italic text-primary text-3xl mb-4">0{i + 1}</p>
              <h3 className="font-serif text-2xl leading-tight mb-2">{m.tag}</h3>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
                {m.company}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;