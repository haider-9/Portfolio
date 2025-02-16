import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import About from "./components/About";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
