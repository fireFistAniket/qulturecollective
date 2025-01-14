"use client";
import { fetchTagBaseBlog } from "@/actions/fetchdata";
import { MoveUpRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FeatureBlog({
  ref,
  category,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
  category: string;
}) {
  const [featureBlog, setFeatureBlog] = useState<any>({});
  const [featureBlogId, setFeatureBlogId] = useState<number>(0);

  async function getFeatureblog() {
    try {
      const blog = await fetchTagBaseBlog(category);
      setFeatureBlog(blog.data[0].attributes);
      setFeatureBlogId(blog.data[0].id);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getFeatureblog();
  }, []);

  return (
    <div
      className="flex flex-col border border-[#D2D2D2] gap-4 xl:gap-8 xl:py-7 xl:px-8 px-4 py-3 xl:my-0 xl:mx-8 mx-4 my-3 h-full grow"
      ref={ref}
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_STRIPE_API_URI}${
          featureBlog.cover?.data?.attributes?.url || ""
        }`}
        alt="cover"
        width={993}
        height={662}
        className="w-full"
      />
      <div className="flex flex-col gap-2 xl:gap-4">
        <h1 className="text-xl xl:text-4xl text-site-black tracking-[-0.02em] font-semibold">
          {featureBlog.title}
        </h1>
        <h3
          className="text-lg xl:text-2xl text-site-black"
          dangerouslySetInnerHTML={{
            __html: featureBlog.tip,
          }}
        />
        <div className="flex items-center gap-2">
          {Array.from({ length: parseInt(featureBlog.overall_rating) }).map(
            (_, index) => (
              <Star
                key={index}
                className="w-4 h-4 xl:w-5 xl:h-5 text-[#FBBC04] fill-[#FBBC04]"
              />
            )
          )}
        </div>
        <p className="text-xs xl:text-base text-site-black">
          by{" "}
          <span className="underline font-semibold">
            {featureBlog.uploadedBy}
          </span>
        </p>
        <Link
          href={`/blogdetails/${featureBlogId}`}
          className="text-sm xl:text-lg font-medium text-white bg-site-green inline-flex items-center py-1 xl:py-4 px-7 gap-2 self-start"
        >
          <span>Read More</span>
          <MoveUpRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
