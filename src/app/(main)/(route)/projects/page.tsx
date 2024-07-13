import {
  RiNextjsLine,
  RiNodejsLine,
  RiReactjsLine,
  RiTailwindCssLine,
} from "react-icons/ri";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Skills and projects that I have worked on.",
};

interface ISkill {
  name: string;
  icon: React.ReactNode;
}

interface IProject {
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
}

const Skills: ISkill[] = [
  {
    name: "React",
    icon: <RiReactjsLine />,
  },
  {
    name: "Next.js",
    icon: <RiNextjsLine />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssLine />,
  },
  {
    name: "Node.js",
    icon: <RiNodejsLine />,
  },
];

const Projects: IProject[] = [
  {
    name: "My Portfolio",
    description:
      "My personal portfolio website built with Next.js, Tailwind CSS, and TypeScript.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/hongducdev/portfolio",
    demo: "https://hongducdev.com",
  },
  {
    name: "Chill with me",
    description:
      "Discover a world of serene sounds on our website! Immerse yourself in soothing lofi music, explore a variety of ambient sounds, enhance focus with tomo focus, and stay organized with our todo list feature. Experience a creative and productive space, all while enjoying the convenience of seamlessly opening your favorite YouTube videos.",
    technologies: ["Nextjs", "Tailwind CSS"],
    github: "https://github.com/hongducdev/lofi",
    demo: "https://lofi-nine.vercel.app/",
  },
  {
    name: "dangkitinchi",
    description: "A website for students of ICTU to register for courses.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/hongducdev/dangkitinchi-ictu",
    demo: "https://dangkitinchi-ictu.vercel.app/",
  },
];

const ProjectPage = () => {
  return (
    <div>
      <h2 className="text-5xl font-semibold">Skills</h2>
      <div className="mt-10 grid lg:grid-cols-2 gap-5">
        {Skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-3 text-2xl font-medium text-zinc-500 hover:bg-zinc-100 p-3 cursor-pointer rounded-xl transition-all duration-300 ease-in-out transform"
          >
            <div className="text-7xl">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
      <h2 className="text-5xl font-semibold mt-10">Projects</h2>
      <div className="mt-10 grid grid-cols-1 gap-10">
        {Projects.map((project) => (
          <div key={project.name} className="p-5 bg-zinc-100 rounded-xl">
            <h3 className="text-3xl font-semibold">{project.name}</h3>
            <p className="mt-3 text-lg">{project.description}</p>
            <div className="flex items-center gap-3 mt-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-sm font-medium bg-zinc-200 text-zinc-500 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-3 flex gap-3">
              <a
                href={project.github}
                className="text-lg font-medium text-zinc-500 hover:text-zinc-800 underline transition-all duration-300"
              >
                Github
              </a>
              <a
                href={project.demo}
                className="text-lg font-medium text-zinc-500 hover:text-zinc-800 underline transition-all duration-300"
              >
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
