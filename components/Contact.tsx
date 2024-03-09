"use client";
import React from "react";
import { Icon1 } from "./Icon";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref, inView } = useInView();
  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
      transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
      id="contact"
      className="bg-ctp-surface0 p-8 lg:px-12 lg:py-10 rounded-3xl text-center leading-none"
    >
      <div className="flex items-center justify-center">
        <Icon1 />
      </div>
      <h2 className="font-medium text-[40px] lg:text-[56px] mt-4 mb-16">
        Have a project in mind?
      </h2>
      <Link
        href="mailto:hey@hongducdev.com"
        className="block w-full text-xl lg:text-3xl font-medium bg-ctp-green text-ctp-surface0 px-8 py-6 rounded-full hover:brightness-110 transition-all duration-300 ease-in-out"
      >
        hey@hongducdev.com
      </Link>
    </motion.div>
  );
};

export default Contact;
