import ThemeToggle from "@/components/common/ThemeToggle";
export default function Nav() {
  return (
    <nav className="flex items-center justify-center relative w-full h-16">
      Nav Area
      <ThemeToggle className="absolute top-4 right-4" />
    </nav>
  );
}