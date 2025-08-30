'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { X } from "lucide-react"
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
        className="w-4/5 max-w-lg aspect-square flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-xl"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold text-gray-900 text-center select-none uppercase">{content.home.title}</h1>
          <h2 className="text-gray-600 text-center">{content.home.description}</h2>
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
