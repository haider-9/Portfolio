import { useState } from 'react';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`flex items-center justify-between flex-wrap p-6 font-[JetBrains Mono]`}>
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        {/* <span className="font-semibold text-4xl tracking-tight">Haider</span> */}
        <img src="src/assets/favicon.png" alt="" className="invert w-20" />
      </div>
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white transition duration-300">
          <svg
            className={`fill-current h-3 w-3 ${
              isOpen ? "hidden" : "inline-block"
            }`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path
              fillRule="evenodd"
              d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 6h14a1 1 0 010 2H3a1 1 0 010-2zm0 6h14a1 1 0 010 2H3a1 1 0 010-2z"
              clipRule="evenodd"
            />
          </svg>
          <i
            className={`fa fa-close ${isOpen ? "inline-block" : "hidden"}`}></i>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full flex-grow lg:flex lg:items-center lg:w-auto  mt-4 lg:mt-0 transition duration-300`}>
        <div className="text-sm lg:flex-grow">
          <ul className="flex flex-col gap-2 lg:gap-5 lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <a
                href="#"
                className="px-3 py-2 flex items-center text-lg uppercase  leading-snug text-white">
                <i className="fa fa-house mr-2"></i>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#skills"
                className="px-3 py-2 flex items-center text-lg uppercase  leading-snug text-white">
                <i className="fa fa-tools mr-2"></i>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                className="px-3 py-2 flex items-center text-lg uppercase  leading-snug text-white">
                <i className="fas fa-project-diagram mr-2"></i>
                My Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                className="px-3 py-2 flex items-center text-lg uppercase  leading-snug text-white">
                <i className="fa fa-info-circle mr-2"></i>
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="my-5 lg:my-0 flex justify-center">
          <a
            href="src/assets/HaiderCV.pdf"
            download
            className="w-1/2 lg:w-full inline-block bg-zinc-700 hover:bg-zinc-500 text-white text-lg  py-4 px-8 text-center rounded-full focus:outline-none focus:shadow-outline transition duration-300 border border-zinc-400">
            <span className="drop-shadow-[0_0_5px_#aaa]">
              <i className="fa fa-download mr-4 "></i>
              Resumé
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
