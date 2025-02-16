"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiGraphql } from "react-icons/si";

const techIcons = {
  React: <FaReact />,
  "Next.js": <SiNextdotjs />,
  TypeScript: <SiTypescript />,
  GraphQL: <SiGraphql />,
};

const projectData = [
  {
    id: 1,
    title: "Animadom",
    description:
      "Welcome to AnimaDom, your ultimate destination for everything anime! Whether you're a seasoned otaku or a curious newcomer, our website is designed to bring you closer to the vibrant world of anime",
    image: "/assets/projects/Animadom.png",
    technologies: ["Next.js", "GraphQL", "React"],
    githubLink: "https://github.com/haider-9/Animadom",
    previewLink: "https://animadom.vercel.app",
    year: "2024",
  },
  {
    id: 2,
    title: "MangaDom",
    description:
      "Welcome to MangaDom, your ultimate destination for everything manga! Whether you're a seasoned otaku or a curious newcomer, our website is designed to bring you closer to the vibrant world of manga",
    image: "/assets/projects/Mangadom.png",
    technologies: ["Next.js", "GraphQL", "React"],
    githubLink: "https://github.com/haider-9/MangaDom",
    previewLink: "https://mangadom.vercel.app",
    year: "2024",
  },
];

const Projects = () => {
  return (
    <section className="relative py-16 sm:py-24 md:py-32">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="container mx-auto px-4 mb-12 sm:mb-16 md:mb-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-zinc-200 tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h1>
        <p className="text-zinc-400 text-lg sm:text-xl mt-4 font-light">
          Explore some of my recent work
        </p>
      </div>

      {projectData.map((project, index) => (
        <div
          key={project.id}
          className="container mx-auto px-4 mb-20 sm:mb-32 md:mb-40"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className={`text-zinc-200 space-y-6 sm:space-y-8 ${
                index % 2 === 0 ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight group">
                <span className="bg-left-bottom bg-gradient-to-r from-blue-600 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  {project.title}
                </span>
              </h2>
              <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800/50 rounded-xl p-4 sm:p-6">
                <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-black/50 backdrop-blur-sm border border-zinc-800 rounded-full text-zinc-400 text-sm"
                  >
                    <span className="text-base sm:text-lg">
                      {techIcons[tech]}
                    </span>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={project.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-full tracking-wide text-sm sm:text-base"
                >
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-zinc-800 text-white rounded-full tracking-wide text-sm sm:text-base"
                >
                  <FaGithub className="text-lg sm:text-xl" />
                  <span>Source Code</span>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className={`relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl group w-full h-[300px] sm:h-[400px] md:h-[450px] ${
                index % 2 === 0 ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transform transition-all duration-700 rotate-2 group-hover:rotate-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-50 group-hover:opacity-30 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-700" />
            </motion.div>
          </div>
        </div>
      ))}

      <div className="text-center mt-12 sm:mt-16 md:mt-20">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-zinc-900/50 backdrop-blur-md border border-zinc-800/50 rounded-full text-zinc-200 hover:text-blue-400 transition-all duration-300 hover:border-blue-500/50 text-sm sm:text-base"
        >
          <span className="font-light">View All Projects</span>
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 transform transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>

      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </section>
  );
};

export default Projects;
