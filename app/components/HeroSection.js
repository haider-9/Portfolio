"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-12 px-6 text-center lg:text-left">
      <div className="container mx-auto lg:ml-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-zinc-200 space-y-8"
        >
          <h1 className="text-4xl lg:text-6xl font-light tracking-tight">
            Haider Ahmad
          </h1>
          <p className="text-zinc-400 text-xl lg:text-2xl font-light">
            Computer Scientist
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {["Website Development", "Development", "Strategy"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded text-zinc-400 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Specializing in web development, I create elegant and performant
            digital solutions through modern frameworks and clean code
            architecture.
          </p>

          <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/projects"
              className="px-8 py-4 bg-black text-zinc-200 rounded-lg tracking-wide hover:bg-zinc-800 transition-all text-base w-full lg:w-auto text-center"
            >
              View Projects
            </Link>
            <Link
              href={"#contact"}
              className="px-8 py-4 border border-zinc-800 text-zinc-300 rounded-lg tracking-wide hover:bg-zinc-700 transition-all text-base w-full lg:w-auto text-center"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative mt-8 lg:mt-0"
        >
          <div className="relative w-[280px] h-[280px] lg:w-[450px] lg:h-[450px] mx-auto">
            <Image
              src="/haider.png"
              alt="Profile Image"
              fill
              className="object-cover transition-all duration-300 rounded-lg"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
