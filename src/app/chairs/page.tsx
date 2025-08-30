import ChairGrid from "@/components/common/chairGrid";
import content from "@/data/content.json";

export default function ChairsPage() {
  return (
    <main className="w-full min-h-screen py-16">
      <div className="text-center w-full max-w-6xl mx-auto px-4">
        <div className="py-8 border-t-2 border-l-2 border-r-2">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {content.chairs.title}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {content.chairs.description}
          </p>
        </div>
      </div>
      <ChairGrid />
    </main>
  );
}