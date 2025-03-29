"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { FaReact, FaGithub, FaExternalLinkAlt, FaFilter } from "react-icons/fa";
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
    id: 3,
    title: "Resume-Crew",
    description:
      "A sleek and interactive resume builder with multiple template options and real-time preview.",
    image: "/assets/projects/Resume.png",
    technologies: ["Tailwind", "React"],
    githubLink: "https://github.com/haider-9/Resume-Crew",
    previewLink: "https://resumecrew.vercel.app/",
    year: "2025",
    category: "Frontend",
  },
  {
    id: 4,
    title: "Voyager",
    description:
      "Welcome to MangaDom, your ultimate destination for everything manga! Whether you're a seasoned otaku or a curious newcomer, our website is designed to bring you closer to the vibrant world of manga",
    image: "/assets/projects/Voyager.png",
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
    githubLink: "https://github.com/haider-9/Voyager",
    previewLink: "https://voyagermern.vercel.app/",
    year: "2024",
    category: "Full Stack",
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
  {
    id: 6,
    title: "Samurai Systems",
    description:
      "Samurai -Team of solution architects, developers and consultants having only one aim in mind deliver the best, nothing else ",
    image: "/assets/projects/Samurai.png",
    technologies: ["Next.js", "React"],
    githubLink: "https://github.com/Sharoon166/Samurai_Systems",
    previewLink: "https://samurai-systems166.vercel.app/",
    year: "2024",
    category: "Frontend",
  },
  {
    id: 7,
    title: "Z-Digitizing",
    description:
      "Welcome to Z Digitizing, your trusted partner for high-quality embroidery digitizing services.",
    image: "/assets/projects/z.png",
    technologies: ["Next.js", "React"],
    githubLink: "https://github.com/Sharoon166/z_digitizing",
    previewLink: "https://z-digitizing.vercel.app/",
    year: "2024",
    category: "Frontend",
  },
  {
    id: 8,
    title: "Tipu Electrics",
    description:
      "Tipu Electrical Services has been providing top-quality electrical solutions to residential, commercial, and industrial clients for over 15 years. Founded with a commitment to excellence, we have grown to become one of the most trusted names in the industry.",
    image: "/assets/projects/Tipu.png",
    technologies: ["Next.js", "React"],
    githubLink: "https://github.com/haider-9/Tipu-Electrics",
    previewLink: "https://tipu-electrics.vercel.app/",
    year: "2025",
    category: "Frontend",
  },
];

const Projects = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const filterRef = useRef(null);

  // Close filter dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Get all unique categories
  const categories = [
    "All",
    ...new Set(projectData.map((project) => project.category)),
  ];

  // Filter projects based on category and search query
  const filteredProjects = projectData.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative py-12 sm:py-20 md:py-28 overflow-hidden ">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-900/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-900/10 blur-3xl"></div>
      </div>

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
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-zinc-200 tracking-tight">
          <span >
            Featured Projects
          </span>
        </h1>
        <p className="text-zinc-400 text-base sm:text-lg mt-3 sm:mt-5 font-light max-w-2xl mx-auto">
          Explore my portfolio of web applications, showcasing my skills in
          frontend and full-stack development
        </p>
      </motion.div>

      {/* Search and Filter Controls */}
      <div className="container mx-auto px-6 mb-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-1/2 lg:w-1/3">
            <input
              type="text"
              placeholder="Search projects by name, tech, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-800 rounded-lg text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
            <svg
              className="absolute right-3 top-3.5 text-zinc-500"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="relative w-full md:w-auto" ref={filterRef}>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-3 bg-zinc-900/80 border border-zinc-800 rounded-lg text-zinc-300 hover:bg-zinc-800 transition-colors w-full md:w-auto"
            >
              <FaFilter className="text-zinc-500" />
              <span>Filter: {selectedCategory}</span>
              <svg
                className={`ml-2 transition-transform ${
                  isFilterOpen ? "rotate-180" : ""
                }`}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 4.5L6 8L9.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {isFilterOpen && (
              <div className="absolute mt-2 w-full bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl z-20">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsFilterOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 hover:bg-zinc-800 transition-colors ${
                      selectedCategory === category
                        ? "text-blue-400 bg-zinc-800/50"
                        : "text-zinc-300"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Project Grid */}
      <div className="container mx-auto px-6 mb-16">
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-zinc-400 text-xl">
              No projects match your search criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Clear filters
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                setSelectedProject={setSelectedProject}
              />
            ))}
          </div>
        )}
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

      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ project, setSelectedProject }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-xl overflow-hidden h-[450px] flex flex-col hover:border-zinc-700/50 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-zinc-900/20 z-10" />
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transform transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/20 z-20">
          {project.year}
        </div>
        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/20 z-20">
          {project.category}
        </div>
      </div>

      {/* Project Content */}
      <div className="flex flex-col flex-grow p-6 space-y-4">
        <h3 className="text-xl font-semibold text-zinc-200 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm line-clamp-3 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className={`flex items-center gap-1 px-2 py-1 bg-gradient-to-br ${techColors[tech]} backdrop-blur-sm border border-zinc-800/50 rounded-md text-zinc-300 text-xs`}
            >
              <span className="text-base">{techIcons[tech]}</span>
              <span className="hidden sm:inline">{tech}</span>
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-zinc-800/50 border border-zinc-800/50 rounded-md text-zinc-400 text-xs">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <a
            href={project.previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors flex-1"
          >
            <FaExternalLinkAlt className="text-xs" />
            <span>Live Demo</span>
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-sm transition-colors"
          >
            <FaGithub className="text-base" />
          </a>
          <button
            onClick={() => setSelectedProject(project)}
            className="flex items-center justify-center gap-2 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-sm transition-colors"
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
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Project Modal Component
const ProjectModal = ({ project, onClose }) => {
  // Prevent scrolling when modal is open
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
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="bg-zinc-900 border border-zinc-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Image */}
        <div className="relative h-64 sm:h-80">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/90" />

          <div className="absolute top-4 right-4 flex gap-2">
            <div className="bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/20">
              {project.year}
            </div>
            <div className="bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/20">
              {project.category}
            </div>
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/90 transition-colors"
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
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium text-zinc-300 mb-2">
              About the Project
            </h3>
            <p className="text-zinc-400">{project.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-zinc-300 mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className={`flex items-center gap-2 px-3 py-2 bg-gradient-to-br ${techColors[tech]} backdrop-blur-sm border border-zinc-800/50 rounded-lg text-zinc-200 text-sm`}
                >
                  <span className="text-xl">{techIcons[tech]}</span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href={project.previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-base transition-colors"
            >
              <FaExternalLinkAlt />
              <span>Visit Live Site</span>
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-base transition-colors"
            >
              <FaGithub className="text-lg" />
              <span>View Source Code</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
