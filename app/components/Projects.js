"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaReact, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiGraphql,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiReactrouter,
  SiShadcnui,
  SiRadixui,
} from "react-icons/si";

// Tech icons with colors
const techIcons = {
  React: <FaReact className="text-[#61DAFB]" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  TypeScript: <SiTypescript className="text-[#3178C6]" />,
  GraphQL: <SiGraphql className="text-[#E535AB]" />,
  Tailwind: <SiTailwindcss className="text-[#38B2AC]" />,
  Express: <SiExpress className="text-[#000000] dark:text-[#FFFFFF]" />,
  "Node.js": <SiNodedotjs className="text-[#339933]" />,
  MongoDB: <SiMongodb className="text-[#47A248]" />,
  ReactRouter: <SiReactrouter className="text-[#CA4245]" />,
  ShadcnUI: <SiShadcnui className="text-[#000000] dark:text-[#FFFFFF]" />,
  RadixUI: <SiRadixui className="text-[#14B8A6]" />,
};

// Tech colors for background gradients
const techColors = {
  React: "from-[#61DAFB]/10 to-[#61DAFB]/5",
  "Next.js": "from-gray-800/20 to-gray-900/10",
  TypeScript: "from-[#3178C6]/10 to-[#3178C6]/5",
  GraphQL: "from-[#E535AB]/10 to-[#E535AB]/5",
  Tailwind: "from-[#38B2AC]/10 to-[#38B2AC]/5",
  Express: "from-gray-700/10 to-gray-800/5",
  "Node.js": "from-[#339933]/10 to-[#339933]/5",
  MongoDB: "from-[#47A248]/10 to-[#47A248]/5",
  ReactRouter: "from-[#CA4245]/10 to-[#CA4245]/5",
  ShadcnUI: "from-gray-700/10 to-gray-800/5",
  RadixUI: "from-[#14B8A6]/10 to-[#14B8A6]/5",
};

const projectData = [
  {
    id: 1,
    title: "Animadom",
    description:
      "Welcome to AnimaDom, your ultimate destination for everything anime! Whether you're a seasoned otaku or a curious newcomer, our website is designed to bring you closer to the vibrant world of anime",
    image: "/assets/projects/Animadom.png",
    technologies: [
      "Express",
      "GraphQL",
      "React",
      "Tailwind",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "ReactRouter",
      "ShadcnUI",
      "RadixUI",
    ],
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
    technologies: [
      "Next.js",
      "GraphQL",
      "React",
      "Tailwind",
      "ShadcnUI",
      "RadixUI",
    ],
    githubLink: "https://github.com/haider-9/MangaDom",
    previewLink: "https://mangadom.vercel.app",
    year: "2024",
  },
 
];
const Projects = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  return (
    <section className="relative py-12 sm:py-20 md:py-28 overflow-hidden">
      <motion.div
        style={{ opacity }}
        className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 mb-10 sm:mb-14 md:mb-18 text-center relative z-10"
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-zinc-200 tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
            Featured Projects
          </span>
        </h1>
        <p className="text-zinc-400 text-base sm:text-lg mt-3 sm:mt-5 font-light">
          Explore some of my recent work
        </p>
      </motion.div>

      {projectData.map((project, index) => (
        <motion.div
          key={project.id}
          className="container mx-auto px-6 mb-16 sm:mb-24 md:mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 150, damping: 12 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-20 items-center">
            <div
              className={`text-zinc-200 space-y-6 sm:space-y-8 ${
                index % 2 === 0 ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight group">
                <span className="bg-left-bottom bg-gradient-to-r from-blue-600 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  {project.title}
                </span>
              </h2>
              <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800/50 rounded-xl p-4 sm:p-6">
                <p className="text-zinc-400 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Redesigned Technology Stack */}
              <motion.div
                className="flex flex-wrap gap-3 sm:gap-4 pt-4"
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.1 }}
                viewport={{ once: true }}
              >
                {project.technologies.map((tech) => (
                  <motion.div
                    key={tech}
                    className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-br ${techColors[tech]} backdrop-blur-sm border border-zinc-800/50 rounded-full cursor-pointer text-zinc-200 text-xs sm:text-sm relative group transition-all duration-300 hover:shadow-lg`}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5 },
                      },
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: `0 0 15px 0 rgba(${
                        tech === "React"
                          ? "97, 218, 251"
                          : tech === "TypeScript"
                          ? "49, 120, 198"
                          : "255, 255, 255"
                      }, 0.3)`,
                    }}
                  >
                    <span className="text-xl sm:text-2xl">
                      {techIcons[tech]}
                    </span>
                    <span className="font-medium">{tech}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <motion.a
                  href={project.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 sm:px-7 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg text-sm sm:text-base shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 sm:px-7 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-sm sm:text-base shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FaGithub className="text-lg sm:text-xl" />
                  <span className="ml-2">Source Code</span>
                </motion.a>
              </div>
            </div>

            {/* Project Image with animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl group w-full h-[250px] sm:h-[350px] md:h-[400px] ${
                index % 2 === 0 ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-40 group-hover:opacity-25 transition-opacity duration-500" />

              {/* Year badge */}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/20">
                {project.year}
              </div>
            </motion.div>
          </div>
        </motion.div>
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
