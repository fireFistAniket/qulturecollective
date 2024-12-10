import { MoveUpRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeatureBlog() {
  return (
    <div className="flex flex-col border border-[#D2D2D2] gap-4 xl:gap-8 xl:py-7 xl:px-8 px-4 py-3 xl:my-0 xl:mx-8 mx-4 my-3 h-full flex-1">
      <Image
        src="/carousel/carousel-3.png"
        alt="cover"
        width={993}
        height={662}
        className="w-full"
      />
      <div className="flex flex-col gap-2 xl:gap-4">
        <h1 className="text-xl xl:text-4xl text-site-black tracking-[-0.02em] font-semibold">
          Exploring the Tunnels &#40;The Greatest Cu Chi Tunnels&#41;
        </h1>
        <h3 className="text-lg xl:text-2xl text-site-black">
          a Complete Guide for your travel
        </h3>
        <div className="flex items-center gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className="w-4 h-4 xl:w-5 xl:h-5 text-[#FBBC04] fill-[#FBBC04]"
            />
          ))}
        </div>
        <p className="text-xs xl:text-base text-site-black">
          by <span className="underline font-semibold">James Locc</span>
        </p>
        <Link
          href="/blogdetails"
          className="text-sm xl:text-lg font-medium text-white bg-site-green inline-flex items-center py-1 xl:py-4 px-7 gap-2 self-start"
        >
          <span>Read More</span>
          <MoveUpRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
