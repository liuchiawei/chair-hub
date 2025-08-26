"use client"

import { useState } from "react"
import ChairCard from "./chairCard"
import chairsData from "@/data/chairs.json"
import { Chair } from "@/data/type"

export default function ChairGrid() {
  const [chairs] = useState<Chair[]>(chairsData)

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 border-t border-l">
        {chairs.map((chair) => (
          <ChairCard
            key={chair.id}
            id={chair.id}
            slug={chair.slug}
            title={chair.name_en}
            image={chair.image}
            year={chair.year}
            designer={chair.designer}
          />
        ))}
      </div>
    </div>
  )
}