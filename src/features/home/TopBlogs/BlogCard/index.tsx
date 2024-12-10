"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BlogCard({
  data,
}: {
  data: {
    title: string;
    author: string;
    publish: string;
    desc: string;
    cover: string;
  };
}) {
  const router = useRouter();
  return (
    <Card
      className="border-[#d2d2d2] py-3 px-4 xl:py-7 xl:px-8 rounded-none shadow-none cursor-pointer"
      onClick={() => router.push("/blogdetails")}
    >
      <CardContent className="p-0">
        <div className="flex gap-5 xl:gap-6">
          <div className="flex self-stretch flex-shrink-0">
            <Image
              src={data.cover}
              alt="trending cover"
              width={182}
              height={164}
              className="w-[26.7vw] xl:w-[14.8vw] object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 xl:gap-3">
            <h1 className="text-site-black text-sm xl:text-3xl font-semibold">
              {data.title}
            </h1>
            <p className="text-site-black font-light text-xs xl:text-xl">
              {data.desc}
            </p>
            <p className="text-xs xl:text-xl text-site-black">
              by <span className="underline font-semibold">{data.author}</span>
            </p>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  className="w-4 h-4 text-[#FBBC04] fill-[#FBBC04]"
                  key={index}
                />
              ))}
            </div>
            <p className="text-site-black text-xs xl:text-xl font-light">
              Published {data.publish}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
