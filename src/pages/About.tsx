import Layout from "@/components/Layout";
import { PageSection, SectionTitle, PageHero } from "@/components/PageSection";
import { FadeInUp, SlideInLeft, SlideInRight, StaggerContainer, staggerChild, MagneticHover, RevealBar } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Target, Rocket, Heart, Award, Users, Lightbulb } from "lucide-react";

const coreValues = [
  { icon: Heart, title: "Integrity", desc: "We uphold the highest ethical standards. Honesty, transparency, and accountability are the foundation of our relationships with clients, partners, and colleagues." },
  { icon: Award, title: "Excellence", desc: "We are committed to delivering engineering solutions, continuously improving processes, embracing innovation, and exceeding industry standards." },
  { icon: Lightbulb, title: "Innovation", desc: "We foster a culture of creativity and innovation by embracing new technologies and methodologies to stay ahead." },
];

const About = () => (
  <Layout>
    <PageHero title="About" highlight="SMTAUTO LLP" subtitle="A forward-looking manufacturing solutions provider, integrating advanced technologies with precision engineering." />

    {/* Overview */}
    <PageSection>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <SlideInLeft>
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary mb-4 block">Who we are</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight">Company Overview</h2>
          <RevealBar className="w-12 mb-6" />
          <p className="text-muted-foreground leading-relaxed mb-4">
            SMTAUTO LLP is a forward-looking manufacturing solutions provider, integrating advanced technologies with precision engineering. With the new technologies, SMTAUTO LLP ensures cost-effective, reliable, and future-ready manufacturing solutions for diverse industries.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our commitment to innovation and quality has positioned us as a trusted partner for industries seeking cutting-edge manufacturing capabilities.
          </p>
        </SlideInLeft>
        <SlideInRight>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-muted border border-border overflow-hidden flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Company Photo Placeholder</span>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl border-2 border-secondary/20 -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-secondary/10 -z-10" />
          </div>
        </SlideInRight>
      </div>
    </PageSection>

    {/* Vision & Mission */}
    <PageSection alt>
      <SectionTitle title="Vision & Mission" subtitle="Driving progress toward a greener, safer, and sustainable future" />
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            icon: Target,
            title: "Our Vision",
            text: "At SMTAUTO LLP, our vision is to be a pioneering force in the Energy, Automobile, and Service sectors by delivering innovative, efficient, and sustainable solutions that empower industries and communities worldwide. We aspire to achieve ₹300 Cr by 2028 while driving progress toward a greener, safer, and sustainable future.",
          },
          {
            icon: Rocket,
            title: "Our Mission",
            text: "Our mission is to be a dynamic force at the intersection of engineering innovation, sustainable energy solutions, and cutting-edge laser technology. We are committed to delivering world-class automotive and engineering products through eco-friendly processes, technological leadership, and collaborative partnerships.",
          },
        ].map((item, i) => (
          <FadeInUp key={item.title} delay={i * 0.15}>
            <MagneticHover>
              <div className="relative p-8 md:p-10 rounded-3xl bg-card border border-border/60 shadow-card overflow-hidden h-full group">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/3 group-hover:to-secondary/6 transition-all duration-500 pointer-events-none" />
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-5 group-hover:bg-secondary/10 transition-colors duration-300"
                  >
                    <item.icon className="w-7 h-7 text-accent-foreground group-hover:text-secondary transition-colors duration-300" />
                  </motion.div>
                  <h3 className="font-display text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </div>
            </MagneticHover>
          </FadeInUp>
        ))}
      </div>
    </PageSection>

    {/* Core Values */}
    <PageSection>
      <SectionTitle title="Core Values" subtitle="The principles that guide everything we do" />
      <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.12}>
        {coreValues.map((v) => (
          <motion.div key={v.title} variants={staggerChild}>
            <MagneticHover>
              <div className="relative p-8 rounded-3xl bg-card border border-border/60 shadow-card text-center overflow-hidden group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/3 group-hover:to-secondary/6 transition-all duration-500 pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-secondary/20 transition-colors duration-300">
                    <v.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </div>
            </MagneticHover>
          </motion.div>
        ))}
      </StaggerContainer>
    </PageSection>

    {/* HR Policy */}
    <PageSection dark className="bg-grid">
      <div className="text-center max-w-3xl mx-auto">
        <FadeInUp>
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-6"
          >
            <Users className="w-8 h-8 text-secondary" />
          </motion.div>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">HR Policy</h2>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <p className="text-primary-foreground/55 leading-relaxed text-lg">
            The Company believes that the most important resource amongst all is the Human Resource. HRD is considered as one of the most important strategic functions. The Company strongly believes in training & development of its employees based on business challenges & organizational needs.
          </p>
        </FadeInUp>
      </div>
    </PageSection>
  </Layout>
);

export default About;
