import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

export default function TrendingCard({
  data,
}: {
  data: {
    title: string;
    author: string;
    publish: string;
    rating: string;
    cover: string;
  };
}) {
  return (
    <Card className="border-none shadow-none">
      <CardContent className="p-0">
        <div className="flex gap-5 flex-1">
          <div className="flex self-stretch shrink-0">
            <Image
              src={data.cover}
              alt="trending cover"
              width={182}
              height={164}
              className="h-36 xl:h-40 object-cover w-28 xl:w-auto"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-site-black text-sm xl:text-xl font-semibold line-clamp-2">
              {data.title}
            </h1>
            <p className="text-xs xl:text-base text-site-black">
              by <span className="underline font-semibold">{data.author}</span>
            </p>
            <p className="inline-flex items-center text-xs xl:text-base font-bold tracking-[0.04em] gap-1 text-site-black">
              {data.rating}{" "}
              <Star className="w-4 h-4 xl:w-5 xl:h-5 text-[#FBBC04] fill-[#FBBC04]" />
            </p>
            <p className="text-site-black text-xs xl:text-base font-light">
              Published {data.publish}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
