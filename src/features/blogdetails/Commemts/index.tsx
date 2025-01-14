"use client";
import { submitComment } from "@/actions/handelComments";
import { Star } from "lucide-react";
import { useState } from "react";

export default function Comments({ blogId }: { blogId: string }) {
  const [selectedRating, setSelectedRating] = useState(0);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  const handleStarClick = (index: number) => {
    setSelectedRating(index + 1); // Ratings start from 1
  };

  return (
    <section className="flex flex-col gap-5 xl:gap-10 px-4 xl:px-28 py-6">
      <h1 className="text-base xl:text-5xl font-semibold text-[#1f1f1f] italic">
        Comments and Ratings
      </h1>
      <div className="flex flex-col p-4 bg-[#F6F6F6] rounded-lg gap-3 xl:gap-6">
        <h1 className="text-[#010101] text-sm xl:text-3xl font-semibold">
          Rate this content
        </h1>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              onClick={() => handleStarClick(index)}
              className={`cursor-pointer size-4 xl:size-14 ${
                index < selectedRating
                  ? "fill-[#FFD700] text-[#FFD700] stroke-[#FFD700]" // Highlight selected stars
                  : "fill-[#EBEBEB] text-[#EBEBEB] stroke-[#D1D1D1]" // Default style
              }`}
            />
          ))}
        </div>
        <div className="flex flex-col gap-3 xl:gap-8">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 xl:p-6 outline-none rounded-lg flex-1 text-xs xl:text-2xl xl:mr-64"
          />
          <textarea
            placeholder="Type Your Comment"
            value={comment}
            rows={5}
            onChange={(e) => setComment(e.target.value)}
            className="p-2 xl:p-6 outline-none rounded-lg flex-1 text-xs xl:text-2xl xl:mr-64"
          ></textarea>
          <button
            type="button"
            className="text-white text-xs xl:text-2xl bg-site-green px-6 py-2 xl:py-3 rounded-lg self-start"
            onClick={async () => {
              await submitComment(name, blogId, comment, selectedRating);
              setName("");
              setComment("");
              setSelectedRating(0);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}
