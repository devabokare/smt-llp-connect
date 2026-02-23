import { ReactNode } from "react";
import { FadeInUp, RevealBar } from "./AnimatedSection";

const SectionTitle = ({ title, subtitle, light = false }: { title: string; subtitle?: string; light?: boolean }) => (
  <div className="text-center mb-14 md:mb-20">
    <FadeInUp>
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance leading-tight ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
    </FadeInUp>
    {subtitle && (
      <FadeInUp delay={0.1}>
        <p className={`text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${light ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      </FadeInUp>
    )}
    <FadeInUp delay={0.2}>
      <div className="mt-5 mx-auto w-16">
        <RevealBar delay={0.3} />
      </div>
    </FadeInUp>
  </div>
);

const PageSection = ({
  children,
  className = "",
  alt = false,
  dark = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  alt?: boolean;
  dark?: boolean;
  id?: string;
}) => (
  <section
    id={id}
    className={`relative py-20 md:py-28 lg:py-32 px-4 overflow-hidden ${dark ? "bg-navy text-primary-foreground" : alt ? "bg-section-alt" : "bg-background"} ${className}`}
  >
    {!dark && <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />}
    <div className="container max-w-7xl mx-auto relative z-10">{children}</div>
  </section>
);

// Page hero banner for inner pages
const PageHero = ({ title, highlight, subtitle }: { title: string; highlight: string; subtitle: string }) => (
  <section className="relative bg-navy py-24 md:py-32 lg:py-40 px-4 overflow-hidden">
    <div className="absolute inset-0 bg-grid opacity-20" />
    <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
    <div className="container max-w-7xl mx-auto text-center relative z-10">
      <FadeInUp>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-5 leading-tight">
          {title} <span className="text-secondary">{highlight}</span>
        </h1>
      </FadeInUp>
      <FadeInUp delay={0.15}>
        <p className="text-primary-foreground/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </FadeInUp>
    </div>
    {/* Decorative elements */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent" />
  </section>
);

export { SectionTitle, PageSection, PageHero };
