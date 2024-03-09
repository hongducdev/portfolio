"use client";
import React from "react";
import Information from "@/components/Information";
import InformationMore from "@/components/InformationMore";
import Social from "@/components/Social";
import { socialList } from "@/utils/social";
import Technologies from "@/components/Technologies";
import Project from "@/components/Project";
import { Projects } from "@/utils/projects";
import Contact from "@/components/Contact";

const HomePage = () => {
  return (
    <section className="flex flex-col gap-y-2">
      <Information />
      <div className="max-w-screen lg:max-w-screen flex items-center justify-center">
        <Social items={socialList} speed="normal" />
      </div>
      <InformationMore />
      <Technologies />
      <section className="flex flex-col gap-y-2" id="projects">
        {Projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </section>
      <Contact />
    </section>
  );
};

export default HomePage;
