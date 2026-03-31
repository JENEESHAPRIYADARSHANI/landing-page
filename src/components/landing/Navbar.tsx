import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Demo", href: "#demo" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-xl text-foreground">
          <img src="./logo.png" alt="Quick Drive Logo" className="w-8 h-8 object-contain" />
          Quick Drive
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="hero" size="sm" onClick={() => window.open('https://chromewebstore.google.com/detail/google-drive-quick-upload/lhfokpmpfihkpiolfgkilhmmjbggeioa', '_blank')}>Add to Chrome</Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 space-y-4">
          <div className="flex flex-col gap-2 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2 pt-2 border-t border-border/50">
            <Button variant="hero" size="sm" className="w-full" onClick={() => window.open('https://chromewebstore.google.com/detail/google-drive-quick-upload/lhfokpmpfihkpiolfgkilhmmjbggeioa', '_blank')}>Add to Chrome</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
