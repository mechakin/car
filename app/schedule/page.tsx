"use client";

import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import ScheduleForm from "@/components/sections/ScheduleForm";

export default function SchedulePage() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main className="pt-[5.5rem] sm:pt-[6.5rem]">
        <ScheduleForm
          image1="/images/schedule-form-1.jpg"
          image2="/images/schedule-form-2.jpg"
          image3="/images/schedule-form-3.jpg"
          image4="/images/schedule-form-4.jpg"
          image5="/images/schedule-form-5.jpg"
        />
      </main>
      <Footer />
    </div>
  );
}
