import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Deteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function untuk menentukan link aktif
  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-white/70 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-7 lg:px-1">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="text-green-700 font-bold text-2xl tracking-wide">
              ECOBITES
            </span>
            <span className="text-sm text-gray-500">
              Dari sisa jadi berguna
            </span>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "Beranda", path: "/" },
              { name: "Fitur", path: "/#fitur" },
              { name: "Modul", path: "/#modul" },
              { name: "Tentang", path: "/#tentang" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.path}
                className={`relative pb-1 font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? "text-green-600"
                    : "text-gray-700 hover:text-green-600"
                } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-green-600 after:w-0 hover:after:w-full after:transition-all after:duration-300`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Register / Login Buttons */}
          <div className="hidden md:flex space-x-3">
            <Link
              to="/register"
              className={`px-4 py-2 rounded-lg border border-green-600 transition ${
                isActive("/register")
                  ? "bg-green-600 text-white"
                  : "text-green-600 hover:bg-green-50"
              }`}
            >
              Register
            </Link>
            <Link
              to="/login"
              className={`px-4 py-2 rounded-lg border border-gray-400 transition ${
                isActive("/login")
                  ? "bg-gray-800 text-white border-gray-800"
                  : "text-gray-800 hover:bg-gray-100"
              }`}
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 text-2xl focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 py-4 px-6" : "max-h-0 py-0 px-6"
        }`}
      >
        {[
          { name: "Beranda", path: "/" },
          { name: "Fitur", path: "/#fitur" },
          { name: "Modul", path: "/#modul" },
          { name: "Tentang", path: "/#tentang" },
        ].map((link) => (
          <a
            key={link.name}
            href={link.path}
            onClick={() => setIsOpen(false)}
            className={`block py-2 text-lg ${
              isActive(link.path)
                ? "text-green-600 font-semibold"
                : "text-gray-700 hover:text-green-600"
            }`}
          >
            {link.name}
          </a>
        ))}

        {/* Register / Login di mobile */}
        <div className="flex flex-col space-y-3 mt-4">
          <Link
            to="/register"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Register
          </Link>
          <Link
            to="/login"
            className="border border-gray-400 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
