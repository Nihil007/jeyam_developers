import React from "react";
import { Link } from "react-router-dom";

const ManageLand: React.FC = () => {
  const lands = [
    {
      id: "#12345",
      title: "Serene Valley Estate",
      location: "Greenfield, CA",
      area: "5 acres",
      price: "$250,000",
      uploader: "Emily Carter",
    },
    {
      id: "#67890",
      title: "Sunset Ridge Plots",
      location: "Hillside, TX",
      area: "10 acres",
      price: "$400,000",
      uploader: "David Lee",
    },
    {
      id: "#24680",
      title: "Meadow View Acres",
      location: "Riverside, NY",
      area: "20 acres",
      price: "$600,000",
      uploader: "Sophia Clark",
    },
    {
      id: "#13579",
      title: "Forest Haven Land",
      location: "Woodland, WA",
      area: "15 acres",
      price: "$500,000",
      uploader: "Ethan Harris",
    },
    {
      id: "#98765",
      title: "Lakefront Reserve",
      location: "Lakeside, FL",
      area: "8 acres",
      price: "$320,000",
      uploader: "Olivia Green",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-2">

        {/* Page Title + Buttons */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Manage Land</h1>

          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-slate-200 text-slate-700 rounded-full font-medium hover:bg-slate-300">
              Category
            </button>

            <Link to="/admin/lands/addland"className="px-4 py-2 bg-emerald-400 text-white rounded-full font-medium hover:bg-emerald-500">
              Add New Land
            </Link>
          </div>
        </div>

        {/* Table Container */}
        <div className="rounded-2xl overflow-hidden border bg-white shadow-sm">
          <table className="min-w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm text-slate-500">Land ID</th>
                <th className="px-6 py-4 text-left text-sm text-slate-500">Title</th>
                <th className="px-6 py-4 text-left text-sm text-slate-500">Location</th>
                <th className="px-6 py-4 text-left text-sm text-slate-500">Area</th>
                <th className="px-6 py-4 text-left text-sm text-slate-500">Price</th>
                <th className="px-6 py-4 text-left text-sm text-slate-500">Uploaded By</th>
                <th className="px-6 py-4 text-left text-sm text-slate-500">Actions</th>
              </tr>
            </thead>

            <tbody>
              {lands.map((land, index) => (
                <tr
                  key={land.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                >
                  <td className="px-6 py-4 text-emerald-600 font-medium hover:underline cursor-pointer">
                    {land.id}
                  </td>

                  <td className="px-6 py-4 text-slate-700">{land.title}</td>

                  <td className="px-6 py-4 text-emerald-600 hover:underline cursor-pointer">
                    {land.location}
                  </td>

                  <td className="px-6 py-4 text-emerald-600">{land.area}</td>

                  <td className="px-6 py-4 text-slate-700">{land.price}</td>

                  <td className="px-6 py-4 text-slate-700">{land.uploader}</td>

                  <td className="px-6 py-4 text-slate-700">
                    <span className="text-emerald-600 font-medium hover:underline cursor-pointer">
                      Edit
                    </span>{" "}
                    /{" "}
                    <span className="text-red-500 font-medium hover:underline cursor-pointer">
                      Delete
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default ManageLand;
