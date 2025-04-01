"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const skills = ["Frontend Development", "React/Next.js", "UI/UX Design", "Backend Integration"];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative flex items-center justify-center py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-zinc-200 space-y-6 sm:space-y-8 lg:col-span-7"
        >
          <div className="space-y-2 sm:space-y-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-full text-zinc-400 text-xs sm:text-sm"
            >
              Computer Scientist & Web Developer
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-400">
              Haider Ahmad
            </h1>
          </div>

          <p className="text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
            I craft elegant digital experiences through modern frameworks and clean code architecture,
            turning complex problems into intuitive solutions.
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-zinc-800/40 backdrop-blur-sm border border-zinc-700/50 rounded-full text-zinc-300 text-xs sm:text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
            <Link
              href="/projects"
              className="group px-6 py-3 sm:px-8 sm:py-4 bg-zinc-100 text-zinc-900 rounded-full font-medium tracking-wide hover:bg-white transition-all text-sm sm:text-base w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              View Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="#contact"
              className="group px-6 py-3 sm:px-8 sm:py-4 border border-zinc-700 text-zinc-200 rounded-full font-medium tracking-wide hover:bg-zinc-800 transition-all text-sm sm:text-base w-full sm:w-auto text-center"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.95 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative lg:col-span-5 mt-8 sm:mt-10 lg:mt-0"
        >
          <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px] xl:w-[400px] xl:h-[400px] mx-auto">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-emerald-500/20 blur-xl"></div>
            <div className="absolute inset-0 rounded-2xl border border-zinc-700/50 overflow-hidden">
              <Image
                src="/haider.png"
                alt="Haider Ahmad"
                fill
                className="object-cover transition-all duration-300 hover:scale-105"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;