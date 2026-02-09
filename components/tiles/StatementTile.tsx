"use client";

import { motion, useReducedMotion } from "framer-motion";

type StatementTileProps = {
  eyebrow?: string;
  headline: string;
  subhead?: string;
  className?: string;
  accent?: boolean;
};

export default function StatementTile({
  eyebrow,
  headline,
  subhead,
  className = "",
  accent = false,
}: StatementTileProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className={`flex h-full flex-col justify-between border border-white/15 ${
        accent ? "bg-[#0A56FF]" : "bg-black"
      } ${className}`}
    >
      <div className="flex h-full flex-col justify-between p-5 sm:p-6">
        {eyebrow && (
          <div
            className={`text-xs tracking-[0.4em] ${
              accent ? "text-white" : "text-white/70"
            }`}
          >
            {eyebrow}
          </div>
        )}
        <div className="space-y-3">
          <div className="text-3xl font-bold leading-none tracking-[0.08em] sm:text-4xl lg:text-5xl">
            {headline}
          </div>
          {subhead && (
            <div
              className={`text-xs tracking-[0.25em] ${
                accent ? "text-white" : "text-white/60"
              }`}
            >
              {subhead}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
