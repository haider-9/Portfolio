"use client";
import { motion } from "framer-motion"

export function GradientBg() {
  return (
    <>
     <div className="bg-gradient-to-b from-zinc-950 to-zinc-900">
     <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

     </div>
    </>
  )
}
