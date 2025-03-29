"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Pacifico } from "next/font/google";
import { FaGithub, FaLinkedinIn, FaDownload, FaHome, FaProjectDiagram } from "react-icons/fa";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.style.overflow = !isSidebarOpen ? "hidden" : "unset";
  };

  const navItems = [
    { name: "Home", icon: <FaHome size={16} /> },
    { name: "Projects", icon: <FaProjectDiagram size={16} /> }
  ];

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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <Link
          href="/"
          className={`${pacifico.className} text-3xl `}
        >
          Haider a.
        </Link>

        <button
          className={`lg:hidden z-50 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 
                    hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors
                    ${isSidebarOpen ? "fixed right-6" : ""}`}
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`block w-full h-0.5 bg-current transform transition-transform ${isSidebarOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-full h-0.5 bg-current transition-opacity ${isSidebarOpen ? "opacity-0" : ""}`} />
            <span className={`block w-full h-0.5 bg-current transform transition-transform ${isSidebarOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-6">
            {navItems.map(({ name, icon }) => (
              <li key={name}>
                <Link
                  href={name === "Home" ? "/" : `/${name.toLowerCase()}`}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
                    ${pathname === (name === "Home" ? "/" : `/${name.toLowerCase()}`)
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                >
                  {icon}
                  <span>{name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="/HaiderAhmadCV.pdf"
            download
            className="flex items-center gap-2 px-6 py-2 rounded-lg 
                     bg-gradient-to-r from-blue-600 to-purple-600 text-white
                     hover:opacity-90 transform hover:scale-105
                     transition-all duration-300"
          >
            <FaDownload size={16} />
            <span>Resume</span>
          </a>
        </nav>

        <div
          onClick={toggleSidebar}
          className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-all duration-300 lg:hidden
                    ${isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        />

        <aside
          className={`fixed top-0 right-0 h-screen w-80 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl
                    shadow-2xl transform transition-all duration-500 ease-out-expo lg:hidden
                    ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-8 h-full flex flex-col">
            <div className={`${pacifico.className} text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12`}>
              Haider
            </div>
            <nav className="flex-1">
              <ul className="space-y-4">
                {navItems.map(({ name, icon }, index) => (
                  <li
                    key={name}
                    style={{
                      transform: isSidebarOpen ? "translateX(0)" : "translateX(100px)",
                      opacity: isSidebarOpen ? 1 : 0,
                      transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
                    }}
                  >
                    <Link
                      href={name === "Home" ? "/" : `/${name.toLowerCase()}`}
                      className={`flex items-center gap-4 p-4 rounded-xl
                        ${pathname === (name === "Home" ? "/" : `/${name.toLowerCase()}`)
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                        } transition-all duration-300`}
                      onClick={toggleSidebar}
                    >
                      {icon}
                      <span className="text-lg">{name}</span>
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
                    className="flex items-center gap-4 p-4 rounded-xl
                            bg-gradient-to-r from-blue-600 to-purple-600 text-white
                            hover:opacity-90 transition-all duration-300"
                  >
                    <FaDownload size={16} />
                    <span className="text-lg">Resume</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div className="mt-auto space-y-6">
              <div className="flex gap-4 justify-center">
                {socialIcons.map(({ name, icon, link }) => (
                  <Link
                    key={name}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 
                              flex items-center justify-center
                              hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white
                              transition-all duration-300 transform hover:scale-110"
                    aria-label={name}
                  >
                    {icon}
                  </Link>
                ))}
              </div>
              <p className="text-center text-sm text-slate-500 dark:text-slate-400">
                © {new Date().getFullYear()} Haider Ahmad
              </p>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Header;
