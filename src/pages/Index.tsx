import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cog, Factory, Shield, Eye, ArrowRight, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import { FadeInUp, StaggerContainer, staggerChild } from "@/components/AnimatedSection";
import { PageSection, SectionTitle } from "@/components/PageSection";
import heroBg from "@/assets/hero-bg.jpg";

const highlights = [
  { icon: Cog, title: "Advanced Processes", desc: "Stamping, robotic welding, powder coating & assembly capabilities" },
  { icon: Factory, title: "World-Class Infrastructure", desc: "Heavy duty press lines, in-house tool room & material handling systems" },
  { icon: Shield, title: "Quality Assurance", desc: "Rigorous testing, R&D center & continuous improvement initiatives" },
  { icon: Eye, title: "Vision & Mission", desc: "Pioneering solutions in Energy, Automobile & Service sectors" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Manufacturing facility" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground/80 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Precision Engineering & Manufacturing
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
          >
            SMT <span className="text-secondary">LLP</span> Pvt Ltd
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Integrating advanced technologies with precision engineering for cost-effective, reliable, and future-ready manufacturing solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/enquiry"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity text-base"
            >
              Sales Enquiry
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/careers"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 rounded-xl font-semibold hover:bg-primary-foreground/20 transition-colors text-base backdrop-blur-sm"
            >
              Careers
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2.5 rounded-full bg-primary-foreground/50" />
          </div>
        </motion.div>
      </section>

      {/* Highlights */}
      <PageSection>
        <SectionTitle title="Why SMT LLP?" subtitle="Delivering excellence across every facet of manufacturing" />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <motion.div
              key={h.title}
              variants={staggerChild}
              className="group p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                <h.icon className="w-6 h-6 text-accent-foreground group-hover:text-secondary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </PageSection>

      {/* CTA */}
      <PageSection dark>
        <div className="text-center">
          <FadeInUp>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Partner With Us?</h2>
            <p className="text-primary-foreground/60 mb-8 max-w-xl mx-auto">
              Let's discuss how SMT LLP can deliver precision manufacturing solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/enquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Sales Enquiry <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-primary-foreground/20 text-primary-foreground rounded-xl font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </FadeInUp>
        </div>
      </PageSection>
    </Layout>
  );
};

export default Index;
