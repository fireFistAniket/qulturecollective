import { fetchSingleBlog } from "@/actions/fetchdata";
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

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ id: string | number }>;
}) {
  const id = (await params).id;
  const blogDetails = await fetchSingleBlog(id);

  return (
    <>
      <section className="flex flex-col xl:flex-row items-center xl:items-stretch justify-center xl:px-28 py-[25%] xl:py-[15%]">
        <div className="flex flex-col gap-8 px-4 xl:max-w-4xl">
          <Image
            src={`${process.env.NEXT_PUBLIC_STRIPE_API_URI}${
              blogDetails.data.attributes.cover?.data?.attributes?.url || ""
            }`}
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
                Overall Qulture Star Rating:{" "}
                {blogDetails.data.attributes.overall_rating}/5
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
          <div
            className="text-base text-[#464646] xl:text-2xl xl:leading-[2.75rem]"
            dangerouslySetInnerHTML={{
              __html: blogDetails.data.attributes.description.replace(
                /\n/g,
                "<br/>"
              ),
            }}
          />
          <div className="flex bg-[#FF89291A] rounded-md overflow-hidden">
            <div className="w-4 bg-[#FF8929]"></div>
            <div className="text-[#525252] text-xs xl:text-3xl tracking-[0.02em] py-3 px-5 xl:py-7 xl:px-14">
              <span className="font-bold">Pro Tip:</span>{" "}
              {blogDetails.data.attributes.tip}
            </div>
          </div>
          <div className="shadow-[0px_0px_24px_0px_#CACACA40] p-5 flex flex-col gap-5">
            <h1 className="text-site-green text-base font-bold tracking-[0.01em] xl:text-3xl">
              Qulture Rating
            </h1>
            <div className="bg-[#B4B4B4] h-1"></div>
            <ul className="flex flex-col gap-2 xl:gap-7 list-disc ml-4">
              <li className="flex gap-2 xl:gap-7">
                <span className="capitalize text-sm xl:text-2xl text-[#2f3030]">
                  ambiance
                </span>
                <div className="flex gap-1">
                  {Array.from({
                    length: 5,
                  }).map((_, id) => (
                    <Star
                      className={`${
                        blogDetails.data.attributes.ambiance_rating > id
                          ? "fill-[#FBBC04] text-[#FBBC04]"
                          : "fill-[#D6D6D6] text-[#D6D6D6]"
                      } size-4 xl:size-7`}
                      key={id}
                    />
                  ))}
                </div>
              </li>
              <li className="flex gap-2 xl:gap-7">
                <span className="capitalize text-sm xl:text-2xl text-[#2f3030]">
                  Quality
                </span>
                <div className="flex gap-1">
                  {Array.from({
                    length: 5,
                  }).map((_, id) => (
                    <Star
                      className={`${
                        blogDetails.data.attributes.quality_rating > id
                          ? "fill-[#FBBC04] text-[#FBBC04]"
                          : "fill-[#D6D6D6] text-[#D6D6D6]"
                      } size-4 xl:size-7`}
                      key={id}
                    />
                  ))}
                </div>
              </li>
              <li className="flex gap-2 xl:gap-7">
                <span className="capitalize text-sm xl:text-2xl text-[#2f3030]">
                  Service
                </span>
                <div className="flex gap-1">
                  {Array.from({
                    length: 5,
                  }).map((_, id) => (
                    <Star
                      className={`${
                        blogDetails.data.attributes.service_rating > id
                          ? "fill-[#FBBC04] text-[#FBBC04]"
                          : "fill-[#D6D6D6] text-[#D6D6D6]"
                      } size-4 xl:size-7`}
                      key={id}
                    />
                  ))}
                </div>
              </li>
              <li className="flex gap-2 xl:gap-7">
                <span className="capitalize text-sm xl:text-2xl text-[#2f3030]">
                  Overall Experience
                </span>
                <div className="flex gap-1">
                  {Array.from({
                    length: 5,
                  }).map((_, id) => (
                    <Star
                      className={`${
                        blogDetails.data.attributes.overall_experinece_rating >
                        id
                          ? "fill-[#FBBC04] text-[#FBBC04]"
                          : "fill-[#D6D6D6] text-[#D6D6D6]"
                      } size-4 xl:size-7`}
                      key={id}
                    />
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden xl:flex flex-col gap-9">
          <Image src="/extra/ad.png" alt="ad" width={569} height={330} />
          <Trending title="Similar like this" />
        </div>
      </section>
      <Comments />
      <CommentList />
    </>
  );
}
