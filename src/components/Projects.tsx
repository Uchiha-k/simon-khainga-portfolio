import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Data Cleaning in SQL",
      category: "SQL | Data Preparation",
      description: "Prepared a global COVID-19 dataset for analysis by filtering incomplete records, standardizing key fields, and writing SQL queries to uncover trends in infection rates, mortality percentages, and regional impact.",
      image: "https://images.unsplash.com/photo-1584188335984-7781d3194e03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcWwlMjBkYXRhYmFzZSUyMGNvZGV8ZW58MXx8fHwxNzY0NDE1MjU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "https://github.com/Uchiha-k/Data-Cleaning-using-MS-SQL",
      keywords: ["MS SQL", "Data Cleaning", "COVID-19"],
    },
    {
      title: "Data Exploration in SQL",
      category: "SQL | Analytics",
      description: "Analyzed COVID-19 trends using SQL to explore death percentages, infection rates, and population impact globally and in Kenya. Identified regions most affected and gained insights from the data.",
      image: "https://images.unsplash.com/photo-1740908900846-4bbd4f22c975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZXhwbG9yYXRpb24lMjBhbmFseXRpY3N8ZW58MXx8fHwxNzY0NDE1MjU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "https://github.com/Uchiha-k/Data-Exploration-using-MS-SQL",
      keywords: ["SQL", "Exploration", "Trends"],
    },
    {
      title: "Online Retail Store Data Cleaning",
      category: "Python | Data Cleaning",
      description: "Comprehensive data cleaning project for an online retail store using Python. Handled missing values, removed duplicates, standardized formats, and prepared the dataset for advanced analysis and reporting.",
      image: "https://images.unsplash.com/photo-1761333477936-56fbc7851c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzaG9wcGluZyUyMHN0b3JlfGVufDF8fHx8MTc2NDMzNTI5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "https://github.com/Uchiha-k/Online-Retail-Store-Data-Cleaning-with-Python",
      keywords: ["Python", "Pandas", "Retail"],
    },
    {
      title: "AIG Actuarial Pricing Analysis",
      category: "Python | Insurance Analytics",
      description: "Actuarial pricing analysis project for AIG, utilizing Python to analyze insurance data, calculate risk factors, and develop pricing models. Applied statistical methods to optimize premium calculations.",
      image: "https://images.unsplash.com/photo-1711185898083-e1f04ff38300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBhY3R1YXJpYWwlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjQ0MTU5NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "https://github.com/Uchiha-k/AIG-Actuarial-Pricing-Analysis",
      keywords: ["Actuarial", "Insurance", "Risk Analysis"],
    },
    {
      title: "Airbnb Analytics Dashboard",
      category: "Tableau | Visualization",
      description: "Interactive dashboard revealing booking trends, pricing dynamics, and location performance. Built for hosts, travelers, and data enthusiasts to understand what drives short-term rental success.",
      image: "https://images.unsplash.com/photo-1760888625668-8f9690b6759f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJibmIlMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ0MTUyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "https://public.tableau.com/views/AirBnBProject_17613101703820/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      keywords: ["Tableau", "Dashboard", "Real Estate"],
    },
    {
      title: "Video Games Sales Dashboard",
      category: "Tableau | Business Intelligence",
      description: "Explore the game economy with this interactive dashboard tracking global trends, top-selling titles, and platform performance. Built for data-driven gamers, publishers, and curious minds.",
      image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGdhbWUlMjBjb250cm9sbGVyfGVufDF8fHx8MTc2NDM2NjgyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "https://public.tableau.com/app/profile/simon.khainga/viz/VideoGamesSalesDashboard_17635412401610/Dashboard1?publish=yes",
      keywords: ["Tableau", "Gaming", "Sales Analysis"],
    },
    {
      title: "Amazon Price Tracker",
      category: "Python | Web Scraping",
      description: "A Python tool that tracks Amazon prices, logs data to CSV, runs scheduled checks, and sends email alerts when prices drop. Full automation for smart shopping decisions.",
      image: "https://images.unsplash.com/photo-1648091856362-62436bfb145a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWF6b24lMjBzaG9wcGluZyUyMG9ubGluZXxlbnwxfHx8fDE3NjQ0MTUyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "https://github.com/Uchiha-k/FULL-WORKING-PRICE-TRACKER-scraper-CSV-writer-scheduled-checks-email-alert-",
      keywords: ["Python", "Web Scraping", "Automation"],
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-blue-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-2">
          <p className="text-blue-600 dark:text-blue-400 uppercase tracking-wider text-sm">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">
            <span className="text-gray-900 dark:text-white">Featured </span>
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer border border-gray-200 dark:border-blue-500/20 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/20 transition-all duration-300 bg-white dark:bg-blue-950/20 rounded-xl overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 relative">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="text-white" size={32} />
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <p className="text-blue-600 dark:text-blue-400 uppercase tracking-wider text-xs">{project.category}</p>
                  <h3 className="text-xl sm:text-2xl text-gray-900 dark:text-white">{project.title}</h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.keywords.map((keyword, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 text-xs rounded-md"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
