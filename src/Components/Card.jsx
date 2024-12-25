import { FaGithub, FaLink } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { projects } from "../Constants";
const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    const video = document.querySelector("video");
    if (video) {
      video.currentTime = 0;
      video.play();
    }
  };

  const handleSlideChange = (newIndex) => {
    if (isAnimating || newIndex === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 400);
  };

  const nextSlide = () => {
    handleSlideChange((currentIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    handleSlideChange((currentIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative max-w-[90%] lg:max-w-7xl mx-auto text-white">
      <div
        className={`grid md:grid-cols-2 gap-8 mx-auto p-8 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 
        transition-all duration-500 transform
        ${
          isAnimating
            ? "scale-95 blur-sm opacity-0"
            : "scale-100 blur-0 opacity-100"
        }`}
      >
        <div
          className="overflow-hidden rounded-xl h-[250px] sm:h-[300px] lg:h-[400px] relative w-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="absolute inset-0 w-full h-full">
            <img
              src={projects[currentIndex].image_url}
              alt={projects[currentIndex].name}
              className={`w-full h-full object-cover absolute transition-opacity duration-300 ${
                isHovering ? "opacity-0" : "opacity-100"
              }`}
              loading="eager"
            />
            <video
              src={projects[currentIndex].video_url}
              className={`w-full h-full object-cover absolute transition-opacity duration-300 ${
                isHovering ? "opacity-100" : "opacity-0"
              }`}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between p-4 sm:p-6 lg:p-8">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[teko] mb-4">
              {projects[currentIndex].name}
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg mb-6">
              {projects[currentIndex].description}
            </p>

            <div className="relative mt-8 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
                <span className="text-sm font-medium text-white/70 tracking-wider">
                  TECH USED
                </span>
              </div>

              <div className="flex flex-wrap gap-6">
                {projects[currentIndex].tech_stack.map(
                  ({ url, name }, index) => (
                    <div
                      key={name}
                      className="group relative"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div
                        className="relative flex items-center justify-center w-12 h-12 bg-white/5 
          rounded-lg backdrop-blur-sm transform transition-all duration-300 
          hover:scale-110"
                      >
                        <img
                          src={url}
                          alt={name}
                          className="w-6 h-6 transform transition-all duration-300 
              group-hover:[filter:drop-shadow(0_0_8px_rgba(255,255,255,0.3))]"
                        />
                      </div>

                      <div
                        className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 
          bg-black/80 backdrop-blur-sm rounded-md
          transform transition-all duration-300 
          opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                      >
                        <span className="text-xs font-medium text-white whitespace-nowrap">
                          {name}
                        </span>
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/80 rotate-45"></div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-6">
            <a
              href={projects[currentIndex].code_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 backdrop-blur-sm rounded-xl text-white/90 hover:text-white transition-all duration-300 transform  hover:shadow-lg hover:shadow-purple-500/20"
            >
              <FaGithub className="text-xl" />
              <span>Code</span>
            </a>
            <a
              href={projects[currentIndex].preview_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 backdrop-blur-sm rounded-xl text-white/90 hover:text-white transition-all duration-300 transform  hover:shadow-lg hover:shadow-purple-500/20"
            >
              <FaLink className="text-xl" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute -left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hidden md:block"
      >
        <IoIosArrowBack size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute -right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hidden md:block"
      >
        <IoIosArrowForward size={24} />
      </button>

      <div className="flex justify-center gap-4 mt-8 mb-4 md:hidden">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <IoIosArrowBack size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <IoIosArrowForward size={20} />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-white w-6" : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;

// Add these buttons just before the closing div of the main container
