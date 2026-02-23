import Layout from "@/components/Layout";
import { PageSection, PageHero, SectionTitle } from "@/components/PageSection";
import { FadeInUp, StaggerContainer, staggerChild, MagneticHover } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Award, FlaskConical, TestTube, TrendingUp } from "lucide-react";

const qualityItems = [
  { icon: Award, title: "Certifications", desc: "ISO, IATF certifications (details to be updated)." },
  { icon: FlaskConical, title: "New Technology R&D Center", desc: "Dedicated R&D center for developing new manufacturing technologies and processes." },
  { icon: TestTube, title: "Testing Facilities", desc: "Comprehensive testing labs for material and product quality verification." },
  { icon: TrendingUp, title: "Continuous Improvement", desc: "Ongoing Kaizen initiatives driving process optimization and cost reduction." },
];

const Quality = () => (
  <Layout>
    <PageHero title="Quality &" highlight="R&D" subtitle="Committed to excellence through rigorous quality assurance and innovation" />

    <PageSection>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.12}>
        {qualityItems.map((item) => (
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
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center group-hover:bg-secondary/10 transition-colors duration-300"
                    >
                      <item.icon className="w-5 h-5 text-accent-foreground group-hover:text-secondary transition-colors duration-300" />
                    </motion.div>
                    <h3 className="font-display font-bold text-lg">{item.title}</h3>
                  </div>
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

export default Quality;
