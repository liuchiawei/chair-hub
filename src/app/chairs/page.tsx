import ChairGrid from "./components/chairGrid";
import Header from "./components/header";

export default function ChairsPage() {
  return (
    <main className="w-full min-h-screen">
      <Header />
      <ChairGrid />
    </main>
  );
}