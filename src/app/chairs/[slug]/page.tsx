import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Sidebar from "./components/sidebar";
import PrevNextBtns from "./components/prevNextBtns";
import { Chair } from "@/data/type";
import chairsData from "@/data/chairs.json";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default async function ChairDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;

  const chair = chairsData.find((c: Chair) => c.slug === slug);
  if (!chair) { notFound(); }
  const chairIndex = chairsData.findIndex((c: Chair) => c.slug === slug);
  const nextChair = chairIndex < chairsData.length - 1 ? chairsData[chairIndex + 1] : null;
  const prevChair = chairIndex > 0 ? chairsData[chairIndex - 1] : null;

  return (
    <main className="w-full min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="aspect-square relative overflow-hidden border-l border-t border-r lg:border-r-0 lg:border-b">
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
          
          <div className="row-span-1 lg:row-span-2 border **:data-label:text-sm **:data-label:text-gray-500 **:data-value:text-xl **:data-value:text-gray-900 **:data-value:font-semibold">
            <div className="p-6 flex flex-col gap-2 border-b ">
              <h2 className="text-xl text-gray-900 tracking-wide">
                {chair.name_jp}
              </h2>
              <h1 className="text-3xl font-bold text-gray-900">
                {chair.name_en}
              </h1>
            </div>
            <div className="p-6 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span data-label="designer">デザイナー</span>
                <p data-value>
                  {chair.designer}
                </p>
              </div>
              <div>
                <span data-label="year">製造年</span>
                <p data-value>
                  {chair.year}
                </p>
              </div>
              <div>
                <span data-label="country">国</span>
                <p data-value>
                  {chair.country}
                </p>
              </div>
              <div>
                <span data-label="style">スタイル</span>
                {chair.style.map((style, index) => (
                  <p key={index} data-value>
                    {style}
                  </p>
                ))}
              </div>
              <div>
                <h2 data-label="description">
                  説明
                </h2>
                <div className="flex flex-col gap-2 text-gray-700 text-justify leading-relaxed">
                  {chair.description.map((description, index) => (
                    <p key={index}>{description}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <PrevNextBtns prevChair={prevChair || undefined} nextChair={nextChair || undefined} />
      </div>

      <Sidebar chair={chair} />
    </main>
  );
}

// 生成靜態參數
export async function generateStaticParams() {
  return chairsData.map((chair: Chair) => ({
    slug: chair.slug
  }))
}