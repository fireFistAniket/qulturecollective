"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navlinks } from "@/helpers/navlinks";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AlignLeft, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const isActiveRoute = (href: string) => {
    return pathname === href ? true : false;
  };

  return (
    <motion.header className="fixed top-0 z-50 w-full bg-site-green flex xl:justify-center">
      <div className="xl:container w-full flex py-3 items-center gap-8 xxl:gap-0 justify-between px-4 md:px-6 ">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full xl:hidden"
            >
              <AlignLeft className="h-8 w-8 text-[#FEFAE0]" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetTitle className="hidden"></SheetTitle>
          <SheetContent
            side="left"
            className="xl:hidden bg-site-green flex items-center justify-center"
          >
            <div className="grid gap-14 p-4 place-items-center">
              {navlinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`text-xl ${
                    isActiveRoute(link.href)
                      ? "text-white font-semibold"
                      : "text-white font-normal"
                  }`}
                  prefetch={false}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          {/* <Logo className="h-16 w-80 text-[#FEFAE0]" /> */}
          <Image
            src="/logo.png"
            width={302}
            height={63}
            alt="logo"
            className="w-[29.6vw] xl:w-[8.8vw]"
          />
          <span className="sr-only">Dominion</span>
        </Link>
        <nav className="hidden items-center gap-6 xl:flex">
          {navlinks.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className={`text-white hover:underline hover:font-semibold text-base font-normal ${
                isActiveRoute(link.href) ? "underline font-semibold" : ""
              }`}
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="block xl:hidden"></div>
        <div className="hidden xl:flex items-center gap-4">
          <Link href="">
            <Facebook className="text-white fill-white text-sm" />
          </Link>
          <Link href="">
            <Linkedin className="text-white fill-white text-sm" />
          </Link>
          <Link href="">
            <Instagram className="text-white text-sm" />
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
