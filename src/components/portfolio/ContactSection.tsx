import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Send, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-16"
        >
          <div className="md:col-span-6">
            <p className="editorial-eyebrow mb-6">Contact</p>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.95]">
              Let's discuss the<br />
              <span className="italic text-primary">next hypothesis.</span>
            </h2>
          </div>
          <div className="md:col-span-6 flex items-end">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Open to product leadership roles in fintech, payments, and platform companies — full-time, contract, or advisory.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 border-t border-border pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="md:col-span-5 space-y-8"
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
                  href="https://drive.google.com/file/d/1Ub7p3o1Osg08Go2RxAZJaqpEBje8k6pF/view?usp=sharing"
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

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="md:col-span-7 space-y-6"
          >
            <p className="editorial-eyebrow">Send a message</p>
            <Input
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-transparent border-0 border-b border-border rounded-none px-0 h-12 text-base focus-visible:ring-0 focus-visible:border-primary"
              required
            />
            <Input
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-transparent border-0 border-b border-border rounded-none px-0 h-12 text-base focus-visible:ring-0 focus-visible:border-primary"
              required
            />
            <Textarea
              placeholder="Your message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-transparent border-0 border-b border-border rounded-none px-0 min-h-[120px] text-base focus-visible:ring-0 focus-visible:border-primary resize-none"
              required
            />
            <Button
              type="submit"
              className="group bg-primary text-primary-foreground hover:bg-accent px-8 py-6 text-[11px] uppercase tracking-[0.2em] rounded-none"
            >
              Send Message
              <Send className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
