// import NewsLetter from "@/features/global/NewsLetter";
import AffilateProgram from "@/features/home/AffilateProgram";
import CompanyWeek from "@/features/home/CompanyWeek";
import FantasticDeals from "@/features/home/FantasticDeals";
import Slider from "@/features/home/Slider";
import TopMerchandise from "@/features/home/TopMerchandise";
import TrendingEbooks from "@/features/home/TrendingEbooks";
import dynamic from "next/dynamic";

const TopBlogs = dynamic(() => import("@/features/home/TopBlogs"));
export default async function Home() {
  return (
    <>
      <Slider />
      <section className="flex 2xl:px-32 xl:py-24">
        <TopBlogs />
      </section>
      <TopMerchandise />
      <TrendingEbooks />
      <AffilateProgram />
      <CompanyWeek />
      <FantasticDeals />
      {/* <NewsLetter /> */}
    </>
  );
}
