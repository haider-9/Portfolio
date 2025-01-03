import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Mainsec from "./Components/Mainsec";
import Stack from "./Components/Stack";
import Footer from "./Components/Footer";
import AboutMe from "./Components/About";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Card from "./Components/Card";
import { BackgroundLines } from "./Components/Background";

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
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play pause resume reverse",
          },
        }
      );
    });

    gsap.fromTo(
      skills,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play resume resume reset",
        },
      }
    );
  }, []);

  const fetchRandomFact = () => {
    fetch("https://uselessfacts.jsph.pl/random.json?language=en&limit=1")
      .then((response) => response.json())
      .then((data) => {
        setFact(data);
        setShowFact(true);
      });
  };

  return (
    <div className="relative min-h-screen font-poppins text-white bg-black">
      <BackgroundLines className="fixed inset-0 size-full overflow-hidden pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <header>
          <Navbar />
        </header>
        <main className="p-4">
          <Mainsec />
          <section className="mt-16 py-16" id="skills">
  <div className="text-center mb-12">
    <h2 className="text-5xl font-[teko] text-center text-white"
                >
      Tech Stack
    </h2>
  </div>

  <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {[
        { url: "assets/HTML.svg", name: "HTML" },
        { url: "assets/CSS.svg", name: "CSS" },
        { url: "assets/JS.svg", name: "JavaScript" },
        { url: "assets/react.svg", name: "React" },
        { url: "assets/tailwindcss.svg", name: "Tailwind" },
        { url: "assets/GIT.svg", name: "Git" }
      ].map((tech) => (
        <div 
          key={tech.name}
          className="flex flex-col items-center p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
        >
          <img 
            src={tech.url} 
            alt={tech.name}
            className="w-12 h-12 mb-4 hover:scale-110 transition-transform duration-300"
          />
          <span className="text-gray-300">{tech.name}</span>
        </div>
      ))}
    </div>
  </div>
</section>







          <section className="flex flex-col items-center py-5">
            <div className="space-y-8 mb-12">
              <h2
                className="text-5xl font-[teko] text-center text-white"
                id="projects"
              >
                Projects
              </h2>
              <p className="text-xl text-center">
                Projects I've worked on recently
              </p>
            </div>
            <Card />
          </section>

          <section id="about">
            <AboutMe />
          </section>

          <section className="flex flex-col justify-center items-center gap-6 mt-12">
            <button
              onClick={fetchRandomFact}
              className="px-6 py-3 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 backdrop-blur-sm rounded-xl text-white/90 hover:text-white transition-all duration-300 transform hover:shadow-lg hover:shadow-purple-500/20"
            >
              Random Fact
            </button>

            <div className="max-w-[80ch]">
              {showFact && fact && (
                <div className="fact-container mt-4 p-6 bg-white/5 backdrop-blur-md rounded-xl transform transition-all duration-500">
                  <p className="text-lg text-gray-200 leading-relaxed mb-4">
                    {fact.text}
                  </p>
                  <div className="flex justify-end">
                    <a
                      href={fact.source_url}
                      className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source →
                    </a>
                  </div>
                </div>
              )}
            </div>
          </section>
        </main>

        <footer className="bottom-0">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default App;
