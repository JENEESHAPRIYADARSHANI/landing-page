import { motion } from "framer-motion";
import { Palette, GraduationCap, TrendingUp, Code2 } from "lucide-react";

const useCases = [
  {
    icon: Palette,
    title: "Designers",
    description: "Save inspiration images directly from Pinterest or design websites right to your asset folders.",
    color: "bg-pink-500/10 text-pink-500",
  },
  {
    icon: GraduationCap,
    title: "Students",
    description: "Collect study materials, diagrams, and notes carefully, and organize them instantly in Drive.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: TrendingUp,
    title: "Marketers",
    description: "Export campaign creatives and reference boards quickly without missing a beat.",
    color: "bg-green-500/10 text-green-500",
  },
  {
    icon: Code2,
    title: "Developers",
    description: "Capture UI references, error snapshots, and assets without cluttering your downloads folder.",
    color: "bg-purple-500/10 text-purple-500",
  },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-24 bg-muted/30">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Use Cases</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
            Built for productivity
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you are curating a moodboard or gathering research, we streamline the process.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border/50 shadow-card p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-border/20 ${uc.color}`}>
                <uc.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{uc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{uc.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
