import { motion } from "framer-motion";

const stats = [
  { value: "98.5%", label: "Detection Accuracy" },
  { value: "10k+", label: "Active Users" },
  { value: "0.86s", label: "Avg Response Time" },
  { value: "4.9", label: "User Rating" },
];

const StatsBar = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border/50 shadow-card p-6 text-center hover:shadow-card-hover transition-shadow duration-300"
            >
              <p className="text-3xl lg:text-4xl font-extrabold text-gradient mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
