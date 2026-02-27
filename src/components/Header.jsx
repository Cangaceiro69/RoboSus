import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // 🔥 Roda só uma vez ao carregar
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      // Detecta tema do sistema
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(systemDark);
    }
  }, []);

  // 🔥 Sempre que darkMode mudar
  useEffect(() => {
    const html = document.documentElement;

    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="fixed top-0 left-0 w-full bg-green-600 dark:bg-green-800 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 relative">
        
        <Link to="/">
          <img
            src="https://via.placeholder.com/120x40?text=LOGO"
            alt="Logo"
            className="h-10"
          />
        </Link>

        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-8 text-lg font-medium">
          <Link to="/">Home</Link>
          <Link to="/cursos">Cursos</Link>
          <Link to="/projetos">Projetos</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/sobre">Quem Somos</Link>
        </nav>

        <div className="flex items-center gap-4">
          
          <button
            onClick={() => setDarkMode(prev => !prev)}
            className="text-xl"
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>

          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-green-700 dark:bg-green-900 px-6 py-6 space-y-4 text-lg font-medium">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block">Home</Link>
          <Link to="/sobre" onClick={() => setMenuOpen(false)} className="block">Sobre</Link>
          <Link to="/cursos" onClick={() => setMenuOpen(false)} className="block">Cursos</Link>
          <Link to="/projetos" onClick={() => setMenuOpen(false)} className="block">Projetos</Link>
          <Link to="/contato" onClick={() => setMenuOpen(false)} className="block">Contato</Link>
        </div>
      )}
    </header>
  );
}

export default Header;