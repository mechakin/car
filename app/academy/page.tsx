"use client";

import AcademyForm from "@/components/sections/AcademyForm";

export default function AcademyPage() {
  return (
    <div className="bg-black text-white">
      <main>
        <AcademyForm
          image1="/images/academy-form-1.png"
          image2="/images/academy-form-2.png"
          image3="/images/academy-form-3.png"
          image4="/images/academy-form-4.png"
          image5="/images/academy-form-5.png"
          image6="/images/academy-form-6.png"
        />
      </main>
    </div>
  );
}
