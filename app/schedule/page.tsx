"use client";

import ScheduleForm from "@/components/sections/ScheduleForm";

export default function SchedulePage() {
  return (
    <div className="bg-black text-white">
      <main>
        <ScheduleForm
          image1="/images/schedule-form-1.jpg"
          image2="/images/schedule-form-2.jpg"
          image3="/images/schedule-form-3.jpg"
          image4="/images/schedule-form-4.jpg"
          image5="/images/schedule-form-5.jpg"
        />
      </main>
    </div>
  );
}
