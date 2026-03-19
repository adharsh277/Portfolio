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
  {
    id: "orchestration",
    label: "Orchestration Layer",
    x: 18,
    y: 48,
    details: ["Kubernetes Cluster", "Service mesh", "Multi-zone pods", "Autoscaling"]
  },
  {
    id: "cicd",
    label: "CI/CD Pipelines",
    x: 36,
    y: 24,
    details: ["Automation & Delivery", "Policy checks", "Canary gates", "GitHub Actions"]
  },
  {
    id: "model",
    label: "Model Registry & Serving",
    x: 62,
    y: 22,
    details: ["Model lifecycle", "Model registry", "Inference endpoints", "A/B rollout"]
  },
  {
    id: "compute",
    label: "Accelerated Compute",
    x: 80,
    y: 48,
    details: ["GPUs, TPUs, HPC nodes", "Distributed training", "CUDA jobs"]
  },
  {
    id: "data",
    label: "Data Pipelines",
    x: 50,
    y: 72,
    details: ["ETL orchestration", "Feature stores", "Data lakes", "Lineage tracking"]
  },
  {
    id: "monitoring",
    label: "Monitoring & Observability",
    x: 30,
    y: 70,
    details: ["Metrics", "Logs", "Traces", "Alerting"]
  },
  {
    id: "cost",
    label: "Cost & Resource Telemetry",
    x: 70,
    y: 70,
    details: ["Usage tracking", "Optimization", "Cost analysis"]
  },
  {
    id: "security",
    label: "Security & Compliance",
    x: 10,
    y: 30,
    details: ["Access control", "Audit logs", "Data privacy"]
  },
  {
    id: "experiment",
    label: "Experiment Tracking",
    x: 90,
    y: 30,
    details: ["MLflow", "Weights & Biases", "Experiment metadata"]
  },
  {
    id: "node",
    label: "Node/Cluster Details",
    x: 50,
    y: 10,
    details: ["Health", "Scaling", "Topology"]
  },
];

export function InfrastructureMap() {
  const [activeId, setActiveId] = useState(nodes[0].id);
  const activeNode = useMemo(() => nodes.find((node) => node.id === activeId) ?? nodes[0], [activeId]);

  return (
    <motion.section
      id="selected-work"
      className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] mb-16"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <Card className="panel-glass p-5">
        <h2 className="text-base font-bold tracking-[0.24em] uppercase text-[color:var(--text-main)] mb-1">AI Platform & Infrastructure Expertise</h2>
        <p className="text-xs tracking-[0.18em] text-[color:var(--text-dim)] mb-2">Key Systems & Skills Demonstrated Below</p>
        <div className="relative mt-3 h-[360px] overflow-hidden rounded-xl border border-white/10">
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
    </motion.section>
  );
}
