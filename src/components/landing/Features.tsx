import { motion } from "framer-motion";
import { CloudLightning, BrainCircuit, FolderOpen, History, Target, ShieldCheck, Globe } from "lucide-react";

const features = [
  {
    icon: CloudLightning,
    title: "One-Click Upload",
    description: "Upload images directly to Google Drive without saving them locally.",
  },
  {
    icon: BrainCircuit,
    title: "Smart Image Selection",
    description: "Toggle image selection mode to quickly pick multiple images from any page.",
  },
  {
    icon: FolderOpen,
    title: "Folder Browser",
    description: "Navigate your Google Drive folders inside the extension.",
  },
  {
    icon: History,
    title: "Upload History",
    description: "Track your recent uploads with thumbnails and quick access links.",
  },
  {
    icon: Target,
    title: "Bulk Export",
    description: "Export multiple images at once from platforms like Pinterest.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description: "Powered by secure login and token-based authentication.",
  },
  {
    icon: Globe,
    title: "Works Anywhere",
    description: "Use it on any website — no restrictions. Compatible everywhere.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Features</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
            Everything you need for seamless uploads
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A powerful suite of tools designed to make saving online assets lighting fast.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl border border-border/50 shadow-card p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
