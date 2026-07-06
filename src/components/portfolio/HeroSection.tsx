import { motion } from "framer-motion";
import { ArrowDown, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent-purple/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">Product Manager & Scrum Master</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          Building Scalable{" "}
          <span className="text-gradient">FinTech Products</span>{" "}
          & Payment Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I'm <span className="text-foreground font-semibold">Oluwabusola Noah Ruth</span>, a product leader 
          specializing in payment gateways, API integrations, and embedded finance. 
          I turn complex fintech challenges into seamless, scalable products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap"
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold rounded-xl glow-border"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Projects
            <ArrowDown className="ml-2 w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-border hover:bg-secondary px-8 py-6 text-base rounded-xl"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Mail className="mr-2 w-4 h-4" />
            Contact Me
          </Button>
          <Button asChild variant="ghost" size="lg" className="hover:bg-secondary px-8 py-6 text-base rounded-xl">
            <a
              href="https://drive.google.com/file/d/1Ub7p3o1Osg08Go2RxAZJaqpEBje8k6pF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 w-4 h-4" />
              View Resume
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
