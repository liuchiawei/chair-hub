import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";
import content from "@/data/content.json";
import { Menu } from "lucide-react";

export default function Nav() {
  return (
    <Sheet>
      <SheetTrigger className="fixed top-4 right-4 z-50 cursor-pointer">
        <Menu className="size-6" />
      </SheetTrigger>
      <SheetContent className="bg-background p-6 shadow-lg">
        <SheetHeader>
          <SheetTitle>
            <Link href="/" className="text-5xl font-bold">
              CHAIR HUB
            </Link>
          </SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col gap-4">
          {content.nav.map((item) => (
            <li key={item.name}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}