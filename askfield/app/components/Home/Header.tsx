import React from "react";
import { Text, Button } from "@radix-ui/themes";
import Design from "./Design";
import PartnerHome from "../Partner/PartnerHome";

export default function Header() {
  return (
    <div>
      <h1 className="text-4xl font-bold ">
        High Quality <span>Data,</span> Collected in Hours Not Days{" "}
      </h1>
      <Text className="text-2xl">
        Unlock reliable data for your research projects with our fast survey
        tools - built for precision, speed and actionable results.
      </Text>
      <div>
        <Button>Start collecting Data</Button>
        <Button>Contribute and get paid</Button>
      </div>
      <Design />
      <PartnerHome />
    </div>
  );
}
