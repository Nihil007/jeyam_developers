import React, { useState } from "react";
import { Link } from "react-router-dom";

const HERO = "/Thirumangalam.webp";

const properties = [
  {
    title: "Thirumangalam",
    subtitle: "Valley View, CA · 10 acres",
    image: "/Thirumangalam.webp",
  },
  {
    title: "Coastal Ridge Retreat",
    subtitle: "Coastal Ridge, CA · 5 acres",
    image: "/Ridge_retreat.webp",
  },
  {
    title: "Mountain View Sanctuary",
    subtitle: "Mountain View · 20 acres",
    image: "/Mountain_view.webp",
  },
  {
    title: "Desert Bloom Oasis",
    subtitle: "Desert Bloom, AZ · 15 acres",
    image: "/Desert_Bloom.webp",
  },
  {
    title: "Forest Haven Reserve",
    subtitle: "Forest Haven, OR · 25 acres",
    image: "/Forest_Haven.webp",
  },
  {
    title: "Lakeside Tranquility",
    subtitle: "Lakeside, WA · 8 acres",
    image: "/Lakeside_Tranquility.webp",
  },
  {
    title: "Urban Green Space",
    subtitle: "Urban Green, NY · 2 acres",
    image: "/Urban_Green.webp",
  },
  {
    title: "Rural Charm Estate",
    subtitle: "Rural Charm, TX · 30 acres",
    image: "/Rural_Charm.webp",
  },
];

const Explore: React.FC = () => {
  const [search, setSearch] = useState("");

  const clearSearch = () => setSearch("");

  return (
    <div className="min-h-screen">

      {/* HERO */}
      <div
        className="w-full h-[300px] md:h-[350px] rounded-b-3xl bg-cover bg-center flex items-center justify-center shadow-lg"
        style={{
          backgroundImage: `linear-gradient(rgba(6,32,12,0.55), rgba(6,32,12,0.55)), url('${HERO}')`,
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Explore Verified Lands
        </h1>
      </div>

      {/* SEARCH BAR */}
      <div className="max-w-4xl mx-auto px-6 -mt-10">
        <div className="bg-white/90 rounded-xl shadow-lg p-3 flex items-center gap-3">
          
          {/* Search Icon */}
          <svg
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>

          {/* Input */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-600"
            placeholder="Search by location"
          />

          {/* Clear button */}
          {search && (
            <button
              onClick={clearSearch}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          )}

          {/* Location Icon */}
          <button className="text-gray-900">
            <svg
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 
              0-2.5-1.12-2.5-2.5s1.12-2.5 
              2.5-2.5 2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
            </svg>
          </button>
        </div>
      </div>

      {/* PROPERTIES SECTION */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">

          {properties.map((item, i) => (
            <div key={i} className="text-white">
              <div
                className="rounded-xl h-40 bg-cover bg-center shadow-lg"
                style={{ backgroundImage: `url('${item.image}')` }}
              />

              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="text-emerald-200 text-sm">{item.subtitle}</p>

              <Link to={`/explore/${i}`}>
                <button className="mt-3 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm rounded-lg">
                  View Details
                </button>
              </Link>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Explore;
