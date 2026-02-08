import type { Metadata } from "next";
import FontLoader from "@/components/FontLoader";
import "./globals.css";

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
    <html lang="en" className="overflow-x-hidden w-full">
      <body className="antialiased overflow-x-hidden w-full max-w-full">
        <FontLoader />
        {children}
      </body>
    </html>
  );
}
