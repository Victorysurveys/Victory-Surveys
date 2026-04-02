import { Link } from "react-router-dom";
import logo from "@/assets/victory-logo-white.png";

const Footer = () => {
  return (
    <footer id="site-footer" className="vs-footer bg-brand-dark py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Victory Surveys" className="h-10 w-auto rounded-sm" width={267} height={267} />
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy-policy" className="text-sm text-brand-dark-text-muted hover:text-brand-dark-text transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="text-sm text-brand-dark-text-muted hover:text-brand-dark-text transition-colors">
              Terms of Use
            </Link>
            <Link to="/cookie-policy" className="text-sm text-brand-dark-text-muted hover:text-brand-dark-text transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
        <div className="mt-6 text-center md:text-left">
          <p className="text-sm text-brand-dark-text-muted">
            © {new Date().getFullYear()} Victory Surveys. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
