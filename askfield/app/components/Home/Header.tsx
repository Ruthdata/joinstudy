import React from "react";
import { Text } from "@radix-ui/themes";
import Design from "./Design";
import PartnerHome from "../Partner/PartnerHome";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-2 mt-30 mb-20">
      <h1 className="text-6xl font-bold">
        High Quality <span className="text-brand-primary">Data,</span>
      </h1>
      <h1 className="text-6xl font-bold">Collected in Hours Not Days</h1>
      <Text className="text-lg font-normal width-full max-w-xl mt-4 mb-6">
        Unlock reliable data for your research projects with our fast survey
        tools - built for precision, speed and actionable results.
      </Text>
      <div>
        <button className="bg-[#3E3E3E] text-white p-3 rounded-3xl w-[243px] cursor-pointer">
          <Link href="/auth/sign-up/participant">Start collecting Data</Link>
        </button>
        <button className="bg-transparent border border-[#3E3E3E] text-[#3E3E3E] p-3 rounded-3xl ml-4 w-[243px] cursor-pointer">
          <Link href="/auth/sign-up/contributor">Contribute and get paid</Link>
        </button>
      </div>
      <Design />
      <PartnerHome />
    </div>
  );
}
