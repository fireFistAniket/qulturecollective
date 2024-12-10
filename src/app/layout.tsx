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
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Dominion",
    description: "Dominion made by Appifinty.",
    type: "website",
    images: [
      {
        url: "/favicon-96x96.png",
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
