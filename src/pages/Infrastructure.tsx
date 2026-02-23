import Layout from "@/components/Layout";
import { PageSection, PageHero } from "@/components/PageSection";
import { StaggerContainer, staggerChild, MagneticHover } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const items = [
  { title: "Heavy Duty Press Line", desc: "High-capacity press lines for large-scale stamping and forming operations." },
  { title: "In-house Tool Room", desc: "Complete tool design, development, and maintenance capabilities." },
  { title: "Tool Storage System", desc: "Organized and efficient tool storage and retrieval systems." },
  { title: "Material Handling System", desc: "Automated material handling for seamless production flow." },
];

const Infrastructure = () => (
  <Layout>
    <PageHero title="Our" highlight="Infrastructure" subtitle="State-of-the-art facilities built for precision manufacturing" />

    <PageSection>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.12}>
        {items.map((item) => (
          <motion.div key={item.title} variants={staggerChild}>
            <MagneticHover>
              <div className="group rounded-3xl overflow-hidden bg-card border border-border/60 shadow-card h-full">
                <div className="aspect-video bg-muted overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">{item.title} Photo</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-7">
                  <h3 className="font-display font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </MagneticHover>
          </motion.div>
        ))}
      </StaggerContainer>
    </PageSection>
  </Layout>
);

export default Infrastructure;
