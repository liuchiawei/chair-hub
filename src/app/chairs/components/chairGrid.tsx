"use client"

import { useState } from "react"
import ChairCard from "./chairCard"
import chairsData from "@/data/chairs.json"
import { Chair } from "@/lib/type"

export default function ChairGrid() {
  const [chairs] = useState<Chair[]>(chairsData as Chair[])

  return (
    <div className="w-full max-w-6xl mx-auto mt-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 border-t-2 border-l-2">
        {chairs.map((chair) => (
          <ChairCard
            key={chair.id}
            id={chair.id}
            slug={chair.slug}
            title={chair.name_jp}
            image={chair.image}
            year={chair.year}
            designer={chair.designer}
          />
        ))}
      </div>
    </div>
  )
}