import { Card, CardContent } from "@/components/ui/card";
import { MoveUpRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TodayCard({
  data,
}: {
  data: {
    cover: string;
    title: string;
    description: string;
    rating: string;
    liked: string;
    type: string;
    typeIcon: string;
    bg: string;
    id: string;
  };
}) {
  const { cover, title, description, rating, liked, type, typeIcon, bg, id } =
    data;
  return (
    <Card className="border-0 shadow-none">
      <CardContent className="relative p-0 border-0">
        <Image
          src={cover}
          alt="cover"
          width={370}
          height={502}
          className="h-80 xl:h-[31.375rem] object-cover mb-5 xl:mb-9 w-full"
        />
        <div className="flex justify-between items-start w-full py-2">
          <div className="flex flex-col gap-4">
            <div
              className={`flex px-3 py-2 gap-1 items-center self-start rounded-sm`}
              style={{ background: bg }}
            >
              <Image
                src={typeIcon}
                alt="icon"
                width={14}
                height={14}
                className="size-3 xl:size-4"
              />
              <h4 className="text-xs xl:text-sm font-bold tracking-[0.04em] text-white">
                {type}
              </h4>
            </div>
            <h1 className="text-lg xl:text-2xl font-bold text-site-green line-clamp-1">
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
            <p
              className="text-sm xl:text-lg text-[#4A3A3A] line-clamp-3"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
            <Link
              href={`/blogdetails/${id}`}
              className="text-base xl:text-lg font-bold text-site-green inline-flex items-center gap-2 self-start"
            >
              <span>Read more</span>
              <MoveUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
