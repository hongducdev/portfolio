"use client";
import React from "react";
import Information from "@/components/Information";
import InformationMore from "@/components/InformationMore";
import Social from "@/components/Social";
import { socialList } from "@/utils/social";
import Project from "@/components/Project";
import { Projects } from "@/utils/projects";
import Contact from "@/components/Contact";
import TechHeader from "@/components/Technologies/TechHeader";
import TechBody from "@/components/Technologies/TechBody";
import TechFooter from "@/components/Technologies/TechFooter";

const HomePage = () => {
  return (
    <section className="flex flex-col gap-y-2">
      <Information />
      <div className="max-w-screen lg:max-w-screen flex items-center justify-center">
        <Social items={socialList} speed="normal" />
      </div>
      <InformationMore />
      <TechHeader />
      <TechBody />
      <TechFooter />
      <section className="flex flex-col gap-y-2" id="projects">
        {Projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      TeT</section>
      <Contact />
    </section>
  );
};

export default HomePage;
