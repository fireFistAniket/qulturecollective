import NewsLetter from "@/features/global/NewsLetter";
import Trending from "@/features/home/Trending";
import FeatureBlog from "@/features/MoreView/FeatureBlog";
import PoppularFoods from "@/features/MoreView/PoppularFoods";
import TrendingToday from "@/features/MoreView/TrendingToday";
import { Open_Sans } from "next/font/google";

const opensans = Open_Sans({
  display: "swap",
  subsets: ["latin"],
});

export default async function MoreView() {
  return (
    <div className={opensans.className}>
      <TrendingToday />
      <PoppularFoods />
      <section className="flex flex-col xl:flex-row items-center xl:items-stretch justify-center xl:px-28 xl:py-24">
        <FeatureBlog />
        <Trending title="Related Post" />
      </section>
      <NewsLetter />
    </div>
  );
}
