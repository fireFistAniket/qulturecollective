import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import DealsCard from "./DealsCard";

export default function FantasticDeals() {
  const deals = [
    {
      cover: "/deals/deals-cover-1.jpg",
      title: "Travel Offers",
      offer: "28%",
    },
    {
      cover: "/deals/deals-cover-2.png",
      title: "Food & Drinks",
      offer: "25%",
    },
    {
      cover: "/deals/deals-cover-3.jpg",
      title: "Business Offers",
      offer: "30%",
    },
    {
      cover: "/deals/deals-cover-4.png",
      title: "Lifestyle Offers",
      offer: "32%",
    },
  ];
  return (
    <section className="flex bg-[url('/background/fantastic-deals-bg.jpg')] bg-no-repeat bg-cover">
      <div className="flex flex-col items-center lg:items-stretch gap-2 lg:gap-5 bg-black/60 w-full py-6 lg:py-32 px-7 lg:px-36">
        <h2 className="capitalize text-center text-lg lg:text-left lg:text-3xl text-white">
          explore fantastic deals
        </h2>
        <h1 className="text-white tracking-[0.01em] text-xl lg:text-5xl text-center lg:text-left font-bold capitalize">
          our latest offers and coupons
        </h1>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full lg:mt-20"
        >
          <CarouselContent>
            {deals.map((deal, index) => (
              <CarouselItem
                key={index}
                className="basis-4/5 md:basis-1/2 lg:basis-1/4"
              >
                <DealsCard data={deal} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
