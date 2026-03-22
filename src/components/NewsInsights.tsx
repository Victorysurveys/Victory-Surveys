import { ArrowRight } from "lucide-react";
import womanLaptop from "@/assets/woman-laptop.jpg";
import houseExterior from "@/assets/house-exterior.jpg";
import houseStairs from "@/assets/house-stairs.jpg";

const articles = [
  {
    image: womanLaptop,
    alt: "Woman with laptop",
    title: "What type of survey should you go for",
    description: "The level and type of survey you choose will determine how quickly you receive the survey and how much support you can expect.",
  },
  {
    image: houseExterior,
    alt: "House exterior",
    title: "Five most common home survey problems and what to do next",
    description: "Read more about some of the most common issues found during a house survey and how they can be mitigated.",
  },
  {
    image: houseStairs,
    alt: "House interior staircase",
    title: "Five top reasons why you should get a property survey",
    description: "There are many reasons why you should consider getting a survey before you purchase a new house.",
  },
];

const NewsInsights = () => {
  return (
    <section id="news" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          News and insights
        </h2>
        <p className="mt-2 text-muted-foreground">
          Thought leadership articles, technical advice and commentary on the changing market to help you stay informed.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <a
              key={article.title}
              href="#"
              className="group bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {article.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Find out more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsInsights;
