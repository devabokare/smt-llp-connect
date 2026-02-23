import { useState, FormEvent } from "react";
import Layout from "@/components/Layout";
import { PageSection, SectionTitle, PageHero } from "@/components/PageSection";
import { FadeInUp, StaggerContainer, staggerChild, MagneticHover } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Briefcase, Heart, Utensils, GraduationCap, Send, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const openings = [
  { title: "Production Engineer", dept: "Production", location: "Chakan, Maharashtra" },
  { title: "Quality Inspector", dept: "Quality", location: "Chakan, Maharashtra" },
  { title: "Welding Technician", dept: "Production", location: "Chakan, Maharashtra" },
];

const culture = [
  { icon: Utensils, title: "Food & Meals", desc: "Complimentary meals and refreshments for all employees." },
  { icon: Heart, title: "Health Policy", desc: "Comprehensive health insurance and wellness programs." },
  { icon: GraduationCap, title: "Training & Growth", desc: "Regular training programs and career development opportunities." },
];

const Careers = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", position: "", message: "" });
  const [sending, setSending] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Application Submitted", description: "Thank you for your interest! HR will review your application." });
      setForm({ name: "", email: "", phone: "", position: "", message: "" });
    }, 1000);
  };

  const inputClass = (key: string) =>
    `w-full px-5 py-3.5 rounded-2xl border bg-card text-foreground outline-none transition-all duration-300 ${
      focused === key ? "border-secondary shadow-glow ring-2 ring-secondary/20" : "border-border hover:border-steel-light"
    }`;

  return (
    <Layout>
      <PageHero title="Join" highlight="Our Team" subtitle="Build your career with a forward-thinking manufacturing leader" />

      {/* Work Culture */}
      <PageSection>
        <SectionTitle title="Work Culture" subtitle="We invest in our people's wellbeing and growth" />
        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.12}>
          {culture.map((c) => (
            <motion.div key={c.title} variants={staggerChild}>
              <MagneticHover>
                <div className="group relative p-8 rounded-3xl bg-card border border-border/60 shadow-card text-center overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/3 group-hover:to-secondary/6 transition-all duration-500 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-secondary/20 transition-colors duration-300">
                      <c.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="font-display font-bold text-lg mb-2">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </MagneticHover>
            </motion.div>
          ))}
        </StaggerContainer>
      </PageSection>

      {/* Openings */}
      <PageSection alt>
        <SectionTitle title="Current Openings" subtitle="Explore career opportunities at SMTAUTO LLP" />
        <StaggerContainer className="space-y-4 max-w-3xl mx-auto" staggerDelay={0.1}>
          {openings.map((o) => (
            <motion.div key={o.title} variants={staggerChild}>
              <MagneticHover>
                <div className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-3xl bg-card border border-border/60 shadow-card gap-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 to-secondary/0 group-hover:from-secondary/3 group-hover:to-secondary/6 transition-all duration-500 pointer-events-none" />
                  <div className="flex items-center gap-4 relative z-10">
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center group-hover:bg-secondary/10 transition-colors duration-300"
                    >
                      <Briefcase className="w-5 h-5 text-accent-foreground group-hover:text-secondary transition-colors duration-300" />
                    </motion.div>
                    <div>
                      <h3 className="font-display font-bold">{o.title}</h3>
                      <p className="text-xs text-muted-foreground">{o.dept} · {o.location}</p>
                    </div>
                  </div>
                  <a href="#apply" className="relative z-10 inline-flex items-center gap-1 text-sm font-semibold text-secondary group-hover:gap-2 transition-all">
                    Apply <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </MagneticHover>
            </motion.div>
          ))}
        </StaggerContainer>
      </PageSection>

      {/* Application Form */}
      <PageSection id="apply">
        <div className="max-w-2xl mx-auto">
          <SectionTitle title="Apply Online" subtitle="Submit your application and our HR team will get back to you" />
          <FadeInUp>
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { key: "name", label: "Full Name", type: "text" },
                { key: "email", label: "Email", type: "email" },
                { key: "phone", label: "Phone", type: "tel" },
                { key: "position", label: "Position Applied For", type: "text" },
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
                <label className="block text-sm font-medium mb-2 text-foreground/80">Cover Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onFocus={() => setFocused("msg")}
                  onBlur={() => setFocused(null)}
                  className={`${inputClass("msg")} resize-none`}
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
                {sending ? "Submitting..." : "Submit Application"}
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </FadeInUp>
        </div>
      </PageSection>
    </Layout>
  );
};

export default Careers;
