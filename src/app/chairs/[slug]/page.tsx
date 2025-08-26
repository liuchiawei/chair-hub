import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Chair } from "@/data/type";
import chairsData from "@/data/chairs.json";

export default async function ChairDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const chair = chairsData.find((c: Chair) => c.slug === slug);

  if (!chair) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          href="/chairs"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-8"
        >
          ← Back to Collection
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
            {chair.image && chair.image.trim() !== "" ? (
              <Image
                src={`/chairs/${chair.image}`}
                alt={chair.name_en}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 text-xl">No Image Available</span>
              </div>
            )}
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl text-gray-900 tracking-wide dark:text-white mb-1">
                {chair.name_jp}
              </h2>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {chair.name_en}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                {chair.designer}
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                  {chair.year}
                </span>
                <span className="text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                  {chair.country}
                </span>
                <span className={cn(
                  "text-sm px-3 py-1 rounded-full",
                  "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                )}>
                  {chair.style}
                </span>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Description
              </h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {chair.description.map((description, index) => (
                  <p key={index}>{description}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// 生成靜態參數
export async function generateStaticParams() {
  return chairsData.map((chair: Chair) => ({
    slug: chair.slug
  }))
}