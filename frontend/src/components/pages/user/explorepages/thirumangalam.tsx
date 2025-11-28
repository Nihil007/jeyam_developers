import React from "react";
import { Link } from "react-router-dom";

/**
 * Uses uploaded image from this session as hero / background:
 * /mnt/data/3 (1).png
 */
const HERO = "/residential/madurai.webp";

const gallery = [
  "/rawland/chennai.webp",
  "/rawland/trichy.webp",
  "/rawland/tirunelveli.webp",
];

const related = [
  { title: "Plot in Usilampatti", place: "Usilampatti, Madurai", img: "/rawland/madurai.webp" },
  { title: "Land in Melur", place: "Melur, Madurai", img: "/rawland/coimbatore.webp" },
  { title: "Property in Alanganallur", place: "Alanganallur, Madurai", img: "/rawland/chennai.webp" },
];

const PropertyDetails: React.FC = () => {
  return (
    <div className="min-h-screen py-10 bg-[linear-gradient(rgba(6,32,12,0.65),rgba(6,32,12,0.65)),url('/mnt/data/3 (1).png')] bg-cover bg-center">
      {/* Page wrapper to center content and add side gaps */}
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-24">

        {/* Breadcrumb + Back */}
        <div className="flex items-center gap-4 text-sm text-emerald-200 mb-4">
          <Link to="/explore" className="inline-flex items-center gap-2 bg-emerald-700/30 px-3 py-1 rounded">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Back to Explore
          </Link>

          <div className="text-emerald-100/80">
            <span>Explore</span> <span className="mx-2">/</span> <span className="font-medium">Thirumangalam</span>
          </div>
        </div>

        {/* HERO card with rounded, centered image and blur overlay */}
        <div className="relative w-full rounded-2xl overflow-hidden mb-8">
          {/* Large top images (two stacked in screenshot) */}
          <div className="grid grid-cols-1 gap-6">
            <div className="w-full rounded-xl overflow-hidden shadow-lg">
              <img src={HERO} alt="hero-1" className="w-full h-100 object-cover rounded-xl" />
            </div>
          </div>
        </div>

        {/* Land Overview */}
        <section className="text-center max-w-3xl mx-auto text-white mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-lg">Land Overview</h2>
          <p className="text-sm text-white/90 leading-relaxed">
            This expansive 2400 sq.ft plot in Thirumangalam, Madurai, boasts fertile soil, making it ideal for agricultural ventures or residential development. The land is easily accessible via well-maintained roads and is surrounded by essential amenities, including schools and markets. Its strategic location ensures proximity to key landmarks while maintaining a serene environment. The property faces east and has verified legal status with Patta available, ensuring a smooth transaction process.
          </p>

          <div className="mt-6 text-emerald-200 flex items-center justify-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>Thirumangalam main road</span>
          </div>

          {/* chips */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <div className="bg-white/90 text-slate-800 px-4 py-2 rounded-lg shadow">Property Type: Plot</div>
            <div className="bg-white/90 text-slate-800 px-4 py-2 rounded-lg shadow">Facing: East</div>
            <div className="bg-white/90 text-slate-800 px-4 py-2 rounded-lg shadow">Legal Status: Verified / Patta Available</div>
          </div>
        </section>

        {/* Interactive Map Preview */}
        <section className="max-w-3xl mx-auto mb-12">
          <h3 className="text-white text-2xl font-semibold mb-4 text-center">Interactive Map Preview</h3>

          {/* Replace src with real google embed and coords */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="map"
              className="w-full h-64 border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126197.87617890922!2d77.74217780000001!3d8.72156145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411625053c519%3A0xad791b361b359a4d!2sTirunelveli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1764016823625!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </section>

        {/* Amenities */}
        <section className="max-w-4xl mx-auto mb-12 text-center">
          <h3 className="text-white text-2xl font-semibold mb-6">Amenities & Key Highlights</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/90 px-4 py-3 rounded-lg shadow text-slate-800">Water Source</div>
            <div className="bg-white/90 px-4 py-3 rounded-lg shadow text-slate-800">Street Lights</div>
            <div className="bg-white/90 px-4 py-3 rounded-lg shadow text-slate-800">Compound Wall</div>
            <div className="bg-white/90 px-4 py-3 rounded-lg shadow text-slate-800">Public Transport Nearby</div>
          </div>
        </section>

        {/* Gallery */}
        <section className="max-w-3xl mx-auto mb-12 text-center">
          <h3 className="text-white text-2xl font-semibold mb-6">Gallery</h3>
          <div className="flex justify-center gap-4">
            {gallery.map((g, i) => (
              <div key={i} className="w-28 h-20 rounded-lg overflow-hidden shadow-inner">
                <img src={g} alt={`gallery-${i}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* Related Lands */}
        <section className="max-w-5xl mx-auto mb-12">
          <h3 className="text-white text-2xl font-semibold mb-6 text-center">Related Lands</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((r, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden bg-white/10 p-3">
                <div className="h-36 rounded-lg overflow-hidden mb-3">
                  <img src={r.img} alt={r.title} className="w-full h-full object-cover" />
                </div>
                <div className="text-white font-semibold">{r.title}</div>
                <div className="text-emerald-200 text-sm">{r.place}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Enquiry Form */}
        <section className="max-w-2xl mx-auto mb-16">
          <h3 className="text-white text-2xl font-semibold mb-6 text-center">For Enquire</h3>

          <form className="space-y-4">
            <input className="w-full rounded-md px-4 py-3 bg-white/90 placeholder:text-slate-500" placeholder="Enter your name" />
            <input className="w-full rounded-md px-4 py-3 bg-white/90 placeholder:text-slate-500" placeholder="Enter your email" />
            <input className="w-full rounded-md px-4 py-3 bg-white/90 placeholder:text-slate-500" placeholder="Enter your phone number" />
            <input className="w-full rounded-md px-4 py-3 bg-white/90 placeholder:text-slate-500" placeholder="Enter the Date" />
            <button type="submit" className="w-full bg-emerald-700 text-white px-4 py-3 rounded-md font-semibold">Submit</button>
          </form>

          <p className="text-xs text-white/60 mt-4 text-center">Secure your plot instantly with booking.</p>
        </section>
      </div>
    </div>
  );
};

export default PropertyDetails;
