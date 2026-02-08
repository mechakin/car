"use client";

import ScheduleForm from "@/components/sections/ScheduleForm";

export default function SchedulePage() {
  return (
    <div className="bg-black text-white">
      <main>
        <ScheduleForm
          image1="/images/storage-form-1.png"
          image2="/images/storage-form-2.png"
          image3="/images/storage-form-3.png"
          image4="/images/storage-form-4.png"
        />
      </main>
    </div>
  );
}
