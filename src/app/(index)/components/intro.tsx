'use client'

import { useState } from "react"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion, AnimatePresence } from "motion/react"
import { X, ArrowUp, Armchair } from "lucide-react"
import content from "@/data/content.json"

export default function Intro() {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <AnimatePresence>
      {isVisible && (
      <motion.div
        initial={{ opacity: 0, y: 500, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: 1.8, duration: 0.8, type: "spring", stiffness: 80 } }}
        exit={{ opacity: 0, scale: 0, transition: { delay: 0, duration: 0.3 } }}
        style={{ backgroundImage: "url('/images/bg-1.jpg')" }}
        className="w-4/5 max-w-lg aspect-square flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-xl bg-cover bg-center"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <Armchair className="size-8 text-neutral-100" />
          <h1 className="text-5xl font-bold text-neutral-100 text-center drop-shadow-lg select-none uppercase">{content.home.title}</h1>
          <p className="w-4/5 text-neutral-100 text-justify drop-shadow-sm">{content.home.description}</p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/chairs" className="absolute bottom-8 text-neutral-100 p-4 lg:p-6 rounded-full border hover:text-neutral-50 hover:backdrop-blur-xs hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-100/40 transition-all duration-300 cursor-pointer">
                  <ArrowUp className="size-4 lg:size-6" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>椅子図鑑へ</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <motion.button 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 3, duration: 0.2 } }}
          exit={{ opacity: 0, scale: 0, transition: { delay: 0, duration: 0.2 } }}
          className="p-2 absolute top-6 right-6 rounded-full bg-foreground/60 hover:bg-foreground/80 hover:shadow-lg transition-all cursor-pointer" 
          title="CLose" onClick={() => setIsVisible(false)}
        >
          <X className="size-3 text-white" />
        </motion.button>
      </motion.div>
      )}
    </AnimatePresence>
  )
}
