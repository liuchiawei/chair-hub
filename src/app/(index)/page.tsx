import Nav from "@/components/layout/nav";
import Hero from "@/app/(index)/components/hero";
import Main from "@/app/(index)/components/main";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center w-full max-w-screen overflow-hidden">
      <Nav />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}
