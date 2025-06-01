import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative py-6 mt-auto backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-xs sm:text-sm md:text-base text-zinc-400">
            © {new Date().getFullYear()} | Built with passion
          </div>

          <div className="flex flex-col items-end space-y-2">
            <div className="flex space-x-6">
              <Link
                href="https://github.com/haider-9"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
              >
                <FaGithub className="size-8 text-zinc-400 hover:invert" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/haider-ahmad-439317164/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
              >
                <FaLinkedin className="size-8 text-zinc-400 hover:text-blue-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
