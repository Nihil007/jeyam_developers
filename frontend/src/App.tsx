import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/pages/home";
import Contact from "./components/pages/contact";
import Explore from "./components/pages/explore";

/* Simple placeholder pages — replace with full implementations */
// const Explore: React.FC = () => (
//   <div className="pt-28 min-h-[60vh] max-w-7xl mx-auto px-6 text-white">
//     <h2 className="text-3xl font-bold mb-4">Explore Lands</h2>
//     <p>Explore page content goes here.</p>
//   </div>
// );
const PostMyLand: React.FC = () => (
  <div className="pt-28 min-h-[60vh] max-w-7xl mx-auto px-6 text-white">
    <h2 className="text-3xl font-bold mb-4">Post My Land</h2>
    <p>Form to post land will be placed here.</p>
  </div>
);
// const Contact: React.FC = () => (
//   <div className="pt-28 min-h-[60vh] max-w-7xl mx-auto px-6 text-white">
//     <h2 className="text-3xl font-bold mb-4">Contact</h2>
//     <p>Contact details and form.</p>
//   </div>
// );

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[linear-gradient(rgba(6,32,12,0.75),rgba(6,32,12,0.75)),url('/bg.webp')] bg-cover bg-center">
        <NavBar />
        <main className="pt-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/post" element={<PostMyLand />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
