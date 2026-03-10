"use client";

import BrandBuildForm from "@/components/sections/BrandBuildForm";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

export default function BrandBuildFormPage() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main className="pt-[5.5rem] sm:pt-[6.5rem]">
        <BrandBuildForm />
      </main>
      <Footer />
    </div>
  );
}
