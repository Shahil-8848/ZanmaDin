import type { Metadata } from "next";
import { Tenor_Sans, Reggae_One, Playfair_Display } from "next/font/google";
import "./globals.css";

const tenorSans = Tenor_Sans({
  weight: "400",
  variable: "--font-tenor",
  subsets: ["latin"],
});

const reggaeOne = Reggae_One({
  weight: "400",
  variable: "--font-reggae",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zanmadin — Celebrate Beautifully",
  description: "Beautifully packaged celebration moments delivered with love in Nepal and beyond.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${tenorSans.variable} ${reggaeOne.variable} ${playfair.variable} antialiased bg-[#074423] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
