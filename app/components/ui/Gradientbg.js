"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function GradientBg() {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    // Mark that we're on the client
    setIsClient(true);
    
    // Generate random stars with different sizes and positions
    const generateStars = () => {
      const newStars = [];
      const starCount = window.innerWidth < 768 ? 100 : 200;
      
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.7 + 0.3,
          duration: Math.random() * 8 + 4,
          delay: Math.random() * 10,
        });
      }
      setStars(newStars);
    };
    
    // Generate shooting stars
    const generateShootingStars = () => {
      const newShootingStars = [];
      for (let i = 0; i < 5; i++) {
        newShootingStars.push({
          id: i,
          topStart: Math.random() * 50,
          topEnd: Math.random() * 50 + 50,
          duration: Math.random() * 2 + 2,
          delay: Math.random() * 15 + i * 5,
          repeatDelay: Math.random() * 20 + 15
        });
      }
      setShootingStars(newShootingStars);
    };
    
    generateStars();
    generateShootingStars();
    
    // Regenerate stars on window resize
    window.addEventListener('resize', generateStars);
    return () => window.removeEventListener('resize', generateStars);
  }, []);

  // Don't render shooting stars during SSR
  const renderShootingStars = isClient && shootingStars.length > 0;

  return (
    <div className="fixed inset-0 w-full h-full bg-gradient-to-b from-zinc-950 via-zinc-900 to-indigo-950/30 -z-10 overflow-hidden">
      {/* Deep space nebula effects */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-10 left-10 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] animate-pulse" 
             style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] animate-pulse"
             style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse"
             style={{ animationDuration: '25s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-violet-500/10 rounded-full blur-[130px] animate-pulse"
             style={{ animationDuration: '18s' }}></div>
      </div>

      {/* Distant stars (static) - only render on client */}
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

      {/* Twinkling stars (animated) - only render on client */}
      {isClient && (
        <div className="absolute inset-0">
          {stars.filter((_, i) => i % 3 === 0).map((star) => (
            <motion.div
              key={`twinkle-${star.id}`}
              className="absolute rounded-full bg-white"
              initial={{ opacity: 0.1, scale: 0.8 }}
              animate={{ 
                opacity: [star.opacity * 0.5, star.opacity, star.opacity * 0.5],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{ 
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
                ease: "easeInOut"
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

      {/* Shooting stars - only render on client */}
      {renderShootingStars && shootingStars.map((star) => (
        <motion.div
          key={`shooting-${star.id}`}
          className="absolute w-[2px] h-[2px] bg-white rounded-full"
          initial={{ 
            top: `${star.topStart}%`, 
            left: "0%",
            opacity: 0,
            boxShadow: "0 0 0 0 rgba(255,255,255,0)"
          }}
          animate={{ 
            top: `${star.topEnd}%`, 
            left: "100%",
            opacity: [0, 1, 0],
            boxShadow: [
              "0 0 0 0 rgba(255,255,255,0)",
              "0 0 10px 2px rgba(255,255,255,0.7)",
              "0 0 0 0 rgba(255,255,255,0)"
            ]
          }}
          transition={{ 
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: star.repeatDelay
          }}
        />
      ))}

      {/* Distant galaxies/star clusters */}
      <div className="absolute top-1/4 left-1/5 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-500/5 to-transparent blur-[80px] animate-pulse"
           style={{ animationDuration: '30s' }}></div>
      <div className="absolute bottom-1/3 right-1/5 w-[250px] h-[250px] rounded-full bg-gradient-to-r from-blue-500/5 to-transparent blur-[70px] animate-pulse"
           style={{ animationDuration: '25s' }}></div>
    </div>
  );
}
