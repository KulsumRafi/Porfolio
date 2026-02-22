import { useNavigate } from "react-router-dom";

export default function Navbar() {
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
    <nav className="fixed left-0 w-screen bg-dark/80 backdrop-blur-md text-white z-50">
      <div className="mx-auto flex items-center px-14 py-6">
        <h1 className="font-serif font-bold text-4xl tracking-wide ml-2">
          KULSUM RAFI
        </h1>

        <div className="ml-auto font-serif flex gap-6 text-xl">
          <a href="#skills" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection("skills"); }}>Skills</a>
          <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>Contact</a>
          <a href="#/resume" className="nav-link">Resume</a>
        </div>
      </div>
    </nav>
  );
}
