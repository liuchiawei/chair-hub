import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Github, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="mx-auto py-6 flex flex-col gap-4">
        <div className="w-full flex justify-center items-center gap-4">
          {links.map((link) => (
            <TooltipProvider key={link.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="default" size="icon" className="rounded-full">
                  <a
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.name}
                  >
                    <link.icon />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.name}</p>
              </TooltipContent>
            </Tooltip>
            </TooltipProvider>
          ))}
        </div>
        <div className="text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Chair Hub
            <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

const links = [
  {
    name: "GitHub",
    icon: Github,
    path: "https://github.com/liuchiawei",
  },
  {
    name: "Instagram",
    icon: Instagram,
    path: "https://www.instagram.com/liuliuliuchiawei",
  },
  {
    name: "Mail",
    icon: Mail,
    path: "mailto:doublecheap@gmail.com",
  },
];