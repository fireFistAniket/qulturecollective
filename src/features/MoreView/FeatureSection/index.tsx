"use client";
import Trending from "@/features/home/Trending";
import FeatureBlog from "../FeatureBlog";
import useElementHeight from "@/hooks/useElementHeight";

export default function FeatureSection({ catergory }: { catergory: string }) {
  const [trendingHeight, blogListsRef] = useElementHeight([]);
  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 px-4 md:px-14 xl:px-28 xl:py-24">
      <FeatureBlog ref={blogListsRef} />
      <Trending title="Related Post" height={trendingHeight} />
    </section>
  );
}
