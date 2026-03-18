"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { Bot, X } from "lucide-react";

const prompts = [
  "What makes this engineer different?",
  "Show cloud and DevOps strengths",
  "What systems has he shipped?",
];

const responses = [
  "Builds cloud-native systems that bridge AI, DevOps, and platform reliability.",
  "Strong with Azure data pipelines, Kubernetes operations, CI/CD automation, and observability.",
  "Delivered production deployments, microservices automation, and AI data intelligence platforms.",
];

export function AiAssistant() {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [trailAngle, setTrailAngle] = useState(180);
  const answer = useMemo(() => responses[index], [index]);

  const onDrag = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { x, y } = info.velocity;
    const speed = Math.hypot(x, y);
    if (speed < 8) return;

    const angle = (Math.atan2(y, x) * 180) / Math.PI;
    setTrailAngle(angle + 180);
  };

  return (
    <motion.div
      className="fixed left-4 top-24 z-50 sm:left-6 sm:top-28"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      drag
      dragMomentum
      dragElastic={0.18}
      dragTransition={{ bounceStiffness: 140, bounceDamping: 16 }}
      whileDrag={{ scale: 1.06 }}
      onDragStart={() => setIsDragging(true)}
      onDrag={onDrag}
      onDragEnd={() => {
        setTimeout(() => setIsDragging(false), 0);
      }}
    >
      <AnimatePresence>
        {isDragging && !isOpen && (
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10"
            style={{ transform: `translate(-58%, -50%) rotate(${trailAngle}deg)` }}
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
          >
            <motion.div
              className="h-3 w-24 rounded-full bg-[linear-gradient(90deg,rgba(248,68,151,0.85),rgba(196,77,248,0.45),transparent)] blur-[1px]"
              animate={{ opacity: [0.7, 1, 0.8], scaleX: [0.9, 1.1, 0.95] }}
              transition={{ duration: 0.35, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -left-1 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,138,220,0.9),rgba(243,67,143,0.1),transparent)] blur-[0.5px]"
              animate={{ scale: [0.95, 1.2, 1], opacity: [0.7, 1, 0.8] }}
              transition={{ duration: 0.28, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button
          className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-black/55 text-[color:var(--text-main)] backdrop-blur-xl"
          onClick={() => {
            if (!isDragging) {
              setIsOpen(true);
            }
          }}
          animate={{ y: [0, -16, -4, -22, 0], x: [0, 12, 22, -6, 0], rotate: [0, 4, 0, -4, 0] }}
          transition={{ duration: 8.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          whileHover={{ scale: 1.06 }}
          aria-label="Open assistant"
        >
          <Bot className="h-5 w-5" />
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            className="w-[min(85vw,22rem)] rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-xl"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between gap-3">
              <Bot className="h-4 w-4 text-[color:var(--text-dim)]" />
              <button
                className="system-chip px-2 py-1 text-[10px] uppercase tracking-[0.2em]"
                onClick={() => setIsOpen(false)}
                aria-label="Close assistant"
              >
                <X className="h-3 w-3" />
              </button>
            </div>

            <p className="mt-3 text-sm text-[color:var(--text-main)]">Ask about this engineer</p>
            <div className="mt-3 space-y-2">
              {prompts.map((prompt, promptIndex) => (
                <button key={prompt} className="system-chip w-full text-left text-xs" onClick={() => setIndex(promptIndex)}>
                  {prompt}
                </button>
              ))}
            </div>
            <p className="mt-3 rounded-xl border border-white/10 bg-black/30 p-3 text-xs text-[color:var(--text-dim)]">{answer}</p>
          </motion.aside>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
