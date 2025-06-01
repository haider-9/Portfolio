"use client";

import { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import ProjectCard, { ProjectModal } from "../components/ProjectCard";
import { projectData, techColors, techIcons } from "../../constants";

const Projects = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 will-change-transform">
          {projectData.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              setSelectedProject={setSelectedProject}
              techColors={techColors}
              techIcons={techIcons}
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
            techColors={techColors}
            techIcons={techIcons}
          />
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
    </section>
  );
};

export default Projects;
