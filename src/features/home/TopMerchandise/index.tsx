"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MerchandiseCard from "./MerchandiseCard";

export default function TopMerchandise() {
  const merchandises = [
    {
      title: "Comfortable T-shirts",
      rating: "4.8",
      liked: "27,000",
      cover: "/top-merchandise/top-merchandise-1.jpg",
    },
    {
      title: "Comfortable T-shirts",
      rating: "4.8",
      liked: "27,000",
      cover: "/top-merchandise/top-merchandise-2.jpg",
    },
    {
      title: "Comfortable T-shirts",
      rating: "4.8",
      liked: "27,000",
      cover: "/top-merchandise/top-merchandise-3.jpg",
    },
    {
      title: "Comfortable T-shirts",
      rating: "4.8",
      liked: "27,000",
      cover: "/top-merchandise/top-merchandise-4.jpg",
    },
    {
      title: "Comfortable T-shirts",
      rating: "4.8",
      liked: "27,000",
      cover: "/top-merchandise/top-merchandise-5.jpg",
    },
  ];
  return (
    <section className="flex flex-col gap-8 py-4 md:py-8 xl:py-16">
      <div className="flex flex-col gap-2">
        <h2 className="text-site-green tracking-[0.2em] text-lg xl:text-3xl text-center">
          Top Picked
        </h2>
        <h1 className="font-bold text-xl xl:text-5xl text-center text-site-green">
          Merchandise
        </h1>
      </div>
      <div className="self-center">
        <Carousel
          className="w-full max-w-[80vw]"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="-ml-1">
            {merchandises.map((merchandise, index) => (
              <CarouselItem
                key={index}
                className="p-1 mr-6 basis-3/4 md:basis-1/2 xl:basis-1/4"
              >
                <MerchandiseCard data={merchandise} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden xl:inline-flex bottom-0" />
          <CarouselNext className="hidden xl:inline-flex bottom-0" />
        </Carousel>
      </div>
    </section>
  );
}
