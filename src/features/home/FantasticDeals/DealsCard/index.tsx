import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

export default function DealsCard({
  data,
}: {
  data: { cover: string; title: string; offer: string };
}) {
  const { cover, title, offer } = data;
  return (
    <Card className="border-0">
      <CardContent className="relative p-0 border-0">
        <Image
          src={cover}
          alt="cover"
          width={370}
          height={502}
          className=" h-80 xl:h-[31.375rem] object-cover w-full"
        />
        <div className="absolute bottom-0 flex justify-between items-start left-0 w-full bg-black/90 px-4 py-2">
          <div className="flex flex-col gap-1">
            <h1 className="text-sm xl:text-2xl font-bold text-white">{title}</h1>
            <div className="flex items-center gap-1">
              {Array.from({ length: 4 }).map((_, index) => (
                <Star
                  key={index}
                  className="w-4 h-4 xl:w-5 xl:h-5 text-[#50E3C7] fill-[#50E3C7]"
                />
              ))}
              <Star className="w-4 h-4 xl:w-5 xl:h-5 text-[#979797] fill-[#979797]" />
            </div>
          </div>
          <p className="text-black px-3 text-xs xl:text-base whitespace-nowrap leading-9 bg-[#FBBC04] rounded capitalize font-bold text-center">
            upto {offer} off
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
