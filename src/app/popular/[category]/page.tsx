// import NewsLetter from "@/features/global/NewsLetter";
import FeatureSection from "@/features/MoreView/FeatureSection";
import PoppularFoods from "@/features/MoreView/PoppularFoods";
import TrendingToday from "@/features/MoreView/TrendingToday";
import { Open_Sans } from "next/font/google";

const opensans = Open_Sans({
  display: "swap",
  subsets: ["latin"],
});

export default async function MoreView({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const category = (await params).category;
  
  return (
    <div className={opensans.className}>
      <TrendingToday category={category} />
      <PoppularFoods category={category} />
      <FeatureSection catergory={category} />
      {/* <NewsLetter /> */}
    </div>
  );
}
