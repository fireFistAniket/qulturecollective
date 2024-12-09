import NewsLetter from "@/features/global/NewsLetter";
import AffilateProgram from "@/features/home/AffilateProgram";
import CompanyWeek from "@/features/home/CompanyWeek";
import FantasticDeals from "@/features/home/FantasticDeals";
import Slider from "@/features/home/Slider";
import TopBlogs from "@/features/home/TopBlogs";
import TopMerchandise from "@/features/home/TopMerchandise";
import Trending from "@/features/home/Trending";
import TrendingEbooks from "@/features/home/TrendingEbooks";

export default async function Home() {
  return (
    <>
      <Slider />
      <section className="flex flex-col lg:flex-row items-center justify-center lg:px-32 lg:py-24">
        <TopBlogs />
        <Trending title="Trending" />
      </section>
      <TopMerchandise />
      <TrendingEbooks />
      <AffilateProgram />
      <CompanyWeek />
      <FantasticDeals />
      <NewsLetter />
    </>
  );
}
