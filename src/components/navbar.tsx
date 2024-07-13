"use client";

import Link from "next/link";
import { RiGithubLine, RiThreadsLine } from "react-icons/ri";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";
import UserLogged from "./user-logged";
import { usePathname } from "next/navigation";

interface INavbarItem {
  label?: string;
  href: string;
  icon?: React.ReactNode;
}

const NavbarList: INavbarItem[] = [
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    href: "https://threads.net/pinkduwc._",
    icon: <RiThreadsLine />,
  },
  {
    href: "https://github.com/hongducdev",
    icon: <RiGithubLine />,
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const { status, data: session } = useSession();

  return (
    <nav className="p-4 lg:p-8 flex items-center justify-between">
      <Link href="/" className="font-semibold text-2xl text-zinc-900">
        <span className="hidden lg:block">hongducdev.</span>
        <span className="lg:hidden">hdd.</span>
      </Link>
      <div className="flex items-center lg:gap-4">
        <div className="flex items-center gap-2">
          {NavbarList.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={` font-medium hover:text-zinc-800 flex items-center ${
                pathname === item.href ? "text-zinc-800" : "text-zinc-500"
              }`}
            >
              {item.label && (
                <span
                  className={`text-lg ml-4 relative ${
                    pathname === item.href &&
                    "text-zinc-800 after:absolute after:bottom-0 after:left-0 after:w-[80%] after:h-0.5 after:bg-zinc-800"
                  }`}
                >
                  {item.label}
                </span>
              )}
              {item.icon && (
                <span className="hidden lg:block lg:ml-4 text-xl">
                  {item.icon}
                </span>
              )}
            </Link>
          ))}
        </div>
        <div className="flex items-center">
          {status === "authenticated" ? (
            <UserLogged />
          ) : (
            <Button>
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
