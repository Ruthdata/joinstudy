"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGoogleLogin } from "@react-oauth/google";
import { handleAuthSuccess } from "../../../utils/auth";

const EyeIcon = ({ open }: { open: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {open ? (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ) : (
      <>
        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
        <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </>
    )}
  </svg>
);

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const inputClass = "w-full box-border px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 bg-gray-50 outline-none transition-all focus:border-gray-900 focus:bg-white placeholder:text-gray-300";
const labelClass = "block text-xs font-semibold text-gray-600 mb-1.5";

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ email: "", password: "" });

  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    redirect_uri: "http://localhost:3001",
    onSuccess: async (codeResponse) => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/google`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code: codeResponse.code, role: "participant" }),
          }
        );
        const data = await res.json();
        if (data.success) {
          handleAuthSuccess(data, router); 
        } else {
          setError(data.message || "Google login failed");
        }
      } catch {
        setError("Google login failed. Try again.");
      }
    },
    onError: () => setError("Google authentication failed"),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    setError("");
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: form.email, password: form.password }),
        }
      );
      const data = await res.json();
      if (data.success) {
        handleAuthSuccess(data, router); 
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[460px] bg-white rounded-2xl shadow-[0_2px_40px_rgba(0,0,0,0.08)] px-10 py-11">
      <h1 className="font-serif text-[2.2rem] leading-tight text-gray-900 mb-3">Login</h1>
      <p className="text-sm text-gray-500 leading-relaxed mb-7">
        Now, login to your AskField account &amp; start getting paid.
      </p>

      <button
        onClick={() => googleLogin()}
        className="w-full flex items-center justify-center gap-2.5 px-5 py-3 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-gray-400 hover:shadow-sm transition-all cursor-pointer mb-2"
      >
        <GoogleIcon /> Continue with Google
      </button>

      <div className="flex items-center gap-3 my-5">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400">Or, Login with your email</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <div className="mb-3.5">
        <label className={labelClass}>Email<span className="text-red-400 ml-0.5">*</span></label>
        <input className={inputClass} name="email" type="email" placeholder="Enter email" value={form.email} onChange={handleChange} />
      </div>

      <div className="mb-1.5">
        <div className="flex justify-between items-center mb-1.5">
          <label className={labelClass} style={{ marginBottom: 0 }}>
            Password<span className="text-red-400 ml-0.5">*</span>
          </label>
          <a href="/forgot-password" className="text-xs text-amber-500 font-medium hover:underline">Forgot Password?</a>
        </div>
        <div className="relative">
          <input
            className={inputClass}
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            style={{ paddingRight: 40 }}
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
            <EyeIcon open={showPassword} />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-3 mb-4">
        <input type="checkbox" id="remember" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} className="w-4 h-4 rounded border-gray-300 accent-gray-900 cursor-pointer" />
        <label htmlFor="remember" className="text-xs text-gray-500 cursor-pointer">Remember me</label>
      </div>

      {error && <p className="text-xs text-red-500 mb-3 bg-red-50 px-3 py-2 rounded-lg">{error}</p>}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full mt-2 py-3.5 bg-gray-900 text-white rounded-full text-sm font-semibold tracking-wide hover:bg-gray-700 active:scale-[0.99] transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      <p className="text-center mt-4 text-xs text-gray-400">
        Don&apos;t have an account as a participant?{" "}
        <a href="/auth/sign-up/participant" className="text-red-400 font-medium hover:underline">Sign Up</a>
      </p>
    </div>
  );
}