import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavbarHome = () => {
  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-gray-50 py-4 px-6 z-50 shadow-sm rounded-full w-11/12 max-w-5xl ">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div>
            <Link href="/">
              <Image
                src="/images/shared/askfield-logo-icon.png"
                alt="AskField Logo"
                width={40}
                height={40}
                className="mr-2"
              />
            </Link>
          </div>
          <div>
            <Link href="/">
              <span className="text-2xl font-semibold">
                <span className="text-yellow-400">ask</span>
                <span className="text-gray-900">Field</span>
              </span>
            </Link>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/auth/sign-up/participant">
            <button className="px-6 py-2 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-100 transition">
              Start collecting data
            </button>
          </Link>
          <Link href="/auth/sign-up/contributor">
            <button className="px-6 py-2 text-yellow-500 border border-yellow-400 rounded-full hover:bg-yellow-50 transition">
              Contribute and get paid
            </button>
          </Link>
          <button className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition">
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;
