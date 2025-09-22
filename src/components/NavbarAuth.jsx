import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavbarAuth() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-7 lg:px-1 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex flex-col">
          <span className="text-green-700 font-bold text-2xl">ECOBITES</span>
          <span className="text-sm text-gray-500">Dari sisa jadi berguna</span>
        </Link>

        {/* Auth Links */}
        <div className="flex space-x-3">
          <Link
            to="/register"
            className={`px-4 py-2 rounded-lg transition ${
              location.pathname === "/register"
                ? "bg-green-600 text-white"
                : "border border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            Register
          </Link>
          <Link
            to="/login"
            className={`px-4 py-2 rounded-lg transition ${
              location.pathname === "/login"
                ? "bg-green-600 text-white"
                : "border border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
