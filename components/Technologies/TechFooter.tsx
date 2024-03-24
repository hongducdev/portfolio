"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SiNodedotjs, SiExpress } from "react-icons/si";

const TechFooter = () => {
  const { ref, inView } = useInView();

  return (
    <div className="flex lg:gap-x-2 flex-col lg:flex-row gap-y-2">
      <motion.div
        className="lg:basis-2/5 bg-ctp-surface0 p-8 lg:px-12 lg:py-10 rounded-3xl flex items-center gap-10 justify-between"
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <SiNodedotjs className="text-9xl" />
        <span className="font-medium text-4xl lg:text-6xl">NodeJS</span>
      </motion.div>
      <motion.div
        className="lg:basis-3/5 bg-ctp-surface0 p-8 lg:px-12 lg:py-10 rounded-3xl flex items-center gap-10 justify-between"
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <SiExpress className="text-9xl" />
        <span className="font-medium text-4xl lg:text-6xl">ExpressJS</span>
      </motion.div>
    </div>
  );
};

export default TechFooter;
