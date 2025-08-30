'use client';

import { motion } from "motion/react";
import content from "@/data/content.json";

export default function Header() {
  return (
    <div
      style={{ backgroundImage: "url('/images/bg-2.jpg')" }}
      className="h-60 p-8 flex flex-col justify-between bg-cover bg-center shadow-md *:drop-shadow-lg *:drop-shadow-neutral-900/50 select-none">
      <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-5xl font-semibold text-neutral-50 ">
        {content.chairs.title}
      </motion.h1>
      <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="text-neutral-100">
        {content.chairs.description}
      </motion.h2>
    </div>
  )
}