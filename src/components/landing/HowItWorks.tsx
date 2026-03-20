import { motion } from "framer-motion";
import { LogIn, MousePointerClick, FolderTree, CloudUpload } from "lucide-react";

const steps = [
  {
    icon: LogIn,
    title: "Step 1 — Sign In",
    description: "Securely sign in using your account to enable uploads and sync your data.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: MousePointerClick,
    title: "Step 2 — Select Images",
    description: "Browse any website and select images manually or enable smart image selection.",
    color: "bg-info/10 text-info",
  },
  {
    icon: FolderTree,
    title: "Step 3 — Choose Destination",
    description: "Pick a Google Drive folder directly from the side panel.",
    color: "bg-accent text-accent-foreground",
  },
  {
    icon: CloudUpload,
    title: "Step 4 — Upload Instantly",
    description: "Upload single or multiple images with one click — no downloads required.",
    color: "bg-success/10 text-success",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">How It Works</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
            Four simple steps to save instantly
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes with our streamlined process. Select, choose, and upload without ever leaving the page.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border/50 shadow-card p-6 hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl ${step.color} flex items-center justify-center`}>
                  <step.icon className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
