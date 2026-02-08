"use client";

import WhoWhat from "@/components/sections/WhoWhat";
import YearsStatement from "@/components/sections/YearsStatement";

export default function AcademyPage() {
  return (
    <div className="bg-black text-white">
      <main>
        <YearsStatement />
        <WhoWhat />
      </main>
    </div>
  );
}
