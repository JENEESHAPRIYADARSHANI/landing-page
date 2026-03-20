import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, MessageSquare, Zap } from "lucide-react";

const metrics = [
  { icon: TrendingUp, label: "Sentiment Score", value: "86.7%", change: "+12.3%" },
  { icon: Users, label: "Conversations", value: "1,500+", change: "+8.1%" },
  { icon: MessageSquare, label: "Messages Analyzed", value: "18k", change: "+24%" },
  { icon: Zap, label: "Response Time", value: "98%", change: "< 1s" },
];

const AnalyticsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Advanced Analytics</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
              Advanced AI Capabilities
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Monitor sentiment trends, identify communication patterns, and get AI-powered recommendations to transform how your team communicates.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {metrics.map((m) => (
                <div key={m.label} className="bg-muted/50 rounded-xl p-4 border border-border/50">
                  <m.icon className="w-4 h-4 text-primary mb-2" />
                  <p className="text-2xl font-extrabold text-foreground">{m.value}</p>
                  <p className="text-xs text-muted-foreground">{m.label}</p>
                  <span className="text-xs font-medium text-success">{m.change}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Get the Extension
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Dashboard mock */}
            <div className="bg-card rounded-2xl shadow-elevated border border-border/50 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-semibold text-foreground">Sentiment Overview</h3>
                <span className="text-xs text-muted-foreground bg-muted rounded-full px-3 py-1">Last 7 days</span>
              </div>

              {/* Chart area */}
              <div className="relative h-48 mb-6 flex items-end gap-1">
                {[45, 52, 38, 67, 54, 72, 60, 78, 65, 85, 72, 90, 68, 82, 75, 88, 70, 92, 80, 95].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: `hsl(252 85% ${55 + (h / 5)}%)` }} />
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-success/5 rounded-lg p-3 border border-success/10">
                  <p className="text-xs text-muted-foreground">Positive</p>
                  <p className="text-lg font-bold text-foreground">67%</p>
                </div>
                <div className="bg-muted rounded-lg p-3 border border-border/50">
                  <p className="text-xs text-muted-foreground">Neutral</p>
                  <p className="text-lg font-bold text-foreground">23%</p>
                </div>
                <div className="bg-destructive/5 rounded-lg p-3 border border-destructive/10">
                  <p className="text-xs text-muted-foreground">Negative</p>
                  <p className="text-lg font-bold text-foreground">10%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
