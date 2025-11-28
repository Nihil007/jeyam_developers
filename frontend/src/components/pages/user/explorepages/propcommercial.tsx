// src/components/pages/property/ThirumangalamDetails.tsx
import React from "react";
import { Link } from "react-router-dom";




const gallery = [
  "/property/img_1.webp",
  "/property/img_2.webp",
  "/property/img_3.webp",
  "/property/img_4.webp",
];

const related = [
  { title: "Elegant Villa in Suburb", place: "Suburb, INR 1.2 Cr", img: "/property/rel_img_1.webp" },
  { title: "Luxury Villa with Pool", place: "Exclusive Area, INR 2.0 Cr", img: "/property/rel_img_2.webp" },
  { title: "Contemporary Home with Garden", place: "Modern Estate, INR 1.8 Cr", img: "/property/rel_img_3.webp" },
];

const ThirumangalamDetails: React.FC = () => {
  return (
<div className="min-h-screen py-10 bg-[linear-gradient(rgba(6,32,12,0.65),rgba(6,32,12,0.65)),url('/mnt/data/3 (1).png')] bg-cover bg-center">

      <main className="max-w-6xl mx-auto px-6 pb-32pt-16">
        {/* Breadcrumb / Back */}
        <div className="mt-6 text-emerald-200 text-sm">
          <Link
            to="/explore/commercial"
            className="inline-flex items-center gap-2 bg-emerald-700/30 text-white/90 px-3 py-1 rounded-md shadow-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Explore
          </Link>
          <span className="ml-4 text-emerald-100/80">Explore / <span className="font-semibold">Thirumangalam</span></span>
        </div>

        {/* Large hero image centered with side gaps */}
        <div className="mt-6 flex justify-center ">
          <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl">
            <img src="/property/hero_home.webp" alt="property hero" className="w-full h-[500px] object-cover" />
          </div>
        </div>

        {/* Property Overview + About */}
        <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ">
          {/* Left block: Overview + About */}
          <div className="lg:col-span-2 text-white  ">
            <h2 className="text-3xl font-bold mb-6">Property Overview</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-sm">
              <div className="text-slate-200">Property Type</div>
              <div className="text-right font-semibold">3BHK Villa</div>

              <div className="text-slate-200">Built-up Area</div>
              <div className="text-right font-semibold">2,500 sq.ft</div>

              <div className="text-slate-200">Plot Size</div>
              <div className="text-right font-semibold">10 cents</div>

              <div className="text-slate-200">Price</div>
              <div className="text-right font-semibold">INR 1.5 Cr</div>

              <div className="text-slate-200">Year Built</div>
              <div className="text-right font-semibold">2020</div>

              <div className="text-slate-200">Amenities</div>
              <div className="text-right font-semibold">Car Parking, Water Supply, EB Connection</div>
            </div>

            <h3 className="text-xl font-semibold mt-10 mb-3">About This Property</h3>
            <p className="text-white/90 leading-relaxed text-sm">
              This stunning villa, nestled in a tranquil suburban setting, boasts exquisite architecture and premium materials.
              The property offers a harmonious blend of modern design and comfortable living, surrounded by lush greenery and serene landscapes.
              It's an ideal retreat for those seeking peace and luxury.
            </p>

            {/* Section Title: Map */}
            <h3 className="text-xl font-semibold mt-10 mb-4">Explore the Neighborhood</h3>

            {/* Map preview card - rounded and centered like screenshot */}
            <div className="rounded-xl overflow-hidden shadow-lg mb-6">
              <iframe
                title="neighborhood-map"
                className="w-full h-100 border-0 rounded-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126197.87617890922!2d77.74217780000001!3d8.72156145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411625053c519%3A0xad791b361b359a4d!2sTirunelveli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1764016823625!5m2!1sen!2sin"
                loading="lazy"
              />
            </div>

            {/* Horizontal separator + neighborhood rows */}
            <div className="mt-2">
              <div className="border-t border-white/20" />
              <div className="mt-6 grid grid-cols-1 gap-4 text-sm">
                <div className="flex items-center justify-between py-3 border-b border-white/10">
                  <div className="text-slate-200">Schools</div>
                  <div className="text-emerald-200">Greenwood High</div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/10">
                  <div className="text-slate-200">Colleges</div>
                  <div className="text-emerald-200">City College</div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/10">
                  <div className="text-slate-200">Hospitals</div>
                  <div className="text-emerald-200">Life Care Hospital</div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/10">
                  <div className="text-slate-200">Supermarkets</div>
                  <div className="text-emerald-200">Fresh Mart</div>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div className="text-slate-200">Temples</div>
                  <div className="text-emerald-200">Peace Temple</div>
                </div>
              </div>
            </div>
          </div>
       </section>

        {/* Gallery */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold text-white mb-4">Gallery</h3>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {gallery.map((g, i) => (
              <div key={i} className="w-66 h-44 rounded-lg overflow-hidden shadow-inner flex-shrink-0">
                <img src={g} alt={`gallery-${i}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="mt-8">
          <h3 className="text-2xl font-semibold text-white mb-6">Related Lands</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((r, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden bg-white/10">
                <div className="h-36 w-full overflow-hidden">
                  <img src={r.img} alt={r.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="font-semibold text-white">{r.title}</div>
                  <div className="text-emerald-200 text-sm">{r.place}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ThirumangalamDetails;
