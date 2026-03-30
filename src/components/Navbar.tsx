import { useState } from "react";
import { Menu, X, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/victory-logo-gold.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Surveys", href: "/surveys" },
  { label: "Why do I need a survey?", href: "/why-need-survey" },
  { label: "Survey Myths", href: "/survey-myths" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-brand-dark border-b border-brand-dark-text/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Victory Surveying" className="h-12 w-auto" width={48} height={48} />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith("/") && !link.href.includes("#") ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-brand-dark-text hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-brand-dark-text hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="/#quote-request"
              className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Get a quote
            </a>
          </div>

          <button
            className="md:hidden text-brand-dark-text"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-brand-dark-text/10 bg-brand-dark">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) =>
              link.href.startsWith("/") && !link.href.includes("#") ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block text-sm font-medium text-brand-dark-text hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm font-medium text-brand-dark-text hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href="/#quote-request"
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
