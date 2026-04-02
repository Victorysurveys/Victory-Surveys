/**
 * Shared page layout — maps to WordPress page.php / single.php.
 * Wraps Navbar + main content + Footer with consistent semantic structure.
 * WP port: becomes get_header() + content + get_footer().
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  /** Used as data-page attribute for WP template targeting */
  pageId?: string;
}

const PageLayout = ({ children, pageId }: PageLayoutProps) => {
  return (
    <div className="vs-page min-h-screen bg-background" data-page={pageId}>
      <Navbar />
      <main className="vs-page__content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
