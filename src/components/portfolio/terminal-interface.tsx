"use client";

import { FormEvent, useMemo, useState } from "react";
import { identity, projects } from "@/data/portfolio-data";
import { playUiClick } from "@/lib/sound";
import { motion } from "framer-motion";

const commandOutput: Record<string, string[]> = {
  whoami: [
    "Adharsh Unnikrishnan",
    "Aspiring AI Infrastructure Engineer",
    "Cloud • DevOps • Platform Engineering",
  ],
  about: [
    "Engineer passionate about building scalable AI/ML platforms, cloud-native systems, and developer experience.",
    "Always learning. Always building."
  ],
  stack: [
    "Languages: Python, TypeScript, Bash, SQL",
    "Cloud: Azure, AWS, Oracle OCI",
    "Infra: Kubernetes, Docker, Terraform, Ansible, Helm",
    "CI/CD: GitHub Actions, Jenkins, Argo CD, Azure DevOps",
    "Monitoring: Grafana, Prometheus, Loki, Falco"
  ],
  timeline: [
    "Foundation Phase: Intern @ Infocreon Solutions, Jr. DevOps Engineer @ Infocreon, Nov 2025 - Present",
    "Open Source Track: CNCF Contributor, Hackathon Finalist",
    "Leadership Track: University Club Leadership"
  ],
  infra: [
    "AI Platform: Kubernetes, CI/CD, Model Registry, Accelerated Compute, Data Pipelines, Monitoring, Security, Cost Telemetry, Experiment Tracking"
  ],
  incident: [
    "Try the Incident Response Simulation panel for a real-world outage scenario!"
  ],
  quote: [
    '"Simplicity is the soul of efficiency." – Austin Freeman',
    '"The best way to predict the future is to invent it." – Alan Kay',
    '"Automation is good, so long as you know exactly where to put the machine." – Eliyahu Goldratt',
    '"Stay curious. Stay humble. Build things." – Adharsh Unnikrishnan'
  ],
  fun: [
    "(\u256F\u00B0\u25A1\u00B0)\u256F\uFE35 \u253B\u2501\u253B  Here's some ASCII art!",
    "Did you know? Kubernetes was named after the Greek word for 'helmsman' or 'pilot'."
  ],
  theme: [
    "Theme toggled! (Try the UI toggle for a visual effect.)"
  ],
  sound: [
    "Sound toggled! (Try the UI toggle for a real effect.)"
  ],
  blog: [
    "Read my articles: https://medium.com/@adharshunni0007/activity"
  ],
  skills: [
    "Cloud: Azure, AWS, Oracle OCI, Terraform, Ansible, Helm, Kubernetes",
    "CI/CD: Docker, Podman, GitHub Actions, Argo CD, Azure DevOps, Jenkins, Git",
    "Tools: Grafana, PowerShell, Redis, GitLab, Codespaces, Jira",
  ],
  projects: projects.map((project) => `- ${project.title}`),
  contact: [identity.email, identity.phone, identity.location],
  help: [
    "Available commands: whoami, about, stack, timeline, infra, incident, quote, fun, theme, sound, blog, skills, projects, contact, clear"
  ],
};

export function TerminalInterface() {
  const [history, setHistory] = useState<string[]>(["Type help to view available commands."]);
  const [input, setInput] = useState("");

  const promptText = useMemo(() => `infra@adharsh:~$ ${input}`, [input]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const command = input.trim().toLowerCase();
    if (!command) return;
    playUiClick();

    if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const result = commandOutput[command] ?? ["Unknown command. Try help."];
    setHistory((prev) => [...prev, `> ${command}`, ...result]);
    setInput("");
  };

  return (
    <motion.section
      className="panel-neu p-6 mb-16"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-dim)]">Interactive Terminal</p>
      <div className="mt-4 h-72 overflow-y-auto rounded-xl border border-white/15 bg-black/50 p-4 text-xs leading-6 text-[color:var(--text-main)]">
        {history.map((line, idx) => (
          <p key={`${line}-${idx}`}>{line}</p>
        ))}
      </div>
      <form onSubmit={onSubmit} className="mt-4 rounded-xl border border-white/10 bg-black/30 px-3 py-2">
        <label htmlFor="terminal-input" className="sr-only">
          Terminal Command
        </label>
        <div className="flex items-center gap-2 text-xs text-[color:var(--text-dim)]">
          <span>infra@adharsh:~$</span>
          <input
            id="terminal-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="w-full bg-transparent text-[color:var(--text-main)] outline-none"
            placeholder="whoami"
          />
        </div>
      </form>
      <p className="mt-2 text-[10px] uppercase tracking-[0.24em] text-[color:var(--text-dim)]">{promptText}</p>
    </motion.section>
  );
}
