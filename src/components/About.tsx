export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-blue-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-blue-600 dark:text-blue-400 uppercase tracking-wider text-sm">About Me</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl">
                <span className="text-gray-900 dark:text-white">Turning </span>
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
                  Data Into Decisions
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm Simon Khainga, a passionate data analyst who specializes in extracting 
                meaningful insights from complex datasets. I believe that every data point 
                tells a story, and my mission is to uncover those narratives that drive business growth.
              </p>
              <p>
                With expertise in SQL, Python, Tableau, and Power BI, I transform raw data into 
                actionable intelligence. From data cleaning and exploration to building interactive 
                dashboards and predictive models, I bring a comprehensive approach to every project.
              </p>
              <p>
                My work focuses on creating workflows that reveal patterns, optimize processes, and 
                enable data-informed decisions. I've worked on projects ranging from COVID-19 trend 
                analysis to real-time price tracking systems, always with an eye toward practical impact.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 rounded-lg">
                Data Visualization
              </span>
              <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 rounded-lg">
                Statistical Analysis
              </span>
              <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 rounded-lg">
                Business Intelligence
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center overflow-hidden rounded-2xl">
              <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-blue-600/20 dark:from-blue-500/10 dark:to-blue-700/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-32 h-32 text-blue-600/40 dark:text-blue-400/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 10h2v7H7v-7zm4-3h2v10h-2V7zm4 6h2v4h-2v-4z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
