import Link from "next/link";
import {
  RiGithubLine,
  RiLinkedinBoxLine,
  RiThreadsLine,
  RiTwitterXLine,
} from "react-icons/ri";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Hi, my name is hongducdev. Full name is Nguyen Hong Duc. I am a 4th year student majoring in Software Engineering at ICTU. I am a Front end developer and am striving to become a Fullstack developer.",
};

interface ISocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const SocialLinks: ISocialLink[] = [
  {
    label: "Github",
    href: "https://github.com/hongducdev",
    icon: <RiGithubLine />,
  },
  {
    label: "X",
    href: "https://x.com/hongducdev",
    icon: <RiTwitterXLine />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/hongducdev",
    icon: <RiLinkedinBoxLine />,
  },
  {
    label: "Threads",
    href: "https://threads.net/hongducdev",
    icon: <RiThreadsLine />,
  },
];

const MainPage = () => {
  return (
    <div>
      <h1 className="font-semibold text-4xl">Hello, World!</h1>
      <p className="text-xl mt-10 leading-loose">
        Hi, my name is hongducdev. Full name is Nguyen Hong Duc. I am a 4th year
        student majoring in Software Engineering at ICTU. I am a Front end
        developer and am striving to become a Fullstack developer.
      </p>
      <p className="text-xl mt-8 leading-loose">
        Outside of programming, I love reading 📖 and cycling 🚲.
      </p>

      <div className="mt-20">
        <p className="text-xl">Find me on</p>
        <div className="flex items-center flex-wrap gap-5 mt-3">
          {SocialLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center space-x-2 text-zinc-500 font-medium hover:text-zinc-800 relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-zinc-800 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-0 hover:after:scale-x-100 after:origin-left"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-lg">{item.label}</span>
            </Link>
          ))}
        </div>
        <p className="text-xl mt-5">
          If you have any questions, please email me at{" "}
          <Link
            href="mailto:hey@hongducdev.com"
            className=" text-zinc-500 font-medium hover:text-zinc-800 relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-zinc-500 after:transition-all after:duration-300 hover:after:bg-zinc-800 after:ease-in-out after:transform after:scale-x-100 after:origin-left"
          >
            <span className="text-lg">hey@hongducdev.com</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MainPage;
