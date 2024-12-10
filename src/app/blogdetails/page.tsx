import Comments from "@/features/blogdetails/Commemts";
import CommentList from "@/features/blogdetails/CommentList";
import Trending from "@/features/home/Trending";
import {
  MapPinned,
  Share,
  Soup,
  Star,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import Image from "next/image";

export default async function BlogDetails() {
  const qultureRating = [
    {
      title: "ambiance",
      rating: 4,
      total: 5,
    },
    {
      title: "Food Quality",
      rating: 4,
      total: 5,
    },
    {
      title: "Service",
      rating: 4,
      total: 5,
    },
    {
      title: "Creativity of Dishes",
      rating: 4,
      total: 5,
    },
    {
      title: "Overall Experinece",
      rating: 4,
      total: 5,
    },
  ];
  return (
    <>
      <section className="flex flex-col xl:flex-row items-center xl:items-stretch justify-center xl:px-28 xl:py-24 pt-[15%] xl:pt-[10%]">
        <div className="flex flex-col gap-8 px-4 xl:max-w-5xl">
          <Image
            src="/blogs/blog-cover.png"
            alt="blog cover"
            width={1032}
            height={617}
          />
          <div className="flex flex-col xl:flex-row-reverse items-start justify-between gap-3">
            <div className="bg-[#CF2DB1] py-2 px-3 inline-flex items-center gap-2">
              <h1 className="text-xs font-bold text-[#EEF2F5] capitalize">
                editor&apos;s choice
              </h1>
              <Star className="fill-white text-white size-4" />
            </div>
            <div className="flex flex-col xl:flex-row gap-3">
              <div className="text-[#545454] inline-flex items-center gap-3">
                <MapPinned className="size-6" />
                <h3 className="text-base tracking-[0.02em]">
                  Mermaid Beach, Central GC
                </h3>
              </div>
              <div className="text-[#545454] inline-flex items-center gap-3">
                <Soup className="size-6" />
                <h3 className="text-base tracking-[0.02em]">
                  Japanese Izakaya
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-4 justify-between">
            <div className="flex items-center justify-center gap-2 bg-[linear-gradient(90deg,_#095143_0%,_#01745D_100%)] w-full xl:w-auto xl:px-6 rounded-lg">
              <h3 className="text-white leading-[4rem] font-bold text-xs xl:text-xl/[4rem]">
                Overall Qulture Star Rating: 4.8/5
              </h3>
              <Star className="fill-[#FBBC04] text-[#FBBC04] size-4 xl:size-8" />
            </div>
            <div className="flex items-center justify-between xl:gap-12">
              <div className="flex gap-4">
                <ThumbsUp className="stroke-site-green text-3xl" />
                <ThumbsDown className="text-3xl" />
              </div>
              <button
                type="button"
                className="rounded px-7 py-2 bg-[#4285F4] inline-flex gap-1 text-white text-xs xl:text-2xl items-center"
              >
                <span>Share</span>
                <Share className="size-3 xl:size-6" />
              </button>
            </div>
          </div>
          <div className="text-base text-[#464646] xl:text-2xl xl:leading-[2.75rem]">
            Tucked away behind a striking red door on the Gold Coast Highway,
            Etsu Izakaya immerses diners in the lively izakaya culture of Japan.
            This hidden gem boasts an inviting yet intimate atmosphere, with low
            lighting, wooden accents, and traditional Japanese decor that
            creates a cosy ambiance, perfect for gatherings with friends or a
            romantic evening out.
            <br />
            <br />
            The menu is a carefully curated journey through Japanese flavours,
            starting with the Wagyu beef tataki—a delicate dish that perfectly
            balances the richness of the beef with the zesty brightness of ponzu
            and crisp daikon. The robata-grilled skewers come highly
            recommended, featuring an array of options from succulent chicken
            thigh to earthy mushrooms, each grilled to perfection, delivering
            that irresistible smoky flavour.
            <br />
            <br />
            For those who love seafood, the sashimi platter presents an artful
            selection of the freshest tuna, kingfish, and salmon, arranged
            beautifully on ice and garnished with wasabi and pickled ginger,
            making it a feast for both the eyes and the palate.
            <br />
            <br />
            To accompany your meal, don&apos;t miss the Yuzu Sake Spritz—a
            refreshing cocktail that offers a delightful citrus burst, perfectly
            offsetting the rich flavours of the dishes.
          </div>
          <div className="flex bg-[#FF89291A] rounded-md overflow-hidden">
            <div className="w-4 bg-[#FF8929]"></div>
            <div className="text-[#525252] text-xs xl:text-3xl tracking-[0.02em] py-3 px-5 xl:py-7 xl:px-14">
              <span className="font-bold">Pro Tip:</span> Arrive early to enjoy
              the vibrant atmosphere as the restaurant fills with the sounds of
              laughter and conversation, enhancing your dining experience.
            </div>
          </div>
          <div className="shadow-[0px_0px_24px_0px_#CACACA40] p-5 flex flex-col gap-5">
            <h1 className="text-site-green text-base font-bold tracking-[0.01em] xl:text-3xl">
              Qulture Rating
            </h1>
            <div className="bg-[#B4B4B4] h-1"></div>
            <ul className="flex flex-col gap-2 xl:gap-7 list-disc ml-4">
              {qultureRating.map((item, index) => (
                <li key={index} className="flex gap-2 xl:gap-7">
                  <span className="capitalize text-sm xl:text-2xl text-[#2f3030]">
                    {item.title}
                  </span>
                  <div className="flex gap-1">
                    {Array.from({ length: item.total }).map((_, id) => (
                      <Star
                        className={`${
                          item.rating > id
                            ? "fill-[#FBBC04] text-[#FBBC04]"
                            : "fill-[#D6D6D6] text-[#D6D6D6]"
                        } size-4 xl:size-7`}
                        key={id}
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="hidden xl:flex flex-col gap-9">
        <Image src='/extra/ad.png' alt="ad" width={569} height={330} />
          <Trending title="Similar like this" />
        </div>
      </section>
      <Comments />
      <CommentList />
    </>
  );
}
