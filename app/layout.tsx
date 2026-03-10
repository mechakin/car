import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import FontLoader from "@/components/FontLoader";
import ViewportHeight from "@/components/ViewportHeight";
import "./globals.css";

const centuryGothic = localFont({
  src: [
    { path: "../public/fonts/CenturyGothic.ttf", weight: "400" },
    { path: "../public/fonts/CenturyGothic-Bold.ttf", weight: "700" },
  ],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  title: "West Coast Customs",
  description: "Luxury automotive customization and storage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`antialiased overflow-x-hidden ${centuryGothic.className}`}>
        <FontLoader />
        <ViewportHeight />
        {children}
      </body>
    </html>
  );
}
