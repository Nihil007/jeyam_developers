import React from "react";
import { Link, NavLink } from "react-router-dom";

const ADMIN_LOGO = "/logo.webp";

const AdminNavbar: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/admin" className="flex items-center">
            <div className="h-10 w-36 rounded-md overflow-hidden bg-white/0">
              <img src={ADMIN_LOGO} alt="Admin Logo" className="h-full w-full object-contain" />
            </div>
          </Link>
        </div>

        <nav className="flex items-center gap-6 text-slate-600">
          <NavLink to="/admin" end className={({ isActive }) => (isActive ? "underline" : "")}>
            Dashboard
          </NavLink>
          <NavLink to="/admin/lands" className={({ isActive }) => (isActive ? "underline" : "")}>
            Manage Lands
          </NavLink>
          <NavLink to="/admin/users" className={({ isActive }) => (isActive ? "underline" : "")}>
            Manage Users
          </NavLink>

          {/* Right side small profile / bell */}
          <div className="flex items-center gap-3">
            <Link to="/admin/inquiries" className="p-2 rounded-full bg-slate-100">
              {/* bell icon */}
              <svg className="h-5 w-5 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </Link>

            <div className="h-8 w-8 rounded-full overflow-hidden">
              <img src="/new_user.webp" alt="Admin user" className="h-full w-full object-cover" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default AdminNavbar;
