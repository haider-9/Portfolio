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
  SiLatex,
  SiJupyter,
  SiVercel,
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { TbMathXDivideY2 } from "react-icons/tb";
import {
  FaChalkboardTeacher,
  FaUniversity,
  FaCode,
  FaStar,
  FaQuoteLeft,
  FaMugHot,
} from "react-icons/fa";
import { GiGalaxy } from "react-icons/gi";
import { motion } from "framer-motion";

const AboutPage = () => {
  const funFacts = [
    { emoji: "☕", text: "Can debug anything after my 3rd cup of chai" },
    {
      emoji: "🌌",
      text: "Astronomy enthusiast who can name more stars than celebrities",
    },
    {
      emoji: "🧮",
      text: "Believes Euler's identity is nature's perfect love letter",
    },
    { emoji: "🐍", text: "Python lover (the language, not the snake)" },
  ];

  const highlights = [
    {
      number: "2+",
      label: "Years Coding",
      icon: <FaCode className="text-blue-500" />,
    },
    {
      number: "10+",
      label: "Projects Built",
      icon: <SiReact className="text-blue-500" />,
    },
    {
      number: "10+",
      label: "GitHub Repos",
      icon: <SiGit className="text-blue-500" />,
    },
    {
      number: "1K+",
      label: "Tea Cups",
      icon: <FaMugHot className="text-blue-500" />,
    },
  ];

  const skills = [
    {
      name: "React",
      icon: <SiReact size={24} />,
      category: "Frontend",
      color: "#61DAFB",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs size={24} />,
      category: "Frontend",
      color: "#ffffff",
    },
    {
      name: "Redux",
      icon: <SiRedux size={24} />,
      category: "State Management",
      color: "#764ABC",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript size={24} />,
      category: "Language",
      color: "#3178C6",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs size={24} />,
      category: "Backend",
      color: "#339933",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={24} />,
      category: "Database",
      color: "#47A248",
    },
    {
      name: "Firebase",
      icon: <SiFirebase size={24} />,
      category: "Backend",
      color: "#FFCA28",
    },
    {
      name: "Python",
      icon: <SiPython size={24} />,
      category: "Language",
      color: "#3776AB",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={24} />,
      category: "Styling",
      color: "#38B2AC",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript size={24} />,
      category: "Language",
      color: "#F7DF1E",
    },
    {
      name: "Git",
      icon: <SiGit size={24} />,
      category: "Version Control",
      color: "#F05032",
    },
    {
      name: "Postman",
      icon: <SiPostman size={24} />,
      category: "API Testing",
      color: "#FF6C37",
    },
    {
      name: "LaTeX",
      icon: <SiLatex size={24} />,
      category: "Documentation",
      color: "#008080",
    },
    {
      name: "Jupyter",
      icon: <SiJupyter size={24} />,
      category: "Data Science",
      color: "#F37626",
    },
    {
      name: "VS Code",
      icon: <VscVscodeInsiders size={24} />,
      category: "IDE",
      color: "#007ACC",
    },
    {
      name: "Vercel",
      icon: <SiVercel size={24} />,
      category: "Deployment",
      color: "#000000",
    },
  ];

  const interests = [
    {
      name: "Astronomy",
      icon: "/icons/black-hole.icon.png",
      description: "Exploring celestial bodies and cosmic phenomena",
    },
    {
      name: "Mathematics",
      icon: '/icons/euler-identity.webp',
      description: "Problem-solving and abstract reasoning",
    },
    {
      name: "Anime",
      icon: "/icons/anime-icon.png",
      description: "Japanese animation and storytelling",
    },
    {
      name: "Web Development",
      icon: '/icons/web-dev.png',
      description: "Creating interactive digital experiences",
    },
  ];

  const education = {
    university: "Computer Science Student",
    description:
      "Pursuing my passion for technology and mathematics through formal education while applying theoretical knowledge to practical projects.",
  };

  const islamicQuotes = [
    {
      text: "The ink of the scholar is more sacred than the blood of the martyr.",
      author: "Prophet Muhammad (PBUH)",
    },
    {
      text: "Do not let your difficulties fill you with anxiety; after all, it is only in the darkest nights that stars shine more brightly.",
      author: "Hazrat Ali (RA)",
    },
    {
      text: "The best richness is the richness of the soul.",
      author: "Prophet Muhammad (PBUH)",
    },
    {
      text: "Knowledge enlivens the soul.",
      author: "Hazrat Ali (RA)",
    },
  ];

  return (
    <main className="pt-24 min-h-screen px-4 sm:px-6 md:px-10 ">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-12 text-zinc-100"
      >
        About Me
      </motion.h1>
      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative rounded-xl p-6 sm:p-8 max-w-3xl lg:max-w-5xl mx-auto mb-20 bg-zinc-800/50 shadow-sm border border-zinc-700"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-2 rounded-full bg-zinc-700 border border-zinc-600 mb-6 sm:mb-8"
        >
          <FaUniversity className=" text-blue-400" />
          <span className="text-sm sm:text-base text-zinc-300">
            {education.university}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl font-bold mb-4 text-zinc-100"
        >
          Haider Ahmad
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg max-w-2xl text-zinc-400 mx-auto mb-6"
        >
          Full-stack developer by day, amateur astronomer by night, and
          perpetual learner 24/7. I speak JavaScript, Python, and sarcasm
          fluently (though my TypeScript is still conversational).
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base sm:text-lg max-w-2xl text-zinc-400 mx-auto mb-10"
        >
          When I'm not wrestling with React hooks or debugging mysterious API
          errors, you'll find me solving math problems for fun (yes, really),
          watching anime, or explaining to friends why spaces are superior to
          tabs in code editors.
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
              className="text-center p-4 rounded-lg  bg-zinc-700/30 borderborder-zinc-600/30"
            >
              <div className="flex justify-center mb-2">{item.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold  text-blue-400 mb-1">
                {item.number}
              </div>
              <div className="text-xs sm:text-sm  text-zinc-400">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-3xl lg:max-w-5xl mx-auto mb-20 px-4"
      >
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-zinc-50 bg-zinc-800/50 shadow-sm border  border-zinc-700">
          <motion.h2
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center  text-zinc-100"
          >
            Technical Skills
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 sm:gap-7"
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
                className="group p-4 sm:p-6 rounded-2xl bg-white bg-zinc-700/50 flex flex-col items-center gap-3 sm:gap-4 shadow-sm border  border-zinc-600"
              >
                <div
                  className=" text-zinc-300 sm:group-hover:text-white relative"
                  style={{ color }}
                >
                  {icon}
                  <div
                    className="block absolute -inset-2 rounded-full blur-lg sm:opacity-0 sm:group-hover:opacity-20 opacity-20 transition-opacity duration-300"
                    style={{ backgroundColor: color }}
                  ></div>
                </div>
                <div className="text-center">
                  <div className="text-sm sm:text-base font-medium  text-zinc-100 sm:group-hover:text-white">
                    {name}
                  </div>
                  <div className="text-xs  text-zinc-400 sm:group-hover:text-zinc-300">
                    {category}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl lg:max-w-5xl mx-auto mb-20 px-4"
      >
        <div className="relative rounded-3xl p-8 overflow-hidden  bg-blue-900/10 border  border-blue-800/30">
          <h2 className="text-2xl font-bold mb-6 text-center  text-blue-400">
            Fun Facts About Me
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 p-4  bg-zinc-800/50 rounded-lg"
              >
                <span className="text-2xl">{fact.emoji}</span>
                <p className=" text-zinc-300">{fact.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Wisdom Section with Islamic Quotes */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl lg:max-w-5xl mx-auto mb-20 px-4"
      >
        <div className="relative rounded-3xl p-8 sm:p-10 overflow-hidden bg-zinc-50 bg-zinc-800/50 shadow-sm border  border-zinc-700">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center  text-zinc-100">
            Words of Wisdom
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {islamicQuotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white bg-zinc-700/50 border  border-zinc-600"
              >
                <FaQuoteLeft className=" text-zinc-500 text-3xl mb-4" />
                <p className=" text-zinc-300 italic mb-4 text-lg">
                  "{quote.text}"
                </p>
                <p className="text-right  text-blue-400 font-medium">
                  — {quote.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education & Interests Section */}
      <motion.section
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-3xl lg:max-w-5xl mx-auto mb-20 px-4"
      >
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-zinc-50 bg-zinc-800/50 shadow-sm border  border-zinc-700">
          <motion.h2
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-zinc-100"
          >
            Passions & Interests
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
          >
            {interests.map(({ name, icon, description }) => (
              <motion.div
                key={name}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="group relative p-6 rounded-2xl bg-white bg-zinc-700/50 flex items-start gap-4 shadow-sm border  border-zinc-600"
              >
                <div className=" text-zinc-300 relative size-10 ">
                  <img src={icon} alt={icon} className="h-full w-full object-cover object-center" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-1">
                    {name}
                  </h3>
                  <p className="text-sm  text-zinc-400">{description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative p-6 rounded-2xl bg-blue-50 bg-blue-900/20 border border-blue-200 border-blue-800/50 mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaChalkboardTeacher className=" text-blue-400 text-xl" />
              <h3 className="text-xl font-semibold  text-zinc-100">
                Academic Journey
              </h3>
            </div>
            <p className=" text-zinc-400">{education.description}</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}

      {/* Personal Philosophy Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl lg:max-w-4xl mx-auto mb-20 px-4"
      >
        <div className="relative rounded-3xl p-8 sm:p-10 overflow-hidden bg-zinc-50 bg-zinc-800/50 shadow-sm border  border-zinc-700">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center  text-zinc-100">
            My Development Philosophy
          </h2>

          <div className="space-y-6  text-zinc-300">
            <p className="leading-relaxed">
              I believe in writing code so clean it could pass a white-glove
              test. My components are more organized than my sock drawer (which
              isn't saying much).
            </p>

            <div className="p-4 bg-blue-50 bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
              <p className="font-medium  text-blue-400 mb-1">
                Hazrat Ali (RA) said:
              </p>
              <p className="italic">
                "Do not let your difficulties fill you with anxiety; after all,
                it is only in the darkest nights that stars shine more
                brightly."
              </p>
              <p className="mt-2 text-sm  text-blue-300">
                (This gets me through tough debugging sessions)
              </p>
            </div>

            <p className="leading-relaxed">
              I approach problems like I approach my tea - methodically, with
              patience, and with the understanding that the first attempt is
              usually too hot to handle.
            </p>

            <p className="leading-relaxed">
              My coding style? Imagine if Marie Kondo wrote JavaScript. If it
              doesn't spark joy (or at least not cause errors), it doesn't
              belong in the codebase.
            </p>

            <p className="leading-relaxed">
              In the words of the Prophet Muhammad (PBUH):{" "}
              <span className="italic text-blue-400">
                "The best richness is the richness of the soul."
              </span>
              I strive to build applications that enrich lives, not just fulfill
              requirements.
            </p>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default AboutPage;
