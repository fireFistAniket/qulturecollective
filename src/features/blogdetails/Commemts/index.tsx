import { Star } from "lucide-react";

export default function Comments() {
  return (
    <section className="flex flex-col gap-5 lg:gap-10 px-4 lg:px-28 py-6">
      <h1 className="text-base lg:text-5xl font-semibold text-[#1f1f1f] italic">
        Comments and Ratings
      </h1>
      <div className="flex flex-col p-4 bg-[#F6F6F6] rounded-lg gap-3 lg:gap-6">
        <h1 className="text-[#010101] text-sm lg:text-3xl font-semibold">
          Rate this content
        </h1>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, id) => (
            <Star
              className={`fill-[#EBEBEB] text-[#EBEBEB] stroke-[#D1D1D1] size-4 lg:size-7`}
              key={id}
            />
          ))}
        </div>
        <div className="flex items-start gap-3">
          <textarea
            placeholder="Type Your Comment"
            rows={5}
            className="p-2 lg:p-6 outline-none rounded-lg flex-1 text-xs lg:text-2xl"
          ></textarea>
          <button
            type="button"
            className="text-white text-xs lg:text-2xl bg-site-green px-6 py-2 lg:py-3 rounded-lg"
          >
            Publish
          </button>
        </div>
      </div>
    </section>
  );
}
