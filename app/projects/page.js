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
    <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
 

      <motion.div style={{ opacity }} className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 mb-12 sm:mb-16 md:mb-20 text-center relative z-10"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-zinc-200 tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
            Featured Projects
          </span>
        </h1>
        <p className="text-zinc-400 text-lg sm:text-xl mt-4 font-light">
          Explore some of my recent work
        </p>
      </motion.div>

      {projectData.map((project, index) => (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          key={project.id}
          className="container mx-auto px-4 mb-20 sm:mb-32 md:mb-40"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800/50 rounded-xl p-4 sm:p-6 shadow-lg hover:border-blue-500/30 transition-all duration-300"
              >
                <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-black backdrop-blur-sm  rounded-full  text-sm shadow-lg"
                  >
                    <span className="text-base sm:text-lg">
                      {techIcons[tech]}
                    </span>
                    {tech}
                  </motion.span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={project.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full tracking-wide text-sm sm:text-base shadow-lg hover:shadow-blue-500/50 hover:translate-y-[-2px] transition-all duration-300"
                >
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-zinc-800 text-white rounded-full tracking-wide text-sm sm:text-base shadow-lg hover:shadow-zinc-700/50 hover:translate-y-[-2px] transition-all duration-300"
                >
                  <FaGithub className="text-lg sm:text-xl" />
                  <span>Source Code</span>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 1.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
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
        </motion.div>
      ))}

      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </section>
  );
};

export default Projects;
