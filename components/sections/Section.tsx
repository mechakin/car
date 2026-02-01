"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function Section({ children, className = "", id }: SectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={reduceMotion ? false : { opacity: 0 }}
      whileInView={reduceMotion ? undefined : { opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={`relative min-h-screen w-full ${className}`}
    >
      {children}
    </motion.section>
  );
}
