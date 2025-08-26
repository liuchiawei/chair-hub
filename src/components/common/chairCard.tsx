import Image from "next/image";
import Link from "next/link";
export default function ChairCard(
  {
    id,
    slug,
    title,
    image,
    year,
    designer,
  }: {
    id: number;
    slug: string;
    title: string;
    image: string;
    year: number;
    designer: string;
  }
) {
  return (
    <Link href={`/chairs/${slug}`} className={`w-full h-full min-h-60 flex flex-col justify-between border-b border-r
    ${(id % 18 === 0 || id % 18 === 13) && "xl:col-span-2 xl:row-span-2"}`}>
      {/* Title */}
      <div className="w-full h-12 p-4 flex items-center border-b font-bold tracking-wide">
        {title}
      </div>
      {/* Image Container */}
      <div className={`w-full relative flex justify-center items-center p-6 bg-white
      ${(id % 18 === 0 || id % 18 === 13)
      ? "h-full"
      : ""}
      `}>
        {/* Image */}
        <div className="w-full relative aspect-square">
          <Image 
            src={`/chairs/${image}`} 
            alt={title} 
            fill 
            className="object-cover" 
          />
        </div>
      </div>
      {/* Description */}
      <div className="w-full min-h-14 px-4 flex justify-between items-center border-t text-xs">
        <div>
          {designer}
        </div>
        <div>
          {year}
        </div>
      </div>
    </Link>
  )
}