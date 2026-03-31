import { motion } from "framer-motion";
import { AppWindow, LayoutPanelLeft, ListPlus, ToggleLeft, History } from "lucide-react";

const Demo = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Demo / Screenshots</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
              A clean, distraction-free side panel
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Designed for speed and simplicity. Access all your tools exactly when you need them without interrupting your workflow.
            </p>

            <div className="grid gap-4 mb-8">
              {[
                { icon: LayoutPanelLeft, label: "Side Panel UI" },
                { icon: ListPlus, label: "Upload Flow" },
                { icon: AppWindow, label: "Folder Selection UI" },
                { icon: History, label: "History Section" },
                { icon: ToggleLeft, label: "Image Selection Toggle" },
              ].map((m) => (
                <div key={m.label} className="flex items-center gap-3 bg-muted/50 rounded-xl p-4 border border-border/50">
                  <m.icon className="w-5 h-5 text-primary" />
                  <p className="font-medium text-foreground">{m.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full relative h-[600px] bg-muted/20 border border-border shadow-elevated rounded-2xl flex items-center justify-center p-8 overflow-hidden"
          >
            {/* Visual placeholder for screenshots */}
            <div className="w-full h-full shadow-lg rounded-xl overflow-hidden flex items-center justify-center animate-fade-in relative z-10">
              <img src="./1.png" alt="Side Panel Preview" className="w-full h-full object-contain bg-background" />
            </div>
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 rounded-full blur-[80px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
