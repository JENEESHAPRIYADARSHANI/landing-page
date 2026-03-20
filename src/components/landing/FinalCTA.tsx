import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Chrome } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative gradient-cta rounded-3xl px-8 py-16 lg:px-16 lg:py-20 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(252_85%_70%_/_0.3),_transparent_70%)]" />

          <div className="relative z-10">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-primary-foreground mb-4 leading-tight">
              Start Uploading Smarter Today
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
              Save time, stay organized, and upload directly to Google Drive — all from your browser.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="xl" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 shadow-lg font-bold" onClick={() => window.open('https://chromewebstore.google.com/detail/google-drive-quick-upload/lhfokpmpfihkpiolfgkilhmmjbggeioa', '_blank')}>
                <Chrome className="w-5 h-5 mr-2" />
                Add to Chrome
              </Button>
              <Button size="xl" variant="ghost" className="text-primary-foreground border-2 border-primary-foreground/20 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                Start Free Trial
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
