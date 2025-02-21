"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FaReact, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiGraphql,
  SiTailwindcss,
} from "react-icons/si";

const techIcons = {
  React: <FaReact />,
  "Next.js": <SiNextdotjs />,
  TypeScript: <SiTypescript />,
  GraphQL: <SiGraphql />,
  Tailwind: <SiTailwindcss />,
};

const projectData = [
  {
    id: 1,
    title: "Animadom",
    description:
      "Welcome to AnimaDom, your ultimate destination for everything anime! Whether you're a seasoned otaku or a curious newcomer, our website is designed to bring you closer to the vibrant world of anime",
    image: "/assets/projects/Animadom.png",
    technologies: ["Next.js", "GraphQL", "React", "Tailwind"],
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
    technologies: ["Next.js", "GraphQL", "React", "Tailwind"],
    githubLink: "https://github.com/haider-9/MangaDom",
    previewLink: "https://mangadom.vercel.app",
    year: "2024",
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
  },
  {
    id: 4,
    title: "Voyager",
    description:
      "Welcome to MangaDom, your ultimate destination for everything manga! Whether you're a seasoned otaku or a curious newcomer, our website is designed to bring you closer to the vibrant world of manga",
    image: "/assets/projects/Voyager.png",
    technologies: ["Tailwind"],
    githubLink: "https://github.com/Sharoon166",
    previewLink: "https://voyagertravels.vercel.app/",
    year: "2024",
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

              {/* Technology Stack */}
              <motion.div
                className="flex flex-wrap gap-3 sm:gap-4 pt-4"
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.2 }}
                viewport={{ once: true }}
              >
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-black/50 backdrop-blur-sm border border-zinc-800 rounded-full text-zinc-400 text-xs sm:text-sm"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5 },
                      },
                    }}
                  >
                    <span className="hidden sm:block text-2xl">
                      {techIcons[tech]}
                    </span>
                    <span className="block sm:hidden">{tech}</span>
                  </motion.span>
                ))}
              </motion.div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={project.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 sm:px-7 py-3 bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white rounded-lg text-sm sm:text-base shadow-md transition-transform transform hover:scale-105"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 sm:px-7 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-sm sm:text-base shadow-md transition-transform transform hover:scale-105"
                >
                  <FaGithub className="text-lg sm:text-xl" />
                  <span className="ml-2">Source Code</span>
                </a>
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
            </motion.div>
          </div>
        </motion.div>
      ))}
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </section>
  );
};

export default Projects;
