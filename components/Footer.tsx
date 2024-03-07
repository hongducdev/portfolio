"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref, inView } = useInView();

  return (
    <motion.footer
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-ctp-surface0 w-full px-8 py-4 rounded-full flex items-center justify-between font-medium text-lg"
    >
      <Link href="/">
        <span className="">hongducdev.</span>
      </Link>
      <span className="text-ctp-overlay1">all rights reserved. © 2024</span>
    </motion.footer>
  );
};

export default Footer;
