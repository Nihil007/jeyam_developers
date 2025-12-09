import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';


import { loginUser, loginWithGoogle } from "../../services/authService"; // <-- ADD

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await loginUser(email, password);
      navigate("/");   // go home after login
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4fbf8]">
      {/* Top bar */}
      <header className="w-full flex items-center justify-between px-8 lg:px-14 pt-5">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-auto">
            <img src="/logo.webp" alt="Jeyan Developers" className="h-10 w-auto object-contain" />
          </div>
        </Link>

        <Link to="/signup">
          <button className="px-6 py-2 rounded-xl bg-[#e5faf1] text-[#063a33] font-semibold shadow-sm hover:bg-[#d5f5e7] transition">
            Sign UP
          </button>
        </Link>
      </header>

      {/* Content */}
      <main className="flex justify-center">
        <div className="w-full max-w-xl px-6 mt-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#031713] text-center mb-10">
            Welcome back
          </h1>

          <form onSubmit={handleSubmit} className="bg-transparent rounded-lg px-4 md:px-6">

            <label className="block text-sm text-[#031713] font-medium mb-2">Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-[#d3f0e4] bg-transparent rounded-xl px-4 py-3 mb-5 outline-none"
            />

            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-[#d3f0e4] bg-transparent rounded-xl px-4 py-3 mb-3 outline-none"
            />

            <div className="text-center mb-6">
              <Link to="/forgot" className="text-sm text-[#7baea0] hover:underline">Forgot Password?</Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#00f777] text-[#031713] font-semibold rounded-xl py-3 hover:opacity-95 transition"
            >
              Login
            </button>

            {/* Google login */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full mt-4 border border-[#a8e5d3] bg-white rounded-xl py-3 
                        font-medium flex items-center justify-center gap-3 hover:bg-gray-50 transition"
            >
              <GoogleIcon className="text-[#4285F4] !w-6 !h-6" /> 
              Continue with Google
            </button>

            <p className="mt-6 text-center text-sm text-[#7baea0]">
              Don't have an account?{" "}
              <Link to="/signup" className="font-medium text-[#0ba884] hover:underline">
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
