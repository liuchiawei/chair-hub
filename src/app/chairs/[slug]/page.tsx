import { notFound } from "next/navigation";
import type { Metadata } from 'next'
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import Sidebar from "./components/sidebar";
import PrevNextBtns from "./components/prevNextBtns";
import { Chair } from "@/lib/type";
import chairsData from "@/data/chairs.json";

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
          <div className="w-full aspect-square relative bg-card border-l border-t border-r lg:border-r-0 lg:border-b lg:shadow-xl">
            <p className="w-[90%] absolute top-1/2 -translate-y-1/2 left-6 text-[96px] font-[100] leading-none text-white break-all uppercase select-none">
              {chair.name_en}
            </p>
            <CardContainer className="w-full">
              {chair.image && chair.image.trim() !== "" ? (
                <CardBody className="relative group/card">
                  <CardItem translateZ={80} translateY={-20} as="h1" className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full text-lg text-center text-neutral-500 tracking-widest">
                    {chair.name_jp}
                  </CardItem>
                  <CardItem translateZ={100} className="w-full h-full flex items-center justify-center">
                    <Image
                      src={`/chairs/${chair.image}`}
                      alt={chair.name_en}
                      width={600}
                      height={400}
                      className="object-cover"
                    />
                  </CardItem>
                </CardBody>
              ) : (
                <div className="w-full h-full bg-neutral-300 flex items-center justify-center">
                  <span className="text-neutral-500 text-xl">No Image Available</span>
                </div>
              )}
            </CardContainer>
          </div>
          
          <div className="row-span-1 lg:row-span-3 border bg-neutral-100 **:data-label:text-sm **:data-label:text-neutral-500 **:data-value:text-xl **:data-value:text-neutral-800 **:data-value:font-semibold">
            <div className="p-6 flex flex-col gap-2 border-b ">
              <h2 className="text-xl text-neutral-800 tracking-wide">
                {chair.name_jp}
              </h2>
              <h1 className="text-3xl font-bold text-neutral-800">
                {chair.name_en}
              </h1>
            </div>
            <div className="px-6 pt-3 pb-10 flex flex-col gap-3">
              <div>
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
              <div className="flex flex-col gap-2">
                <h2 data-label="description">
                  説明
                </h2>
                <div className="flex flex-col gap-2 text-neutral-700 text-justify leading-relaxed">
                  {chair.description.map((description, index) => (
                    <p key={index}>{description}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {chair.catchphrase && (
          <p className="w-2/3 px-6 mt-8 text-3xl font-[200] text-justify text-neutral-800 tracking-wide leading-relaxed">
            {chair.catchphrase}
          </p>
          )}
        </div>
        
        <PrevNextBtns prevChair={prevChair || undefined} nextChair={nextChair || undefined} />
      </div>

      <Sidebar chair={chair} />
      <div className="absolute top-1/2 right-4 -translate-y-1/2 hidden lg:block">
        <h1 className="[writing-mode:vertical-rl] text-2xl text-neutral-300 uppercase tracking-[0.4em] select-none">{chair.name_en}</h1>
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

// 生成メタデータ
type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  const { slug } = await params
 
  // fetch data
  const chair = chairsData.find((c: Chair) => c.slug === slug);
  if (!chair) { notFound(); }
 
  return {
    title: chair.name_jp + " | Chair Hub",
  }
}