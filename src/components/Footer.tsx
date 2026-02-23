import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy text-primary-foreground">
    <div className="container max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
              <span className="font-display font-bold text-secondary-foreground text-base">S</span>
            </div>
            <span className="font-display font-bold text-lg">
              SMT <span className="text-secondary">LLP</span>
            </span>
          </div>
          <p className="text-sm text-primary-foreground/60 leading-relaxed mb-4">
            Forward-looking manufacturing solutions provider, integrating advanced technologies with precision engineering.
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-base mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Processes", path: "/processes" },
              { label: "Infrastructure", path: "/infrastructure" },
              { label: "Enquiry", path: "/enquiry" },
              { label: "Careers", path: "/careers" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Capabilities */}
        <div>
          <h4 className="font-display font-semibold text-base mb-4">Capabilities</h4>
          <ul className="space-y-2.5">
            {["Stamping", "Robotic Welding", "Powder Coating", "Assembly", "Hydro Forming", "Quality & R&D"].map((c) => (
              <li key={c}>
                <span className="text-sm text-primary-foreground/60">{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-base mb-4">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
              <span className="text-sm text-primary-foreground/60">
                Phase III, MIDC, Nighoje, Chakan, Maharashtra 410501
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-secondary shrink-0" />
              <a href="mailto:scm@smtllp.com" className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
                scm@smtllp.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-secondary shrink-0" />
              <a href="tel:+919921800933" className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
                +91 9921800933
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="container max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-primary-foreground/40">
        <span>© {new Date().getFullYear()} SMT LLP Pvt Ltd. All rights reserved.</span>
        <span>Precision Engineering · Innovation · Excellence</span>
      </div>
    </div>
  </footer>
);

export default Footer;
