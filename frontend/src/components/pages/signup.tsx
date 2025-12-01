import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignupPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up register API
    console.log("register", { name, email, mobile, password });
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#f4fbf8]">
      {/* Top bar with logo + Sign Up button */}
      <header className="w-full flex items-center justify-between px-8 lg:px-14 pt-5">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-auto">
            <img
              src="/logo.webp"
              alt="Jeyan Developers"
              className="h-10 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Sign Up button */}
        <Link to="/login">
          <button className="px-6 py-2 rounded-xl bg-[#e5faf1] text-[#063a33] font-semibold shadow-sm hover:bg-[#d5f5e7] transition">
            Login
          </button>
        </Link>
      </header>

      {/* Centered login content */}
      <main className="flex justify-center">
        <div className="w-full max-w-xl px-6 mt-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#063a33] text-center mb-8">
          Create account
        </h1>

        <form onSubmit={handleSubmit} className="bg-transparent rounded-lg px-6 py-6">
          <label className="block text-sm text-[#063a33] font-medium mb-2">Full name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full border border-[#d8efe8] bg-[#f6fbfa] rounded-lg px-4 py-3 mb-4 outline-none placeholder:text-[#84bda9]"
          />

          <label className="block text-sm text-[#063a33] font-medium mb-2">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border border-[#d8efe8] bg-[#f6fbfa] rounded-lg px-4 py-3 mb-4 outline-none placeholder:text-[#84bda9]"
          />

          <label className="block text-sm text-[#063a33] font-medium mb-2">Mobile</label>
          <input
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter your mobile number"
            className="w-full border border-[#d8efe8] bg-[#f6fbfa] rounded-lg px-4 py-3 mb-4 outline-none placeholder:text-[#84bda9]"
          />

          <label className="block text-sm text-[#063a33] font-medium mb-2">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Choose a password"
            type="password"
            className="w-full border border-[#d8efe8] bg-[#f6fbfa] rounded-lg px-4 py-3 mb-6 outline-none placeholder:text-[#84bda9]"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-b from-[#00e59c] to-[#00d388] text-[#063a33] font-semibold rounded-lg px-6 py-3 hover:opacity-95 transition"
          >
            Sign up
          </button>

          <p className="mt-6 text-center text-sm text-[#6aa99a]">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-[#0ba884] hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
      </main>
    </div>
  );
};

export default SignupPage;
