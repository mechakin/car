"use client";

import CustomBuildForm from "@/components/sections/CustomBuildForm";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

export default function CustomPage() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main className="pt-[5.5rem] sm:pt-[6.5rem]">
        <CustomBuildForm />
      </main>
      <Footer />
    </div>
  );
}
