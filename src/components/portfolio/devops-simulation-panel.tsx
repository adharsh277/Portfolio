"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

const initialLogs = [
  "[pipeline] validating Helm chart",
  "[runtime] kubernetes probes stable",
  "[ml] inference latency 87ms",
  "[security] image scan clean",
  "[deploy] canary promoted",
];

export function DevopsSimulationPanel() {
  const [cpu, setCpu] = useState(62);
  const [memory, setMemory] = useState(48);
  const [logs, setLogs] = useState(initialLogs);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpu((value) => Math.max(28, Math.min(93, value + (Math.random() * 12 - 6))));
      setMemory((value) => Math.max(22, Math.min(88, value + (Math.random() * 10 - 5))));
      setLogs((prev) => {
        const entry = `[telemetry] signal ${Math.random().toString(36).slice(2, 7)} synced`;
        return [entry, ...prev].slice(0, 7);
      });
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  const graphPoints = useMemo(
    () => Array.from({ length: 16 }, (_, index) => `${index * 16},${95 - (Math.sin(index / 2) * 22 + 30)}`).join(" "),
    []
  );

  return (
    <section className="panel-glass p-6">
      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--text-dim)]">Live DevOps Simulation</p>
          <div className="mt-4 space-y-4">
            <div>
              <div className="mb-2 flex justify-between text-xs uppercase text-[color:var(--text-dim)]">
                <span>CPU</span>
                <span>{cpu.toFixed(0)}%</span>
              </div>
              <Progress value={cpu} className="h-2 bg-white/10" />
            </div>
            <div>
              <div className="mb-2 flex justify-between text-xs uppercase text-[color:var(--text-dim)]">
                <span>Memory</span>
                <span>{memory.toFixed(0)}%</span>
              </div>
              <Progress value={memory} className="h-2 bg-white/10" />
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-black/25 p-4">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[color:var(--text-dim)]">Deployment Pipelines</p>
            <div className="mt-3 space-y-2 text-xs text-[color:var(--text-main)]">
              <div className="system-chip">edge-api / production / running</div>
              <div className="system-chip">platform-core / canary / validating</div>
              <div className="system-chip">ai-jobs / nightly / queued</div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/25 p-4">
          <svg viewBox="0 0 240 100" className="h-28 w-full">
            <polyline fill="none" stroke="#f3438f" strokeWidth="2" points={graphPoints} />
          </svg>
          <div className="mt-3 space-y-2 text-xs text-[color:var(--text-dim)]">
            {logs.map((log, index) => (
              <motion.p key={`${log}-${index}`} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} className="border-l border-white/20 pl-3">
                {log}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
