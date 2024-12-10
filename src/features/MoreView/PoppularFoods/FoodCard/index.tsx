import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

export default function FoodCard({
  data,
}: {
  data: {
    cover: string;
    title: string;
    description: string;
    rating: string;
    liked: string;
  };
}) {
  const { cover, title, description, rating, liked } = data;
  return (
    <Card className="border-0 shadow-[60px_42px_120px_0px_#00000014] bg-white/90 rounded-sm px-2 py-3 xl:py-5 xl:px-6 shrink-0 h-full">
      <CardContent className="relative p-0 border-0">
        <Image
          src={cover}
          alt="cover"
          width={392}
          height={418}
          className="h-56 xl:h-[26.14rem] object-cover mb-5 xl:mb-9 rounded-sm w-full"
        />
        <div className="flex justify-between items-start w-full py-2">
          <div className="flex flex-col gap-4">
            <h1 className="text-lg xl:text-2xl font-bold text-site-green">
              {title}
            </h1>
            <div className="flex gap-0.5 xl:items-start">
              <p className="flex gap-1 items-center text-site-black text-sm xl:text-lg tracking-[0.04em] font-bold">
                {rating}{" "}
                <Star className="w-4 h-4 xl:w-5 xl:h-5 text-[#FBBC04] fill-[#FBBC04]" />
              </p>
              <p className="text-sm xl:text-lg text-[#868686]">
                &#40;{liked}&#41; people like this
              </p>
            </div>
            <p className="text-sm xl:text-lg text-[#4A3A3A]">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
