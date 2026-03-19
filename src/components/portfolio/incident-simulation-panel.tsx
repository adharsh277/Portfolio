"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const incidentScenarios = [
  {
    id: "node-down",
    title: "Kubernetes Node Down",
    description: "A node in your production cluster has gone offline. Pods are being rescheduled, but some services are degraded.",
    steps: [
      "Detect node failure via monitoring alert.",
      "Check affected pods and rescheduling status.",
      "Review node health and cloud provider status.",
      "Trigger node replacement or repair.",
      "Verify service recovery and update incident log."
    ]
  },
  {
    id: "canary-fail",
    title: "Canary Deployment Failure",
    description: "A canary deployment is showing elevated error rates. Rollback or mitigation is required.",
    steps: [
      "Detect canary errors via metrics/logs.",
      "Pause further rollout.",
      "Analyze logs and error reports.",
      "Rollback canary to previous version.",
      "Monitor recovery and document incident."
    ]
  },
  {
    id: "pipeline-stuck",
    title: "CI/CD Pipeline Stuck",
    description: "A deployment pipeline is stuck in the validation stage, blocking releases.",
    steps: [
      "Identify stuck pipeline via dashboard.",
      "Check logs for validation errors or timeouts.",
      "Rerun or manually unblock the pipeline.",
      "Notify stakeholders of resolution.",
      "Document root cause and fix."
    ]
  }
];

export function IncidentSimulationPanel() {
  const [selected, setSelected] = useState(incidentScenarios[0]);
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleNext = () => {
    if (step < selected.steps.length - 1) {
      setStep(step + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleScenario = (id: string) => {
    const scenario = incidentScenarios.find((s) => s.id === id);
    if (scenario) {
      setSelected(scenario);
      setStep(0);
      setCompleted(false);
    }
  };

  return (
    <motion.section
      className="panel-glass p-6 mb-16"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <Card className="mb-4 p-4">
        <h2 className="text-base font-bold tracking-[0.22em] uppercase text-[color:var(--text-main)] mb-1">Incident Response Simulation</h2>
        <p className="text-xs tracking-[0.18em] text-[color:var(--text-dim)] mb-2">Experience a real-world outage scenario and step through the resolution process.</p>
        <div className="flex gap-2 mb-3">
          {incidentScenarios.map((s) => (
            <Button key={s.id} variant={selected.id === s.id ? "default" : "outline"} size="sm" onClick={() => handleScenario(s.id)}>
              {s.title}
            </Button>
          ))}
        </div>
        <div className="mt-2">
          <h3 className="text-sm font-semibold text-[color:var(--text-main)]">{selected.title}</h3>
          <p className="text-xs text-[color:var(--text-dim)] mb-3">{selected.description}</p>
          <ol className="list-decimal pl-5 text-sm text-[color:var(--text-main)]">
            {selected.steps.slice(0, step + 1).map((s, i) => (
              <li key={i} className="mb-1">{s}</li>
            ))}
          </ol>
          {!completed ? (
            <Button className="mt-3" onClick={handleNext}>
              {step < selected.steps.length - 1 ? "Next Step" : "Finish Incident"}
            </Button>
          ) : (
            <p className="mt-3 text-green-400 font-semibold">Incident Resolved! 🎉</p>
          )}
        </div>
      </Card>
    </motion.section>
  );
}
