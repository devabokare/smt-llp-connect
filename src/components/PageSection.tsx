import { ReactNode } from "react";

const SectionTitle = ({ title, subtitle, light = false }: { title: string; subtitle?: string; light?: boolean }) => (
  <div className="text-center mb-12 md:mb-16">
    <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg max-w-2xl mx-auto ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
    )}
    <div className="mt-4 mx-auto w-20 h-1 bg-secondary rounded-full" />
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
    className={`py-16 md:py-24 px-4 ${dark ? "bg-navy text-primary-foreground" : alt ? "bg-section-alt" : "bg-background"} ${className}`}
  >
    <div className="container max-w-7xl mx-auto">{children}</div>
  </section>
);

export { SectionTitle, PageSection };
