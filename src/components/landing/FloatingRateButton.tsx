import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingRateButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRateUs = () => {
    window.open("https://chromewebstore.google.com/detail/google-drive-quick-upload/lhfokpmpfihkpiolfgkilhmmjbggeioa/reviews", "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 lg:bottom-10 lg:right-10"
        >
          <Button 
            onClick={handleRateUs}
            size="lg" 
            className="rounded-full shadow-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-14 px-6 flex items-center gap-2 transform hover:scale-105 active:scale-95 transition-all outline outline-1 outline-primary/20"
          >
            <Star className="w-5 h-5 fill-primary-foreground text-primary-foreground" />
            <span>Rate Us</span>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingRateButton;
