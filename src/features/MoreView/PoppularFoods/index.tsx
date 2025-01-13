import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import FoodCard from "./FoodCard";
import { fetchTagBaseBlog } from "@/actions/fetchdata";

export default async function PoppularFoods() {
  const foodBlogs = await fetchTagBaseBlog("food");

  const foods = foodBlogs.data.map((item: any) => ({
    cover: `${process.env.NEXT_PUBLIC_STRIPE_API_URI}${item.attributes.cover.data.attributes.url}`,
    title: item.attributes.title,
    description: item.attributes.tip,
    rating: item.attributes.overall_rating,
    liked: item.attributes.liked,
  }));
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
          <CarouselContent className="">
            {foods.map((food: any, index: number | string) => (
              <CarouselItem
                key={index}
                className="basis-4/5 md:basis-1/2 xl:basis-1/3 mr-9"
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
