import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CommentCard() {
  return (
    <div className="shadow-[0px_0px_24.3px_12px_#CACACA40] rounded-lg flex flex-col gap-4 px-5 lg:px-10 py-4">
      <div className="flex justify-between items-center">
        <Image
          src="/extra/comment-profile.jpg"
          alt="profile picture"
          width={48}
          height={48}
          className="size-8 rounded-full lg:size-12"
        />
        <h1 className="text-xs lg:text-2xl text-site-black font-bold">
          ALex92
        </h1>
        <h3 className="text-xs lg:text-2xl font-bold">22 Jul</h3>
        <p className="text-xs lg:text-2xl font-bold px-3 lg:px-5 py-1 lg:py-2 rounded-sm text-site-black bg-[#6CB5A6]">
          Verified
        </p>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, id) => (
            <Star
              className={`fill-[#ECBA0B] text-[#ECBA0B] size-4 lg:size-7`}
              key={id}
            />
          ))}
        </div>
      </div>
      <p className="text-xs lg:text-2xl text-[#323232]">
        KaiB was amazing with our cats!! 🌟🌟🌟 This was our first time using a
        pet-sitting service, so we were naturally quite anxious. We took a
        chance on Kai and completely lucked out! We booked Kai to come twice a
        day for three days. Kai spent a considerable amount of time playing and
        engaging with our cats. She also sent us very funny and detailed reports
        at the end of each session. She truly gave us peace of mind while on
        holiday, knowing our furbabies were in good hands. We also kept looking
        forward to her cute updates! You can tell she&apos;s a natural with
        animals. I&apos;d definitely book her again. Highly recommended!
      </p>
      <Link
        href="/blogdetails"
        className="text-xs lg:text-2xl font-bold text-site-green self-start lg:self-end"
      >
        Read More
      </Link>
    </div>
  );
}
