"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Luggage,
  MapPin,
  Medal,
  MoveUpRight,
  UtensilsCrossed,
} from "lucide-react";
import BlogCard from "./BlogCard";
import Trending from "../Trending";
import Image from "next/image";
import useElementHeight from "@/hooks/useElementHeight";
import { fetchTagBaseBlog } from "@/actions/fetchdata";
import { JSX, useEffect, useState } from "react";

type Tab = {
  key: string;
  icon: JSX.Element;
  value: {
    title: string;
    desc: string;
    author: string;
    publish: string;
    cover: string;
    id: string;
  }[];
};

export default function TopBlogs() {
  const [tabData, setTabData] = useState<Tab[]>([]);

  async function fetchBlogs() {
    const travel = await fetchTagBaseBlog("travel");
    const food = await fetchTagBaseBlog("food");
    const insight = await fetchTagBaseBlog("insights");
    const other = await fetchTagBaseBlog("others");

    setTabData([
      {
        key: "Qulture Journeys",
        icon: <Luggage className="w-5 h-8" />,
        value: travel.data.map((item: any) => ({
          title: item.attributes.title,
          desc: item.attributes.description.slice(0, 114),
          author: item.attributes.uploadedBy,
          publish: new Date(item.attributes.uploadedAt).toDateString(),
          cover: `${process.env.NEXT_PUBLIC_STRIPE_API_URI}${item.attributes.cover.data.attributes.url}`,
          id: item.id,
        })),
      },
      {
        key: "Qulture Eats",
        icon: <UtensilsCrossed className="w-5 h-8" />,
        value: food.data.map((item: any) => ({
          title: item.attributes.title,
          desc: item.attributes.description.slice(0, 114),
          author: item.attributes.uploadedBy,
          publish: new Date(item.attributes.uploadedAt).toDateString(),
          cover: `${process.env.NEXT_PUBLIC_STRIPE_API_URI}${item.attributes.cover.data.attributes.url}`,
          id: item.id,
        })),
      },
      {
        key: "Qulture Insights",
        icon: <Medal className="w-5 h-8" />,
        value: insight.data.map((item: any) => ({
          title: item.attributes.title,
          desc: item.attributes.description.slice(0, 114),
          author: item.attributes.uploadedBy,
          publish: new Date(item.attributes.uploadedAt).toDateString(),
          cover: `${process.env.NEXT_PUBLIC_STRIPE_API_URI}${item.attributes.cover.data.attributes.url}`,
          id: item.id,
        })),
      },
      {
        key: "Living the Qulture Way",
        icon: <MapPin className="w-5 h-8" />,
        value: other.data.map((item: any) => ({
          title: item.attributes.title,
          desc: item.attributes.description.slice(0, 114),
          author: item.attributes.uploadedBy,
          publish: new Date(item.attributes.uploadedAt).toDateString(),
          cover: `${process.env.NEXT_PUBLIC_STRIPE_API_URI}${item.attributes.cover.data.attributes.url}`,
          id: item.id,
        })),
      },
    ]);
  }

  const [trendingHeight, blogListsRef] = useElementHeight([tabData]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex flex-col w-full shrink-0 gap-24">
      <Tabs
        defaultValue={tabData[0]?.key || "Qulture Journeys"}
        className="px-2 md:px-4 xl:px-7 py-4 md:py-7 xl:py-10"
      >
        <TabsList className="grid w-full grid-cols-2 xl:grid-cols-4 place-items-stretch xl:place-items-center justify-center mb-8 bg-white gap-4">
          {tabData.map((tab, index) => (
            <TabsTrigger
              value={tab.key}
              key={index}
              className="text-[#080808] text-base data-[state=active]:text-site-green data-[state=active]:font-bold border xl:border-0 xl:border-b border-[#d2d2d2] data-[state=active]:border-site-green rounded-none py-2 px-3 inline-flex gap-3 items-center data-[state=active]:shadow-none truncate"
            >
              {tab.icon}
              <span>{tab.key}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        {tabData.map((tab, index) => (
          <TabsContent
            value={tab.key}
            key={index}
            className="flex flex-col xl:flex-row gap-7 xl:justify-between"
          >
            <div
              className="flex flex-col gap-5 lg:max-w-3xl xxl:max-w-5xl w-full shrink-0"
              ref={blogListsRef}
            >
              {tab.value.map((tabDetail, id) => (
                <BlogCard data={tabDetail} key={id} />
              ))}
            </div>
            <div className="flex-col gap-7 flex">
              <Image
                src="/extra/ad.png"
                alt="ad"
                width={569}
                height={330}
                className="w-full"
              />
              {trendingHeight > 0 && (
                <Trending title="Trending" height={trendingHeight} />
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <button
        type="button"
        className="text-sm xl:text-lg font-medium text-white bg-site-green inline-flex items-center py-1 xl:py-4 px-7 gap-2 self-center"
      >
        <span>View More</span>
        <MoveUpRight className="w-5 h-5" />
      </button>
    </div>
  );
}
