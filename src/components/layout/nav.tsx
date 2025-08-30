import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Home, Armchair } from "lucide-react";

export default function Nav() {
  return (
    <nav className="fixed top-6 right-6 flex gap-6 z-50">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/">
              <Home className="size-6" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>ホーム</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/chairs">
              <Armchair className="size-6" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>椅子図鑑</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </nav>
  );
}