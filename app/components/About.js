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
    <main className="pt-24 min-h-screen ">
      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-zinc-100 to-zinc-400 text-transparent bg-clip-text">About Me</h1>
      
      <section className="relative px-10 border border-zinc-700 rounded-xl p-8 max-w-7xl mx-auto mb-32 bg-zinc-800 shadow-lg">
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-8 py-2 rounded-full bg-zinc-700 border border-zinc-600 mb-8">
            <HiSparkles className="text-yellow-400" />
            <span>Full Stack Developer</span>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600 text-transparent bg-clip-text">
            Haider Ahmad
          </h1>
          <p className="text-xl max-w-2xl text-zinc-400 mb-12">
            Crafting digital experiences through code. Passionate about building innovative solutions that make a difference in people's lives.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-zinc-100 mb-2">{item.number}</div>
                <div className="text-sm text-zinc-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <div className="relative rounded-2xl p-12 overflow-hidden bg-zinc-800 border border-zinc-700 shadow-lg">
          <h2 className="text-3xl font-bold mb-12 text-center text-zinc-100">Technical Arsenal</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map(({ name, icon, category }) => (
              <div
                key={name}
                className="group p-6 rounded-xl bg-zinc-700 hover:bg-zinc-600 transition-all duration-300 flex flex-col items-center gap-4 shadow-md hover:shadow-lg"
              >
                <div className="transform transition-transform duration-300 group-hover:scale-110 text-zinc-100">{icon}</div>
                <div className="text-center">
                  <div className="font-medium text-zinc-100">{name}</div>
                  <div className="text-sm text-zinc-400">{category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
