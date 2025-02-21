"use client";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiGit,
  SiPostman,
  SiPython,
  SiMongodb,
  SiFirebase,
  SiRedux,
} from "react-icons/si";
import { HiSparkles } from "react-icons/hi";
import { motion } from "framer-motion";

const AboutPage = () => {
  const highlights = [
    { number: "2+", label: "Years Coding" },
    { number: "10+", label: "Projects Built" },
    { number: "10+", label: "GitHub Repos" },
    { number: "1K+", label: "Tea Cups" },
  ];

  const skills = [
    { name: "React", icon: <SiReact size={28} />, category: "Frontend" },
    { name: "Next.js", icon: <SiNextdotjs size={28} />, category: "Frontend" },
    { name: "Redux", icon: <SiRedux size={28} />, category: "State Management" },
    { name: "TypeScript", icon: <SiTypescript size={28} />, category: "Language" },
    { name: "Node.js", icon: <SiNodedotjs size={28} />, category: "Backend" },
    { name: "MongoDB", icon: <SiMongodb size={28} />, category: "Database" },
    { name: "Firebase", icon: <SiFirebase size={28} />, category: "Backend" },
    { name: "Python", icon: <SiPython size={28} />, category: "Language" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={28} />, category: "Styling" },
    { name: "JavaScript", icon: <SiJavascript size={28} />, category: "Language" },
    { name: "Git", icon: <SiGit size={28} />, category: "Version Control" },
    { name: "Postman", icon: <SiPostman size={28} />, category: "API Testing" },
  ];

  return (
    <main className="pt-24 min-h-screen px-4 sm:px-6 md:px-10">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-zinc-100 to-zinc-400 text-transparent bg-clip-text"
      >
        About Me
      </motion.h1>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative border border-zinc-700 rounded-xl p-6 sm:p-8 max-w-3xl lg:max-w-5xl mx-auto mb-20 bg-zinc-800 shadow-lg text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-2 rounded-full bg-zinc-700 border border-zinc-600 mb-6 sm:mb-8"
        >
          <HiSparkles className="text-yellow-400" />
          <span className="text-sm sm:text-base">Full Stack Developer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600 text-transparent bg-clip-text"
        >
          Haider Ahmad
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg max-w-2xl text-zinc-400 mx-auto mb-10"
        >
          Crafting digital experiences through code. Passionate about building innovative solutions that make a difference in people's lives.
        </motion.p>

        {/* Highlights */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-1">{item.number}</div>
              <div className="text-xs sm:text-sm text-zinc-400">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl lg:max-w-5xl mx-auto mb-20 px-4"
      >
        <div className="relative rounded-2xl p-8 sm:p-12 overflow-hidden bg-zinc-800 border border-zinc-700 shadow-lg">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-zinc-100"
          >
            Technical Arsenal
          </motion.h2>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
          >
            {skills.map(({ name, icon, category }) => (
              <motion.div
                key={name}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="group p-4 sm:p-6 rounded-xl bg-zinc-700 hover:bg-zinc-600 transition-all duration-300 flex flex-col items-center gap-2 sm:gap-4 shadow-md hover:shadow-lg"
              >
                <div className="transform transition-transform duration-300 group-hover:scale-110 text-zinc-100">
                  {icon}
                </div>
                <div className="text-center">
                  <div className="text-sm sm:text-base font-medium text-zinc-100">{name}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default AboutPage;
