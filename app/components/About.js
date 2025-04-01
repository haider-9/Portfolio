"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaUniversity } from "react-icons/fa";

const AboutPage = () => {
  const highlights = [
    { number: "2+", label: "Years Coding" },
    { number: "10+", label: "Projects Built" },
    { number: "10+", label: "GitHub Repos" },
    { number: "1K+", label: "Tea Cups" },
  ];

  const education = {
    university: "Computer Science Student",
    description:
      "Pursuing my passion for technology and mathematics through formal education while applying theoretical knowledge to practical projects.",
  };

  return (
    <main className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-400"
      >
        About Me
      </motion.h1>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative rounded-xl p-6 sm:p-8 max-w-3xl lg:max-w-5xl mx-auto mb-20 bg-zinc-50 dark:bg-zinc-800/50 shadow-sm border border-zinc-200 dark:border-zinc-700 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-2 rounded-full bg-zinc-100 dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-600 mb-6 sm:mb-8"
        >
          <FaUniversity className="text-blue-500 dark:text-blue-400" />
          <span className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
            {education.university}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl font-bold mb-4 text-zinc-800 dark:text-zinc-100"
        >
          Haider Ahmad
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg max-w-2xl text-zinc-600 dark:text-zinc-400 mx-auto mb-10"
        >
          A passionate developer at the intersection of technology and
          creativity. I blend my love for astronomy, mathematics, and anime into
          my coding projects, creating digital experiences that are both
          functional and meaningful.
        </motion.p>
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
              className="text-center p-4 rounded-lg bg-zinc-100 dark:bg-zinc-700/30 border border-zinc-200 dark:border-zinc-600/30"
            >
              <div className="text-2xl sm:text-3xl font-bold text-blue-500 dark:text-blue-400 mb-1">
                {item.number}
              </div>
              <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      <div className="text-center mt-12 sm:mt-16 md:mt-20">
        <Link
          href="/about"
          className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-zinc-900/50 backdrop-blur-md border border-zinc-800/50 rounded-full text-zinc-200 hover:text-blue-400 transition-all duration-300 hover:border-blue-500/50 text-sm sm:text-base"
        >
          <span className="font-light">Learn More</span>
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

      <div className="absolute bottom-0  w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
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
