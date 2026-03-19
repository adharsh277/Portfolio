"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ClusterBootSequence({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 700),
      setTimeout(() => setPhase(2), 1400),
      setTimeout(() => setPhase(3), 2100),
      setTimeout(() => onComplete(), 3000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[99] flex flex-col items-center justify-center bg-[color:var(--bg-base)]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="mb-8 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-lg font-bold tracking-[0.34em] text-[color:var(--crimson)] mb-2">CLUSTER BOOT SEQUENCE</p>
        <div className="flex gap-2 mt-2">
          <span className={`h-3 w-3 rounded-full ${phase >= 1 ? 'bg-[color:var(--violet)]' : 'bg-white/10'}`}></span>
          <span className={`h-3 w-3 rounded-full ${phase >= 2 ? 'bg-[color:var(--crimson)]' : 'bg-white/10'}`}></span>
          <span className={`h-3 w-3 rounded-full ${phase >= 3 ? 'bg-[color:var(--text-main)]' : 'bg-white/10'}`}></span>
        </div>
      </motion.div>
      <motion.div
        className="w-full max-w-md rounded-2xl border border-white/10 bg-black/30 px-8 py-8 text-center backdrop-blur-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--text-dim)] mb-2">{phase === 0 && "Connecting Nodes..."}{phase === 1 && "Synchronizing Systems..."}{phase === 2 && "Activating Cluster..."}{phase === 3 && "Cluster Ready!"}</p>
        <div className="relative mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-[linear-gradient(90deg,var(--violet),var(--crimson))]"
            initial={{ width: "0%" }}
            animate={{ width: phase === 0 ? "30%" : phase === 1 ? "60%" : phase === 2 ? "100%" : "100%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
