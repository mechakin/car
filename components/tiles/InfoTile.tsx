"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type InfoTileProps = {
  title: string;
  body: ReactNode;
  className?: string;
};

export default function InfoTile({ title, body, className = "" }: InfoTileProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className={`flex h-full flex-col gap-4 border border-white/15 bg-black p-5 sm:p-6 ${className}`}
    >
      <div className="text-sm font-semibold tracking-[0.3em]">{title}</div>
      <div className="text-xs uppercase leading-relaxed tracking-[0.15em] text-white/70">
        {body}
      </div>
    </motion.article>
  );
}
