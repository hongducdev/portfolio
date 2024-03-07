"use client";
import React from "react";
import { Icon2 } from "./Icon";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const InformationMore = () => {
  const { ref, inView } = useInView();

  return (
    <motion.section
      className="flex gap-2"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="basis-2/5 bg-ctp-surface0 px-12 py-10 rounded-3xl">
        <Icon2 />
        <h2 className="font-medium text-[56px] leading-none mt-8">
          Based in
          <br />
          Thai Nguyen,
          <br />
          Viet Nam. <span className="text-ctp-overlay1">GMT+7</span>
        </h2>
      </div>
      <div className="basis-3/5 bg-ctp-surface0 px-12 py-10 rounded-3xl">
        <h3 className="font-medium text-5xl">
          Hi, my name is hongducdev. Full name is Nguyen Hong Duc. I am a 4th
          year student majoring in Software Engineering at ICTU.{" "}
          <span className="text-ctp-overlay1">
            I am a Front end developer and am striving to become a Fullstack
            developer.
          </span>
        </h3>
      </div>
    </motion.section>
  );
};

export default InformationMore;
