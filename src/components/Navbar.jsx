export default function Navbar() {
  return (
    <nav className="fixed w-full bg-dark/80 backdrop-blur-md text-white z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-open-sans font-bold text-lg tracking-wide">
          Kulsum Rafi
        </h1>

        <div className="space-x-8 text-sm">
          <a href="#about" className="hover:text-accent px-2">About</a>
          <a href="#skills" className="hover:text-accent px-2">Skills</a>
          <a href="#projects" className="hover:text-accent px-2">Projects</a>
          <a href="#contact" className="hover:text-accent px-2">Contact</a>
        </div>
      </div>
    </nav>
  );
}
