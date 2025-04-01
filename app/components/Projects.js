"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { FaReact, FaGithub, } from "react-icons/fa";
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
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";


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

// Tech colors for background gradients (softer versions)
const techColors = {
  React: "from-[#61DAFB]/5 to-[#61DAFB]/10",
  "Next.js": "from-gray-800/10 to-gray-900/5",
  TypeScript: "from-[#3178C6]/5 to-[#3178C6]/10",
  GraphQL: "from-[#E535AB]/5 to-[#E535AB]/10",
  Tailwind: "from-[#38B2AC]/5 to-[#38B2AC]/10",
  Express: "from-gray-700/5 to-gray-800/10",
  "Node.js": "from-[#339933]/5 to-[#339933]/10",
  MongoDB: "from-[#47A248]/5 to-[#47A248]/10",
  ReactRouter: "from-[#CA4245]/5 to-[#CA4245]/10",
  ShadcnUI: "from-gray-700/5 to-gray-800/10",
  RadixUI: "from-[#14B8A6]/5 to-[#14B8A6]/10",
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
    category: "Full Stack",
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
    category: "Frontend",
  },
  {
    id: 5,
    title: "Break Time",
    description:
      "This web application serves as the admin dashboard for Braketime's backoffice operations. It provides a centralized interface for managing various aspects of the business, including employee records, customer data, inventory management, and more. 💼🏢",
    image: "/assets/projects/Shop.png",
    technologies: ["Tailwind", "React"],
    githubLink: "https://github.com/Sharoon166/brake-time",
    previewLink: "https://brake-time.vercel.app/",
    year: "2024",
    category: "Frontend",
  },
];

const Projects = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden ">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-900/10 blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-900/10 blur-xl"></div>
      </div>

      <motion.div
        style={{ opacity }}
        className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-6 mb-12 sm:mb-16 md:mb-20 text-center relative z-10"
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-zinc-100 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-400">
            Featured Projects
          </span>
        </h1>
        <p className="text-zinc-400 text-base sm:text-lg mt-4 sm:mt-6 font-light max-w-2xl mx-auto">
          Explore my portfolio of web applications, showcasing my skills in
          frontend and full-stack development
        </p>
      </motion.div>

      {/* Project Grid */}
      <div className="container mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
          {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              setSelectedProject={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
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

      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
    </section>
  );
};

const ProjectCard = ({ project, setSelectedProject }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -5 }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.5,
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/30 rounded-xl overflow-hidden h-[420px] flex flex-col hover:border-zinc-700/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 ease-out"
    >
      {/* Project Image */}
      <div className="relative h-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-zinc-900/30 z-10" />
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          viewport={{ once: true }}
          className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-white/10 z-20"
        >
          {project.year}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          viewport={{ once: true }}
          className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-white/10 z-20"
        >
          {project.category}
        </motion.div>
      </div>

      {/* Project Content */}
      <div className="flex flex-col flex-grow p-5 space-y-4">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-xl font-semibold text-zinc-200 group-hover:text-blue-400 transition-colors duration-300"
        >
          {project.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-zinc-400 text-sm line-clamp-3 flex-grow"
        >
          {project.description}
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.4,
            staggerChildren: 0.05,
            when: "beforeChildren",
          }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2"
        >
          {project.technologies.slice(0, 4).map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
              className={`flex items-center gap-1 px-2 py-1 bg-gradient-to-br ${techColors[tech]} backdrop-blur-sm border border-zinc-800/30 rounded-md text-zinc-300 text-xs`}
            >
              <span className="text-sm">{techIcons[tech]}</span>
              <span className="hidden sm:inline">{tech}</span>
            </motion.span>
          ))}
          {project.technologies.length > 4 && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.3 }}
              viewport={{ once: true }}
              className="px-2 py-1 bg-zinc-800/30 border border-zinc-800/30 rounded-md text-zinc-400 text-xs"
            >
              +{project.technologies.length - 4} more
            </motion.span>
          )}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="flex gap-3 pt-2"
        >
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={project.previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-600/90 hover:bg-blue-700/90 text-white rounded-lg text-sm transition-all duration-300 flex-1"
          >
            <FiExternalLink className="text-xs" />
            <span>Live Demo</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-2 bg-zinc-800/50 hover:bg-zinc-700/50 text-white rounded-lg text-sm transition-all duration-300"
          >
            <FaGithub className="text-sm" />
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedProject(project)}
            className="flex items-center justify-center gap-2 px-3 py-2 bg-zinc-800/50 hover:bg-zinc-700/50 text-white rounded-lg text-sm transition-all duration-300"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 12L9 16.5V7.5L15 12Z" fill="currentColor" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          mass: 0.5,
        }}
        className="bg-zinc-900 border border-zinc-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Image */}
        <div className="relative h-56 sm:h-72">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-xl"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/90" />

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="absolute top-4 right-4 flex gap-2"
          >
            <div className="bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-white/10">
              {project.year}
            </div>
            <div className="bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-white/10">
              {project.category}
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            onClick={onClose}
            className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white p-1.5 rounded-full hover:bg-black/90 transition-all duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="absolute bottom-4 left-6 right-6"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {project.title}
            </h2>
          </motion.div>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <h3 className="text-lg font-medium text-zinc-300 mb-3">
              About the Project
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <h3 className="text-lg font-medium text-zinc-300 mb-3">
              Technologies Used
            </h3>
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.7,
                staggerChildren: 0.05,
                when: "beforeChildren",
              }}
            >
              {project.technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.05, duration: 0.3 }}
                  className={`flex items-center gap-2 px-3 py-2 bg-gradient-to-br ${techColors[tech]} backdrop-blur-sm border border-zinc-800/30 rounded-lg text-zinc-200 text-sm`}
                >
                  <span className="text-lg">{techIcons[tech]}</span>
                  <span>{tech}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 pt-4"
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={project.previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600/90 hover:bg-blue-700/90 text-white rounded-lg text-sm transition-all duration-300 flex-1 sm:flex-none"
            >
              <FiExternalLink />
              <span>Visit Live Site</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-2.5 bg-zinc-800/50 hover:bg-zinc-700/50 text-white rounded-lg text-sm transition-all duration-300 flex-1 sm:flex-none"
            >
              <FaGithub />
              <span>View Source Code</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default Projects;
