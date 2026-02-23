import Layout from "@/components/Layout";
import { PageSection, PageHero } from "@/components/PageSection";
import { StaggerContainer, staggerChild, MagneticHover } from "@/components/AnimatedSection";
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
    <PageHero title="Manufacturing" highlight="Cells" subtitle="Dedicated manufacturing cells optimized for efficiency and quality" />

    <PageSection>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
        {cells.map((c) => (
          <motion.div key={c.title} variants={staggerChild}>
            <MagneticHover>
              <div className="group rounded-3xl overflow-hidden bg-card border border-border/60 shadow-card h-full">
                <div className="aspect-video bg-muted overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">{c.title} Photo</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="font-display font-bold text-lg mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </div>
            </MagneticHover>
          </motion.div>
        ))}
      </StaggerContainer>
    </PageSection>
  </Layout>
);

export default Cells;
