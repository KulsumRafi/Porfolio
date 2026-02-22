import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (window.location.hash !== "#/") {
      // Navigate to homepage first
      navigate("/");

      // Wait a tiny bit, then scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };
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

        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="#projects"
            className="inline-block bg-primary px-8 py-3 rounded-2xl shadow-lg hover:scale-105 transition mr-6"
            onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}
          >
            View Projects
          </a>

          <a
            href="https://github.com/kulsumrafi"
            target="_blank"
            className="inline-block border border-white px-8 py-3 rounded-2xl hover:bg-white hover:text-dark transition"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
