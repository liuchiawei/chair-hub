import Nav from "@/components/layout/nav";
import Hero from "@/components/layout/hero";
import Main from "@/components/layout/main";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full max-w-screen bg-gray-200 dark:bg-gray-900 bg-dot-24-s-1-gray-950 dark:bg-dot-24-s-1-gray-100">
      <Nav />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}
