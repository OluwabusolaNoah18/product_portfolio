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
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">// GET IN TOUCH</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's build something <span className="text-gradient">great</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Open to product leadership roles in fintech, payments, and platform companies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-6"
          >
            <a
              href="mailto:oluwabusola.ruth@gmail.com"
              className="glass rounded-xl p-5 flex items-center gap-4 hover:border-primary/30 transition-colors group block"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">oluwabusola.ruth@gmail.com</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/oluwabusola-noah-ruth"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl p-5 flex items-center gap-4 hover:border-primary/30 transition-colors group block"
            >
              <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="font-medium">Connect with me</p>
              </div>
            </a>

            <Button variant="outline" className="w-full py-6 rounded-xl border-border hover:bg-secondary">
              <Download className="mr-2 w-4 h-4" />
              Download Resume
            </Button>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass rounded-xl p-6 space-y-4"
          >
            <Input
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-secondary border-border focus:border-primary rounded-lg"
              required
            />
            <Input
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-secondary border-border focus:border-primary rounded-lg"
              required
            />
            <Textarea
              placeholder="Your message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-secondary border-border focus:border-primary rounded-lg min-h-[120px]"
              required
            />
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-5 rounded-xl">
              <Send className="mr-2 w-4 h-4" />
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
