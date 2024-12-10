import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
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
      <div className="flex flex-col gap-8 xl:gap-24 mx-7 xl:mx-40 my-16">
        <div className="flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-24">
          <Image
            src="/extra/ebook-cover.jpg"
            alt="company"
            width={698}
            height={623}
            className="w-[86.5vw] xl:w-[36.45vw] self-stretch object-cover"
          />
          <div className="flex flex-col items-center xl:items-stretch gap-2 xl:gap-5">
            <h2 className="text-[#002B4A] text-lg xl:text-3xl text-center xl:text-left">
              Learn how to grow your business
            </h2>
            <h1 className="text-2xl xl:text-4xl font-bold text-site-green text-center xl:text-left capitalize">
              top picks on business strategies e-books for you!
            </h1>
            <p className="text-[#002B4A] text-center xl:text-left text-base xl:text-2xl">
              Lorem ipsum dolor sit amet consectetur. Tellus consectetur vitae
              arcu interdum. A ut vits venenatis ornare. Risus sed magna Lorem
              ipsum dolor sit amet consectetur., Lorem ipsum dolor sit amet
              consectetur. Tellus consectetur vitae arcu interdum. A ut vits
              venenatis ornare. Risus sed magna Lorem ipsum dolor sit amet
              consectetur.
            </p>
            <button
              type="button"
              className="text-sm xl:text-lg font-medium text-white bg-site-green inline-flex items-center py-1 xl:py-4 px-7 gap-2 self-center xl:self-start capitalize"
            >
              <span>Explore Now</span>
              <MoveUpRight className="w-5 h-5" />
            </button>
            <div className="overflow-hidden overflow-x-scroll 2xl:overflow-visible pt-14 xl:pt-10">
              <div className="flex items-start gap-6 xl:gap-11">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full xl:mt-20"
                >
                  <CarouselContent>
                    {eBooks.map((img, index) => (
                      <CarouselItem
                        key={index}
                        className="basis-4/5 md:basis-1/2 xl:basis-1/3"
                      >
                        <div className="flex-shrink-0 scroll-smooth snap-x snap-mandatory relative">
                          <Image
                            src={img}
                            alt="ebooks"
                            width={280}
                            height={327}
                            className="w-[58.8vw] xl:w-[14.6vw] h-72 xl:h-80 object-cover"
                          />
                          <div className="bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0)_22.31%,_#000000_90.45%)] absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center gap-5">
                            <h1 className="text-2xl font-bold text-center text-white">
                              Best beaches
                            </h1>
                            <button
                              type="button"
                              className="text-sm xl:text-lg font-medium text-white bg-site-green inline-flex items-center py-1 px-7 gap-2 capitalize"
                            >
                              <span>view</span>
                            </button>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
