// src/components/pages/explore.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Hero image (uploaded during this session)
 * Local path: /mnt/data/7d754114-2d9a-4310-841a-1a1e7fc7d8ce.png
 */
const HERO = "/industrial/industrial.webp";

const properties = [
  {
    title: "Madurai - Industrial Zone",
    subtitle: "Valley View, CA · 10 acres",
    image: "/industrial/madurai.webp",
  },
  {
    title: "Coimbatore - Manufac",
    subtitle: "Coastal Ridge, CA · 5 acres",
    image: "/industrial/coimbatore.webp",
  },
  {
    title: "Chennai - Logistics",
    subtitle: "Mountain View · 20 acres",
    image: "/industrial/chennai.webp",
  },
  {
    title: "Trichy - Industrial",
    subtitle: "Desert Bloom, AZ · 15 acres",
    image: "/industrial/trichy.webp",
  },
  {
    title: "Salem - Export Process",
    subtitle: "Forest Haven, OR · 25 acres",
    image: "/industrial/salem.webp",
  },
  {
    title: "Tirunelveli - Industrial Corrider",
    subtitle: "Lakeside, WA · 8 acres",
    image: "/industrial/tirunelveli.webp",
  },
];

const Industrial: React.FC = () => {
  const [search, setSearch] = useState("");

  const clearSearch = () => setSearch("");

  return (
    <div className="min-h-screen">
      {/* HERO – centered card with side gaps */}
      <div className="w-full flex justify-center mt-16 px-4">
        <div className="relative w-full max-w-6xl">
          {/* Hero image card */}
          <div
            className="h-[280px] sm:h-[320px] md:h-[360px] lg:h-[420px] bg-cover bg-center rounded-2xl shadow-lg flex flex-col items-center justify-center"
            style={{ backgroundImage: `url('${HERO}')` }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg ">
              Industrial
            </h1>
          </div>

          {/* SEARCH BAR — positioned OVER HERO */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-22 w-full max-w-4xl">
            <div className="bg-white/95 rounded-full shadow-2xl p-3 flex items-center gap-3">
              {/* Search Icon */}
              <svg
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
              </svg>

              {/* Input */}
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-600"
                placeholder="Search by location"
                aria-label="Search by location"
              />

              {/* Clear button */}
              {search && (
                <button onClick={clearSearch} className="text-gray-500 hover:text-gray-700" aria-label="Clear search">
                  ✕
                </button>
              )}

              {/* Location Icon */}
              <button
                aria-label="Use my location"
                className="bg-emerald-700 text-white p-2 rounded-full shadow-md hover:bg-emerald-600"
                onClick={() => {
                  /* placeholder: integrate geolocation or map later */
                }}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* spacer so the content below doesn't overlap the search bar */}
      <div className="h-12" />

      {/* PROPERTIES SECTION */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pb-16">
        <h2 className="text-center text-3xl font-bold text-white mb-8">Avaliable Industrial Lands</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
          {properties.map((item, i) => (
            <div key={i} className="text-white">
              <div
                className="rounded-xl h-40 bg-cover bg-center shadow-lg"
                style={{ backgroundImage: `url('${item.image}')` }}
                role="img"
                aria-label={item.title}
              />

              <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
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

export default Industrial;
