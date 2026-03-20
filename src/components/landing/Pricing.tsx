import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Pricing</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that suits you best.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl border border-border/50 p-8 shadow-card flex flex-col h-full"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Free Trial</h3>
              <p className="text-muted-foreground">Enjoy full access for 7 days — no credit card required.</p>
            </div>
            
            <div className="text-4xl font-extrabold text-foreground mb-8">
              $0<span className="text-lg text-muted-foreground font-medium">/7 days</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {["Full feature access", "7 days duration", "No credit card required"].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CircleCheck className="w-5 h-5 text-success" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button variant="outline" className="w-full" size="lg">Start Free Trial</Button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary/5 rounded-3xl border-2 border-primary/20 p-8 shadow-elevated relative flex flex-col h-full"
          >
            <div className="absolute top-0 right-8 transform -translate-y-1/2">
              <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg">Most Popular</span>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Pro Plan</h3>
              <p className="text-muted-foreground">Unlock unlimited potential.</p>
            </div>
            
            <div className="text-4xl font-extrabold text-foreground mb-8">
              $5<span className="text-lg text-muted-foreground font-medium">/month</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Unlimited uploads",
                "Full feature access",
                "Priority performance",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <CircleCheck className="w-5 h-5 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button className="w-full font-semibold shadow-md hover:shadow-lg transition-shadow" size="lg">Start Free Trial</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
