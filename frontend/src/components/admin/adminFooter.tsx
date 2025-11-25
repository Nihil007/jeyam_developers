import React from "react";

const AdminFooter: React.FC = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-slate-500 flex items-center justify-between">
        <div>© {new Date().getFullYear()} Jeyan Developers — Admin</div>
        <div className="flex items-center gap-4">
          <a className="hover:underline" href="/admin">Docs</a>
          <a className="hover:underline" href="/admin">Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;
