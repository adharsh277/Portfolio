"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

type InfraNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  details: string[];
};

const nodes: InfraNode[] = [
  { id: "k8s", label: "Kubernetes Cluster", x: 20, y: 48, details: ["Multi-zone pods", "Autoscaling policy", "Service mesh"] },
  { id: "cicd", label: "CI/CD Pipelines", x: 38, y: 26, details: ["GitHub Actions", "Policy checks", "Canary gates"] },
  { id: "aim", label: "AI Models", x: 62, y: 28, details: ["Model registry", "Inference mesh", "A/B rollout"] },
  { id: "gpu", label: "GPU Compute", x: 78, y: 50, details: ["Distributed training", "CUDA jobs", "Cost telemetry"] },
  { id: "data", label: "Data Pipelines", x: 46, y: 70, details: ["Ingestion orchestration", "Lakehouse sync", "Lineage tracking"] },
];

export function InfrastructureMap() {
  const [activeId, setActiveId] = useState(nodes[0].id);
  const activeNode = useMemo(() => nodes.find((node) => node.id === activeId) ?? nodes[0], [activeId]);

  return (
    <section id="selected-work" className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
      <Card className="panel-glass p-5">
        <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-dim)]">AI Infrastructure Map</p>
        <div className="relative mt-5 h-[360px] overflow-hidden rounded-xl border border-white/10">
          <svg viewBox="0 0 100 100" className="h-full w-full bg-black/30">
            {nodes.map((node) =>
              nodes.map((target) => {
                if (node.id === target.id) return null;
                if (Math.abs(node.x - target.x) + Math.abs(node.y - target.y) > 52) return null;
                return (
                  <line
                    key={`${node.id}-${target.id}`}
                    x1={node.x}
                    y1={node.y}
                    x2={target.x}
                    y2={target.y}
                    stroke="rgba(241,106,255,0.25)"
                    strokeWidth="0.3"
                  />
                );
              })
            )}

            {nodes.map((node) => (
              <g key={node.id} onClick={() => setActiveId(node.id)} className="cursor-pointer">
                <circle cx={node.x} cy={node.y} r={activeId === node.id ? 4.8 : 3.4} fill={activeId === node.id ? "#f63e8d" : "#ba4bf8"} />
                <text x={node.x + 2} y={node.y - 2} fill="#f6d4ff" fontSize="2.8">
                  {node.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </Card>

      <motion.aside key={activeNode.id} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} className="panel-neu p-5">
        <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--text-dim)]">Node Details</p>
        <h3 className="mt-3 text-xl font-semibold text-[color:var(--text-main)]">{activeNode.label}</h3>
        <div className="mt-4 space-y-2 text-sm text-[color:var(--text-dim)]">
          {activeNode.details.map((detail) => (
            <p key={detail} className="system-chip">{detail}</p>
          ))}
        </div>
      </motion.aside>
    </section>
  );
}
