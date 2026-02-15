import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-dark text-white text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl font-bold mb-6">
          Data That Drives Decisions
        </h1>

        <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8">
          I build intelligent dashboards and analytics systems using
          SQL, Python, and Power BI to turn raw data into strategic insight.
        </p>

        <div className="flex justify-center gap-6 flex-wrap gap-6 mt-8">
          <a
            href="#projects"
            className="bg-primary px-8 py-3 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="https://github.com/kulsumrafi"
            target="_blank"
            className="border border-white px-8 py-3 rounded-2xl hover:bg-white hover:text-dark transition"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
