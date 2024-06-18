import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Mainsec = () => {

  useGSAP(() => {
    gsap.from("#main-section > div", {
      y: 100,
      opacity: 0,
      duration: 1.4,
      stagger: {
        amount: 0.3,
        from: "center",
      }
    })
  },[])

  return (
    <div
      id="main-section"
      className="flex flex-col gap-10 md:gap-0 md:flex-row justify-evenly w-[90%] max-w-screen-xl mx-auto items-center">
      {/* Left Column */}
      <div className="w-full md:w-1/3 space-y-3 text-center md:text-left">
        <h1 className="text-6xl md:text-8xl font-[teko] bg-gradient-to-br from-gray-600 to-white bg-clip-text text-transparent">
          Hey, I'm <div>Haider </div>
        </h1>

        <p className="text-xl">I'm a web developer.</p>
      </div>

      {/* Middle Column */}
      <div id="profile-pic" className="w-2/3 relative flex-grow flex justify-center -order-2 md:order-none md:w-72 mx-auto md:mx-0 ">
        <img
          src="assets/profile-pic__1_-removebg-preview.png"
          alt="Profile Pic"
          className="cursor-pointer drop-shadow-[0_0_10px_linear-gradient] hover:scale-105 transition-all duration-300 w-full md:w-2/3 aspect-square object-cover object-center z-10"
        />
        <div className="absolute w-2/3 md:w-1/3  inset-0 aspect-square rounded-full bg-gradient-to-br from-pink-500 to-blue-500 opacity-50 filter blur-xl pointer-events-none left-1/2 -translate-x-1/2"></div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left ">
        <div className="flex gap-10 md:flex-col md:gap-2">
          <div className="bg-black w-10 h-10 flex justify-center items-center rounded-full hover:bg-white bg-opacity-20 transition-all duration-100">
            <a
              href="https://www.linkedin.com/in/haider-ahmad-439317164/"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-linkedin text-blue-600 text-2xl"></i>
            </a>
          </div>
          <div className="bg-black w-10 h-10 flex justify-center items-center rounded-full hover:bg-white hover:text-black bg-opacity-20 transition-all duration-100">
            <a
              href="https://github.com/haider-9"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-github text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainsec;
