"use client";

import AcademyForm from "@/components/sections/AcademyForm";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

export default function AcademyPage() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main className="pt-[5.5rem] sm:pt-[6.5rem]">
        <AcademyForm
          image1="/images/academy-form-1.jpg"
          image2="/images/academy-form-2.jpg"
          image3="/images/academy-form-3.jpg"
          image4="/images/academy-form-4.jpg"
          image5="/images/academy-form-5.jpg"
          image6="/images/academy-form-6.jpg"
        />
      </main>
      <Footer />
    </div>
  );
}
