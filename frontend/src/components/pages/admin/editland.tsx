import React from "react";
import { Link } from "react-router-dom";

// const sampleimg = "/mnt/data/Depth 0, Frame 0 (2).png";

const sampleimg = [
  {
    image: "/rawland/madurai.webp",
  },
  {
    image: "/rawland/coimbatore.webp",
  },
  {
    image: "/rawland/chennai.webp",
  },
];

const EditLand: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto px-8 py-0">

        {/* Breadcrumb */}
        <div className="text-sm text-emerald-600 mb-6">
          <Link to="/admin/lands" className="hover:underline">Manage Lands</Link>
          <span className="mx-2 text-slate-400">/</span>
          <span className="text-slate-800 font-medium">Edit Land #12345</span>
        </div>

        {/* Page Title */}
        <h1 className="text-3xl font-extrabold text-slate-900 mb-8">Edit Land Information</h1>

        {/* Form */}
        <form className="space-y-8">

          {/* Row: Land Title */}
          <div>
            <label className="block text-sm text-slate-600 mb-2">Land Title</label>
            <input
              type="text"
              defaultValue="Serene Valley Estate"
              className="w-full rounded-xl bg-emerald-50 px-4 py-3 placeholder:text-slate-400 focus:outline-none"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm text-slate-600 mb-2">Location</label>
            <div className="relative">
              <input
                type="text"
                defaultValue="Greenfield, CA"
                className="w-full rounded-xl bg-emerald-50 px-4 py-3 placeholder:text-slate-400 focus:outline-none"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-600">
                {/* location pin svg */}
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>

          {/* Area and Price */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-slate-600 mb-2">Area (Cents)</label>
              <input type="text" defaultValue="5.00" className="w-full rounded-xl bg-emerald-50 px-4 py-3 focus:outline-none" />
            </div>

            <div>
              <label className="block text-sm text-slate-600 mb-2">Area (Acres)</label>
              <input type="text" defaultValue="0.125" className="w-full rounded-xl bg-emerald-50 px-4 py-3 focus:outline-none" />
            </div>

            <div className="md:col-span-1">
              <label className="block text-sm text-slate-600 mb-2">Price (INR)</label>
              <input type="text" defaultValue="₹250,000" className="w-full rounded-xl bg-emerald-50 px-4 py-3 focus:outline-none" />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm text-slate-600 mb-2">Description</label>
            <textarea
              defaultValue={"Beautiful open land with clear boundaries and good access."}
              rows={6}
              className="w-full rounded-xl bg-emerald-50 px-4 py-4 focus:outline-none resize-none"
            />
          </div>

          {/* Uploaded Images */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Uploaded Images</h3>

            <div className="flex gap-4 items-start">
              {/* Thumbnails */}
                <div className="flex gap-4 flex-wrap">
                {sampleimg.map((item, i) => (
                    <div
                    key={i}
                    className="w-[309px] rounded-xl overflow-hidden shadow-sm"
                    >
                    <img
                        src={item.image}
                        alt={`thumb-${i}`}
                        className="w-full h-36 object-cover"
                    />
                    </div>
                ))}
                </div>
            </div>

            <div className="mt-4">
              <button type="button" className="inline-block px-4 py-2 rounded-md bg-emerald-500 text-slate-800 hover:bg-slate-200">
                Add More
              </button>
            </div>
          </div>

          {/* Availability */}
          <div>
            <label className="block text-sm text-slate-600 mb-2">Availability</label>
            <input type="text" defaultValue="Available" className="w-1/2 rounded-xl bg-emerald-50 px-4 py-3 focus:outline-none" />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-4 mt-6">
            <button type="button" className="px-5 py-2 rounded-full bg-[#00e0d3] text-[#063a33] font-semibold hover:bg-[#0ad6c9] transition">
              Update Changes
            </button>
            <button type="button" className="px-5 py-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition">
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EditLand;
