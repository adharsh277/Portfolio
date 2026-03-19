"use client";

import { testimonials } from "@/data/portfolio-data";
import { motion } from "framer-motion";

export function TestimonialsSection() {
  return (
    <motion.section
      className="panel-glass p-6 mb-16"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-dim)]">Industry Voices</p>
      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item} className="rounded-xl border border-white/10 bg-black/25 p-4 text-sm text-[color:var(--text-dim)]">
            {item}
          </article>
        ))}
      </div>
    </motion.section>
  );
}
