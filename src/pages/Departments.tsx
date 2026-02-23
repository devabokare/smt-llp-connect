import Layout from "@/components/Layout";
import { PageSection, SectionTitle } from "@/components/PageSection";
import { StaggerContainer, staggerChild, FadeInUp } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Package, Factory, Settings, FlaskConical, Shield, Link2, ShoppingCart, Users, Calculator } from "lucide-react";

const departments = [
  { icon: Package, title: "Store & Despatch", desc: "Efficient material storage and timely despatch operations." },
  { icon: Factory, title: "Production", desc: "Core manufacturing operations ensuring quality and on-time delivery." },
  { icon: Settings, title: "Development", desc: "Product development and process engineering for new projects." },
  { icon: FlaskConical, title: "R&D", desc: "Research and development for innovation in manufacturing." },
  { icon: Shield, title: "Quality", desc: "Quality assurance across all processes and products." },
  { icon: Link2, title: "Supply Chain Management", desc: "End-to-end supply chain coordination and optimization." },
  { icon: ShoppingCart, title: "Purchase", desc: "Strategic procurement of raw materials and components." },
  { icon: Users, title: "HR", desc: "Human resource management, training, and development." },
  { icon: Calculator, title: "Accounts & Finance", desc: "Financial management, compliance, and reporting." },
];

const Departments = () => (
  <Layout>
    <section className="bg-navy py-20 md:py-28 px-4">
      <div className="container max-w-7xl mx-auto text-center">
        <FadeInUp>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Our <span className="text-secondary">Departments</span>
          </h1>
          <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto">
            Cross-functional teams working together to deliver excellence
          </p>
        </FadeInUp>
      </div>
    </section>

    <PageSection>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((d) => (
          <motion.div
            key={d.title}
            variants={staggerChild}
            className="group p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
              <d.icon className="w-6 h-6 text-accent-foreground group-hover:text-secondary-foreground" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{d.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
          </motion.div>
        ))}
      </StaggerContainer>
    </PageSection>
  </Layout>
);

export default Departments;
