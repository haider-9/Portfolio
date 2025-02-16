"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Pacifico } from "next/font/google";
import { FaGithub, FaLinkedinIn, FaDownload } from "react-icons/fa";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.style.overflow = !isSidebarOpen ? "hidden" : "unset";
  };

  const navItems = ["Home", "Projects"];

  const socialIcons = [
    {
      name: "GitHub",
      icon: <FaGithub size={20} />,
      link: "https://github.com/haider-9",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn size={20} />,
      link: "https://www.linkedin.com/in/haider-ahmad-439317164/",
    },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${isScrolled ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'}`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto p-6">
        <Link
          href="/"
          className={`${pacifico.className} text-2xl text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 transition-colors`}
        >
          Haider a.
        </Link>

        <button
          className={`lg:hidden z-50 flex flex-col justify-center items-center w-10 h-10 
                    rounded-full bg-neutral-100/50 dark:bg-neutral-800/50 backdrop-blur-sm
                    hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50 transition-all duration-300
                    ${isSidebarOpen ? "fixed right-6" : ""}`}
          onClick={toggleSidebar}
        >
          <span
            className={`block w-5 h-0.5 bg-neutral-800 dark:bg-neutral-200 transition-all duration-300 
                        ${isSidebarOpen ? "rotate-45 translate-y-1" : "-translate-y-1"}`}
          />
          <span
            className={`block w-5 h-0.5 bg-neutral-800 dark:bg-neutral-200 transition-all duration-300 
                        ${isSidebarOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`block w-5 h-0.5 bg-neutral-800 dark:bg-neutral-200 transition-all duration-300 
                        ${isSidebarOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"}`}
          />
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="relative font-medium text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 
                            transition-all duration-300 px-4 py-2 rounded-full hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="/HaiderAhmadCV.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 rounded-full 
                     bg-neutral-800 dark:bg-neutral-200 
                     text-neutral-100 dark:text-neutral-900
                     hover:bg-neutral-700 dark:hover:bg-neutral-300 
                     transition-all duration-300"
          >
            <FaDownload size={16} />
            <span>Download CV</span>
          </a>
        </nav>

        <div
          onClick={toggleSidebar}
          className={`fixed inset-0 bg-neutral-900/20 dark:bg-neutral-950/20 
                    backdrop-blur-sm transition-all duration-500 lg:hidden
                    ${isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        />

        <div
          className={`fixed top-0 right-0 h-screen w-[300px] 
                    bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl 
                    border-l border-neutral-200/20 dark:border-neutral-800/20
                    shadow-[0_0_40px_rgba(0,0,0,0.1)] transform transition-all duration-500 ease-out-expo lg:hidden
                    ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-8 h-full flex flex-col justify-between">
            <div>
              <div className={`${pacifico.className} text-3xl text-neutral-800 dark:text-neutral-200 mb-12`}>
                Menu
              </div>
              <nav>
                <ul className="space-y-2">
                  {navItems.map((item, index) => (
                    <li
                      key={item}
                      style={{
                        transform: isSidebarOpen ? "translateX(0)" : "translateX(100px)",
                        opacity: isSidebarOpen ? 1 : 0,
                        transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
                      }}
                    >
                      <Link
                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                        className="flex items-center space-x-2 text-xl font-medium p-4 rounded-xl
                                  text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 
                                  hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 transition-all duration-300"
                        onClick={toggleSidebar}
                      >
                        <span className="w-2 h-2 rounded-full bg-neutral-800 dark:bg-neutral-200" />
                        <span>{item}</span>
                      </Link>
                    </li>
                  ))}
                  <li
                    style={{
                      transform: isSidebarOpen ? "translateX(0)" : "translateX(100px)",
                      opacity: isSidebarOpen ? 1 : 0,
                      transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s`,
                    }}
                  >
                    <a
                      href="/HaiderAhmadCV.pdf"
                      download
                      className="flex items-center gap-2 text-xl font-medium p-4 rounded-xl
                              text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 
                              hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 transition-all duration-300"
                    >
                      <FaDownload size={16} />
                      <span>Download CV</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 justify-center">
                {socialIcons.map(({ name, icon, link }) => (
                  <Link
                    key={name}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-neutral-100/50 dark:bg-neutral-800/50 
                              flex items-center justify-center text-neutral-700 dark:text-neutral-300 
                              hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50 hover:scale-110 
                              transition-all duration-300"
                    aria-label={name}
                  >
                    {icon}
                  </Link>
                ))}
              </div>
              <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
                {new Date().getFullYear()} Haider {" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
