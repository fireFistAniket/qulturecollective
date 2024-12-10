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
      <CardContent className="flex flex-col items-center xl:items-stretch gap-3 xl:gap-7">
        <Image
          src={data.cover}
          alt={data.title}
          width={302}
          height={384}
          className="w-[50.1vw] h-64 object-cover"
        />
        <h3 className="text-site-black font-bold text-lg xl:text-2xl text-center xl:text-left">
          {data.title}
        </h3>
        <div className="flex gap-0.5 xl:items-start">
          <p className="flex gap-1 items-center text-site-black text-sm xl:text-lg tracking-[0.04em] font-bold">
            {data.rating}{" "}
            <Star className="w-4 h-4 xl:w-5 xl:h-5 text-[#FBBC04] fill-[#FBBC04]" />
          </p>
          <p className="text-sm xl:text-lg text-[#868686]">
            &#40;{data.liked}&#41; people like this
          </p>
        </div>
        <button
          type="button"
          className="text-white text-sm px-3 py-4 bg-site-green xl:self-start"
        >
          Explore Now
        </button>
      </CardContent>
    </Card>
  );
}
