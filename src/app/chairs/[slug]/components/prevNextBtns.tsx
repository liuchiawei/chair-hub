import { Chair } from "@/data/type";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";

export default function PrevNextBtns({ prevChair, nextChair }: { prevChair?: Chair, nextChair?: Chair }) {
  return (
    <div className="mt-4 flex justify-between">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link
              href={`/chairs/${prevChair?.slug}`}
              className={`
                size-12 bg-white/50 hover:bg-white backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center transition-all duration-300
                ${prevChair
                ? "text-gray-900 hover:shadow-xl hover:scale-105"
                : "text-gray-500"}`}
            >
              <ChevronLeft className="size-4" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>{prevChair ? prevChair.name_jp : "No Previous Chair"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link
              href={`/chairs/${nextChair?.slug}`}
              className={`
                size-12 bg-white border border-gray-200 rounded-full flex items-center justify-center transition-all duration-300
                ${nextChair
                ? "text-gray-900 hover:shadow-xl hover:scale-105"
                : "text-gray-500"}`}
            >
              <ChevronRight className="size-4" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>{nextChair ? nextChair.name_jp : "No Next Chair"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}