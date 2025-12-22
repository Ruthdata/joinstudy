import React from "react";
import Link from "next/link";

const NavbarHome = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-50 py-4 px-6 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-semibold">
            <span className="text-yellow-400">ask</span>
            <span className="text-gray-900">Field</span>
          </span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-100 transition">
            Start collecting data
          </button>
          <button className="px-6 py-2 text-yellow-500 border border-yellow-400 rounded-full hover:bg-yellow-50 transition">
            <Link href="/auth/sign-up/contributor">
            Contribute and get paid
            </Link>
          </button>
          <button className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition">
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;
