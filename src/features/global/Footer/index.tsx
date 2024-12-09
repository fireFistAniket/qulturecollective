import { footerlinks } from "@/helpers/footerlinks";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#031A15] flex flex-col gap-6 px-11 py-6">
      <div className="flex flex-col lg:flex-row justify-between gap-16">
        <div>
          <Image
            src="/logo.png"
            alt="logo"
            width={320}
            height={102}
            className="w-[68.5vw] lg:w-[16.66vw]"
          />
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-white text-lg font-bold">Resources</h2>
          <ul className="flex flex-col gap-5">
            {footerlinks.map((link, index) => (
              <li className="text-lg text-[#ffe8d4]" key={index}>
                {link.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-white text-lg font-bold">Resources</h2>
          <ul className="flex flex-col gap-5">
            {footerlinks.map((link, index) => (
              <li className="text-lg text-[#ffe8d4]" key={index}>
                {link.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-white text-lg font-bold">Resources</h2>
          <ul className="flex flex-col gap-5">
            {footerlinks.map((link, index) => (
              <li className="text-lg text-[#ffe8d4]" key={index}>
                {link.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full h-0.5 bg-[#c5c5c5]"></div>
      <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-3">
        <div className="flex items-center gap-4">
          <Link href="">
            <Facebook className="text-white text-sm" />
          </Link>
          <Link href="">
            <Linkedin className="text-white text-sm" />
          </Link>
          <Link href="">
            <Instagram className="text-white text-sm" />
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <h1 className="text-white text-base text-center">
            2024 Logo Inc. All Rights reserved
          </h1>
          <div className="flex items-center gap-9">
            <p className="text-sm text-white/50">Privacy Policy</p>
            <p className="text-sm text-white/50">Terms &amp; Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
