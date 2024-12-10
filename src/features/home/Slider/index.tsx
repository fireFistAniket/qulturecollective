"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Star } from "lucide-react";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const opensans = Open_Sans({
  display: "swap",
  subsets: ["latin"],
});

export default function Slider() {
  const carouselImg = [
    "/carousel/carousel-1.png",
    "/carousel/carousel-2.png",
    "/carousel/carousel-3.png",
    "/carousel/carousel-4.jpeg",
  ];
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handlePaginationClick = (index: number) => {
    if (api) {
      api.scrollTo(index); // Use the CarouselApi's goTo method to scroll to the selected slide
      setCurrent(index + 1); // Update the current state
    }
  };

  return (
    <div
      className="flex flex-col bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('${carouselImg[current - 1]}')` }}
    >
      <div className="bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.7),_rgba(0,_0,_0,_0.7))] flex flex-col gap-10 py-[15%]">
        <div className="flex gap-4 mx-7 xl:self-end xl:flex-row-reverse xl:max-w-5xl xl:w-full">
          <div className="flex flex-1 items-center border border-white pe-1">
            <Input
              placeholder="Search latest news about travel, business.."
              className="rounded-none outline-none border-none xl:max-w-2xl w-full placeholder:text-white text-white xl:w-96 text-xs xl:text-base flex-1 xl:py-6"
            />
            <Search className="text-white text-sm" />
          </div>
          <div className="flex flex-1 max-w-80">
            <Select>
              <SelectTrigger className="text-white rounded-none text-xs xl:text-base xl:py-6">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel className="rounded-none text-xs xl:text-base">
                    Location
                  </SelectLabel>
                  <SelectItem
                    className="rounded-none text-xs xl:text-base"
                    value="vietnam"
                  >
                    Vietnam
                  </SelectItem>
                  <SelectItem
                    className="rounded-none text-xs xl:text-base"
                    value="banana"
                  >
                    Banana
                  </SelectItem>
                  <SelectItem
                    className="rounded-none text-xs xl:text-base"
                    value="blueberry"
                  >
                    Blueberry
                  </SelectItem>
                  <SelectItem
                    className="rounded-none text-xs xl:text-base"
                    value="grapes"
                  >
                    Grapes
                  </SelectItem>
                  <SelectItem
                    className="rounded-none text-xs xl:text-base"
                    value="pineapple"
                  >
                    Pineapple
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row xl:items-end gap-7">
          <div className="flex flex-col px-7 xl:pl-32 gap-4 xl:gap-14">
            <h1 className="text-2xl xl:text-6xl font-bold text-center xl:text-left text-[#fcfcfc]">
              10 Most Visited Place In ho chi min city
            </h1>
            <p className="capitalize text-lg xl:text-3xl text-center xl:text-left text-[#fcfcfc]">
              a Complete Guide for your travel
            </p>
            <Link
              href="#"
              className={`bg-[#fcfcfc] px-6 py-1 xl:py-3 text-sm leading-7 xl:text-xl text-site-green font-medium rounded-sm self-center xl:self-start ${opensans.className}`}
            >
              Explore Now
            </Link>
            <div className="hidden xl:flex gap-8">
              <div className="flex flex-col">
                <h1 className="text-4xl text-[#fcfdfc] font-bold">3k+</h1>
                <h3 className="text-2xl font-medium text-[#fcfdfc]">E-Books</h3>
              </div>
              <div className="flex flex-col">
                <h1 className="text-4xl text-[#fcfdfc] font-bold">5k+</h1>
                <h3 className="text-2xl font-medium text-[#fcfdfc]">News</h3>
              </div>
              <div className="flex flex-col">
                <h1 className="text-4xl text-[#fcfdfc] font-bold">20k+</h1>
                <h3 className="text-2xl font-medium text-[#fcfdfc]">
                  Locations
                </h3>
              </div>
            </div>
          </div>
          <div className="xl:max-w-2xl 2xl:max-w-full overflow-hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
              setApi={setApi}
            >
              <CarouselContent className="xl:gap-8">
                {carouselImg.map((img, index) => (
                  <CarouselItem
                    key={index}
                    onClick={() => handlePaginationClick(index)}
                    className="basis-3/4 md:basis-1/2 xl:basis-1/3 cursor-pointer"
                  >
                    <div
                      className={`${
                        index + 1 === current ? "scale-105" : "scale-75"
                      } transition duration-300 w-[50vw] xl:w-[16.1vw] flex flex-col items-center`}
                    >
                      <Image
                        src={img}
                        width={309}
                        height={296}
                        className="w-full h-48 xl:h-72 object-cover"
                        alt="carousel"
                      />
                      <div
                        className={`flex flex-col ${
                          index + 1 === current ? "bg-white" : "bg-black/60"
                        } gap-0.5 items-center py-2 w-full rounded shadow-[60px_42px_120px_0px_#00000014]`}
                      >
                        <div
                          className={`${
                            index + 1 === current ? "flex" : "hidden"
                          }`}
                        >
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                              key={index}
                              className="size-4 xl:size-5 text-[#FBBC04] fill-[#FBBC04]"
                            />
                          ))}
                        </div>
                        <h2
                          className={`text-xs xl:text-xl font-bold ${
                            index + 1 === current
                              ? "text-[#4285F4]"
                              : "text-white"
                          } tracking-[0.04em] text-center`}
                        >
                          Top Destination Awarded
                        </h2>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
