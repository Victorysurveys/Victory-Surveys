import { useState } from "react";
import { Menu, X, MessageSquare } from "lucide-react";

const navLinks = [
  { label: "Why choose us?", href: "#why-choose-us" },
  { label: "Why do I need a survey?", href: "#why-need-survey" },
  { label: "Choose a survey", href: "#choose-survey" },
  { label: "News and insights", href: "#news" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold text-primary tracking-tight">
            Surveying Services
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="#get-in-touch"
              className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Get a quote
            </a>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-in-touch"
              className="block text-sm font-semibold text-primary"
              onClick={() => setIsOpen(false)}
            >
              Get a quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
