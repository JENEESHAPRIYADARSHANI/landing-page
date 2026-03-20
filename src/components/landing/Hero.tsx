import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Chrome, CircleCheck } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pb-32 gradient-hero-bg overflow-hidden">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-foreground mb-6">
              Upload Images to <span className="text-gradient">Google Drive</span>
              <br />Instantly, From Any Website.
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Save images, bulk export, and manage uploads directly from your browser using a powerful side panel — no downloads, no hassle.
            </p>

            <ul className="mb-8 space-y-3">
              {[
                "One-click upload to Google Drive",
                "Bulk export from websites like Pinterest",
                "Secure login with your account",
                "Smart upload history & tracking",
              ].map((point, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-foreground">
                  <CircleCheck className="w-5 h-5 text-success flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" onClick={() => window.open('https://chromewebstore.google.com/detail/google-drive-quick-upload/lhfokpmpfihkpiolfgkilhmmjbggeioa', '_blank')}>
                <Chrome className="w-5 h-5 mr-2" />
                Add to Chrome
              </Button>
              <Button variant="hero-outline" size="xl">
                <Play className="w-4 h-4" />
                Watch Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-card rounded-2xl shadow-elevated border border-border/50 overflow-hidden outline outline-1 outline-border/50 ring-4 ring-primary/5 animate-float h-[500px] w-full flex items-center justify-center bg-muted/20">
              <div className="text-center p-6">
                <Chrome className="w-16 h-16 mx-auto mb-4 text-primary opacity-50" />
                <p className="text-lg font-medium text-foreground">A clean, distraction-free side panel</p>
                <p className="text-sm text-muted-foreground mt-2">designed for speed and simplicity.</p>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute top-6 -left-8 bg-card rounded-xl shadow-elevated border border-border/50 px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
                <CircleCheck className="w-4 h-4 text-success" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">Upload Complete</p>
                <p className="text-[10px] text-muted-foreground">Saved to /Inspiration</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
