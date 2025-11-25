import React from "react";
import { Link, NavLink } from "react-router-dom";
// import logo from "../assets/logo.webp";

const NavBar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-36 rounded-md bg-white/10 flex items-center justify-center text-white font-bold">
            <img
                src="/logo.webp"
                alt="Jeyan Developers Logo"
                className="h-full w-full object-cover"
            />
          </div>
        </Link>

        <nav>
          <ul className="flex items-center gap-6 text-white">
            <li>
              <NavLink to="/" className={({isActive}) => isActive ? "underline" : ""}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/explore" className={({isActive}) => isActive ? "underline" : ""}>Explore</NavLink>
            </li>
            <li>
              <NavLink to="/post" className={({isActive}) => isActive ? "underline" : ""}>Post My Land</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({isActive}) => isActive ? "underline" : ""}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
