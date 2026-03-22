import logo from "@/assets/victory-logo.png";

const Footer = () => {
  return (
    <footer className="bg-brand-dark py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Victory Surveying" className="h-10 w-auto brightness-200" />
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-sm text-primary/60 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-primary/60 hover:text-primary transition-colors">
              Terms of Use
            </a>
            <a href="#" className="text-sm text-primary/60 hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
        <div className="mt-6 text-center md:text-left">
          <p className="text-sm text-primary/50">
            © {new Date().getFullYear()} Victory Surveying. All rights reserved. RPSA Regulated.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
