import { motion } from "framer-motion";
import { Lock, Server, Cloud, ShieldCheck, KeyRound } from "lucide-react";

const privacyFeatures = [
  { icon: Lock, title: "Secure Authentication via Keycloak", description: "Identity and access management configured for standard security protocols.", accent: "bg-primary/10 text-primary" },
  { icon: Cloud, title: "Google OAuth for Drive", description: "Seamless, certified Google OAuth integration for Drive access.", accent: "bg-success/10 text-success" },
  { icon: Server, title: "No External Storage", description: "No files are stored on our servers. Period.", accent: "bg-info/10 text-info" },
  { icon: ShieldCheck, title: "Direct Uploads", description: "Images go directly from the website to your Google Drive account.", accent: "bg-primary/10 text-primary" },
  { icon: KeyRound, title: "Token-Based API", description: "Secure, token-based API communication guarantees data integrity.", accent: "bg-success/10 text-success" },
];

const Privacy = () => {
  return (
    <section className="py-24 bg-background border-t border-border/10">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Security & Trust</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
            Your data stays safe — always.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We built this extension with privacy as a core principle. No shady tracking, no file storage, just direct and secure transfers.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {privacyFeatures.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl border border-border/50 shadow-card p-6 hover:shadow-card-hover transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-xl ${item.accent} flex items-center justify-center mb-4`}>
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Privacy;
