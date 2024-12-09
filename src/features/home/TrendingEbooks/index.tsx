import { MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function TrendingEbooks() {
  const eBooks = [
    "/ebooks/ebook-cover-1.jpg",
    "/ebooks/ebook-cover-2.jpg",
    "/ebooks/ebook-cover-3.jpg",
  ];
  return (
    <section className="flex items-center justify-center bg-[url('/background/affilate-bg.png')] bg-no-repeat bg-cover">
      <div className="flex flex-col gap-8 lg:gap-24 mx-7 lg:mx-40 my-16">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-24">
          <Image
            src="/extra/ebook-cover.jpg"
            alt="company"
            width={698}
            height={623}
            className="w-[86.5vw] lg:w-[36.45vw] self-stretch object-cover"
          />
          <div className="flex flex-col items-center lg:items-stretch gap-2 lg:gap-5">
            <h2 className="text-[#002B4A] text-lg lg:text-3xl text-center lg:text-left">
              Learn how to grow your business
            </h2>
            <h1 className="text-2xl lg:text-4xl font-bold text-site-green text-center lg:text-left capitalize">
              top picks on business strategies e-books for you!
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
              <span>Explore Now</span>
              <MoveUpRight className="w-5 h-5" />
            </button>
            <div className="overflow-hidden overflow-x-scroll max-w-[85vw]">
              <div className="flex items-start w-full gap-6 lg:gap-11">
                {eBooks.map((img, id) => (
                  <div
                    key={id}
                    className="flex-shrink-0 scroll-smooth snap-x snap-mandatory relative"
                  >
                    <Image
                      src={img}
                      alt="ebooks"
                      width={280}
                      height={327}
                      className="w-[58.8vw] lg:w-[14.6vw] h-72 lg:h-80 object-cover"
                    />
                    <div className="bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0)_22.31%,_#000000_90.45%)] absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center gap-5">
                      <h1 className="text-2xl font-bold text-center text-white">
                        Best beaches
                      </h1>
                      <button
                        type="button"
                        className="text-sm lg:text-lg font-medium text-white bg-site-green inline-flex items-center py-1 px-7 gap-2 capitalize"
                      >
                        <span>view</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
