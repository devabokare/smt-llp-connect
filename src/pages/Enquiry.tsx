import { useState, FormEvent } from "react";
import Layout from "@/components/Layout";
import { PageSection, SectionTitle } from "@/components/PageSection";
import { FadeInUp, SlideInLeft, SlideInRight } from "@/components/AnimatedSection";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Enquiry = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", requirements: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate submission
    setTimeout(() => {
      setSending(false);
      toast({
        title: "Enquiry Submitted",
        description: "Thank you! Our team will contact you shortly.",
      });
      setForm({ name: "", company: "", email: "", phone: "", requirements: "" });
    }, 1000);
  };

  return (
    <Layout>
      <section className="bg-navy py-20 md:py-28 px-4">
        <div className="container max-w-7xl mx-auto text-center">
          <FadeInUp>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Sales <span className="text-secondary">Enquiry</span>
            </h1>
            <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto">
              Get in touch with our team for manufacturing solutions
            </p>
          </FadeInUp>
        </div>
      </section>

      <PageSection>
        <div className="grid md:grid-cols-2 gap-12">
          <SlideInLeft>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { key: "name", label: "Full Name", type: "text" },
                { key: "company", label: "Company", type: "text" },
                { key: "email", label: "Email", type: "email" },
                { key: "phone", label: "Phone", type: "tel" },
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
                <label className="block text-sm font-medium mb-1.5">Requirement Details</label>
                <textarea
                  required
                  rows={4}
                  value={form.requirements}
                  onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                  maxLength={1000}
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {sending ? "Sending..." : "Submit Enquiry"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </SlideInLeft>

          <SlideInRight>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-sm text-muted-foreground">
                      SMT LLP PVT LTD<br />
                      Phase III, MIDC, Nighoje, Chakan,<br />
                      Maharashtra 410501
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-sm text-muted-foreground">
                      <a href="mailto:scm@smtllp.com" className="hover:text-secondary transition-colors">scm@smtllp.com</a><br />
                      <a href="mailto:pradip.rajguru@smtllp.com" className="hover:text-secondary transition-colors">pradip.rajguru@smtllp.com</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-sm text-muted-foreground">
                      <a href="tel:+919921800933" className="hover:text-secondary transition-colors">+91 9921800933</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SlideInRight>
        </div>
      </PageSection>
    </Layout>
  );
};

export default Enquiry;
