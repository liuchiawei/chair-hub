import Nav from "@/components/layout/nav";
import Hero from "@/app/(index)/components/hero";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center w-full max-w-screen overflow-hidden">
      <Nav />
      <Hero />
    </div>
  );
}
