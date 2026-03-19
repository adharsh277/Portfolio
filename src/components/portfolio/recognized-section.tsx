"use client";

import { motion } from "framer-motion";
import { RecognizedLogoRotator } from "./recognized-logo-rotator";

export function RecognizedSection() {
  return (
    <motion.section
      className="p-6 mb-16"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-[0.3em] text-[color:var(--text-main)] text-center mb-8">Recognized and Certified by</h2>
      <div className="flex justify-center">
        <RecognizedLogoRotator />
      </div>
    </motion.section>
  );
}
