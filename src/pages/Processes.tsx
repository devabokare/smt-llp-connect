import Layout from "@/components/Layout";
import { PageSection, PageHero } from "@/components/PageSection";
import { StaggerContainer, staggerChild, MagneticHover } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Hammer, Bot, Flame, Paintbrush, Wrench, Droplets } from "lucide-react";

const processes = [
  { icon: Hammer, title: "Stamping", desc: "High-precision stamping operations with heavy-duty press lines for consistent quality output." },
  { icon: Bot, title: "Robotic Welding", desc: "Automated robotic welding systems ensuring precision, speed, and repeatability." },
  { icon: Flame, title: "Manual Welding", desc: "Expert manual welding capabilities for specialized and custom fabrication needs." },
  { icon: Paintbrush, title: "Powder Coating", desc: "Advanced powder coating systems delivering durable, high-quality surface finishes." },
  { icon: Wrench, title: "Assembly", desc: "Comprehensive assembly lines with quality checks at every stage of production." },
  { icon: Droplets, title: "Hydro Forming", desc: "State-of-the-art hydro forming technology for complex geometries and lightweight parts." },
];

const Processes = () => (
  <Layout>
    <PageHero title="Processes &" highlight="Capabilities" subtitle="End-to-end manufacturing capabilities powered by cutting-edge technology" />

    <PageSection>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
        {processes.map((p) => (
          <motion.div key={p.title} variants={staggerChild}>
            <MagneticHover>
              <div className="group rounded-3xl overflow-hidden bg-card border border-border/60 shadow-card h-full">
                {/* Image with hover zoom */}
                <div className="aspect-video bg-muted overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">{p.title} Photo</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 md:p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center group-hover:bg-secondary/10 transition-colors duration-300"
                    >
                      <p.icon className="w-5 h-5 text-accent-foreground group-hover:text-secondary transition-colors duration-300" />
                    </motion.div>
                    <h3 className="font-display font-bold text-lg">{p.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </MagneticHover>
          </motion.div>
        ))}
      </StaggerContainer>
    </PageSection>
  </Layout>
);

export default Processes;
