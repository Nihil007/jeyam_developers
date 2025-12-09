// src/components/navbar.tsx
import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const NavBar: React.FC = () => {
  const location = useLocation();
  const isExplore = location.pathname.startsWith("/explore");

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // avatar dropdown
  const [mobileOpen, setMobileOpen] = useState(false); // mobile nav

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

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

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? (
            // X icon
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

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
                    <Link
                      to="/explore/residential"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/10"
                    >
                      Residential
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/explore/commercial"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/10"
                    >
                      Commercial
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/explore/industrial"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/10"
                    >
                      Industrial
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/explore/rawland"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/10"
                    >
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

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
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
                  className="block px-4 py-2 text-white hover:bg-white/10"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-white hover:bg-white/10"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <nav className="md:hidden px-6 pb-4 bg-[#06200c]/90 backdrop-blur-md border-t border-white/10">
          <ul className="flex flex-col gap-2 text-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 ${isActive ? "underline" : ""}`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/explore"
                className={({ isActive }) =>
                  `block py-2 ${isActive ? "underline" : ""}`
                }
              >
                Explore
              </NavLink>
            </li>

            {/* Optional: direct sub-links for explore */}
            <li className="pl-4 text-sm space-y-1">
              <Link to="/explore/residential" className="block py-1">
                Residential
              </Link>
              <Link to="/explore/commercial" className="block py-1">
                Commercial
              </Link>
              <Link to="/explore/industrial" className="block py-1">
                Industrial
              </Link>
              <Link to="/explore/rawland" className="block py-1">
                Raw Land
              </Link>
            </li>

            <li>
              <NavLink
                to="/post"
                className={({ isActive }) =>
                  `block py-2 ${isActive ? "underline" : ""}`
                }
              >
                Post My Land
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 ${isActive ? "underline" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>

            <li className="pt-2 flex gap-3">
              <Link
                to="/login"
                className="flex-1 text-center py-2 rounded-md border border-white/40"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="flex-1 text-center py-2 rounded-md bg-white text-[#06200c] font-medium"
              >
                Register
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
