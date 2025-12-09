import React from "react";
import { Link } from "react-router-dom";

const HERO = "/Rural_Charm.webp"; // uploaded hero image

const AddNewLand: React.FC = () => {
  return (
    <div className="px-10 py-0 text-[#0b2e24]">

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <Link to="/admin/lands">Manage Lands</Link> /{" "}
        <span className="text-emerald-600">Add New Land</span>
      </div>

      {/* HERO – centered card with side gaps */}
      <div className="w-full flex justify-center mt-10 px-4 mb-10">
        <div className="relative w-full max-w-6xl">
          {/* Blurred Image Layer */}
          <img
            src={HERO}
            alt="hero"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl filter blur-sm"
          />

          {/* Content Layer */}
          <div
            className="relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[420px]
                        rounded-2xl shadow-lg flex flex-col items-center justify-center text-center px-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              Post Your Land For Sale
            </h1>

            <p className="text-white/90 mt-2 max-w-xl">
              Reach thousands of verified buyers with Jeyan Developers.
            </p>
          </div>
        </div>
      </div>

      {/* ===== Centered form wrapper starts here: everything from Step 1 onwards ===== */}
      <div className="flex flex-col items-center">
        {/* Step 1 */}
        <h2 className="text-lg font-semibold mb-4 text-center">Step 1: Basic Land Details</h2>

        <div className="grid gap-6 max-w-3xl w-full mx-auto">
          <div>
            <label className="text-sm block">Land Title</label>
            <input
              type="text"
              placeholder="e.g., 5.5 Cent Plot near SIPCOT"
              className="w-full border border-emerald-300 rounded-lg px-4 py-2 mt-1"
            />
          </div>

          <div>
            <label className="text-sm block">Description</label>
            <textarea
              rows={4}
              className="w-full border border-emerald-300 rounded-lg px-4 py-2 mt-1"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm block">Land Size (in cents or acres)</label>
              <input
                type="text"
                placeholder="Enter land size"
                className="w-full border border-emerald-300 rounded-lg px-4 py-2 mt-1"
              />
            </div>

            <div>
              <label className="text-sm block">Price (₹)</label>
              <input
                type="text"
                placeholder="Enter price"
                className="w-full border border-emerald-300 rounded-lg px-4 py-2 mt-1"
              />
            </div>
          </div>

          <div>
            <label className="text-sm block">Plot Number / ID</label>
            <input
              type="text"
              placeholder="Enter plot number"
              className="w-full border border-emerald-300 rounded-lg px-4 py-2 mt-1"
            />
          </div>
        </div>

        {/* Step 2 */}
        <h2 className="text-lg font-semibold mt-10 mb-4 text-center">Step 2: Location Information</h2>

        <div className="grid gap-6 max-w-3xl w-full mx-auto">
          <div>
            <label className="text-sm block">Village / Area Name</label>
            <input
              type="text"
              placeholder="Enter village or area name"
              className="w-full border border-emerald-300 rounded-lg px-4 py-2 mt-1"
            />
          </div>

          <div>
            <label className="text-sm block">Nearest Landmark</label>
            <input
              type="text"
              placeholder="Enter nearest landmark"
              className="w-full border border-emerald-300 rounded-lg px-4 py-2 mt-1"
            />
          </div>

          <div>
            <label className="text-sm block">District</label>
            <select className="w-full border border-emerald-300 rounded-lg px-4 py-2 mt-1">
              <option>Select</option>
            </select>
          </div>

          <div>
            <label className="text-sm block">Pincode</label>
            <input
              type="text"
              placeholder="Enter pincode"
              className="w-full border border-emerald-300 rounded-lg px-4 py-2 mt-1"
            />
          </div>

          <div className="flex justify-center">
            <button className="px-5 py-2 bg-emerald-500 text-white rounded-lg w-fit">
              Select on Map
            </button>
          </div>
        </div>

        {/* Step 3 */}
        <h2 className="text-lg font-semibold mt-12 mb-4 text-center">Step 3: Upload Images</h2>

        <div className="grid gap-6 max-w-3xl w-full mx-auto">
          {/* Main Image Upload */}
          <div className="border border-dashed border-emerald-400 rounded-xl p-6 flex flex-col items-center justify-center text-center px-4">
            <p className="font-semibold">Drag & Drop Images Here</p>
            <p className="text-sm text-gray-500 mt-1">
              Upload up to 8 images (JPG/PNG, max 5MB each)
            </p>
            <button className="mt-3 bg-emerald-500 text-white px-4 py-1.5 rounded-lg text-sm">
              Upload Images
            </button>
          </div>
        </div>

        {/* Step 4 */}
        <h2 className="text-lg font-semibold mt-12 mb-4 text-center">Step 4: Seller Contact Details</h2>

        <div className="grid gap-6 max-w-3xl w-full mx-auto">
          <div>
            <label className="text-sm block">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-emerald-300 rounded-lg px-4 py-2 mt-1"
            />
          </div>

          <div>
            <label className="text-sm block">Mobile Number</label>
            <input
              type="text"
              placeholder="Enter your mobile number"
              className="w-full border border-emerald-300 rounded-lg px-4 py-2 mt-1"
            />
          </div>

          <div>
            <label className="text-sm block">Email (optional)</label>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full border border-emerald-300 rounded-lg px-4 py-2 mt-1"
            />
          </div>

          <div className="flex flex-col gap-3 mt-2">
            <label className="inline-flex items-center gap-2 text-sm">
              <input type="checkbox" className="h-4 w-4" /> I am the land owner
            </label>
            <label className="inline-flex items-center gap-2 text-sm">
              <input type="checkbox" className="h-4 w-4" /> I am an agent
            </label>
          </div>

          <div className="flex gap-4 mt-6 justify-center">
            <button className="px-6 py-2 bg-emerald-500 text-white rounded-lg">
              Submit
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg">
              Save as Draft
            </button>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-6 text-center max-w-3xl">
          Once submitted, your listing will be reviewed before going live.
        </p>
      </div>
      {/* ===== Centered form wrapper ends here ===== */}
    </div>
  );
};

export default AddNewLand;
