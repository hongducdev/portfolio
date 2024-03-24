"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TechHeader = () => {
  const { ref, inView } = useInView();

  return (
    <motion.div
      className="bg-ctp-surface0 p-8 lg:px-12 lg:py-10 rounded-3xl"
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <h3 className="font-medium text-[32px] lg:text-5xl">
        🧑‍💻 the technologies I use.
      </h3>
    </motion.div>
  );
};

export default TechHeader;
