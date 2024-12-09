import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

export default function MerchandiseCard({
  data,
}: {
  data: { title: string; rating: string; liked: string; cover: string };
}) {
  return (
    <Card className="p-0 rounded-none border-none shadow-none">
      <CardContent className="flex flex-col items-center lg:items-stretch gap-3 lg:gap-7">
        <Image
          src={data.cover}
          alt={data.title}
          width={302}
          height={384}
          className="w-[50.1vw] h-64 object-cover"
        />
        <h3 className="text-site-black font-bold text-lg lg:text-2xl text-center lg:text-left">
          {data.title}
        </h3>
        <div className="flex gap-0.5 lg:items-start">
          <p className="flex gap-1 items-center text-site-black text-sm lg:text-lg tracking-[0.04em] font-bold">
            {data.rating}{" "}
            <Star className="w-4 h-4 lg:w-5 lg:h-5 text-[#FBBC04] fill-[#FBBC04]" />
          </p>
          <p className="text-sm lg:text-lg text-[#868686]">
            &#40;{data.liked}&#41; people like this
          </p>
        </div>
        <button
          type="button"
          className="text-white text-sm px-3 py-4 bg-site-green lg:self-start"
        >
          Explore Now
        </button>
      </CardContent>
    </Card>
  );
}
