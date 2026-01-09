"use client";

import React from "react";
import Image from "next/image";

const FormLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Side - Form Content (Pass any component as children) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">{children}</div>
      </div>

      {/* Right Side - Fixed Image */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12">
        <Image
          src="/images/shared/company-image.svg"
          alt="Participant"
          width={500}
          height={300}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default FormLayout;