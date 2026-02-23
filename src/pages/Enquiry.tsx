import { useState, FormEvent } from "react";
import Layout from "@/components/Layout";
import { PageSection, PageHero } from "@/components/PageSection";
import { FadeInUp, SlideInLeft, SlideInRight, MagneticHover } from "@/components/AnimatedSection";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const Enquiry = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", requirements: "" });
  const [sending, setSending] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Enquiry Submitted", description: "Thank you! Our team will contact you shortly." });
      setForm({ name: "", company: "", email: "", phone: "", requirements: "" });
    }, 1000);
  };

  const inputClass = (key: string) =>
    `w-full px-5 py-3.5 rounded-2xl border bg-card text-foreground outline-none transition-all duration-300 ${
      focused === key ? "border-secondary shadow-glow ring-2 ring-secondary/20" : "border-border hover:border-steel-light"
    }`;

  return (
    <Layout>
      <PageHero title="Contact" highlight="Us" subtitle="Get in touch with our team for manufacturing solutions" />

      <PageSection>
        <div className="grid md:grid-cols-2 gap-16">
          <SlideInLeft>
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary mb-4 block">Send a Message</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">How can we help?</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { key: "name", label: "Full Name", type: "text" },
                { key: "company", label: "Company", type: "text" },
                { key: "email", label: "Email", type: "email" },
                { key: "phone", label: "Phone", type: "tel" },
              ].map((f) => (
                <div key={f.key}>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">{f.label}</label>
                  <input
                    type={f.type}
                    required
                    value={form[f.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    onFocus={() => setFocused(f.key)}
                    onBlur={() => setFocused(null)}
                    className={inputClass(f.key)}
                    maxLength={200}
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground/80">Requirement Details</label>
                <textarea
                  required
                  rows={4}
                  value={form.requirements}
                  onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                  onFocus={() => setFocused("req")}
                  onBlur={() => setFocused(null)}
                  className={`${inputClass("req")} resize-none`}
                  maxLength={1000}
                />
              </div>
              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-2xl font-semibold shadow-glow hover:shadow-[0_0_40px_hsl(24_95%_53%/0.3)] transition-all duration-300 disabled:opacity-50"
              >
                {sending ? "Sending..." : "Submit Enquiry"}
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </SlideInLeft>

          <SlideInRight>
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary mb-4 block">Reach us at</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-5">
              {[
                {
                  icon: MapPin,
                  title: "Address",
                  content: (
                    <span>SMTAUTO LLP<br />Phase III, MIDC, Nighoje, Chakan,<br />Maharashtra 410501</span>
                  ),
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: (
                    <span>
                      <a href="mailto:scm@smtllp.com" className="animated-underline hover:text-secondary transition-colors">scm@smtllp.com</a>
                      <br />
                      <a href="mailto:pradip.rajguru@smtllp.com" className="animated-underline hover:text-secondary transition-colors">pradip.rajguru@smtllp.com</a>
                    </span>
                  ),
                },
                {
                  icon: Phone,
                  title: "Phone",
                  content: (
                    <a href="tel:+919921800933" className="animated-underline hover:text-secondary transition-colors">+91 9921800933</a>
                  ),
                },
              ].map((item) => (
                <MagneticHover key={item.title}>
                  <div className="group p-6 rounded-3xl bg-card border border-border/60 shadow-card overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/3 group-hover:to-secondary/6 transition-all duration-500 pointer-events-none" />
                    <div className="flex items-start gap-4 relative z-10">
                      <motion.div
                        whileHover={{ rotate: 10 }}
                        className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shrink-0 group-hover:bg-secondary/10 transition-colors duration-300"
                      >
                        <item.icon className="w-5 h-5 text-accent-foreground group-hover:text-secondary transition-colors duration-300" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <div className="text-sm text-muted-foreground leading-relaxed">{item.content}</div>
                      </div>
                    </div>
                  </div>
                </MagneticHover>
              ))}
            </div>
          </SlideInRight>
        </div>
      </PageSection>

      <PageSection alt>
        <FadeInUp>
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary mb-4 block">Find Us</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold">Our Location</h2>
          </div>
          <div className="rounded-3xl overflow-hidden border border-border/60 shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.5!2d73.828044!3d18.7306384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b7002f11e273%3A0x8eba755ba68173cb!2sSMTAUTO%20SOLTION%20LLP!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SMTAUTO LLP Location"
              className="w-full"
            />
          </div>
        </FadeInUp>
      </PageSection>
    </Layout>
  );
};

export default Enquiry;
