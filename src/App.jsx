import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Mainsec from "./Components/Mainsec";
import Stack from "./Components/Stack";
import Footer from "./Components/Footer";
import ProjectCard from "./Components/ProjectCard";
import { projects } from "./Constants";
import AboutMe from "./Components/About";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [fact, setFact] = useState();
  const [showFact, setShowFact] = useState(false);

  useGSAP(() => {
    const sections = gsap.utils.toArray("main > section");
    const skills = gsap.utils.toArray("#skills .flex.justify-center");

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play pause resume reverse",
          },
        }
      );
    });

    gsap.fromTo(
      skills,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: "#skills",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play pause resume reset",
        },
      }
    );
  }, []);

  const fetchRandomFact = () => {
    fetch("https://uselessfacts.jsph.pl/random.json?language=en&limit=1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFact(data);
        setShowFact(true);
      });
  };

  return (
    <div className="min-h-screen font-poppins container mx-auto">
      <header>
        <Navbar />
      </header>
      <main className="p-4">
        <Mainsec />

        <section className="mt-10 flex flex-col items-center py-5 " id="skills">
          <div className="space-y-8">
            <h2 className="text-5xl font-[teko] text-center">Skills</h2>
            <p className="text-xl text-center">
              Technologies I've been working with recently
            </p>
          </div>
          <div className="container m-auto px-4 py-8">
            <div className="grid m-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              <div className="flex justify-center">
                <Stack img_url="src/assets/HTML.svg" name="HTML" alt="HTML" />
              </div>
              <div className="flex justify-center">
                <Stack img_url="src/assets/CSS.svg" name="CSS" alt="CSS" />
              </div>
              <div className="flex justify-center">
                <Stack
                  img_url="src/assets/JS.svg"
                  name="JavaScript"
                  alt="JavaScript"
                />
              </div>
              <div className="flex justify-center">
                <Stack
                  img_url="src/assets/react.svg"
                  name="React"
                  alt="React"
                />
              </div>
              <div className="flex justify-center">
                <Stack
                  img_url="src/assets/Tailwind.svg"
                  name="Tailwind"
                  alt="Tailwind"
                />
              </div>
              <div className="flex justify-center">
                <Stack img_url="src/assets/GIT.svg" name="GIT" alt="GIT" />
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center py-5 ">
          <div className="space-y-8">
            <h2 className="text-5xl font-[teko] text-center " id="projects">
              Projects
            </h2>
            <p className="text-xl text-center">
              Projects I've worked on recently
            </p>
          </div>

          <div className="container p-4 py-8 w-[90%] m-auto flex flex-wrap justify-center items-center gap-5">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                image_url={project.image_url}
                preview_url={project.preview_url}
                code_url={project.code_url}
              />
            ))}
          </div>
        </section>
        <section id="about">
          <AboutMe />
        </section>
        <section className="flex flex-col justify-center items-center gap-3 mt-5">
          <button
            onClick={fetchRandomFact}
            className="p-3 bg-slate-700 hover:bg-slate-500 transition-all rounded-lg duration-150">
            Random Fact
          </button>
          <div className="max-w-[80ch]">
            {showFact && fact ? (
              <div className="fact-container mt-4">
                <p className="text-lg">{fact.text}</p>
                <div className="flex justify-center items-center">
                  <a
                    href={fact.source_url}
                    className="text-pink-500"
                    target="_blank"
                    rel="noopener noreferrer">
                    Source
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </section>
      </main>
      <footer className="bottom-0">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
