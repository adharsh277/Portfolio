"use client";

import { motion } from "framer-motion";

type BootLoaderProps = {
  ready: boolean;
  onEnter: () => void;
};

export function BootLoader({ ready, onEnter }: BootLoaderProps) {
  if (!ready) {
    return (
      <motion.div
        className="fixed inset-0 z-[90] flex flex-col justify-center gap-3 bg-[color:var(--bg-base)] px-6"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--text-dim)]">Boot Sequence</p>
        <motion.p
          className="text-lg font-semibold text-[color:var(--text-main)] sm:text-2xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          Initializing AI Infrastructure Engine...
        </motion.p>
        <motion.p
          className="text-sm text-[color:var(--text-dim)] sm:text-base"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.35 }}
        >
          Loading Neural Systems...
        </motion.p>
        <div className="relative mt-3 h-1 w-full max-w-lg overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-[linear-gradient(90deg,var(--violet),var(--crimson))]"
            initial={{ width: "0%" }}
            animate={{ width: "92%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-[90]"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <button onClick={onEnter} className="system-chip px-4 py-2 text-xs uppercase tracking-[0.2em]">
        Enter the Cluster
      </button>
    </motion.div>
  );
}
