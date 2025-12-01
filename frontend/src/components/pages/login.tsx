import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle real auth
    console.log("login", { email, password });
    navigate("/");
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
        <Link to="/signup">
          <button className="px-6 py-2 rounded-xl bg-[#e5faf1] text-[#063a33] font-semibold shadow-sm hover:bg-[#d5f5e7] transition">
            Sign UP
          </button>
        </Link>
      </header>

      {/* Centered login content */}
      <main className="flex justify-center">
        <div className="w-full max-w-xl px-6 mt-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#031713] text-center mb-10">
            Welcome back
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-transparent rounded-lg px-4 md:px-6"
          >
            {/* Email */}
            <label className="block text-sm text-[#031713] font-medium mb-2">
              Email or Username
            </label>
            <input
              type="text"
              placeholder="Enter  your email or username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border border-[#d3f0e4] rounded-xl px-4 py-3 mb-5 
                         outline-none placeholder:text-[#8bc8b1] focus:ring-2 focus:ring-[#28f79b]"
            />

            {/* Password */}
            <label className="block text-sm text[#031713] font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter  your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border border-[#d3f0e4] rounded-xl px-4 py-3 mb-3 
                         outline-none placeholder:text-[#8bc8b1] focus:ring-2 focus:ring-[#28f79b]"
            />

            {/* Forgot password */}
            <div className="text-center mb-6">
              <Link
                to="/forgot"
                className="text-sm text-[#7baea0] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full bg-[#00f777] text-[#031713] font-semibold rounded-xl py-3 
                         hover:opacity-95 transition"
            >
              Login
            </button>

            {/* Sign up link under button */}
            <p className="mt-6 text-center text-sm text-[#7baea0]">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-[#0ba884] hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
 