import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need a Google account?",
    a: "Yes, to upload files to Google Drive securely and sync them across devices.",
  },
  {
    q: "Is my data stored anywhere?",
    a: "No. Files are uploaded directly to your Google Drive. We do not store any of your data on our servers.",
  },
  {
    q: "Does it work on all websites?",
    a: "Yes, you can use it on most websites with images. It seamlessly integrates via your side panel.",
  },
  {
    q: "Do I need to sign in every time?",
    a: "No, your session is persisted securely, saving you from continuous sign-ins.",
  },
  {
    q: "What happens if I go offline?",
    a: "Your uploads are queued and processed once you're back online automatically.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-[800px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">FAQ</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
