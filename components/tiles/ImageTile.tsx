"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type ImageTileProps = {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  className?: string;
};

export default function ImageTile({
  src,
  alt,
  title,
  subtitle,
  className = "",
}: ImageTileProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className={`group relative overflow-hidden border border-white/15 bg-black ${className}`}
    >
      <motion.div
        className="absolute inset-0"
        whileHover={reduceMotion ? undefined : { scale: 1.03 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
          className="object-cover"
          priority={false}
        />
      </motion.div>
      {(title || subtitle) && (
        <div className="relative z-10 flex h-full flex-col justify-between p-4 uppercase text-white sm:p-5">
          <div className="text-xs tracking-[0.3em] text-white">
            {subtitle}
          </div>
          <div className="text-sm font-semibold tracking-[0.25em]">
            {title}
          </div>
        </div>
      )}
    </motion.article>
  );
}
