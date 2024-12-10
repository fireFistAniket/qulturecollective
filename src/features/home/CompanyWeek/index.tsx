import { MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function CompanyWeek() {
  return (
    <section className="flex items-center justify-center bg-[url('/background/rewarded-company-bg.png')] bg-no-repeat bg-cover">
      <div className="flex flex-col gap-8 xl:gap-24 mx-7 xl:mx-40 my-16 bg-white/50">
        <h1 className="text-2xl xl:text-5xl text-center font-bold text-site-green">
          Company of the week
        </h1>
        <div className="flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-24">
          <Image
            src="/extra/ng-solution.png"
            alt="company"
            width={698}
            height={623}
            className="w-[86.5vw] xl:w-[36.45vw]"
          />
          <div className="flex flex-col items-center xl:items-stretch gap-2 xl:gap-5">
            <h2 className="text-[#002B4A] text-lg xl:text-3xl text-center xl:text-left">
              Celebrating excellence and business
            </h2>
            <h1 className="text-2xl xl:text-4xl font-bold text-[#1e1e1e] tracking-[0.01em] text-center xl:text-left capitalize">
              NG solution: This week&apos;s{" "}
              <span className="text-site-green">most rewarded company!</span>
            </h1>
            <p className="text-[#002B4A] text-center xl:text-left text-base xl:text-2xl">
              Lorem ipsum dolor sit amet consectetur. Tellus consectetur vitae
              arcu interdum. A ut vits venenatis ornare. Risus sed magna Lorem
              ipsum dolor sit amet consectetur., Lorem ipsum dolor sit amet
              consectetur. Tellus consectetur vitae arcu interdum.
            </p>
            <button
              type="button"
              className="text-sm xl:text-lg font-medium text-white bg-site-green inline-flex items-center py-1 xl:py-4 px-7 gap-2 self-center xl:self-start capitalize"
            >
              <span>visit Now</span>
              <MoveUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
