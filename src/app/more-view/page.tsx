import NewsLetter from "@/features/global/NewsLetter";
import Trending from "@/features/home/Trending";
import FeatureBlog from "@/features/MoreView/FeatureBlog";
import PoppularFoods from "@/features/MoreView/PoppularFoods";
import TrendingToday from "@/features/MoreView/TrendingToday";

export default async function MoreView() {
  return (
    <>
      <TrendingToday />
      <PoppularFoods />
      <section className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center lg:px-28 lg:py-24">
        <FeatureBlog />
        <Trending title="Related Post" />
      </section>
      <NewsLetter />
    </>
  );
}
