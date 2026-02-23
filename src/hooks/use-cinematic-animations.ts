import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export function useCinematicAnimations() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // ── 1. Lenis smooth scrolling ──
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    // Connect Lenis → ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // ── 2. Page intro ──
    gsap.fromTo(
      document.body,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );

    // ── 3. Headings reveal ──
    const headings = gsap.utils.toArray<HTMLElement>("h1, h2, h3");
    headings.forEach((el) => {
      gsap.set(el, { opacity: 0, y: 80, willChange: "transform, opacity" });
      ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        once: true,
        onEnter: () =>
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
          }),
      });
    });

    // ── 4. Images reveal (scale + fade) ──
    const images = gsap.utils.toArray<HTMLElement>("img, video");
    images.forEach((el) => {
      gsap.set(el, {
        opacity: 0,
        scale: 1.1,
        willChange: "transform, opacity",
      });
      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        once: true,
        onEnter: () =>
          gsap.to(el, {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
          }),
      });
    });

    // ── 5. Sections: fade-in + stagger children ──
    const sections = gsap.utils.toArray<HTMLElement>("section");
    sections.forEach((section) => {
      const children = Array.from(section.children) as HTMLElement[];
      children.forEach((child) => {
        gsap.set(child, { opacity: 0, y: 40, willChange: "transform, opacity" });
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top 85%",
        once: true,
        onEnter: () =>
          gsap.to(children, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.12,
          }),
      });
    });

    // ── 6. Subtle parallax on section backgrounds ──
    sections.forEach((section) => {
      gsap.to(section, {
        backgroundPositionY: "30%",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        },
      });
    });

    // ── 7. Subtle mouse-move interaction ──
    const onMouseMove = (e: MouseEvent) => {
      const xRatio = (e.clientX / window.innerWidth - 0.5) * 2;
      const yRatio = (e.clientY / window.innerHeight - 0.5) * 2;

      // Move elements with data-parallax-mouse attribute
      const els = document.querySelectorAll<HTMLElement>("[data-parallax-mouse]");
      els.forEach((el) => {
        const speed = parseFloat(el.dataset.parallaxMouse || "8");
        gsap.to(el, {
          x: xRatio * speed,
          y: yRatio * speed,
          duration: 0.8,
          ease: "power2.out",
        });
      });

      // Very subtle body-level shift for depth
      gsap.to("main", {
        x: xRatio * 1.5,
        y: yRatio * 1,
        duration: 1.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    // ── Cleanup ──
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      ScrollTrigger.getAll().forEach((st) => st.kill());
      // Reset body opacity
      gsap.set(document.body, { opacity: 1 });
      gsap.set("main", { x: 0, y: 0 });
    };
  }, []);

  return lenisRef;
}
