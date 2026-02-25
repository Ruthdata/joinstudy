"use client";

import { useState } from "react";
import VerifyEmailScreen from "./VerifyEmailScreen";
import { useGoogleLogin } from "@react-oauth/google";

const EyeIcon = ({ open }: { open: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
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
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const AppleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const inputClass =
  "w-full box-border px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 bg-gray-50 outline-none transition-all focus:border-gray-900 focus:bg-white placeholder:text-gray-300";

const labelClass = "block text-xs font-semibold text-gray-600 mb-1.5";

export default function SignUpParticipantForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [updates, setUpdates] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [registeredEmail, setRegisteredEmail] = useState<string | null>(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
          body: JSON.stringify({
            code: codeResponse.code,
            role: "participant",
          }),
        },
      );
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("token", data.token);
        window.location.href = data.user.profileCompleted ? "/dashboard" : "/dashboard/complete-profile";
      } else {
        setError(data.message || "Google signup failed");
      }
    } catch (err) {
      setError("Google signup failed. Try again.");
    }
  },
  onError: () => setError("Google authentication failed"),
});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    setError("");

    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      setError("Please fill in all required fields.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (!agreed) {
      setError("You must agree to the Participant Terms to continue.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            password: form.password,
            role: "participant",
            // Required by schema — collect in a later profile completion step
            gender: "prefer-not-to-say",
            dateOfBirth: new Date("2000-01-01").toISOString(),
            identityDocument: "pending",
          }),
        },
      );

      const data = await res.json();

      if (data.success) {
        setRegisteredEmail(form.email);
      } else {
        setError(data.message || "Registration failed. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  // Swap to verification screen after successful registration
  if (registeredEmail) {
    return (
      <VerifyEmailScreen
        email={registeredEmail}
        onChangeEmail={() => setRegisteredEmail(null)}
      />
    );
  }

  return (
    <div className="w-full max-w-[460px] bg-white rounded-2xl shadow-[0_2px_40px_rgba(0,0,0,0.08)] px-10 py-11">
      <h1 className="font-serif text-[2.2rem] leading-tight text-gray-900 mb-3">
        Sign up as a<br />
        participant
      </h1>
      <p className="text-sm text-gray-500 leading-relaxed mb-7">
        Please enter your legal name exactly as it appears on your ID issued by
        your current country of residence. Otherwise, you may not be able to
        join. For a full list of accepted IDs.
      </p>

      <div className="flex gap-2.5 mb-2">
        <button
          onClick={() => googleLogin()}
          className="flex flex-1 items-center justify-center gap-2.5 px-5 py-3 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-gray-400 hover:shadow-sm transition-all cursor-pointer"
        >
          <GoogleIcon /> Continue with Google
        </button>
        <button className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 bg-white hover:border-gray-400 hover:shadow-sm transition-all cursor-pointer shrink-0">
          <FacebookIcon />
        </button>
        <button className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 bg-white hover:border-gray-400 hover:shadow-sm transition-all cursor-pointer shrink-0">
          <AppleIcon />
        </button>
      </div>

      <div className="flex items-center gap-3 my-5">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400">
          Or, sign up with your email
        </span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <div className="grid grid-cols-2 gap-3.5 mb-3.5">
        <div>
          <label className={labelClass}>
            Legal First Name<span className="text-red-400 ml-0.5">*</span>
          </label>
          <input
            className={inputClass}
            name="firstName"
            placeholder="Enter first name"
            value={form.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className={labelClass}>
            Legal Last Name<span className="text-red-400 ml-0.5">*</span>
          </label>
          <input
            className={inputClass}
            name="lastName"
            placeholder="Enter last name"
            value={form.lastName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mb-3.5">
        <label className={labelClass}>
          Email<span className="text-red-400 ml-0.5">*</span>
        </label>
        <input
          className={inputClass}
          name="email"
          type="email"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3.5">
        <label className={labelClass}>Password</label>
        <div className="relative">
          <input
            className={inputClass}
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter a strong password"
            value={form.password}
            onChange={handleChange}
            style={{ paddingRight: 40 }}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <EyeIcon open={showPassword} />
          </button>
        </div>
      </div>

      <div className="mb-3.5">
        <label className={labelClass}>Confirm Password</label>
        <div className="relative">
          <input
            className={inputClass}
            name="confirmPassword"
            type={showConfirm ? "text" : "password"}
            placeholder="Re-enter password"
            value={form.confirmPassword}
            onChange={handleChange}
            style={{ paddingRight: 40 }}
          />
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <EyeIcon open={showConfirm} />
          </button>
        </div>
      </div>

      <div className="flex items-start gap-2.5 mb-3">
        <input
          type="checkbox"
          id="terms"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
          className="w-4 h-4 mt-0.5 flex-shrink-0 rounded border-gray-300 accent-gray-900 cursor-pointer"
        />
        <label
          htmlFor="terms"
          className="text-xs text-gray-500 leading-relaxed cursor-pointer"
        >
          I agree to AskField&apos;s{" "}
          <a href="#" className="text-red-400 font-medium hover:underline">
            Participant Terms
          </a>{" "}
          and have read and understood the{" "}
          <a href="#" className="text-red-400 font-medium hover:underline">
            Privacy Notice
          </a>
          .
        </label>
      </div>

      <div className="flex items-start gap-2.5 mb-3">
        <input
          type="checkbox"
          id="updates"
          checked={updates}
          onChange={() => setUpdates(!updates)}
          className="w-4 h-4 mt-0.5 flex-shrink-0 rounded border-gray-300 accent-gray-900 cursor-pointer"
        />
        <label
          htmlFor="updates"
          className="text-xs text-gray-500 leading-relaxed cursor-pointer"
        >
          I want to receive updates about services, promotions & news from
          AskField, its affiliates and business partners (e.g., through
          newsletters and/or SMS messages).
        </label>
      </div>

      {error && (
        <p className="text-xs text-red-500 mb-3 bg-red-50 px-3 py-2 rounded-lg">
          {error}
        </p>
      )}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full mt-2 py-3.5 bg-gray-900 text-white rounded-full text-sm font-semibold tracking-wide hover:bg-gray-700 active:scale-[0.99] transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Creating account..." : "Sign up"}
      </button>

      <p className="text-center mt-4 text-xs text-gray-400">
        Already registered as a participant on AskField?{" "}
        <a href="/login" className="text-red-400 font-medium hover:underline">
          Login
        </a>
      </p>
    </div>
  );
}
