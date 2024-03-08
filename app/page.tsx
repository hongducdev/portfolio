"use client";
import React from "react";
import Information from "@/components/Information";
import InformationMore from "@/components/InformationMore";
import Social from "@/components/Social";
import { socialList } from "@/utils/social";
import Technologies from "@/components/Technologies";

const HomePage = () => {
  return (
    <section className="flex flex-col gap-y-2">
      <Information />
      <Social items={socialList} speed="normal" />
      <InformationMore />
      <Technologies />
    </section>
  );
};

export default HomePage;
