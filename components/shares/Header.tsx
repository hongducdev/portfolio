import { HeaderLinks } from "@/utils/headerLinks";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-ctp-surface0 w-full px-8 py-4 rounded-full flex items-center justify-between font-medium text-lg">
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
    </header>
  );
};

export default Header;
