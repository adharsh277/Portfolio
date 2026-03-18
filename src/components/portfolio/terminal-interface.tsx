"use client";

import { FormEvent, useMemo, useState } from "react";
import { identity, projects } from "@/data/portfolio-data";
import { playUiClick } from "@/lib/sound";

const commandOutput: Record<string, string[]> = {
  whoami: [
    "Adharsh Unnikrishnan",
    "Aspiring AI Infrastructure Engineer",
    "Cloud • DevOps • Platform Engineering",
  ],
  skills: [
    "Cloud: Azure, AWS, Oracle OCI, Terraform, Ansible, Helm, Kubernetes",
    "CI/CD: Docker, Podman, GitHub Actions, Argo CD, Azure DevOps, Jenkins, Git",
    "Tools: Grafana, PowerShell, Redis, GitLab, Codespaces, Jira",
  ],
  projects: projects.map((project) => `- ${project.title}`),
  contact: [identity.email, identity.phone, identity.location],
  help: ["Available commands: whoami, skills, projects, contact, clear"],
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
    <section className="panel-neu p-6">
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
    </section>
  );
}
