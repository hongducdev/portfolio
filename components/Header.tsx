"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HeaderLinks } from "@/utils/headerLinks";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const menuVars = {
    hidden: { scaleY: 0, originY: 0 },
    visible: { scaleY: 1, originY: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-ctp-surface0 w-full px-8 py-4 rounded-full"
    >
      <div className="flex items-center justify-between font-medium text-lg">
        <Link href="/">
          <span className="">hongducdev.</span>
        </Link>
        <nav className="hidden lg:block">
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
        <div className="block lg:hidden">
          <RiMenu3Fill className="text-2xl" onClick={toggleMenu} />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVars}
              className="fixed top-0 left-0 w-screen min-h-screen h-full z-50 bg-ctp-base p-5"
            >
              <div
                className="text-ctp-text text-6xl flex justify-end"
                onClick={toggleMenu}
              >
                <RiCloseFill />
              </div>
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-center h-full"
              >
                <ul className="flex flex-col gap-y-5">
                  {HeaderLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className={`${
                          link.isActive ? "text-ctp-text" : "text-ctp-overlay1"
                        } text-ctp-overlay0 hover:text-ctp-text duration-300 transition-colors ease-in-out text-6xl`}
                        onClick={toggleMenu}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
