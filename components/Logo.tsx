import Image from "next/image";

type LogoProps = {
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/images/w-logo.png"
        alt="West Coast Customs Logo"
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
      />
      <span className="text-sm font-semibold uppercase text-white">
        WEST COAST CUSTOMS
      </span>
    </div>
  );
}
