import Layout from "@/components/Layout";
import { PageSection, PageHero } from "@/components/PageSection";
import { StaggerContainer, staggerChild, MagneticHover } from "@/components/AnimatedSection";
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
    <PageHero title="Our" highlight="Departments" subtitle="Cross-functional teams working together to deliver excellence" />

    <PageSection>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.08}>
        {departments.map((d) => (
          <motion.div key={d.title} variants={staggerChild}>
            <MagneticHover>
              <div className="group relative p-7 rounded-3xl bg-card border border-border/60 shadow-card overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/3 group-hover:to-secondary/6 transition-all duration-500 pointer-events-none" />
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-13 h-13 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-secondary/10 transition-colors duration-300 w-[52px] h-[52px]"
                  >
                    <d.icon className="w-6 h-6 text-accent-foreground group-hover:text-secondary transition-colors duration-300" />
                  </motion.div>
                  <h3 className="font-display font-bold text-lg mb-2">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              </div>
            </MagneticHover>
          </motion.div>
        ))}
      </StaggerContainer>
    </PageSection>
  </Layout>
);

export default Departments;
