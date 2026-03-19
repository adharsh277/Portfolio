"use client";

import { motion } from "framer-motion";

const layers = [
  "Neural telemetry streaming across regions",
  "GPU orchestration heatmaps adapting in real time",
  "Policy engines mutating rollout thresholds",
  "Distributed services converging on target SLO",
  "Autonomous remediation feedback loop stable",
  "Data contracts validated across platform boundaries",
];

export function InfiniteScrollStream() {
  return (
    <motion.section
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/25 p-6 sm:p-10 mb-16"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="pointer-events-none absolute inset-0 stars-layer" />
      <p className="relative z-10 text-xs uppercase tracking-[0.3em] text-[color:var(--text-dim)]">Infinite Data Stream</p>
      <div className="relative z-10 mt-6 space-y-4">
        {layers.map((layer, index) => (
          <motion.div
            key={layer}
            className="system-chip text-sm"
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            {layer}
          </motion.div>
        ))}
      </div>
      <motion.div
        className="absolute -bottom-16 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--crimson),transparent_70%)] opacity-20"
        animate={{ scale: [1, 1.18, 1], opacity: [0.18, 0.3, 0.18] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
      />
    </motion.section>
  );
}
