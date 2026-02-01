import Academy from "@/components/sections/Academy";
import BuiltByDreamers from "@/components/sections/BuiltByDreamers";
import HeroModelW from "@/components/sections/HeroModelW";
import HeroRocket from "@/components/sections/HeroRocket";
import HeroUriel from "@/components/sections/HeroUriel";
import ScheduleVisit from "@/components/sections/ScheduleVisit";
import StorageForm from "@/components/sections/StorageForm";
import StorageHero from "@/components/sections/StorageHero";
import WhoWhat from "@/components/sections/WhoWhat";
import YearsStatement from "@/components/sections/YearsStatement";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <main>
        <HeroRocket carImage="/images/rocket-hero.png" />
        <BuiltByDreamers backgroundImage="/images/built-by-dreamers-bg.png" />
        <HeroModelW
          carImage1="/images/model-w-car-1.png"
          carImage2="/images/model-w-car-2.png"
        />
        <Academy
          leftImage="/images/academy-left.png"
          middleImage="/images/academy-middle.png"
          rightImage="/images/academy-right.png"
        />
        <ScheduleVisit
          leftImage="/images/schedule-visit-left.png"
          rightImage="/images/schedule-visit-right.png"
        />
        <StorageHero backgroundImage="/images/storage-hero-bg.png" />
        <StorageForm
          leftImage="/images/storage-form-left.png"
          rightImage="/images/storage-form-right.png"
        />
        <YearsStatement />
        <WhoWhat />
        <HeroUriel
          carImage1="/images/uriel-car-1.png"
          carImage2="/images/uriel-car-2.png"
        />
      </main>
    </div>
  );
}
