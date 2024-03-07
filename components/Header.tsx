"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import React from "react";
import { HeaderLinks } from "@/utils/headerLinks";

const Header = () => {

  const { ref, inView } = useInView();

  return (
    <motion.header
      ref={ref}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-ctp-surface0 w-full px-8 py-4 rounded-full"
    >
      <div className="flex items-center justify-between font-medium text-lg">
        <Link href="/">
          <span className="">hongducdev.</span>
        </Link>
        <nav className="">
          <ul className="flex items-center">
            {HeaderLinks.map((link, index) => (
              <li className="" key={index}>
                <Link
                  href={link.href}
                  className={`${
                    link.isActive ? "text-ctp-text" : "text-ctp-overlay1"
                  } px-6 text-ctp-overlay0 hover:text-ctp-text duration-300 transition-colors ease-in-out`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
