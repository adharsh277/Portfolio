"use client";

import { motion } from "framer-motion";
import { MoonStar, Sun, Volume2, VolumeX } from "lucide-react";
import { navItems } from "@/data/portfolio-data";
import { playUiClick } from "@/lib/sound";

type NavigationProps = {
  isDark: boolean;
  onThemeToggle: () => void;
  soundEnabled: boolean;
  onSoundToggle: () => void;
};

export function Navigation({ isDark, onThemeToggle, soundEnabled, onSoundToggle }: NavigationProps) {
  return (
    <motion.nav
      className="sticky top-4 z-40 mx-auto mt-4 flex w-[min(96%,1300px)] items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-5 py-3 backdrop-blur-xl"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <p className="text-xs uppercase tracking-[0.34em] text-[color:var(--text-dim)]">Adharsh U</p>
      </div>

      <div className="hidden items-center gap-5 lg:flex">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/[^a-z]+/g, "-")}`}
            onClick={playUiClick}
            className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-dim)] transition hover:text-[color:var(--text-main)]"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            playUiClick();
            onSoundToggle();
          }}
          className="system-chip grid h-8 w-8 place-items-center px-0"
          aria-label={soundEnabled ? "Mute sound" : "Unmute sound"}
        >
          {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
        </button>

        <button
          onClick={() => {
            playUiClick();
            onThemeToggle();
          }}
          className="system-chip flex items-center gap-2 px-3 py-1 text-xs"
        >
          {isDark ? <MoonStar className="h-4 w-4" /> : <Sun className="h-4 w-4" />} Mode
        </button>
      </div>
    </motion.nav>
  );
}
