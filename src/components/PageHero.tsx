/**
 * Reusable page hero banner — maps to template-parts/page-hero.php.
 * Used by survey pages, policy pages, etc.
 */
interface PageHeroProps {
  title: string;
  description?: string;
  /** Additional CSS class for the section */
  className?: string;
}

const PageHero = ({ title, description, className = "" }: PageHeroProps) => {
  return (
    <section className={`vs-section vs-section--page-hero bg-brand-dark py-16 md:py-20 ${className}`}>
      <div className="vs-container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">{title}</h1>
        {description && (
          <p className="mt-4 text-brand-dark-text max-w-2xl mx-auto leading-relaxed text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
