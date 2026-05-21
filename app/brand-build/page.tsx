"use client";

import BrandBuildHero from "@/components/sections/BrandBuildHero";
import BrandBuildInfo from "@/components/sections/BrandBuildInfo";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

const BRAND_BUILD_4148 = "/images/brand-builds/brand-build-4148.png";

export default function BrandBuildPage() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main className="pt-[5.5rem] sm:pt-[6.5rem]">
        <BrandBuildHero backgroundImage={BRAND_BUILD_4148} />
        <BrandBuildInfo />
      </main>
      <Footer />
    </div>
  );
}
