import Academy from "@/components/sections/Academy";
import BuiltByDreamers from "@/components/sections/BuiltByDreamers";
import ScheduleVisit from "@/components/sections/ScheduleVisit";
import StorageHero from "@/components/sections/StorageHero";
import YearsStatement from "@/components/sections/YearsStatement";
import WhoWhat from "@/components/sections/WhoWhat";

export default function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden w-full">
      <main className="overflow-x-hidden w-full">
        <BuiltByDreamers backgroundImage="/images/built-by-dreamers-bg.jpg" />
        <YearsStatement />
        <WhoWhat />
        <Academy
          logoImage="/images/academy-logo.png"
          workshopImage="/images/academy-workshop.png"
        />
        <ScheduleVisit
          leftImage="/images/schedule-visit-left.png"
          rightImage="/images/schedule-visit-right.png"
        />
        <StorageHero backgroundImage="/images/storage-hero-bg.png" />
      </main>
    </div>
  );
}
