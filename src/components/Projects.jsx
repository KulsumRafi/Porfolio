export default function Projects() {
  return (
    <section id="projects" className="bg-dark text-white py-28 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-12">
          Featured Projects
        </h2>

        <div className="bg-gray-900 p-10 rounded-2xl shadow-2xl mb-12">
          <h3 className="text-2xl font-bold mb-4">
            FMCG & Healthcare Sales Analytics
          </h3>

          <p className="text-gray-400 mb-6">
            Full data analytics pipeline including SQL querying,
            Python analysis, and interactive dashboard development.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="https://fmcghealth-uklkzeor.manus.space"
              target="_blank"
              className="bg-primary px-6 py-3 rounded-xl"
            >
              Live Dashboard
            </a>

            <a
              href="https://github.com/kulsumrafi/fmcg-healthcare-portfolio"
              target="_blank"
              className="border border-white px-6 py-3 rounded-xl"
            >
              View Code
            </a>
          </div>
        </div>
        
        <div className="bg-gray-900 p-10 rounded-2xl shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">
            Energy Consumption Forecasting
          </h3>

          <p className="text-gray-400 mb-6">
            Interactive SARIMA time-series dashboard predicting building energy. Includes anomaly detection and cost analysis.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="https://energy-forecast-project.streamlit.app/"
              target="_blank"
              className="bg-primary px-6 py-3 rounded-xl"
            >
              Live Dashboard
            </a>

            <a
              href="https://github.com/kulsumrafi/energy-forecast-project"
              target="_blank"
              className="border border-white px-6 py-3 rounded-xl"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
