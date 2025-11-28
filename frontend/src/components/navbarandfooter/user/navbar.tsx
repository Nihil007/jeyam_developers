// src/components/navbar.tsx
import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const NavBar: React.FC = () => {
  const location = useLocation();
  const isExplore = location.pathname.startsWith("/explore");

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 
          ${scrolled ? "bg-[#06200c]/70 backdrop-blur-md shadow-lg" : "bg-transparent"}
        `}>
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

            {/* Dropdown: shown only on Explore route (desktop: on hover) */}
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
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
