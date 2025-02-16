"use client"
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ startContent, endContent, children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div className="relative z-10 flex items-center">
        {startContent}
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
                opacity: 1,
              },
              hovered: {
                y: "-100%",
                opacity: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="w-fit"
            key={i}
          >
            {l}
          </motion.span>
        ))}
        {endContent}
      </div>

      <div className="absolute inset-0 z-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
                opacity: 0,
              },
              hovered: {
                y: 0,
                opacity: 1,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="w-fit"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default FlipLink;
