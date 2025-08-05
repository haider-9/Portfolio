"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { techIcons, techColors } from "../../constants";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{
        opacity: { duration: 0.5, ease: "easeOut" },
        y: {
          type: "spring",
          stiffness: 300,
          damping: 15,
          mass: 0.5,
        },
      }}
      viewport={{ once: true, margin: "100px" }}
      className="group relative bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/30 rounded-xl overflow-hidden h-[420px] flex flex-col hover:border-zinc-700/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 ease-out will-change-transform"
    >
      {/* Image Container */}
      <div className="relative h-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-zinc-900/30 z-10" />
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="h-full w-full"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={160}
            quality={75}
            className="object-cover w-full h-full"
            priority={project.id <= 3}
          />
        </motion.div>
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-white/10 z-20">
          {project.year}
        </div>
        <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-white/10 z-20">
          {project.category}
        </div>
      </div>

      {/* Project Content */}
      <div className="flex flex-col flex-grow p-5 space-y-4">
        <h3 className="text-xl font-semibold text-zinc-200 group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm line-clamp-3 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => {
            const colors = techColors[tech];
            return (
              <span
                key={tech}
                className="flex items-center gap-1 px-2 py-1 backdrop-blur-sm border border-zinc-800/30 rounded-md text-zinc-300 text-xs"
                style={{
                  background: colors
                    ? `linear-gradient(to bottom right, ${colors.from}, ${colors.to})`
                    : "linear-gradient(to bottom right, rgba(39, 39, 42, 0.8), rgba(63, 63, 70, 0.7))",
                }}
              >
                {techIcons[tech] || <span className="text-sm">🔧</span>}
                <span className="hidden sm:inline">{tech}</span>
              </span>
            );
          })}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-zinc-800/30 border border-zinc-800/30 rounded-md text-zinc-400 text-xs">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-blue-600/90 hover:bg-blue-700/90 text-white border-0 shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            <span>View Details</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <path d="M15 12L9 16.5V7.5L15 12Z" fill="currentColor" />
            </svg>
          </Button>

          <ProjectModal
            project={project}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </div>
    </motion.div>
  );
};


const ProjectModal = ({ project, isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 border-zinc-700/50 bg-zinc-900/95 backdrop-blur-xl">
        <ScrollArea className="max-h-[90vh]">
          <div
            className="rounded-lg"
            style={{
              background: `linear-gradient(45deg, rgba(39, 39, 42, 0.95), ${project.theme})`,
            }}
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
                  className="rounded-t-lg"
                />
              </motion.div>
              <div
                className="absolute inset-0 rounded-t-lg"
                style={{
                  background: `linear-gradient(to bottom, transparent, ${project.theme}90)`,
                }}
              />

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="absolute top-4 right-4 flex gap-2"
              >
                <Badge variant="secondary" className="bg-black/80 backdrop-blur-sm text-white border-white/20 hover:bg-black/90 transition-colors">
                  {project.year}
                </Badge>
                <Badge variant="secondary" className="bg-black/80 backdrop-blur-sm text-white border-white/20 hover:bg-black/90 transition-colors">
                  {project.category}
                </Badge>
              </motion.div>

              <DialogHeader className="absolute bottom-4 left-6 right-6">
                <DialogTitle className="text-2xl sm:text-3xl font-bold text-white">
                  {project.title}
                </DialogTitle>
              </DialogHeader>
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
                <ScrollArea className="max-h-32">
                  <motion.div
                    className="flex flex-wrap gap-3 pr-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.7,
                      staggerChildren: 0.05,
                      when: "beforeChildren",
                    }}
                  >
                    {project.technologies.map((tech, index) => {
                      const colors = techColors[tech];
                      return (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + index * 0.05, duration: 0.3 }}
                        >
                          <Badge
                            variant="secondary"
                            className="flex items-center gap-2 px-3 py-2 text-sm border border-zinc-700/30 hover:border-zinc-600/50 transition-all duration-200"
                            style={{
                              background: colors
                                ? `linear-gradient(to bottom right, ${colors.from}, ${colors.to})`
                                : "linear-gradient(to bottom right, rgba(39, 39, 42, 0.8), rgba(63, 63, 70, 0.7))",
                            }}
                          >
                            {techIcons[tech] || <span className="text-lg">🔧</span>}
                            <span className="text-zinc-200">{tech}</span>
                          </Badge>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </ScrollArea>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 pt-4"
              >
                <Button asChild className="bg-blue-600/90 hover:bg-blue-700/90 text-white border-0 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink className="mr-2" />
                    Visit Live Site
                  </motion.a>
                </Button>
                <Button asChild variant="secondary" className="bg-zinc-800/70 hover:bg-zinc-700/70 text-zinc-200 border-zinc-600/50 hover:border-zinc-500/50 shadow-lg hover:shadow-zinc-500/10 transition-all duration-300">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-2" />
                    View Source Code
                  </motion.a>
                </Button>
              </motion.div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export { ProjectCard, ProjectModal };
export default ProjectCard;
