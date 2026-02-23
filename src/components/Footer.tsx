import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook, ArrowUpRight } from "lucide-react";
import { FadeInUp, StaggerContainer, staggerChild } from "./AnimatedSection";
import { motion } from "framer-motion";
import smtautoLogo from "@/assets/smtauto-logo.png";

const Footer = () => (
  <footer className="relative bg-navy text-primary-foreground overflow-hidden">
    {/* Top gradient line */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
    <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

    <div className="container max-w-7xl mx-auto px-4 pt-20 pb-12 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company */}
        <FadeInUp>
          <div className="mb-5">
            <img src={smtautoLogo} alt="SMTAUTO LLP" className="h-16 w-auto brightness-0 invert" />
          </div>
          <p className="text-sm text-primary-foreground/45 leading-relaxed mb-6">
            Forward-looking manufacturing solutions provider, integrating advanced technologies with precision engineering.
          </p>
          <div className="flex gap-3">
            {[Linkedin, Facebook].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl bg-primary-foreground/8 border border-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-colors"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </FadeInUp>

        {/* Quick Links */}
        <FadeInUp delay={0.1}>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-5 text-primary-foreground/70">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Processes", path: "/processes" },
              { label: "Infrastructure", path: "/infrastructure" },
              { label: "Enquiry", path: "/enquiry" },
              { label: "Careers", path: "/careers" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="group inline-flex items-center gap-1 text-sm text-primary-foreground/45 hover:text-secondary transition-colors">
                  {l.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </FadeInUp>

        {/* Capabilities */}
        <FadeInUp delay={0.2}>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-5 text-primary-foreground/70">Capabilities</h4>
          <ul className="space-y-3">
            {["Stamping", "Robotic Welding", "Powder Coating", "Assembly", "Hydro Forming", "Quality & R&D"].map((c) => (
              <li key={c}>
                <span className="text-sm text-primary-foreground/45">{c}</span>
              </li>
            ))}
          </ul>
        </FadeInUp>

        {/* Contact */}
        <FadeInUp delay={0.3}>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-5 text-primary-foreground/70">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-secondary" />
              </div>
              <span className="text-sm text-primary-foreground/45 leading-relaxed">
                Phase III, MIDC, Nighoje, Chakan, Maharashtra 410501
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                <Mail className="w-3.5 h-3.5 text-secondary" />
              </div>
              <a href="mailto:scm@smtllp.com" className="text-sm text-primary-foreground/45 hover:text-secondary transition-colors">
                scm@smtllp.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5 text-secondary" />
              </div>
              <a href="tel:+919921800933" className="text-sm text-primary-foreground/45 hover:text-secondary transition-colors">
                +91 9921800933
              </a>
            </li>
          </ul>
        </FadeInUp>
      </div>
    </div>

    <div className="border-t border-primary-foreground/8">
      <div className="container max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-primary-foreground/30">
        <span>© {new Date().getFullYear()} SMTAUTO LLP. All rights reserved.</span>
        <span className="text-primary-foreground/20">Precision Engineering · Innovation · Excellence</span>
      </div>
    </div>
  </footer>
);

export default Footer;
