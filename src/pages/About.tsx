import Layout from "@/components/Layout";
import { PageSection, SectionTitle } from "@/components/PageSection";
import { FadeInUp, SlideInLeft, SlideInRight, StaggerContainer, staggerChild } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Target, Rocket, Heart, Award, Users, Lightbulb } from "lucide-react";

const coreValues = [
  { icon: Heart, title: "Integrity", desc: "We uphold the highest ethical standards. Honesty, transparency, and accountability are the foundation of our relationships." },
  { icon: Award, title: "Excellence", desc: "We are committed to delivering engineering solutions, continuously improving processes, and exceeding industry standards." },
  { icon: Lightbulb, title: "Innovation", desc: "We foster a culture of creativity and innovation by embracing new technologies and methodologies." },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-navy py-20 md:py-28 px-4">
      <div className="container max-w-7xl mx-auto text-center">
        <FadeInUp>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            About <span className="text-secondary">SMT LLP</span>
          </h1>
          <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto">
            A forward-looking manufacturing solutions provider, integrating advanced technologies with precision engineering.
          </p>
        </FadeInUp>
      </div>
    </section>

    {/* Overview */}
    <PageSection>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <SlideInLeft>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Company Overview</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            SMT LLP is a forward-looking manufacturing solutions provider, integrating advanced technologies with precision engineering. With the new technologies, SMT LLP ensures cost-effective, reliable, and future-ready manufacturing solutions for diverse industries.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our commitment to innovation and quality has positioned us as a trusted partner for industries seeking cutting-edge manufacturing capabilities.
          </p>
        </SlideInLeft>
        <SlideInRight>
          <div className="aspect-video rounded-2xl bg-muted flex items-center justify-center border border-border">
            <span className="text-muted-foreground text-sm">Company Photo Placeholder</span>
          </div>
        </SlideInRight>
      </div>
    </PageSection>

    {/* Vision & Mission */}
    <PageSection alt>
      <div className="grid md:grid-cols-2 gap-8">
        <FadeInUp>
          <div className="p-8 rounded-2xl bg-card border border-border shadow-card h-full">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              At SMT LLP, our vision is to be a pioneering force in the Energy, Automobile, and Service sectors by delivering innovative, efficient, and sustainable solutions that empower industries and communities worldwide. We aspire to achieve ₹300 Cr by 2028 while driving progress toward a greener, safer, and sustainable future.
            </p>
          </div>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <div className="p-8 rounded-2xl bg-card border border-border shadow-card h-full">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to be a dynamic force at the intersection of engineering innovation, sustainable energy solutions, and cutting-edge laser technology. We are committed to delivering world-class automotive and engineering products through eco-friendly processes, technological leadership, and collaborative partnerships.
            </p>
          </div>
        </FadeInUp>
      </div>
    </PageSection>

    {/* Core Values */}
    <PageSection>
      <SectionTitle title="Core Values" subtitle="The principles that guide everything we do" />
      <StaggerContainer className="grid md:grid-cols-3 gap-6">
        {coreValues.map((v) => (
          <motion.div
            key={v.title}
            variants={staggerChild}
            className="p-6 rounded-2xl bg-card border border-border shadow-card text-center hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
              <v.icon className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-display font-semibold text-xl mb-3">{v.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </StaggerContainer>
    </PageSection>

    {/* HR Policy */}
    <PageSection dark>
      <div className="text-center max-w-3xl mx-auto">
        <FadeInUp>
          <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">HR Policy</h2>
          <p className="text-primary-foreground/70 leading-relaxed">
            The Company believes that the most important resource amongst all is the Human Resource. HRD is considered as one of the most important strategic functions. The Company strongly believes in training & development of its employees based on business challenges & organizational needs.
          </p>
        </FadeInUp>
      </div>
    </PageSection>
  </Layout>
);

export default About;
