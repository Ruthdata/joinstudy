"use client";

import { Suspense } from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessage("Invalid verification link.");
      return;
    }

    const verify = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify-email/${token}`
        );
        const data = await res.json();

        if (data.success) {
          setStatus("success");
          setMessage(data.message);
        } else {
          setStatus("error");
          setMessage(data.message || "Verification failed.");
        }
      } catch {
        setStatus("error");
        setMessage("Network error. Please try again.");
      }
    };

    verify();
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-2xl shadow-lg px-10 py-12 max-w-md w-full text-center">
        {status === "loading" && (
          <>
            <div className="w-12 h-12 border-4 border-gray-900 border-t-transparent rounded-full animate-spin mx-auto mb-6" />
            <h1 className="text-xl font-semibold text-gray-900">Verifying your email...</h1>
          </>
        )}
        {status === "success" && (
          <>
            <div className="text-5xl mb-4">🎉</div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-3">Email Verified!</h1>
            <p className="text-sm text-gray-500 mb-8">{message}</p>
            <a href="/login" className="inline-block w-full py-3.5 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-700 transition-all">
              Go to Login
            </a>
          </>
        )}
        {status === "error" && (
          <>
            <div className="text-5xl mb-4">❌</div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-3">Verification Failed</h1>
            <p className="text-sm text-gray-500 mb-8">{message}</p>
            <a href="/auth/sign-up/participant" className="inline-block w-full py-3.5 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-700 transition-all">
              Back to Sign Up
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <VerifyEmailContent />
    </Suspense>
  );
}