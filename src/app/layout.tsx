import type { Metadata } from "next";
import { Oxygen } from "next/font/google";
import "./globals.css";
import WebsiteTemplate from "@/templates/WebsiteTemplate";

const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-oxygen-sans",
});

export const metadata: Metadata = {
  title: "Qulture Collective",
  description: "Qulture Collective made by Appifinty.",
  icons: {
    icon: [
      {
        url: "http://qulturecollective.vercel.app/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "http://qulturecollective.vercel.app/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
    ],
    shortcut: "http://qulturecollective.vercel.app/favicon.ico",
    apple: [
      {
        url: "http://qulturecollective.vercel.app/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  },
  manifest: "http://qulturecollective.vercel.app/site.webmanifest",
  openGraph: {
    title: "Qulture Collective",
    description: "Qulture Collective made by Appifinty.",
    type: "website",
    images: [
      {
        url: "http://qulturecollective.vercel.app/favicon-96x96.png",
        width: 96,
        height: 96,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oxygen.variable} antialiased`}>
        <WebsiteTemplate>{children}</WebsiteTemplate>
      </body>
    </html>
  );
}
