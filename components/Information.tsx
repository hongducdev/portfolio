"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Icon1 } from "./Icon";
import { useInView } from "react-intersection-observer";

const Information = () => {
  const { ref, inView } = useInView();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex gap-x-2"
    >
      <motion.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="basis-3/5 bg-ctp-surface0 px-12 py-10 rounded-3xl"
      >
        <Image
          src="https://avatars.githubusercontent.com/u/73995275?v=4"
          alt="hongducdev"
          width={108}
          height={108}
          className="rounded-full"
        />
        <h1 className="mt-8 text-[64px] font-medium leading-none">
          <span className="text-ctp-text">hongducdev</span>
          <p className="">is a web developer,</p>
          <p className="text-ctp-overlay1">and a student at ICTU.</p>
        </h1>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        className="basis-2/5 bg-ctp-surface0 px-12 py-10 rounded-3xl text-center leading-none"
      >
        <div className="flex items-center justify-center">
          <Icon1 />
        </div>
        <h2 className="font-medium text-[56px] mt-4 mb-16">
          Have a project in mind?
        </h2>
        <Link
          href="mailto:hey@hongducdev.com"
          className="text-3xl font-medium bg-ctp-green text-ctp-surface0 px-8 py-6 rounded-full hover:brightness-110 transition-all duration-300 ease-in-out"
        >
          hey@hongducdev.com
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Information;
