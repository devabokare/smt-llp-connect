import Layout from "@/components/Layout";
import { PageSection, SectionTitle } from "@/components/PageSection";
import { FadeInUp, StaggerContainer, staggerChild } from "@/components/AnimatedSection";
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
    <section className="bg-navy py-20 md:py-28 px-4">
      <div className="container max-w-7xl mx-auto text-center">
        <FadeInUp>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Quality & <span className="text-secondary">R&D</span>
          </h1>
          <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto">
            Committed to excellence through rigorous quality assurance and innovation
          </p>
        </FadeInUp>
      </div>
    </section>

    <PageSection>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {qualityItems.map((item) => (
          <motion.div
            key={item.title}
            variants={staggerChild}
            className="group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
          >
            <div className="aspect-video bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-sm">{item.title} Photo Placeholder</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center group-hover:bg-secondary transition-colors">
                  <item.icon className="w-5 h-5 text-accent-foreground group-hover:text-secondary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg">{item.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </StaggerContainer>
    </PageSection>
  </Layout>
);

export default Quality;
