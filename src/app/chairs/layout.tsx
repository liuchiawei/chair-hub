import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";

export default function ChairsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col items-center w-full max-w-screen overflow-hidden">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}