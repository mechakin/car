"use client";

import BrandBuildInfo from "@/components/sections/BrandBuildInfo";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

export default function BrandBuildPage() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main className="pt-[5.5rem] sm:pt-[6.5rem]">
        <BrandBuildInfo />
      </main>
      <Footer />
    </div>
  );
}
