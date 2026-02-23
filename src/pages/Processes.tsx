import Layout from "@/components/Layout";
import { PageSection, SectionTitle } from "@/components/PageSection";
import { StaggerContainer, staggerChild, FadeInUp } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Hammer, Bot, Flame, Paintbrush, Wrench, Droplets } from "lucide-react";

const processes = [
  { icon: Hammer, title: "Stamping", desc: "High-precision stamping operations with heavy-duty press lines for consistent quality output." },
  { icon: Bot, title: "Robotic Welding", desc: "Automated robotic welding systems ensuring precision, speed, and repeatability." },
  { icon: Flame, title: "Manual Welding", desc: "Expert manual welding capabilities for specialized and custom fabrication needs." },
  { icon: Paintbrush, title: "Powder Coating", desc: "Advanced powder coating systems delivering durable, high-quality surface finishes." },
  { icon: Wrench, title: "Assembly", desc: "Comprehensive assembly lines with quality checks at every stage of production." },
  { icon: Droplets, title: "Hydro Forming", desc: "State-of-the-art hydro forming technology for complex geometries and lightweight parts." },
];

const Processes = () => (
  <Layout>
    <section className="bg-navy py-20 md:py-28 px-4">
      <div className="container max-w-7xl mx-auto text-center">
        <FadeInUp>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Processes & <span className="text-secondary">Capabilities</span>
          </h1>
          <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto">
            End-to-end manufacturing capabilities powered by cutting-edge technology
          </p>
        </FadeInUp>
      </div>
    </section>

    <PageSection>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {processes.map((p) => (
          <motion.div
            key={p.title}
            variants={staggerChild}
            className="group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
          >
            <div className="aspect-video bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-sm">{p.title} Photo Placeholder</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center group-hover:bg-secondary transition-colors">
                  <p.icon className="w-5 h-5 text-accent-foreground group-hover:text-secondary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg">{p.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </StaggerContainer>
    </PageSection>
  </Layout>
);

export default Processes;
