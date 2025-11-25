import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Banner image uploaded in this session.
 * Local path (use as src): /mnt/data/Depth 0, Frame 0.png
 */

const ManageUsers: React.FC = () => {
  const [query, setQuery] = useState("");

  const users = [
    {
      id: "#12345",
      name: "Sophia Clark",
      email: "sophia.clark@email.com",
      phone: "+1 (555) 123-4567",
      lands: 5,
      joined: "2023-01-15",
    },
    {
      id: "#67890",
      name: "Ethan Bennett",
      email: "ethan.bennett@email.com",
      phone: "+1 (555) 987-6543",
      lands: 3,
      joined: "2023-02-20",
    },
    {
      id: "#24680",
      name: "Olivia Carter",
      email: "olivia.carter@email.com",
      phone: "+1 (555) 246-8012",
      lands: 7,
      joined: "2023-03-25",
    },
    {
      id: "#13579",
      name: "Liam Davis",
      email: "liam.davis@email.com",
      phone: "+1 (555) 135-7924",
      lands: 2,
      joined: "2023-04-30",
    },
    {
      id: "#97531",
      name: "Ava Evans",
      email: "ava.evans@email.com",
      phone: "+1 (555) 975-3146",
      lands: 4,
      joined: "2023-05-05",
    },
  ];

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-0">
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-800">Manage Users</h1>
        </div>

        {/* Search pill */}
        <div className="mb-6">
          <div className="max-w-6xl">
            <label className="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-4 flex items-center text-emerald-500">
                {/* search icon */}
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
              </span>

              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search  by name or email"
                className="w-full pl-14 pr-4 py-4 rounded-xl bg-emerald-100 border border-slate-100 placeholder: text-slate-400 focus:outline-none"
              />
            </label>
          </div>
        </div>

        {/* Table container */}
        <div className="rounded-2xl overflow-hidden border bg-white shadow-sm">
          <table className="min-w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm text-slate-500">User ID</th>
                <th className="px-6 py-4 text-left text-sm text-slate-500">Name</th>
                <th className="px-6 py-4 text-left text-sm text-slate-500">Email</th>
                <th className="px-6 py-4 text-left text-sm text-slate-500">Phone</th>
                <th className="px-6 py-4 text-left text-sm text-slate-500">Lands Posted</th>
                <th className="px-6 py-4 text-left text-sm text-slate-500">Joined Date</th>
                <th className="px-6 py-4 text-left text-sm text-slate-500">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((u, idx) => (
                <tr key={u.id} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="px-6 py-6 text-emerald-600 font-medium hover:underline cursor-pointer">{u.id}</td>
                  <td className="px-6 py-6 text-slate-700">{u.name}</td>
                  <td className="px-6 py-6 text-emerald-500">{u.email}</td>
                  <td className="px-6 py-6 text-emerald-600 whitespace-pre-line">{u.phone}</td>
                  <td className="px-6 py-6 text-slate-700">{u.lands}</td>
                  <td className="px-6 py-6 text-emerald-500">{u.joined}</td>
                  <td className="px-6 py-6">
                    <Link to="/admin/users/userdetails" className="text-emerald-600 font-medium hover:underline mr-2">View</Link>
                    <Link to="/admin/users/userdetails" className="text-red-500 font-medium hover:underline">Delete</Link>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-slate-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default ManageUsers;
