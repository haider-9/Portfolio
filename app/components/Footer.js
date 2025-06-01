import React from "react";

const Footer = () => {
  return (
    <footer className="relative py-6 mt-auto backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-xs sm:text-sm md:text-base text-zinc-400">
            © {new Date().getFullYear()} All rights reserved. Developed by Haider Ahmad
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;