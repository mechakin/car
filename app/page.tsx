import Academy from "@/components/sections/Academy";
import BuiltByDreamers from "@/components/sections/BuiltByDreamers";
import ScheduleVisit from "@/components/sections/ScheduleVisit";
import StorageForm from "@/components/sections/StorageForm";
import StorageHero from "@/components/sections/StorageHero";
import WhoWhat from "@/components/sections/WhoWhat";
import YearsStatement from "@/components/sections/YearsStatement";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <main>
        <BuiltByDreamers backgroundImage="/images/built-by-dreamers-bg.jpg" />
        <Academy
          logoImage="/images/academy-logo.png"
          workshopImage="/images/academy-workshop.png"
        />
        <ScheduleVisit
          leftImage="/images/schedule-visit-left.png"
          rightImage="/images/schedule-visit-right.png"
        />
        <StorageHero backgroundImage="/images/storage-hero-bg.png" />
        <StorageForm
          image1="/images/storage-form-left.png"
          image2="/images/storage-form-right.png"
          image3="/images/storage-form-left.png"
          image4="/images/storage-form-right.png"
        />
        <YearsStatement />
        <WhoWhat />
      </main>
    </div>
  );
}
