"use client";
import { useEffect, useState } from "react";
import TrendingCard from "./TrendingCard";
import { fetchAllBlogs } from "@/actions/fetchdata";

export default function Trending({
  title,
  height,
}: {
  title: string;
  height?: number;
}) {
  const [trending, setTrending] = useState([]);
  async function fetchTrending() {
    const trendingBlogs = await fetchAllBlogs();
    setTrending(() =>
      trendingBlogs.data.map((item: any) => ({
        title: item.attributes.title,
        author: item.attributes.uploadedBy,
        publish: new Date(item.attributes.uploadedAt).toDateString(),
        rating: item.attributes.overall_rating,
        cover: `${process.env.NEXT_PUBLIC_STRIPE_API_URI}${item.attributes.cover.data.attributes.url}`,
      }))
    );
  }
  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div
      className="flex flex-col gap-10 py-10 xl:border xl:border-[#d2d2d2] px-4 xl:px-6 xl:overflow-hidden !overflow-y-scroll shrink"
      style={{ height: height }}
    >
      <h1 className="text-2xl xl:text-left text-center text-site-green font-bold">
        {title}
      </h1>
      <div className="flex flex-col gap-9 xl:px-7 shrink-0 ">
        {trending.map((trend, index) => (
          <TrendingCard data={trend} key={index} />
        ))}
      </div>
    </div>
  );
}
