import Layout from "@/components/Layout";
import { PageSection } from "@/components/PageSection";
import { StaggerContainer, staggerChild, FadeInUp } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const cells = [
  { title: "Press Line", desc: "High-tonnage press line for stamping operations with automated material handling." },
  { title: "Tool Room", desc: "In-house tool room for die design, manufacturing, and maintenance." },
  { title: "Welding Line", desc: "Integrated welding line with robotic and manual welding stations." },
  { title: "Powder Coating System", desc: "Automated powder coating line with pre-treatment and curing systems." },
  { title: "Assembly Lines", desc: "Dedicated assembly lines with integrated quality checkpoints." },
];

const Cells = () => (
  <Layout>
    <section className="bg-navy py-20 md:py-28 px-4">
      <div className="container max-w-7xl mx-auto text-center">
        <FadeInUp>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Manufacturing <span className="text-secondary">Cells</span>
          </h1>
          <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto">
            Dedicated manufacturing cells optimized for efficiency and quality
          </p>
        </FadeInUp>
      </div>
    </section>

    <PageSection>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cells.map((c) => (
          <motion.div
            key={c.title}
            variants={staggerChild}
            className="rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
          >
            <div className="aspect-video bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-sm">{c.title} Photo Placeholder</span>
            </div>
            <div className="p-6">
              <h3 className="font-display font-semibold text-lg mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          </motion.div>
        ))}
      </StaggerContainer>
    </PageSection>
  </Layout>
);

export default Cells;
