"use client"

import Image from "next/image"
import { Ticker } from "motion-plus/react"
import { motion } from "motion/react"
import chairs from "@/data/chairs.json"

export default function TickerCarousel() {
  return (
    <Ticker
      items={items}
      hoverFactor={0} // ホバー時にスクロールを停止
      overflow
    />
  )
}

const items = chairs.map((chair) => {
  return (
    <motion.div className="size-60 item relative overflow-hidden">
      <Image src={`/chairs/${chair.image}`} alt={chair.name} fill className="object-cover" />
    </motion.div>
  )
})