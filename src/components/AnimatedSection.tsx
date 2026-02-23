import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ReactNode, useRef } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Premium fade-in-up with spring physics
export const FadeInUp = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FadeIn = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SlideInLeft = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => (
  <motion.div
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SlideInRight = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => (
  <motion.div
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

// Parallax section wrapper
export const ParallaxSection = ({ children, className = "", speed = 0.3 }: { children: ReactNode; className?: string; speed?: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, -speed * 100]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
};

// Parallax background image
export const ParallaxImage = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img src={src} alt={alt} style={{ y }} className="w-full h-[120%] object-cover" />
    </div>
  );
};

// Text reveal - letter by letter
export const TextReveal = ({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const words = text.split(" ");
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          variants={{
            hidden: { opacity: 0, y: 30, rotateX: -40 },
            visible: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: {
                duration: 0.5,
                delay: delay + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Line reveal animation
export const LineReveal = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => (
  <div className="overflow-hidden">
    <motion.div
      initial={{ y: "100%" }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  </div>
);

// Stagger container
export const StaggerContainer = ({ children, className = "", staggerDelay = 0.08 }: { children: ReactNode; className?: string; staggerDelay?: number }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-40px" }}
    variants={{
      visible: { transition: { staggerChildren: staggerDelay } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Animated counter
export const AnimatedCounter = ({ target, suffix = "", prefix = "", className = "" }: { target: number; suffix?: string; prefix?: string; className?: string }) => (
  <motion.span
    className={className}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {prefix}
      <Counter target={target} />
      {suffix}
    </motion.span>
  </motion.span>
);

const Counter = ({ target }: { target: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        if (!ref.current) return;
        let start = 0;
        const duration = 2000;
        const startTime = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          start = Math.floor(eased * target);
          if (ref.current) ref.current.textContent = start.toString();
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }}
    >
      0
    </motion.span>
  );
};

// Magnetic hover effect wrapper
export const MagneticHover = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.div
    whileHover={{ scale: 1.03, y: -4 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={className}
  >
    {children}
  </motion.div>
);

// Horizontal reveal bar
export const RevealBar = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    className={`h-1 bg-secondary rounded-full origin-left ${className}`}
  />
);
