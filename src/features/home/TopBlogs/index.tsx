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

export default function TopBlogs() {
  const tabData = [
    {
      key: "Qulture Journeys",
      icon: <Luggage className="w-5 h-8" />,
      value: [
        {
          title: "An Introduction to Vietnam",
          desc: "Discovering Vietnam: A Journey to an Enchanting Land. a country of stunning landscapes and rich cultural heritage.",
          author: "James Locc",
          publish: "Jan 18",
          cover: "/blog-cover/blog-cover-1.png",
        },
        {
          title:
            "Exploring the Cu Chi Tunnels: A Family Adventure Through History",
          desc: "Discovering Vietnam: A Journey to an Enchanting Land. a country of stunning landscapes and rich cultural heritage.",
          author: "James Locc",
          publish: "Jan 18",
          cover: "/blog-cover/blog-cover-2.png",
        },
        {
          title:
            "Explore Vietnam: Top Destinations for an Unforgettable Adventure",
          desc: "One of the highlights was tasting cassava",
          author: "James Locc",
          publish: "Jan 18",
          cover: "/blog-cover/blog-cover-3.png",
        },
        {
          title: "Vietnamese Cuisine",
          desc: "Discovering Vietnam: A Journey to an Enchanting Land. a country of stunning landscapes and rich cultural heritage.",
          author: "James Locc",
          publish: "Jan 18",
          cover: "/blog-cover/blog-cover-4.png",
        },
      ],
    },
    {
      key: "Qulture Eats",
      icon: <UtensilsCrossed className="w-5 h-8" />,
      value: [
        {
          title: "An Introduction to Vietnam",
          desc: "Discovering Vietnam: A Journey to an Enchanting Land. a country of stunning landscapes and rich cultural heritage.",
          author: "James Locc",
          publish: "Jan 18",
          cover: "/blog-cover/blog-cover-1.png",
        },
        {
          title:
            "Exploring the Cu Chi Tunnels: A Family Adventure Through History",
          desc: "Discovering Vietnam: A Journey to an Enchanting Land. a country of stunning landscapes and rich cultural heritage.",
          author: "James Locc",
          publish: "Jan 18",
          cover: "/blog-cover/blog-cover-2.png",
        },
        {
          title:
            "Explore Vietnam: Top Destinations for an Unforgettable Adventure",
          desc: "One of the highlights was tasting cassava",
          author: "James Locc",
          publish: "Jan 18",
          cover: "/blog-cover/blog-cover-3.png",
        },
        {
          title: "Vietnamese Cuisine",
          desc: "Discovering Vietnam: A Journey to an Enchanting Land. a country of stunning landscapes and rich cultural heritage.",
          author: "James Locc",
          publish: "Jan 18",
          cover: "/blog-cover/blog-cover-4.png",
        },
      ],
    },
    {
      key: "Qulture Insights",
      icon: <Medal className="w-5 h-8" />,
      value: [
        {
          title: "An Introduction to Vietnam",
          desc: "Discovering Vietnam: A Journey to an Enchanting Land. a country of stunning landscapes and rich cultural heritage.",
          author: "James Locc",
          publish: "Jan 18",
          cover: "/blog-cover/blog-cover-1.png",
        },
        {
          title:
            "Exploring the Cu Chi Tunnels: A Family Adventure Through History",
          desc: "Discovering Vietnam: A Journey to an Enchanting Land. a country of stunning landscapes and rich cultural heritage.",
          author: "James Locc",
          publish: "Jan 18",
          cover: "/blog-cover/blog-cover-2.png",
        },
        {
          title:
            "Explore Vietnam: Top Destinations for an Unforgettable Adventure",
          desc: "One of the highlights was tasting cassava",
          author: "James Locc",
          publish: "Jan 18",
          cover: "/blog-cover/blog-cover-3.png",
        },
        {
          title: "Vietnamese Cuisine",
          desc: "Discovering Vietnam: A Journey to an Enchanting Land. a country of stunning landscapes and rich cultural heritage.",
          author: "James Locc",
          publish: "Jan 18",
          cover: "/blog-cover/blog-cover-4.png",
        },
      ],
    },
    {
      key: "Living the Qulture Way",
      icon: <MapPin className="w-5 h-8" />,
      value: [
        {
          title: "An Introduction to Vietnam",
          desc: "Discovering Vietnam: A Journey to an Enchanting Land. a country of stunning landscapes and rich cultural heritage.",
          author: "James Locc",
          publish: "Jan 18",
          cover: "/blog-cover/blog-cover-1.png",
        },
        {
          title:
            "Exploring the Cu Chi Tunnels: A Family Adventure Through History",
          desc: "Discovering Vietnam: A Journey to an Enchanting Land. a country of stunning landscapes and rich cultural heritage.",
          author: "James Locc",
          publish: "Jan 18",
          cover: "/blog-cover/blog-cover-2.png",
        },
        {
          title:
            "Explore Vietnam: Top Destinations for an Unforgettable Adventure",
          desc: "One of the highlights was tasting cassava",
          author: "James Locc",
          publish: "Jan 18",
          cover: "/blog-cover/blog-cover-3.png",
        },
        {
          title: "Vietnamese Cuisine",
          desc: "Discovering Vietnam: A Journey to an Enchanting Land. a country of stunning landscapes and rich cultural heritage.",
          author: "James Locc",
          publish: "Jan 18",
          cover: "/blog-cover/blog-cover-4.png",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col w-full shrink-0 gap-24">
      <Tabs defaultValue={tabData[0].key} className="px-7 py-10">
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
            <div className="flex flex-col gap-5 lg:max-w-3xl xxl:max-w-4xl w-full shrink-0">
              {tab.value.map((tabDetail, id) => (
                <BlogCard data={tabDetail} key={id} />
              ))}
            </div>
            <div className="flex-col gap-7 flex">
              <Image src='/extra/ad.png' alt="ad" width={569} height={330} />
              <Trending title="Trending" />
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
