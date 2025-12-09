// src/components/pages/SignupPage.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser, loginWithGoogle } from "../../services/authService";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import GoogleIcon from "@mui/icons-material/Google";

const SignupPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    console.log("[signup] started", { email, name, mobile });

    try {
      // 1) create Firebase auth user
      const result = await registerUser(email, password);
      console.log("[signup] firebase auth created", result.user?.uid);

      // 2) write extra profile to Firestore
      const user = result.user;
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        email,
        mobile,
        createdAt: new Date().toISOString(),
      });
      console.log("[signup] firestore doc written for", user.uid);

      // 3) SUCCESS -> navigate to login
      navigate("/login");
      console.log("[signup] navigate('/login') called");
      // component will unmount on navigation, so no need to setIsLoading(false)
    } catch (err: any) {
      console.error("[signup] error:", err);
      alert(err?.message || "Signup failed, check console for details.");
      setIsLoading(false);
    }
  };

  // <-- moved outside handleSubmit so the function exists at render time
  const handleGoogleLogin = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      await loginWithGoogle();
      // Choose destination after Google sign-in. You used "/" in previous code.
      navigate("/");
    } catch (err: any) {
      alert(err?.message || "Google sign-in failed");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4fbf8]">
      {/* Top bar with logo + Sign Up button */}
      <header className="w-full flex items-center justify-between px-8 lg:px-14 pt-5">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-auto">
            <img src="/logo.webp" alt="Jeyan Developers" className="h-10 w-auto object-contain" />
          </div>
        </Link>

        <Link to="/login">
          <button
            className="px-6 py-2 rounded-xl bg-[#e5faf1] text-[#063a33] font-semibold shadow-sm hover:bg-[#d5f5e7] transition"
            aria-disabled={isLoading}
          >
            Login
          </button>
        </Link>
      </header>

      {/* Centered content */}
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
              disabled={isLoading}
              className="w-full border border-[#d8efe8] bg-[#f6fbfa] rounded-lg px-4 py-3 mb-4 outline-none placeholder:text-[#84bda9]"
            />

            <label className="block text-sm text-[#063a33] font-medium mb-2">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={isLoading}
              className="w-full border border-[#d8efe8] bg-[#f6fbfa] rounded-lg px-4 py-3 mb-4 outline-none placeholder:text-[#84bda9]"
            />

            <label className="block text-sm text-[#063a33] font-medium mb-2">Mobile</label>
            <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your mobile number"
              disabled={isLoading}
              className="w-full border border-[#d8efe8] bg-[#f6fbfa] rounded-lg px-4 py-3 mb-4 outline-none placeholder:text-[#84bda9]"
            />

            <label className="block text-sm text-[#063a33] font-medium mb-2">Password</label>
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Choose a password"
              disabled={isLoading}
              className="w-full border border-[#d8efe8] bg-[#f6fbfa] rounded-lg px-4 py-3 mb-6 outline-none placeholder:text-[#84bda9]"
            />

            <button
              type="submit"
              disabled={isLoading}
              aria-busy={isLoading}
              className={`w-full flex items-center justify-center gap-3 ${
                isLoading ? "opacity-80 cursor-not-allowed" : "hover:opacity-95"
              } bg-gradient-to-b from-[#00e59c] to-[#00d388] text-[#063a33] font-semibold rounded-lg px-6 py-3 transition`}
            >
              {isLoading ? (
                <>
                  {/* small spinner */}
                  <svg
                    className="animate-spin h-5 w-5 text-[#063a33]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                  <span>Creating account...</span>
                </>
              ) : (
                "Sign up"
              )}
            </button>

            {/* Google login */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full mt-4 border border-[#a8e5d3] bg-white rounded-xl py-3 
                        font-medium flex items-center justify-center gap-3 hover:bg-gray-50 transition disabled:opacity-70"
            >
              <GoogleIcon className="text-[#4285F4] !w-6 !h-6" />
              Continue with Google
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
