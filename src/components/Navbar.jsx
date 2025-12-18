import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Skills", link: "/skills" },
  { name: "Projects", link: "/projects" },
  { name: "Experience", link: "/experience" },
  { name: "Contact", link: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-cyan-400 tracking-wide">
          SHAH<span className="text-white">HUSAIN</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.link}
                className="relative text-gray-300 hover:text-cyan-400 transition
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-0 after:bg-cyan-400 after:transition-all
                hover:after:w-full"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-cyan-400"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <ul className="flex flex-col items-center gap-6 py-6">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.link}
                  onClick={() => setOpen(false)}
                  className="text-gray-300 text-lg hover:text-cyan-400 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
export default Navbar;
