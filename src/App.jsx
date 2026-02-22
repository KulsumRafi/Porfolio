import { Routes, Route,useLocation} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./pages/Resume";
import Contact from "./components/Contact";

export default function App() {
  const location = useLocation(); 
  return (
    <>
      {location.pathname !== "/resume" && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}
