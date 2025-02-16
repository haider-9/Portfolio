"use client";

import { useState, useEffect } from "react";

export default function CursorEffect() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed w-40 h-40 rounded-full bg-white opacity-20 
        blur-3xl pointer-events-none mix-blend-soft-light transition duration-300"
      style={{
        left: cursorPos.x - 80, // Adjust position to center effect
        top: cursorPos.y - 80,
      }}
    />
  );
}
