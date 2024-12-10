import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import FoodCard from "./FoodCard";

export default function PoppularFoods() {
  const foods = [
    {
      cover: "/foods/food-cover-1.png",
      title: "Must Try 7 Vietnam Cuisine",
      description: "Over 14.5k happy users all over the world",
      rating: "4.8",
      liked: "27,000",
    },
    {
      cover: "/foods/food-cover-2.png",
      title: "The Best Food in Vietnam",
      description: "Over 14.5k happy users all over the world",
      rating: "4.6",
      liked: "27,000",
    },
    {
      cover: "/foods/food-cover-3.png",
      title: "A Taste of Vietnam",
      description: "Over 14.5k happy users all over the world",
      rating: "4.2",
      liked: "27,000",
    },
    {
      cover: "/foods/food-cover-4.png",
      title: "Best Salads",
      description: "Over 14.5k happy users all over the world",
      rating: "4.8",
      liked: "27,000",
    },
  ];
  return (
    <section className="bg-[url('/background/poppular-foods-bg.png')] bg-no-repeat bg-cover">
      <div className="bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0.32)_4.4%,_rgba(231,_231,_231,_0)_50.78%,_rgba(0,_0,_0,_0.32)_87.24%)] flex flex-col gap-4 py-6 xl:py-32 px-7 xl:px-36">
        <h1 className="text-2xl xl:text-6xl leading-[5rem] font-bold text-white capitalize text-center xl:text-left xl:inline-flex items-center gap-3">
          Popular foods in gold coast
        </h1>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full xl:mt-20 pl-7 xl:pl-0"
        >
          <CarouselContent className="gap-9 xl:gap-16">
            {foods.map((food, index) => (
              <CarouselItem
                key={index}
                className="basis-4/5 md:basis-1/2 xl:basis-1/4"
              >
                <FoodCard data={food} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
