"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function CommentCard() {
  const [showFull, setShowFull] = useState<boolean>(false);
  return (
    <div className="shadow-[0px_0px_24.3px_12px_#CACACA40] rounded-lg flex flex-col gap-4 px-5 xl:px-10 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-between gap-4 xl:gap-9 ">
          <Image
            src="/extra/comment-profile.jpg"
            alt="profile picture"
            width={48}
            height={48}
            className="size-8 rounded-full xl:size-12"
          />
          <h1 className="text-xs xl:text-2xl text-site-black font-bold">
            ALex92
          </h1>
          <h3 className="text-xs xl:text-2xl font-bold">22 Jul</h3>
          <p className="text-xs xl:text-2xl font-bold px-3 xl:px-5 py-1 xl:py-2 rounded-sm text-site-black bg-[#6CB5A6]">
            Verified
          </p>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, id) => (
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
        KaiB was amazing with our cats!! 🌟🌟🌟 This was our first time using a
        pet-sitting service, so we were naturally quite anxious. We took a
        chance on Kai and completely lucked out! We booked Kai to come twice a
        day for three days. Kai spent a considerable amount of time playing and
        engaging with our cats. She also sent us very funny and detailed reports
        at the end of each session. She truly gave us peace of mind while on
        holiday, knowing our furbabies were in good hands. We also kept looking
        forward to her cute updates! You can tell she&apos;s a natural with
        animals. I&apos;d definitely book her again. Highly recommended!{" "}
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
