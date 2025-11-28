import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const properties = [
  {
    title: "KTC Nagar",
    size: "5.5 cents",
    image: "/ktc.webp",
  },
  {
    title: "Gangaikondan",
    size: "5 cents",
    image: "/Gangaikondan.webp",
  },
  {
    title: "Rettaiyarpatti",
    size: "6 cents",
    image: "/rediyarpatti.webp",
  },
  {
    title: "Munnerpallam",
    size: "5.5 cents",
    image: "/munnerpallam.webp",
  },
];

const testimonials = [
  {
    name: "Sarah M",
    testimonial:
      "Jeyan Developers made finding and booking my land incredibly easy and stress-free. Highly recommend!",
    image: "/sarah.webp",
  },
  {
    name: "David L",
    testimonial:
      "The transparency and support I received from Jeyan Developers were exceptional. A truly trustworthy platform.",
    image: "/david.webp",
  },
  {
    name: "Emilson R",
    testimonial:
      "I was impressed by the instant booking support and secure payment options. Jeyan Developers is a game-changer!",
    image: "/emilson.webp",
  },
];

const heroImages = [
  "/munnerpallam.webp",
  "/rediyarpatti.webp",
  "/Gangaikondan.webp",
  "/ktc.webp",
];

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">

    {/* HERO */}
    <section className="pt-28" aria-label="hero">
    <div
        className="max-w-7xl mx-auto rounded-lg overflow-hidden shadow-lg transition-all duration-700 relative"
        style={{
        backgroundImage: `
            linear-gradient(rgba(6,32,12,0.55), rgba(6,32,12,0.55)),
            url('${heroImages[currentImageIndex]}')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        }}
    >
        <div className="px-6 py-28 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Find Your Perfect Land
        </h1>
        <p className="mt-3 text-white/90 max-w-2xl mx-auto">
            Discover premium open land listings with transparent dealings and secure transactions.
        </p>

        <div className="mt-8 flex justify-center">
            <input
            aria-label="search"
            placeholder="Search by Location or Plot ID"
            className="rounded-l-full px-4 py-3 w-3/5 max-w-md outline-none bg-white/20 text-white placeholder-white/70 backdrop-blur-sm"
            />
            <Link to="/explore">
            <button className="rounded-r-full px-6 py-3 bg-emerald-400 text-white font-semibold">
            Explore Lands
            </button>
            </Link>
        </div>
        </div>

        {/* DOT INDICATORS */}
        <div className="absolute bottom-4 w-full flex justify-center gap-3">
        {heroImages.map((_, index) => (
            <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
                currentImageIndex === index
                ? "bg-white scale-110"
                : "bg-white/50"
            }`}
            />
        ))}
        </div>
    </div>
    </section>


      {/* FEATURED */}
      <section className="max-w-7xl mx-auto px-6 mt-12 text-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {properties.map((item, i) => (
            <div key={i} className="bg-white/5 rounded-lg overflow-hidden p-3">
              <div
                className="h-40 bg-cover bg-center rounded mb-3"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="text-sm font-bold">{item.title}</div>
              <div className="text-xs text-white/80">Size: {item.size}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="max-w-4xl mx-auto px-6 mt-16 text-white text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          Why Choose Jeyan Developers
        </h2>
        <p className="text-sm leading-7">
          Jeyan Developers in Palayamkottai, Tirunelveli offers customized
          solutions that meet the specific requirements and preferences of each
          client, ensuring personalized and effective solutions. They are highly
          skilled contractors and building professionals who bring a wealth of
          experience and dedication to every project.
        </p>
      </section>

      {/* COMMITMENT */}
      <section className="max-w-4xl mx-auto px-6 mt-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Our Commitment to Excellence
        </h2>
        <p className="text-sm leading-7">
          At Jeyan Developers, we prioritize trust, transparency, and customer
          satisfaction in every transaction.
        </p>
      </section>

      {/* TRUST */}
      <section className="max-w-4xl mx-auto px-6 mt-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Our Legacy of Trust</h2>
        <p className="text-sm leading-7 mb-6">
          With a rich history of successful projects and satisfied clients, we
          continue to uphold the highest standards of integrity and
          professionalism.
        </p>

        <div
          className="h-120 bg-cover bg-center rounded mb-4"
          style={{ backgroundImage: `url('/building.webp')` }}
        />
        <p className="text-sm leading-7">Trusted for Over 20 Years</p>
        <p className="text-sm leading-7">
          Our commitment to transparent dealings has made us a leader in the
          industry.
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 mt-16 text-white">
        <h3 className="text-3xl font-bold text-center mb-6">Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white/5 p-4 rounded-lg text-center">
              <div
                className="h-36 w-36 mx-auto rounded-lg overflow-hidden bg-cover"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <h4 className="mt-3 font-bold">{item.name}</h4>
              <p className="text-sm text-white/80 mt-2">
                {item.testimonial}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
