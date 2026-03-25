import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Layers, Code2, Smartphone, Zap } from "lucide-react";

const projects = [
  {
    icon: Layers,
    title: "Payment Gateway Platform (PayGate)",
    tags: ["Payment Processing", "API Design", "Scalability"],
    problem: "Businesses needed a reliable, scalable payment gateway supporting multiple channels and currencies with high transaction success rates.",
    solution: "Led the design and delivery of an end-to-end payment gateway platform supporting card, bank transfer, USSD, and mobile money with real-time settlement and robust fraud detection.",
    role: "Product Manager — owned the roadmap, defined API contracts, coordinated with engineering and compliance teams, and led sprint ceremonies.",
    impact: [
      "Achieved 99.2% transaction success rate",
      "Scaled to handle 10,000+ transactions per minute",
      "Reduced settlement time from T+2 to T+1",
    ],
  },
  {
    icon: Code2,
    title: "Embedded Payment Solution (React-based)",
    tags: ["Embedded Finance", "React SDK", "Developer Experience"],
    problem: "Merchants struggled with complex payment integrations that required deep technical expertise and weeks of development time.",
    solution: "Built a React-based embeddable payment widget with plug-and-play APIs, enabling businesses to integrate payments in under 30 minutes with minimal code.",
    role: "Product Manager — led discovery, defined the SDK architecture with engineering, designed the developer portal, and managed beta testing.",
    impact: [
      "Reduced integration time from 2 weeks to 30 minutes",
      "Improved developer satisfaction score by 45%",
      "Onboarded 200+ merchants in first quarter",
    ],
  },
  {
    icon: Smartphone,
    title: "APM Integrations (PalmPay, OPay, InTouch)",
    tags: ["Alternative Payments", "Partnerships", "Market Expansion"],
    problem: "Payment success rates were low in regions where traditional card payments had limited penetration, leaving revenue on the table.",
    solution: "Integrated alternative payment methods (PalmPay, OPay, InTouch) to expand payment coverage across underserved markets in West and Central Africa.",
    role: "Product Manager — negotiated partner APIs, defined integration specs, managed cross-team delivery, and monitored post-launch metrics.",
    impact: [
      "Increased payment success rates by 35%",
      "Expanded coverage to 3 new markets",
      "Grew transaction volume by 50% in target regions",
    ],
  },
  {
    icon: Zap,
    title: "SoftPOS Onboarding Optimization",
    tags: ["Process Design", "UX Optimization", "Compliance"],
    problem: "Merchant onboarding for SoftPOS took an average of 5 days due to manual KYC processes, complex forms, and fragmented workflows.",
    solution: "Redesigned the onboarding workflow with automated KYC verification, progressive form completion, and real-time status tracking for merchants.",
    role: "Product Manager — mapped the existing journey, identified bottlenecks through data analysis, and led the redesign with UX and engineering teams.",
    impact: [
      "25% reduction in onboarding time",
      "Decreased drop-off rate by 40%",
      "Improved merchant satisfaction from 3.2 to 4.5/5",
    ],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">// FEATURED PROJECTS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Case studies & <span className="text-gradient">impact</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <project.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono px-2 py-1 rounded-md bg-secondary text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-1">Problem</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-1">Solution</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-1">My Role</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.role}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-1">Impact</h4>
                    <ul className="space-y-1.5">
                      {project.impact.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
