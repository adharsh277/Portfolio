"use client";

import { certifications } from "@/data/portfolio-data";
import { motion } from "framer-motion";

export function RecognizedSection() {
  return (
    <motion.section
      className="panel-neu p-6 mb-16"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-dim)]">Recognized and Certified by</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((name) => (
          <div key={name} className="system-chip flex h-12 items-center justify-center text-xs uppercase tracking-[0.18em]">
            {name}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
