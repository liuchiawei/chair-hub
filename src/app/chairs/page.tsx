import ChairGrid from "@/components/common/chairGrid";

export default function ChairsPage() {
  return (
    <main className="w-full min-h-screen py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Chair Collection
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore our curated collection of 20 iconic designer chairs from around the world.
        </p>
      </div>
      <ChairGrid />
    </main>
  );
}