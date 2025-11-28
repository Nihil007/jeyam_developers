import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-emerald-900/90 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-bold mb-3">About Us</h4>
          <p className="text-sm">
            Overall, Jayan Developers in Palayamkottai, Tirunelveli is a leader in providing comprehensive contracting and building services.   Their commitment to customer satisfaction drives everything that they do. Contact Jayan Developers in Palayamkottai, Tirunelveli today to discuss your project and see how they can execute it.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-3">Quick Links</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/post">Post My Land</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-3">Contact Details</h4>
          <p className="text-sm">
            Phone: +91 12345 67890<br />
            Email: info@jeyan.dev
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-6 text-center text-sm">© 2025 Jeyan Developers — All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
