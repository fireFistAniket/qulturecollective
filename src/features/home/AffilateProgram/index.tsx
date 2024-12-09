import { MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function AffilateProgram() {
  return (
    <section className="flex items-center justify-center bg-[url('/background/affilate-bg.png')] bg-no-repeat bg-cover">
      <div className="flex flex-col gap-8 lg:gap-24 mx-7 lg:mx-40 my-16">
        <h1 className="text-2xl lg:text-5xl text-center font-bold text-site-green">
          Affiliate Program
        </h1>
        <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-8 lg:gap-24">
          <Image
            src="/extra/affilate-cover.jpg"
            alt="company"
            width={698}
            height={623}
            className="w-[86.5vw] lg:w-[36.45vw]"
          />
          <div className="flex flex-col items-center lg:items-stretch gap-2 lg:gap-5">
            <h2 className="text-[#002B4A] text-lg lg:text-3xl text-center lg:text-left">
              Learn how to grow your business
            </h2>
            <h1 className="text-2xl lg:text-4xl font-bold text-[#1e1e1e] tracking-[0.01em] text-center lg:text-left capitalize">
              Affiliate program that fits{" "}
              <span className="text-site-green">everyone</span>
            </h1>
            <p className="text-[#002B4A] text-center lg:text-left text-base lg:text-2xl">
              Lorem ipsum dolor sit amet consectetur. Tellus consectetur vitae
              arcu interdum. A ut vits venenatis ornare. Risus sed magna Lorem
              ipsum dolor sit amet consectetur., Lorem ipsum dolor sit amet
              consectetur. Tellus consectetur vitae arcu interdum. A ut vits
              venenatis ornare. Risus sed magna Lorem ipsum dolor sit amet
              consectetur.
            </p>
            <button
              type="button"
              className="text-sm lg:text-lg font-medium text-white bg-site-green inline-flex items-center py-1 lg:py-4 px-7 gap-2 self-center lg:self-start capitalize"
            >
              <span>join us now</span>
              <MoveUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
