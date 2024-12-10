import TrendingCard from "./TrendingCard";

export default function Trending({ title }: { title: string }) {
  const trendingData = [
    {
      title: "The Food Tour Experience, Pho, from Chinatown",
      author: "James Locc",
      publish: "Jan 18",
      rating: "4.4",
      cover: "/trending/trending-cover-1.png",
    },
    {
      title: "A Tapestry of History and Culture",
      author: "James Locc",
      publish: "Jan 08",
      rating: "4.2",
      cover: "/trending/trending-cover-2.png",
    },
    {
      title: "Natural Wonders Await",
      author: "James Locc",
      publish: "Jan 08",
      rating: "3.9",
      cover: "/trending/trending-cover-3.png",
    },
    {
      title: "Vietnam's climate varies dramatically from north to south.",
      author: "James Locc",
      publish: "Jan 08",
      rating: "3.5",
      cover: "/trending/trending-cover-4.png",
    },
    {
      title: "The Food Tour Experience, Pho, from Chinatown",
      author: "James Locc",
      publish: "Jan 18",
      rating: "4.4",
      cover: "/trending/trending-cover-1.png",
    },
    {
      title: "A Tapestry of History and Culture",
      author: "James Locc",
      publish: "Jan 08",
      rating: "4.2",
      cover: "/trending/trending-cover-2.png",
    },
    {
      title: "Natural Wonders Await",
      author: "James Locc",
      publish: "Jan 08",
      rating: "3.9",
      cover: "/trending/trending-cover-3.png",
    },
    {
      title: "Vietnam's climate varies dramatically from north to south.",
      author: "James Locc",
      publish: "Jan 08",
      rating: "3.5",
      cover: "/trending/trending-cover-4.png",
    },
  ];
  return (
    <div className="flex flex-col gap-10 py-10 xl:border xl:border-[#d2d2d2] xl:px-6 max-w-xl w-full">
      <h1 className="text-2xl xl:text-left text-center text-site-green font-bold">
        {title}
      </h1>
      <div className="flex flex-col gap-9 xl:px-7 justify-between shrink-0 xl:overflow-hidden !overflow-y-scroll xl:max-h-[64.125rem]">
        {trendingData.map((trend, index) => (
          <TrendingCard data={trend} key={index} />
        ))}
      </div>
    </div>
  );
}
