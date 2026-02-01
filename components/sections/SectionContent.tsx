"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type SectionContentProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function SectionContent({
  children,
  className = "",
  delay = 0,
}: SectionContentProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
