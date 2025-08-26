// import TickerCarousel from "@/components/common/tickerCarousel";
import ChairGrid from "@/components/common/chairGrid";

export default function Main() {
  return (
    <main className="w-full">
      {/* <TickerCarousel /> */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Famous Designer Chairs
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover iconic chairs that have shaped design history. From modernist masterpieces to contemporary classics.
          </p>
        </div>
        <ChairGrid />
      </section>
    </main>
  );
}