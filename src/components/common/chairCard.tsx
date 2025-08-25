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
    ${(id % 18 === 1 || id % 18 === 14) && "xl:col-span-2 xl:row-span-2"}`}>
      {/* Title */}
      <div className="w-full h-12 p-4 flex items-center border-b">
        {title}
      </div>
      {/* Image */}
      <div className="w-full aspect-square relative">
        <Image 
          src={`/chairs/${image}`} 
          alt={title} 
          fill 
          className="object-cover" 
        />
      </div>
      {/* Description */}
      <div className="w-full h-14 px-4 flex justify-between items-center border-t text-xs">
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