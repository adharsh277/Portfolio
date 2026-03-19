"use client";

import { motion } from "framer-motion";
import { identity } from "@/data/portfolio-data";
import { NeuralCoreCanvas } from "@/components/portfolio/neural-core-canvas";

export function HeroCore() {
  return (
    <motion.section
      className="relative flex min-h-screen items-center justify-center overflow-hidden mb-16"
      id="hero-core"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,54,149,0.18),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(184,66,250,0.18),transparent_45%),linear-gradient(140deg,#060509,#101018_55%,#060509)]" />
      <div className="absolute inset-0 data-grid opacity-40" />
      <NeuralCoreCanvas />

      <motion.div
        className="relative z-20 mx-auto max-w-6xl px-6 text-center"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-[0.34em] text-[color:var(--text-dim)]">{identity.badge}</p>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[color:var(--text-main)] sm:text-7xl lg:text-8xl">{identity.name}</h1>
        <p className="mx-auto mt-4 max-w-4xl text-lg text-[color:var(--text-dim)] sm:text-3xl">{identity.headline}</p>
        <p className="mt-6 text-sm uppercase tracking-[0.24em] text-[color:var(--violet)] sm:text-base">Platform Engineer</p>

        <div className="mx-auto mt-10 w-full max-w-3xl px-5 py-5 sm:px-7 sm:py-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--text-dim)]">AI Core Boot Interface</p>
          <h2 className="mt-3 text-xl font-semibold text-[color:var(--text-main)] sm:text-4xl">Initializing AI Infrastructure Engine...</h2>
          <p className="mt-3 text-xs uppercase tracking-[0.22em] text-[color:var(--text-dim)] sm:text-sm">Loading Neural Systems...</p>
          <p className="mt-4 text-[10px] uppercase tracking-[0.24em] text-[color:var(--text-dim)] sm:text-xs">Signal matrix :: quantum relay :: node lattice</p>
        </div>
      </motion.div>
    </motion.section>
  );
}
