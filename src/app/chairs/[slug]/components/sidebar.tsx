"use client";

import { Chair } from "@/data/type"
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Sidebar({ chair }: { chair: Chair }) {
  const router = useRouter();

  return (
    <div className="absolute top-0 left-0 w-32 h-full hidden lg:block select-none">
      <div className="w-full h-full p-4 flex flex-col justify-between items-center gap-4 bg-neutral-100 border-r-1">
        <h1 className="text-neutral-200 text-[48px] font-bold [writing-mode:vertical-rl]">
          {chair.name_jp}
        </h1>
        <div className="text-neutral-300 flex flex-col items-center gap-24">
          <div className="[writing-mode:vertical-rl] border-t pt-4">
            <h2 className="text-sm uppercase">{chair.designer}</h2>
            <h2 className="text-2xl">{chair.year}</h2>
          </div>
          <button
            title="Back"
            onClick={() => router.back()}
            className="size-16 border border rounded-full flex items-center justify-center text-neutral-400 hover:text-neutral-600 hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <ArrowLeft className="size-6" />
          </button>
        </div> 
      </div>
    </div>
  )
}