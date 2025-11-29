export function Skills() {
  const skillCategories = [
    {
      title: "Analytics Tools",
      skills: [
        "Python",
        "R",
        "SQL",
        "Excel",
        "Google Sheets",
        "Git",
        ],
    },
    {
      title: "Visualization",
      skills: [
        "Tableau",
        "Power BI",
        "Matplotlib",
        "Seaborn",
        "Plotly",
        "Google Data Studio",
      ],
    },
    {
      title: "Techniques",
      skills: [
        "Statistical Analysis",
        "A/B Testing",
        "Regression",
        "Time Series",
        "Machine Learning",
        "Data Mining",
        "Predictive Modeling",
        "Data Cleaning",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-black/10 dark:border-white/10 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-2">
          <p className="text-gray-500 dark:text-gray-500 uppercase tracking-wider">Expertise</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black dark:text-white">Skills & Tools</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl text-black dark:text-white border-b border-black/20 dark:border-white/20 pb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
