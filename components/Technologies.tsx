"use cdivent";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RiReactjsFill } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiNodedotjs, SiExpress } from "react-icons/si";

const Technologies = () => {
  const { ref, inView } = useInView();

  return (
    <section>
      <motion.div
        className="bg-ctp-surface0 p-8 lg:px-12 lg:py-10 rounded-3xl"
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h3 className="font-medium text-[32px] lg:text-5xl">
          🧑‍💻 the technologies I use.
        </h3>
      </motion.div>

      <div className="mt-2 text-3xl flex flex-col gap-y-2">
        <div className="flex lg:gap-x-2 flex-col lg:flex-row gap-y-2">
          <motion.div
            className="lg:basis-3/5 bg-ctp-surface0 p-8 lg:px-12 lg:py-10 rounded-3xl flex items-center gap-10 justify-between"
            ref={ref}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: inView ? 0 : -50, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <BiLogoTailwindCss className="text-9xl" />
            <span className="font-medium text-4xl lg:text-6xl">
              TailwindCSS
            </span>
          </motion.div>
          <motion.div
            className="lg:basis-2/5 bg-ctp-surface0 p-8 lg:px-12 lg:py-10 rounded-3xl flex items-center gap-10 justify-between"
            ref={ref}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <RiReactjsFill className="text-9xl" />
            <span className="font-medium text-4xl lg:text-6xl">ReactJS</span>
          </motion.div>
        </div>
        <div className="flex lg:gap-x-2 flex-col lg:flex-row gap-y-2">
          <motion.div
            className="lg:basis-2/5 bg-ctp-surface0 p-8 lg:px-12 lg:py-10 rounded-3xl flex items-center gap-10 justify-between"
            ref={ref}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: inView ? 0 : -50, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <SiNodedotjs className="text-9xl" />
            <span className="font-medium text-4xl lg:text-6xl">NodeJS</span>
          </motion.div>
          <motion.div
            className="lg:basis-3/5 bg-ctp-surface0 p-8 lg:px-12 lg:py-10 rounded-3xl flex items-center gap-10 justify-between"
            ref={ref}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <SiExpress className="text-9xl" />
            <span className="font-medium text-4xl lg:text-6xl">ExpressJS</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
