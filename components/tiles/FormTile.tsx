"use client";

import { motion, useReducedMotion } from "framer-motion";

type FormTileProps = {
  title: string;
  className?: string;
};

export default function FormTile({ title, className = "" }: FormTileProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className={`flex h-full flex-col justify-between border border-white/15 bg-black p-5 sm:p-6 ${className}`}
    >
      <div className="text-sm font-semibold tracking-[0.3em]">{title}</div>
      <form className="mt-6 space-y-3 text-xs">
        <input
          type="text"
          placeholder="NAME"
          className="w-full border border-white/30 bg-black px-3 py-2 uppercase tracking-[0.2em] text-white placeholder-white/50 outline-none transition focus:border-[#0A56FF]"
        />
        <input
          type="email"
          placeholder="EMAIL"
          className="w-full border border-white/30 bg-black px-3 py-2 uppercase tracking-[0.2em] text-white placeholder-white/50 outline-none transition focus:border-[#0A56FF]"
        />
        <button
          type="button"
          className="w-full bg-[#0A56FF] px-3 py-2 text-[0.65rem] font-semibold tracking-[0.35em] text-white"
        >
          SUBMIT
        </button>
      </form>
    </motion.article>
  );
}
