import { useState, FormEvent } from "react";
import Layout from "@/components/Layout";
import { PageSection, SectionTitle } from "@/components/PageSection";
import { FadeInUp, StaggerContainer, staggerChild } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Briefcase, Heart, Utensils, GraduationCap, Send } from "lucide-react";
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({
        title: "Application Submitted",
        description: "Thank you for your interest! HR will review your application.",
      });
      setForm({ name: "", email: "", phone: "", position: "", message: "" });
    }, 1000);
  };

  return (
    <Layout>
      <section className="bg-navy py-20 md:py-28 px-4">
        <div className="container max-w-7xl mx-auto text-center">
          <FadeInUp>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Join <span className="text-secondary">Our Team</span>
            </h1>
            <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto">
              Build your career with a forward-thinking manufacturing leader
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Work Culture */}
      <PageSection>
        <SectionTitle title="Work Culture" subtitle="We invest in our people's wellbeing and growth" />
        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {culture.map((c) => (
            <motion.div
              key={c.title}
              variants={staggerChild}
              className="p-6 rounded-2xl bg-card border border-border shadow-card text-center hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <c.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </PageSection>

      {/* Openings */}
      <PageSection alt>
        <SectionTitle title="Current Openings" subtitle="Explore career opportunities at SMT LLP" />
        <StaggerContainer className="space-y-4 max-w-3xl mx-auto">
          {openings.map((o) => (
            <motion.div
              key={o.title}
              variants={staggerChild}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl bg-card border border-border shadow-card gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold">{o.title}</h3>
                  <p className="text-xs text-muted-foreground">{o.dept} · {o.location}</p>
                </div>
              </div>
              <a href="#apply" className="text-sm font-semibold text-secondary hover:underline">Apply →</a>
            </motion.div>
          ))}
        </StaggerContainer>
      </PageSection>

      {/* Application Form */}
      <PageSection id="apply">
        <div className="max-w-2xl mx-auto">
          <SectionTitle title="Apply Online" subtitle="Submit your application and our HR team will get back to you" />
          <FadeInUp>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { key: "name", label: "Full Name", type: "text" },
                { key: "email", label: "Email", type: "email" },
                { key: "phone", label: "Phone", type: "tel" },
                { key: "position", label: "Position Applied For", type: "text" },
              ].map((f) => (
                <div key={f.key}>
                  <label className="block text-sm font-medium mb-1.5">{f.label}</label>
                  <input
                    type={f.type}
                    required
                    value={form[f.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    maxLength={200}
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium mb-1.5">Cover Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                  maxLength={1000}
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {sending ? "Submitting..." : "Submit Application"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </FadeInUp>
        </div>
      </PageSection>
    </Layout>
  );
};

export default Careers;
