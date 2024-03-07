import Image from "next/image";
import Icon1 from "./Icon1";
import Link from "next/link";

const Information = () => {
  return (
    <section className="flex gap-x-2">
      <div className="basis-3/5 bg-ctp-surface0 px-12 py-10 rounded-3xl">
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
      </div>
      <div className="basis-2/5 bg-ctp-surface0 px-12 py-10 rounded-3xl text-center leading-none">
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
      </div>
    </section>
  );
};

export default Information;
