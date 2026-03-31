

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div className="max-w-xs">
            <a href="#" className="flex items-center gap-2 font-bold text-lg mb-4">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Quick Drive Logo" className="w-7 h-7 object-contain" />
              Quick Drive
            </a>
            <p className="text-sm text-background/60 leading-relaxed font-semibold">
              Built for productivity. Designed for simplicity.
            </p>
          </div>

          <div className="flex gap-12 md:gap-16 flex-wrap">
            <div>
              <h4 className="text-sm font-semibold mb-4 text-background/80">Company</h4>
              <ul className="space-y-2.5 flex flex-col">
                <a href="#" className="text-sm text-background/50 hover:text-background transition-colors">About</a>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-background/80">Contact Us</h4>
              <ul className="space-y-2.5 flex flex-col">
                <a href="mailto:support@quickdrive.com" className="text-sm text-background/50 hover:text-background transition-colors">support@quickdrive.com</a>
                <a href="tel:+18001234567" className="text-sm text-background/50 hover:text-background transition-colors">+94701285444</a>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-background/80">Legal</h4>
              <ul className="space-y-2.5 flex flex-col">
                <a href="#" className="text-sm text-background/50 hover:text-background transition-colors">Privacy Policy</a>
                <a href="#" className="text-sm text-background/50 hover:text-background transition-colors">Terms of Service</a>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            © 2026 Quick Drive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
