// src/components/pages/admin/Dashboard.tsx
import React from "react";
import { Link } from "react-router-dom";


const Dashboard: React.FC = () => {
  // sample data (replace with real data / props / API)
  const kpis = [
    { label: "Total Land Listings", value: 125 },
    { label: "New Users This Week", value: 15 },
    { label: "Pending Inquiries", value: 3 },
    { label: "Lands Sold This Month", value: 5 },
  ];

  const recent = [
    { id: "#001", address: "123 Oak Street, Anytown", status: "Available", updated: "2023-11-15" },
    { id: "#002", address: "456 Pine Avenue, Anytown", status: "Sold", updated: "2023-11-10" },
    { id: "#003", address: "789 Maple Drive, Anytown", status: "Pending", updated: "2023-11-05" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-6xl mx-auto px-6 py-0">
        {/* Page title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {kpis.map((k, i) => (
            <div key={i} className="bg-slate-200 rounded-2xl p-6">
              <div className="text-sm text-slate-500">{k.label}</div>
              <div className="mt-4 text-2xl font-bold text-slate-800">{k.value}</div>
            </div>
          ))}
        </div>

        {/* Recent activity */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Recent Land Activity</h2>

          <div className="rounded-xl overflow-hidden border bg-white">
            <table className="min-w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left px-6 py-4 text-sm text-slate-500">Land ID</th>
                  <th className="text-left px-6 py-4 text-sm text-slate-500">Address</th>
                  <th className="text-left px-6 py-4 text-sm text-slate-500">Status</th>
                  <th className="text-left px-6 py-4 text-sm text-slate-500">Last Updated</th>
                  <th className="text-left px-6 py-4 text-sm text-slate-500">Actions</th>
                </tr>
              </thead>

              <tbody>
                {recent.map((r, idx) => (
                  <tr key={r.id} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-6 py-4 text-sm text-slate-700">{r.id}</td>
                    <td className="px-6 py-4 text-sm text-slate-700">{r.address}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                          ${r.status === "Available" ? "bg-emerald-100 text-emerald-800" : ""}
                          ${r.status === "Sold" ? "bg-slate-100 text-slate-700" : ""}
                          ${r.status === "Pending" ? "bg-amber-100 text-amber-800" : ""}
                        `}
                      >
                        {r.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{r.updated}</td>
                    <td className="px-6 py-4 text-sm">
                      <Link to={`/admin/lands/${r.id}`} className="text-emerald-600 hover:underline">
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Banners / user summary & message snapshot */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-10">
          <div className="relative rounded-xl overflow-hidden">
            <img src="/new_user.webp" alt="Recent User" className="w-full h-60 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
            <div className="absolute inset-0 p-6 flex items-end">
              <div>
                <h3 className="text-xl font-semibold text-white">Recent User Registration</h3>
                <p className="text-sm text-white/90 mt-2">Quick view of new users this week.</p>
              </div>
              <div className="ml-auto">
                <button className="bg-emerald-400 hover:bg-emerald-500 text-white px-4 py-2 rounded-full shadow">
                  View New User
                </button>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden">
            <img src="/inbox.webp" alt="Inbox Snapshot" className="w-full h-60 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
            <div className="absolute inset-0 p-6 flex items-end">
              <div>
                <h3 className="text-xl font-semibold text-white">Admin New Message</h3>
                <p className="text-sm text-white/90 mt-2">Snapshot of inbox updates.</p>
              </div>
              <div className="ml-auto">
                <button className="bg-emerald-400 hover:bg-emerald-500 text-white px-4 py-2 rounded-full shadow">
                  New Inbox
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <section className="mb-16">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Quick Actions Panel</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/admin/lands/addland" className="inline-block bg-emerald-400 hover:bg-emerald-500 text-white px-4 py-2 rounded-full shadow">
              Add New Land
            </Link>
            <Link to="/admin" className="inline-block bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-full">
              Add New User
            </Link>
            <Link to="/admin" className="inline-block bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-full">
              View Inquiries
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
