"use client";
import { motion } from "framer-motion";

const DURATION = 0.5;
const STAGGER = 0.06;

const FlipLink = ({ startContent = null, endContent = null, children = "", href = "#" }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden text-3xl font-extrabold uppercase tracking-wide sm:text-6xl md:text-7xl lg:text-8xl transition-all duration-300 ease-in-out hover:text-primary"
    >
      <div className="relative z-10 flex items-center gap-2">
        {startContent}
        {children.split("").map((char, index) => (
          <span key={index} className="relative inline-block overflow-hidden">
            <motion.span
              className="block"
              variants={{
                initial: { y: "0%" },
                hovered: { y: "-100%", opacity: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * index,
              }}
            >
              {char}
            </motion.span>
            <motion.span
              className="absolute top-full left-0 block"
              variants={{
                initial: { y: "100%", opacity: 0 },
                hovered: { y: "-100%", opacity: 1 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * index,
              }}
            >
              {char}
            </motion.span>
          </span>
        ))}
        {endContent}
      </div>
    </motion.a>
  );
};

export default FlipLink;
