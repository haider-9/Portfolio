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
    { name: "React", icon: <SiReact size={28} />, category: "Frontend", color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs size={28} />, category: "Frontend", color: "#ffffff" },
    { name: "Redux", icon: <SiRedux size={28} />, category: "State Management", color: "#764ABC" },
    { name: "TypeScript", icon: <SiTypescript size={28} />, category: "Language", color: "#3178C6" },
    { name: "Node.js", icon: <SiNodedotjs size={28} />, category: "Backend", color: "#339933" },
    { name: "MongoDB", icon: <SiMongodb size={28} />, category: "Database", color: "#47A248" },
    { name: "Firebase", icon: <SiFirebase size={28} />, category: "Backend", color: "#FFCA28" },
    { name: "Python", icon: <SiPython size={28} />, category: "Language", color: "#3776AB" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={28} />, category: "Styling", color: "#38B2AC" },
    { name: "JavaScript", icon: <SiJavascript size={28} />, category: "Language", color: "#F7DF1E" },
    { name: "Git", icon: <SiGit size={28} />, category: "Version Control", color: "#F05032" },
    { name: "Postman", icon: <SiPostman size={28} />, category: "API Testing", color: "#FF6C37" },
  ];

  return (
    <main className="pt-24 min-h-screen px-4 sm:px-6 md:px-10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 -left-64 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 -right-64 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-12 "
      >
        About Me
      </motion.h1>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative border border-zinc-700/50 rounded-xl p-6 sm:p-8 max-w-3xl lg:max-w-5xl mx-auto mb-20 bg-zinc-800/50 backdrop-blur-sm shadow-lg text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-2 rounded-full bg-zinc-700/70 border border-zinc-600/50 mb-6 sm:mb-8"
        >
          <HiSparkles className="text-yellow-400" />
          <span className="text-sm sm:text-base">Full Stack Developer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 text-transparent bg-clip-text"
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
              className="text-center p-4 rounded-lg bg-zinc-700/30 border border-zinc-600/30 hover:bg-zinc-700/50 hover:border-zinc-500/50 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-1">{item.number}</div>
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
        <div className="relative rounded-2xl p-8 sm:p-12 overflow-hidden bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 shadow-lg">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center "
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
            {skills.map(({ name, icon, category, color }) => (
              <motion.div
                key={name}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="group relative p-4 sm:p-6 rounded-xl bg-zinc-700/50 hover:bg-zinc-700/80 transition-all duration-300 flex flex-col items-center gap-2 sm:gap-4 shadow-md hover:shadow-lg border border-zinc-600/30 hover:border-zinc-500/50"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: `0 0 15px 0 rgba(${color === "#61DAFB" ? "97, 218, 251" : color === "#3178C6" ? "49, 120, 198" : "255, 255, 255"}, 0.2)`
                }}
              >
                <div 
                  className="transform transition-transform duration-300 group-hover:scale-110 text-zinc-100"
                  style={{ color }}
                >
                  {icon}
                </div>
                <div className="text-center">
                  <div className="text-sm sm:text-base font-medium text-zinc-100">{name}</div>
                  <div className="text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{category}</div>
                </div>
                
                {/* Glowing border effect on hover */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ 
                    boxShadow: `inset 0 0 0 1px ${color}50`,
                    filter: 'blur(1px)'
                  }}
                ></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      
      {/* Add CSS for animations */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </main>
  );
};

export default AboutPage;
