import React from "react";
import Image from "next/image";

export default function PartnerHome() {
  return (
    <div>
      <div className="flex justify-center items-center gap-8 mb-3 mt-8 border border-[#EEEEEE] p-6 rounded-3xl w-max">
        <Image
          src="/images/home/university-of-florida.svg"
          alt="University of Florida"
          width={156}
          height={45}
          className="cursor-pointer"
        />
        <Image
          src="/images/home/careton-university.svg"
          alt="Carleton University"
          width={125}
          height={45}
          className="cursor-pointer"
        />
      </div>

      <h2>Partner with askField today </h2>
    </div>
  );
}
