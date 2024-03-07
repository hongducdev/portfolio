"use client";
import React from "react";
import { motion } from "framer-motion";
import Information from "@/components/Information";
import InformationMore from "@/components/InformationMore";
import Social from "@/components/Social";
import { socialList } from "@/utils/social";

const HomePage = () => {
  return (
    <section>
      <motion.div>
        <Information />
      </motion.div>
      <motion.div>
        <Social items={socialList} speed="normal" />
      </motion.div>
      <motion.div>
        <InformationMore />
      </motion.div>
    </section>
  );
};

export default HomePage;
