import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Live Scores", path: "/scores" },
  { name: "News", path: "/news" },
  { name: "Standings", path: "/standings" },
  { name: "Teams", path: "/teams" },
  { name: "About", path: "/about" }
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="Football Fan" className="h-10 w-auto" />
            <span className="ml-2 font-extrabold text-green-800 text-xl">FootballFan</span>
          </Link>
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium px-3 py-2 rounded transition-colors duration-150 ${
                  location.pathname === link.path
                    ? "text-green-700 bg-green-100"
                    : "text-gray-700 hover:bg-green-50 hover:text-green-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle Navigation"
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2 px-2 space-y-1">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-2 rounded text-base font-medium transition-colors duration-150 ${
                location.pathname === link.path
                  ? "text-green-700 bg-green-100"
                  : "text-gray-700 hover:bg-green-50 hover:text-green-900"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
