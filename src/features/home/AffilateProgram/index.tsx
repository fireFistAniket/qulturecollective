import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MoveRight, MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function AffilateProgram() {
  return (
    <section className="flex items-center justify-center bg-[url('/background/affilate-bg.png')] bg-no-repeat bg-cover">
      <div className="flex flex-col gap-8 xl:gap-24 mx-7 xl:mx-40 my-16">
        <h1 className="text-2xl xl:text-5xl text-center font-bold text-site-green">
          Affiliate Program
        </h1>
        <div className="flex flex-col xl:flex-row-reverse xl:items-center gap-8 xl:gap-24">
          <Image
            src="/extra/affilate-cover.jpg"
            alt="company"
            width={698}
            height={623}
            className="w-[86.5vw] xl:w-[36.45vw]"
          />
          <div className="flex flex-col items-center xl:items-stretch gap-2 xl:gap-5">
            <h2 className="text-[#002B4A] text-lg xl:text-3xl text-center xl:text-left">
              Learn how to grow your business
            </h2>
            <h1 className="text-2xl xl:text-4xl font-bold text-[#1e1e1e] tracking-[0.01em] text-center xl:text-left capitalize">
              Affiliate program that fits{" "}
              <span className="text-site-green">everyone</span>
            </h1>
            <p className="text-[#002B4A] text-center xl:text-left text-base xl:text-2xl">
              Lorem ipsum dolor sit amet consectetur. Tellus consectetur vitae
              arcu interdum. A ut vits venenatis ornare. Risus sed magna Lorem
              ipsum dolor sit amet consectetur., Lorem ipsum dolor sit amet
              consectetur. Tellus consectetur vitae arcu interdum. A ut vits
              venenatis ornare. Risus sed magna Lorem ipsum dolor sit amet
              consectetur.
            </p>
            <Dialog>
              <DialogTrigger className="text-sm xl:text-lg font-medium text-white bg-site-green inline-flex items-center py-1 xl:py-4 px-7 gap-2 self-center xl:self-start capitalize">
                <span>join us now</span>
                <MoveUpRight className="w-5 h-5" />
              </DialogTrigger>
              <DialogContent className="">
                <DialogHeader>
                  <DialogTitle>
                    <div className="flex flex-col gap-1">
                      <h1 className="text-black font-semibold text-lg lg:text-xl">
                        Fill The Form Below To Download
                      </h1>
                      <p className="text-sm lg:text-base text-site-black/60">
                        You are almost there to download our E-Book.
                      </p>
                    </div>
                  </DialogTitle>
                  <DialogDescription className="flex flex-col gap-3 pt-5">
                    <Input
                      placeholder="Enter your full name"
                      type="text"
                      className="outline-none text-site-black/50 text-sm lg:text-base"
                    />
                    <Input
                      placeholder="Enter your email address"
                      type="email"
                      className="outline-none text-site-black/50 text-sm lg:text-base"
                    />
                    <Input
                      placeholder="Enter your phone number"
                      type="tel"
                      className="outline-none text-site-black/50 text-sm lg:text-base"
                    />
                    <Button className="text-white bg-site-green font-semibold text-sm lg:text-base self-start">
                      Join with us <MoveRight />
                    </Button>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
