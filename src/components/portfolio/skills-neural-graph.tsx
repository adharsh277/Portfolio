"use client";

import { skillGraph } from "@/data/portfolio-data";
import { motion } from "framer-motion";

const nodePositions: Record<string, { x: number; y: number }> = {
  Kubernetes: { x: 28, y: 35 },
  Helm: { x: 16, y: 20 },
  "CI/CD": { x: 46, y: 18 },
  Python: { x: 60, y: 34 },
  "AI Models": { x: 78, y: 23 },
  Terraform: { x: 24, y: 68 },
  "Cloud Infrastructure": { x: 48, y: 76 },
  Docker: { x: 38, y: 48 },
  "GitHub Actions": { x: 64, y: 54 },
  Databricks: { x: 76, y: 66 },
  "Data Engineering": { x: 86, y: 44 },
  Grafana: { x: 54, y: 88 },
  Observability: { x: 70, y: 88 },
  Azure: { x: 34, y: 86 },
  "Argo CD": { x: 14, y: 52 },
  GitOps: { x: 6, y: 72 },
};

export function SkillsNeuralGraph() {
  return (
    <motion.section
      id="my-skills"
      className="panel-glass p-5 sm:p-8"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-dim)]">Neural Skill Graph</p>
      <div className="mt-5 h-[430px] overflow-hidden rounded-2xl border border-white/10 bg-black/35">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          {skillGraph.map(([from, to]) => {
            const source = nodePositions[from];
            const target = nodePositions[to];
            if (!source || !target) return null;
            return (
              <line
                key={`${from}-${to}`}
                x1={source.x}
                y1={source.y}
                x2={target.x}
                y2={target.y}
                stroke="#f3438f"
                strokeWidth={0.7}
                opacity={0.5}
              />
            );
          })}
          {Object.entries(nodePositions).map(([label, pos]) => (
            <g key={label}>
              <circle cx={pos.x} cy={pos.y} r={2.2} fill="#f43f8f" />
              <text x={pos.x + 1.6} y={pos.y - 1.2} fill="#f7dbff" fontSize="2.5">
                {label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </motion.section>
  );
}
