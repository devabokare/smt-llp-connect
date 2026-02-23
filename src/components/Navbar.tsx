import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  {
    label: "Capabilities",
    children: [
      { label: "Processes", path: "/processes" },
      { label: "Cells", path: "/cells" },
      { label: "Infrastructure", path: "/infrastructure" },
      { label: "Departments", path: "/departments" },
    ],
  },
  { label: "Quality & R&D", path: "/quality" },
  { label: "Enquiry", path: "/enquiry" },
  { label: "Careers", path: "/careers" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 50);
    setHidden(latest > 300 && latest > prev);
  });

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-border/50 shadow-elevated"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 group">
          <motion.div
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shadow-glow"
          >
            <span className="font-display font-bold text-secondary-foreground text-lg">S</span>
          </motion.div>
          <span className={`font-display font-bold text-xl transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
            SMT <span className="text-secondary">LLP</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className={`flex items-center gap-1 px-4 py-2.5 text-sm font-medium transition-colors rounded-lg ${
                  scrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}>
                  {item.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 12, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 mt-2 w-56 glass rounded-2xl shadow-elevated border border-border/50 p-2"
                    >
                      {item.children.map((child, i) => (
                        <motion.div
                          key={child.path}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.04 }}
                        >
                          <Link
                            to={child.path}
                            className={`block px-4 py-2.5 text-sm rounded-xl transition-all ${
                              isActive(child.path)
                                ? "bg-accent text-accent-foreground font-medium"
                                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:translate-x-1"
                            }`}
                          >
                            {child.label}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path!}
                className={`relative px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.path!)
                    ? scrolled ? "text-foreground" : "text-primary-foreground"
                    : scrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                {item.label}
                {isActive(item.path!) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0.5 left-4 right-4 h-0.5 bg-secondary rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </Link>
            )
          )}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/enquiry"
              className="ml-4 px-6 py-2.5 bg-secondary text-secondary-foreground rounded-xl text-sm font-semibold hover:shadow-glow transition-all duration-300"
            >
              Get a Quote
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden glass border-b border-border/50"
          >
            <div className="px-4 py-6 space-y-1">
              {navItems.map((item, idx) =>
                item.children ? (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <div className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">{item.label}</div>
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block pl-8 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-xl transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={item.path!}
                      className={`block px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                        isActive(item.path!) ? "text-foreground bg-accent" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              )}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <Link
                  to="/enquiry"
                  className="block mx-4 mt-4 text-center px-5 py-3 bg-secondary text-secondary-foreground rounded-xl text-sm font-semibold shadow-glow"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
