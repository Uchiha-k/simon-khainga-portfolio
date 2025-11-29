import { ArrowDown } from "lucide-react";

export function Hero() {
  const keywords = ["Data Analyst", "SQL Expert", "Python", "Tableau & Power BI"];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl w-full text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-blue-500 dark:text-blue-400 uppercase tracking-wider">
              DATA-DRIVEN INSIGHTS & SOLUTIONS
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-gray-900 dark:text-white">I translate </span>
              <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 dark:from-blue-400 dark:via-blue-300 dark:to-blue-500 bg-clip-text text-transparent">
                Complex Data
              </span>
              <span className="text-gray-900 dark:text-white"> into</span>
              <br />
              <span className="text-gray-900 dark:text-white">Actionable Business Strategy.</span>
            </h1>
            
          </div>

          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Hello, I'm <strong>Simon Khainga</strong>. I am a dedicated Data Analyst specializing in predictive modeling, 
            exploratory data analysis (EDA), and automated reporting. My expertise lies in Python, SQL, and Tableau, 
            enabling me to deliver clear, impactful insights that drive growth and operational efficiency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 w-full sm:w-auto"
            >
              View Projects
            </a>
            <a
              href="https://github.com/Uchiha-k/Portfolio-Overview/blob/main/Simon%20Khainga_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300 w-full sm:w-auto"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors animate-bounce"
        aria-label="Scroll to about"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
