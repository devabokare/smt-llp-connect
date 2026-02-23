import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Cog, Factory, Shield, Eye, ArrowRight, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import {
  FadeInUp,
  StaggerContainer,
  staggerChild,
  TextReveal,
  AnimatedCounter,
  MagneticHover,
  RevealBar,
  ParallaxSection,
} from "@/components/AnimatedSection";
import { PageSection, SectionTitle } from "@/components/PageSection";
import heroVideo from "@/assets/hero-video.mp4";
import renomLogo from "@/assets/clients/renom.png";
import ultraLogo from "@/assets/clients/ultra-engineers.png";
import aamLogo from "@/assets/clients/aam.png";
import inoxLogo from "@/assets/clients/inox-wind.png";
import adaniLogo from "@/assets/clients/adani.png";
import nelsonLogo from "@/assets/clients/nelson.png";
import cooperLogo from "@/assets/clients/cooper-corp.png";
import vassmaanLogo from "@/assets/clients/vassmaan.png";
import protodLogo from "@/assets/clients/proto-d.png";

const clientLogos = [
  { name: "Renom", logo: renomLogo },
  { name: "Ultra Engineers", logo: ultraLogo },
  { name: "American Axle & Manufacturing", logo: aamLogo },
  { name: "Inox Wind", logo: inoxLogo },
  { name: "Adani Renewables", logo: adaniLogo },
  { name: "Nelson Global Products", logo: nelsonLogo },
  { name: "Cooper Corp", logo: cooperLogo },
  { name: "Vassmaan", logo: vassmaanLogo },
  { name: "Proto-D Engineering", logo: protodLogo },
];

const highlights = [
  { icon: Cog, title: "Advanced Processes", desc: "Stamping, robotic welding, powder coating & assembly capabilities", count: 6, suffix: "+" },
  { icon: Factory, title: "World-Class Infrastructure", desc: "Heavy duty press lines, in-house tool room & material handling", count: 50, suffix: "+" },
  { icon: Shield, title: "Quality Assurance", desc: "Rigorous testing, R&D center & continuous improvement initiatives", count: 99, suffix: "%" },
  { icon: Eye, title: "Vision 2028", desc: "Pioneering solutions in Energy, Automobile & Service sectors", count: 300, suffix: " Cr" },
];

const Index = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <Layout>
      {/* Hero — fullscreen with parallax */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax background */}
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
          <video src={heroVideo} autoPlay muted loop playsInline className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-hero-overlay" />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-grid opacity-10" />

        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-secondary/40"
            style={{ left: `${20 + i * 15}%`, top: `${30 + i * 10}%` }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border border-primary-foreground/15 text-primary-foreground/80 text-sm mb-8">
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-2 h-2 rounded-full bg-secondary"
              />
              Precision Engineering & Manufacturing
            </div>
          </motion.div>

          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.05]"
            >
              SMTAUTO <span className="text-secondary">LLP</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="text-base md:text-lg text-primary-foreground/50 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Integrating advanced technologies with precision engineering for cost-effective, reliable, and future-ready manufacturing solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/enquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-2xl font-semibold text-base shadow-glow hover:shadow-[0_0_40px_hsl(24_95%_53%/0.3)] transition-all duration-300"
              >
                Sales Enquiry
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/careers"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass border border-primary-foreground/15 text-primary-foreground rounded-2xl font-semibold text-base hover:bg-primary-foreground/10 transition-all duration-300"
              >
                Careers
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <div className="w-7 h-11 rounded-full border-2 border-primary-foreground/25 flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-1.5 h-2.5 rounded-full bg-primary-foreground/50"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Bar */}
      <PageSection className="!py-0 -mt-16 relative z-20">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.1}>
          {highlights.map((h) => (
            <motion.div
              key={h.title}
              variants={staggerChild}
              className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border/60 shadow-elevated overflow-hidden hover:shadow-card-hover transition-all duration-500"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/5 group-hover:to-secondary/10 transition-all duration-500 pointer-events-none" />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors duration-300"
                >
                  <h.icon className="w-6 h-6 text-accent-foreground group-hover:text-secondary transition-colors duration-300" />
                </motion.div>

                <div className="font-display text-3xl md:text-4xl font-bold mb-1 text-foreground">
                  <AnimatedCounter target={h.count} suffix={h.suffix} />
                </div>

                <h3 className="font-display font-semibold text-sm mb-1.5 text-foreground">{h.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed hidden md:block">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </PageSection>

      {/* About Preview */}
      <PageSection>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeInUp>
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary mb-4 block">About SMTAUTO LLP</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Engineering the <span className="text-gradient">Future</span> of Manufacturing
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With cutting-edge technologies and decades of expertise, SMTAUTO LLP delivers cost-effective, reliable, and future-ready manufacturing solutions for the energy, automobile, and service sectors.
            </p>
            <motion.div whileHover={{ x: 5 }} className="inline-block">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-secondary font-semibold text-sm group"
              >
                Learn more about us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </FadeInUp>

          <FadeInUp delay={0.15}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-muted border border-border overflow-hidden flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Company Overview Photo</span>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl border-2 border-secondary/20 -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-secondary/10 -z-10" />
            </div>
          </FadeInUp>
        </div>
      </PageSection>

      {/* Video Section */}
      <PageSection alt>
        <SectionTitle title="See Us in Action" subtitle="Watch how SMTAUTO LLP delivers precision manufacturing excellence" />
        <FadeInUp>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-elevated border border-border/60">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9TYPQNbNYnI?si=1tBRvcAzZl3dX3ZB"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </FadeInUp>
      </PageSection>

      {/* Our Clients */}
      <PageSection>
        <SectionTitle title="Our Clients" subtitle="Trusted by leading brands across industries" />
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-12 items-center shrink-0">
                {clientLogos.map((client) => (
                  <div
                    key={`${setIdx}-${client.name}`}
                    className="flex items-center justify-center h-20 w-44 shrink-0 rounded-2xl border border-border/60 bg-white px-6 py-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                  >
                    <img src={client.logo} alt={client.name} className="max-h-12 max-w-full object-contain" />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </PageSection>

      {/* CTA */}
      <PageSection dark className="!bg-navy bg-grid">
        <div className="text-center max-w-3xl mx-auto">
          <FadeInUp>
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary mb-4 block">Partner with us</span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-primary-foreground leading-tight">
              Ready to Transform Your Manufacturing?
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-primary-foreground/45 mb-10 text-lg leading-relaxed">
              Let's discuss how SMTAUTO LLP can deliver precision manufacturing solutions for your business.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/enquiry"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-2xl font-semibold shadow-glow hover:shadow-[0_0_40px_hsl(24_95%_53%/0.3)] transition-all duration-300"
                >
                  Sales Enquiry <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary-foreground/15 text-primary-foreground rounded-2xl font-semibold hover:bg-primary-foreground/5 transition-all duration-300"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </FadeInUp>
        </div>
      </PageSection>
    </Layout>
  );
};

export default Index;
