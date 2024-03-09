import Image from "next/image";
import { Icon3 } from "./Icon";
import { IProject } from "@/interfaces/projects";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Project = ({ title, description, image, link }: IProject) => {
  const { ref, inView } = useInView();
  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full bg-ctp-surface0 rounded-3xl group"
    >
      <Link href={link}>
        <div className="p-8 lg:px-12 lg:py-10 flex items-center justify-between">
          <div>
            <h4 className="font-medium text-[40px]">{title}</h4>
            <p className="text-2xl text-ctp-overlay1">{description}</p>
          </div>
          <div className="w-20 h-20 rounded-full lg:flex items-center justify-center transition-all duration-500 bg-ctp-base group-hover:bg-ctp-overlay0 move-diagonally group-hover:text-ctp-text hidden">
            <Icon3 />
          </div>
        </div>
        <div className="p-2">
          <Image
            src={image}
            alt={title}
            width={1920}
            height={1080}
            className="rounded-2xl group-hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </div>
      </Link>
    </motion.div>
  );
};

export default Project;
