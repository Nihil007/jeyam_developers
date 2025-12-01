// src/components/navbar.tsx
import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const NavBar: React.FC = () => {
  const location = useLocation();
  const isExplore = location.pathname.startsWith("/explore");

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const avatarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close avatar dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (avatarRef.current && !avatarRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 
        ${scrolled ? "bg-[#06200c]/70 backdrop-blur-md shadow-lg" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-36 rounded-md overflow-hidden flex items-center justify-center">
            <img
              src="/logo.webp"
              alt="Jeyan Developers Logo"
              className="h-full w-full object-cover"
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-white relative">
          <NavLink to="/" className={({ isActive }) => (isActive ? "underline" : "")}>
            Home
          </NavLink>

          <div className="relative group">
            <NavLink
              to="/explore"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Explore
            </NavLink>

            {isExplore && (
              <div className="absolute left-0 mt-3 w-48 bg-[#06200c]/40 backdrop-blur-md rounded-lg border border-white/10 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300">
                <ul className="py-2">
                  <li>
                    <Link to="/explore/residential" className="block px-4 py-2 text-sm text-white hover:bg-white/10">
                      Residential
                    </Link>
                  </li>
                  <li>
                    <Link to="/explore/commercial" className="block px-4 py-2 text-sm text-white hover:bg-white/10">
                      Commercial
                    </Link>
                  </li>
                  <li>
                    <Link to="/explore/industrial" className="block px-4 py-2 text-sm text-white hover:bg-white/10">
                      Industrial
                    </Link>
                  </li>
                  <li>
                    <Link to="/explore/rawland" className="block px-4 py-2 text-sm text-white hover:bg-white/10">
                      Raw Land
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <NavLink to="/post" className={({ isActive }) => (isActive ? "underline" : "")}>
            Post My Land
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => (isActive ? "underline" : "")}>
            Contact
          </NavLink>

          {/* Avatar + Dropdown */}
          <div ref={avatarRef} className="relative">
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 20c0-3.31 3.13-6 8-6s8 2.69 8 6"
                />
              </svg>
            </button>

            {/* Dropdown */}
            {menuOpen && (
              <div className="absolute right-0 mt-3 w-40 backdrop-blur-xl rounded-lg shadow-xl py-2 z-50">
                <Link
                  to="/login"
                  className="block px-4 py-2 text-white-800 hover:bg-gray-100"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-white-800 hover:bg-gray-100"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
          {/* END ADDED */}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
