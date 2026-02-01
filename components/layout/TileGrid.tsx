import type { ReactNode } from "react";

type TileGridProps = {
  children: ReactNode;
  className?: string;
};

export default function TileGrid({ children, className = "" }: TileGridProps) {
  return (
    <div
      className={`grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-7 lg:gap-8 ${className}`}
    >
      {children}
    </div>
  );
}
