import Layout from "@/components/Layout";
import { PageSection } from "@/components/PageSection";
import { StaggerContainer, staggerChild, FadeInUp } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const items = [
  { title: "Heavy Duty Press Line", desc: "High-capacity press lines for large-scale stamping and forming operations." },
  { title: "In-house Tool Room", desc: "Complete tool design, development, and maintenance capabilities." },
  { title: "Tool Storage System", desc: "Organized and efficient tool storage and retrieval systems." },
  { title: "Material Handling System", desc: "Automated material handling for seamless production flow." },
];

const Infrastructure = () => (
  <Layout>
    <section className="bg-navy py-20 md:py-28 px-4">
      <div className="container max-w-7xl mx-auto text-center">
        <FadeInUp>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Our <span className="text-secondary">Infrastructure</span>
          </h1>
          <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto">
            State-of-the-art facilities built for precision manufacturing
          </p>
        </FadeInUp>
      </div>
    </section>

    <PageSection>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item) => (
          <motion.div
            key={item.title}
            variants={staggerChild}
            className="rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
          >
            <div className="aspect-video bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-sm">{item.title} Photo Placeholder</span>
            </div>
            <div className="p-6">
              <h3 className="font-display font-semibold text-xl mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </StaggerContainer>
    </PageSection>
  </Layout>
);

export default Infrastructure;
