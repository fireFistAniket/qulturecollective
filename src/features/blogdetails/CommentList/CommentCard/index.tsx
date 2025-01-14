"use client";
import { Star } from "lucide-react";
import { useState } from "react";

export default function CommentCard({ comment }: { comment: any }) {
  console.log(comment);

  const [showFull, setShowFull] = useState<boolean>(false);

  function formatToDayMonth(timestamp: Date) {
    const date = new Date(timestamp);
    const day = date.getDate(); // Get the day of the month
    const month = date.toLocaleString("default", { month: "short" }); // Get the short month name
    return `${day} ${month}`;
  }

  return (
    <div className="shadow-[0px_0px_24.3px_12px_#CACACA40] rounded-lg flex flex-col gap-4 px-5 xl:px-10 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-between gap-4 xl:gap-9 ">
          <div className="size-8 rounded-full xl:size-12 flex items-center justify-center bg-blue-500 text-white font-semibold">
            {comment.attributes.username?.charAt(0).toUpperCase()}
          </div>
          <h1 className="text-xs xl:text-2xl text-site-black font-bold">
            {comment.attributes.username}
          </h1>
          <h3 className="text-xs xl:text-2xl font-bold">
            {formatToDayMonth(comment.attributes.createdAt)}
          </h3>
          <p className="text-xs xl:text-2xl font-bold px-3 xl:px-5 py-1 xl:py-2 rounded-sm text-site-black bg-[#6CB5A6]">
            Verified
          </p>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: comment.attributes.rating }).map((_, id) => (
            <Star
              className={`fill-[#ECBA0B] text-[#ECBA0B] size-4 xl:size-7`}
              key={id}
            />
          ))}
        </div>
      </div>
      <p
        className={`text-xs xl:text-2xl text-[#323232] ${
          showFull ? "line-clamp-none" : "line-clamp-3"
        }`}
      >
        {comment.attributes.remark}
      </p>
      <span
        className="text-xs xl:text-2xl font-bold text-site-green cursor-pointer"
        onClick={() => setShowFull(!showFull)}
      >
        Read More
      </span>
    </div>
  );
}
