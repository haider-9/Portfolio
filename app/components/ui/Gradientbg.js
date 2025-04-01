"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { 
  FaSun, 
  FaGlobeAmericas, 
  FaGlobeAsia, 
  FaGlobeEurope, 
  FaSatellite, 
  FaMeteor, 
  FaRocket, 
  FaSpaceShuttle 
} from "react-icons/fa";
import { IoIosPlanet } from "react-icons/io";
import { GiRingedPlanet, GiMoon, GiAsteroid, GiUfo } from "react-icons/gi";

export function GradientBg() {
  const [isClient, setIsClient] = useState(false);

  // Memoize all generated elements to prevent re-renders
  const { stars, shootingStars, spaceObjects } = useMemo(() => {
    const generateStars = () => {
      const newStars = [];
      const starCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 80 : 150;

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.7 + 0.3,
          duration: Math.random() * 8 + 4,
          delay: Math.random() * 10,
        });
      }
      return newStars;
    };

    const generateShootingStars = () => {
      const newShootingStars = [];
      for (let i = 0; i < 3; i++) {
        newShootingStars.push({
          id: i,
          topStart: Math.random() * 50,
          topEnd: Math.random() * 50 + 50,
          duration: Math.random() * 2 + 2,
          delay: Math.random() * 15 + i * 5,
          repeatDelay: Math.random() * 20 + 15,
        });
      }
      return newShootingStars;
    };

    const generateSpaceObjects = () => {
      const planetIcons = [IoIosPlanet, GiRingedPlanet, FaGlobeAmericas];
      const smallObjectIcons = [GiAsteroid, FaMeteor, GiMoon];
      const specialObjectIcons = [FaSun, FaRocket, GiUfo];

      const planets = Array.from({ length: 3 }, (_, i) => ({
        id: i,
        type: "planet",
        icon: planetIcons[i % planetIcons.length],
        size: 30 + Math.random() * 30,
        color: ["text-blue-400", "text-red-400", "text-emerald-400"][i % 3],
        x: Math.random() * 90,
        y: Math.random() * 90,
        duration: 120 + Math.random() * 80,
        rotationDuration: 80 + Math.random() * 60,
        delay: Math.random() * 10,
      }));
      
      const smallObjects = Array.from({ length: 5 }, (_, i) => ({
        id: 3 + i,
        type: "small",
        icon: smallObjectIcons[i % smallObjectIcons.length],
        size: 8 + Math.random() * 12,
        color: ["text-gray-400", "text-stone-400", "text-zinc-400"][i % 3],
        x: Math.random() * 90,
        y: Math.random() * 90,
        duration: 30 + Math.random() * 40,
        rotationDuration: 15 + Math.random() * 25,
        delay: Math.random() * 15,
      }));
      
      const specialObjects = Array.from({ length: 2 }, (_, i) => ({
        id: 8 + i,
        type: "special",
        icon: specialObjectIcons[i % specialObjectIcons.length],
        size: i === 0 ? 50 : 15 + Math.random() * 10,
        color: i === 0 ? "text-yellow-400" : "text-white",
        x: i === 0 ? 5 : Math.random() * 90,
        y: i === 0 ? 5 : Math.random() * 90,
        duration: i === 0 ? 0 : 20 + Math.random() * 30,
        rotationDuration: i === 0 ? 200 : 10 + Math.random() * 20,
        delay: Math.random() * 15,
      }));
      
      return [...planets, ...smallObjects, ...specialObjects];
    };

    return {
      stars: generateStars(),
      shootingStars: generateShootingStars(),
      spaceObjects: generateSpaceObjects()
    };
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderSpaceObject = (object) => {
    const IconComponent = object.icon;
    
    // Simplified animations
    const xAnimation = object.type === "special" && object.id === 8
      ? [`${object.x}vw`, `${object.x + 1}vw`, `${object.x}vw`]
      : [`${object.x}vw`, `${(object.x + 10) % 90}vw`, `${object.x}vw`];
    
    const yAnimation = object.type === "special" && object.id === 8
      ? [`${object.y}vh`, `${object.y + 1}vh`, `${object.y}vh`]
      : [`${object.y}vh`, `${(object.y + 5) % 90}vh`, `${object.y}vh`];

    return (
      <motion.div
        key={`space-object-${object.id}`}
        className={`absolute ${object.color} will-change-transform`}
        style={{ fontSize: `${object.size}px` }}
        initial={{ 
          x: `${object.x}vw`, 
          y: `${object.y}vh`,
          rotate: 0,
          opacity: 0.7,
        }}
        animate={{ 
          x: xAnimation,
          y: yAnimation,
          rotate: object.type === "special" && object.id !== 8 ? 360 : 0,
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          x: { 
            duration: object.duration,
            repeat: Infinity,
            ease: "linear",
            delay: object.delay,
          },
          y: { 
            duration: object.duration * 1.2,
            repeat: Infinity,
            ease: "linear",
            delay: object.delay,
          },
          rotate: {
            duration: object.rotationDuration,
            repeat: Infinity,
            ease: "linear",
          },
          opacity: {
            duration: object.duration / 3,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
      >
        <IconComponent />
      </motion.div>
    );
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-gradient-to-b from-zinc-950 via-zinc-900 to-indigo-950/30 -z-50 overflow-hidden pointer-events-none">
      {/* Nebula effects with reduced blur */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div
          className="absolute top-10 left-10 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px]"
        ></div>
        <div
          className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px]"
        ></div>
      </div>

      {/* Static Stars (better performance than animated ones) */}
      {isClient && (
        <div className="absolute inset-0">
          {stars.map((star) => (
            <div
              key={`static-${star.id}`}
              className="absolute rounded-full bg-white"
              style={{
                top: `${star.y}%`,
                left: `${star.x}%`,
                width: `${star.size * 0.5}px`,
                height: `${star.size * 0.5}px`,
                opacity: star.opacity * 0.8,
              }}
            />
          ))}
        </div>
      )}

      {/* Reduced number of twinkling stars */}
      {isClient && (
        <div className="absolute inset-0">
          {stars
            .filter((_, i) => i % 5 === 0) // Only 20% of stars twinkle
            .map((star) => (
              <motion.div
                key={`twinkle-${star.id}`}
                className="absolute rounded-full bg-white will-change-transform"
                initial={{ opacity: 0.1, scale: 0.8 }}
                animate={{
                  opacity: [star.opacity * 0.5, star.opacity, star.opacity * 0.5],
                  scale: [0.8, 1.1, 0.8],
                }}
                transition={{
                  duration: star.duration,
                  repeat: Infinity,
                  delay: star.delay,
                  ease: "easeInOut",
                }}
                style={{
                  top: `${star.y}%`,
                  left: `${star.x}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                }}
              />
            ))}
        </div>
      )}

      {/* Shooting Stars - reduced quantity */}
      {isClient && shootingStars.map((star) => (
        <motion.div
          key={`shooting-${star.id}`}
          className="absolute w-[2px] h-[2px] bg-white rounded-full will-change-transform"
          initial={{
            top: `${star.topStart}%`,
            left: "0%",
            opacity: 0,
          }}
          animate={{
            top: `${star.topEnd}%`,
            left: "100%",
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: star.repeatDelay,
            ease: "linear",
          }}
        />
      ))}

      {isClient && (
        <div className="absolute inset-0">
          {spaceObjects.map(renderSpaceObject)}
        </div>
      )}

      {/* Static galaxy effects (no animation) */}
      <div
        className="absolute top-1/4 left-1/5 w-[200px] h-[200px] rounded-full bg-gradient-to-r from-purple-500/5 to-transparent blur-[50px]"
      ></div>
    </div>
  );
}