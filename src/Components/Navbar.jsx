import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 font-[JetBrains Mono] backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 mt-4">
      <div className="flex items-center flex-shrink-0 mr-6">
        <img
          src="assets/favicon.png"
          alt="Logo"
          className="invert w-16 hover:rotate-180 transition-all duration-500"
        />
      </div>

      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white transition-all duration-300"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full flex-grow lg:flex lg:items-center lg:w-auto transition-all duration-300`}
      >
        <div className="lg:flex-grow">
          <ul className="flex flex-col lg:flex-row lg:gap-8 list-none lg:ml-auto">
            <li>
              <a
                href="#"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-purple-400 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-purple-400 transition-colors duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-purple-400 transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-purple-400 transition-colors duration-300"
              >
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-4 lg:mt-0">
          <a
            href="assets/HaiderCV.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 backdrop-blur-sm rounded-xl text-white/90 hover:text-white transition-all duration-300 transform  hover:shadow-lg hover:shadow-purple-500/20 group"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
