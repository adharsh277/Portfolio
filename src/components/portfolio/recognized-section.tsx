"use client";

import { motion } from "framer-motion";
import { RecognizedLogoRotator } from "./recognized-logo-rotator";

export function RecognizedSection() {
  return (
    <motion.section
      className="p-3 mb-10"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-[0.22em] text-[color:var(--text-main)] text-center mb-8">Recognized and Certified by</h2>
      <div className="flex justify-center">
        <RecognizedLogoRotator />
      </div>
    </motion.section>
  );
}
