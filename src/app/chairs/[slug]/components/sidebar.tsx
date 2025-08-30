"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Armchair } from "lucide-react";
import { Chair } from "@/data/type"

export default function Sidebar({ chair }: { chair: Chair }) {
  return (
    <div className="absolute top-0 left-0 w-32 h-full bg-card border-r-1 hidden lg:block select-none shadow-md">
      <div className="w-full h-full flex flex-col justify-between items-center">
        <div className="w-full flex flex-col items-center">
          <Link href="/" className="w-full h-24 flex justify-center items-center text-neutral-400 border-b border-neutral-400 hover:text-white hover:bg-neutral-200 hover:**:drop-shadow-md bg-cover bg-center transition-all">
            <Armchair className="size-10" />
          </Link>
          <motion.h1 initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, type: "spring", stiffness: 120 }} className="pt-8 text-white text-[48px] font-bold [writing-mode:vertical-rl] select-none">
            {chair.name_jp}
          </motion.h1>
        </div>
        <div className="text-neutral-400 flex flex-col items-center gap-24 pb-4">
          <div className="[writing-mode:vertical-rl] border-t border-neutral-400 pt-4">
            <h2 className="text-sm uppercase">{chair.designer}</h2>
            <h2 className="text-2xl">{chair.year}</h2>
          </div>
          <Link
            href="/chairs"
            className="size-16 border border-neutral-400 rounded-full flex items-center justify-center text-neutral-400 hover:text-neutral-600 hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <ArrowLeft className="size-6" />
          </Link>
        </div> 
      </div>
    </div>
  )
}