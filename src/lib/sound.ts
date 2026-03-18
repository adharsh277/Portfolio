"use client";

export function startBootAmbience() {
  return;
}

export function stopBootAmbience() {
  return;
}

let calmContext: AudioContext | null = null;
let calmMasterGain: GainNode | null = null;
let calmOscA: OscillatorNode | null = null;
let calmOscB: OscillatorNode | null = null;
let calmPulseTimer: ReturnType<typeof setInterval> | null = null;

function getAudioContextCtor() {
  if (typeof window === "undefined") return null;
  return window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext || null;
}

export function isSoundEnabled() {
  if (typeof window === "undefined") return true;
  return window.localStorage.getItem("sound-enabled") !== "false";
}

export function setSoundEnabled(enabled: boolean) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem("sound-enabled", String(enabled));

  if (!enabled) {
    stopCalmAmbience();
  }
}

export function startCalmAmbience() {
  if (!isSoundEnabled()) return;
  if (typeof window === "undefined") return;
  if (calmContext) {
    void calmContext.resume().catch(() => undefined);
    return;
  }

  const AudioCtx = getAudioContextCtor();
  if (!AudioCtx) return;

  const context = new AudioCtx();
  const masterGain = context.createGain();
  const filter = context.createBiquadFilter();
  const oscA = context.createOscillator();
  const oscB = context.createOscillator();
  const lfo = context.createOscillator();
  const lfoGain = context.createGain();

  oscA.type = "sine";
  oscA.frequency.value = 174.61;
  oscB.type = "sine";
  oscB.frequency.value = 220;

  filter.type = "lowpass";
  filter.frequency.value = 520;
  filter.Q.value = 0.5;

  lfo.type = "sine";
  lfo.frequency.value = 0.05;
  lfoGain.gain.value = 12;

  masterGain.gain.value = 0.0001;
  masterGain.gain.exponentialRampToValueAtTime(0.0048, context.currentTime + 1.4);

  lfo.connect(lfoGain);
  lfoGain.connect(filter.frequency);
  oscA.connect(filter);
  oscB.connect(filter);
  filter.connect(masterGain);
  masterGain.connect(context.destination);

  oscA.start();
  oscB.start();
  lfo.start();

  const unlock = () => {
    void context.resume().catch(() => undefined);
  };

  window.addEventListener("pointerdown", unlock, { once: true });
  window.addEventListener("keydown", unlock, { once: true });

  void context.resume().catch(() => undefined);

  calmContext = context;
  calmMasterGain = masterGain;
  calmOscA = oscA;
  calmOscB = oscB;

  const chime = () => {
    if (!calmContext || !calmMasterGain || !isSoundEnabled()) return;

    const note = calmContext.createOscillator();
    const noteGain = calmContext.createGain();

    note.type = "triangle";
    note.frequency.setValueAtTime(659.25, calmContext.currentTime);
    note.frequency.exponentialRampToValueAtTime(523.25, calmContext.currentTime + 0.7);

    noteGain.gain.setValueAtTime(0.0001, calmContext.currentTime);
    noteGain.gain.exponentialRampToValueAtTime(0.0018, calmContext.currentTime + 0.08);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, calmContext.currentTime + 0.9);

    note.connect(noteGain);
    noteGain.connect(calmMasterGain);

    note.start();
    note.stop(calmContext.currentTime + 0.95);
  };

  calmPulseTimer = setInterval(chime, 9000);
  setTimeout(chime, 1400);
}

export function stopCalmAmbience() {
  if (!calmContext || !calmMasterGain) return;

  if (calmPulseTimer) {
    clearInterval(calmPulseTimer);
    calmPulseTimer = null;
  }

  const context = calmContext;
  const gain = calmMasterGain;

  gain.gain.cancelScheduledValues(context.currentTime);
  gain.gain.setValueAtTime(Math.max(gain.gain.value, 0.0001), context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.3);

  setTimeout(() => {
    calmOscA?.stop();
    calmOscB?.stop();
    void context.close().catch(() => undefined);

    calmContext = null;
    calmMasterGain = null;
    calmOscA = null;
    calmOscB = null;
  }, 350);
}

export function playClusterEnterSound() {
  if (!isSoundEnabled()) return;
  const AudioCtx = getAudioContextCtor();
  if (!AudioCtx) return;

  const context = new AudioCtx();
  const master = context.createGain();
  const oscA = context.createOscillator();
  const oscB = context.createOscillator();

  oscA.type = "triangle";
  oscB.type = "sine";

  oscA.frequency.setValueAtTime(220, context.currentTime);
  oscA.frequency.exponentialRampToValueAtTime(523.25, context.currentTime + 0.22);
  oscB.frequency.setValueAtTime(329.63, context.currentTime);
  oscB.frequency.exponentialRampToValueAtTime(659.25, context.currentTime + 0.22);

  master.gain.setValueAtTime(0.0001, context.currentTime);
  master.gain.exponentialRampToValueAtTime(0.03, context.currentTime + 0.03);
  master.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.3);

  oscA.connect(master);
  oscB.connect(master);
  master.connect(context.destination);

  oscA.start();
  oscB.start();
  oscA.stop(context.currentTime + 0.31);
  oscB.stop(context.currentTime + 0.31);

  setTimeout(() => {
    context.close().catch(() => undefined);
  }, 360);
}

export function playUiClick() {
  if (!isSoundEnabled()) return;
  const AudioCtx = getAudioContextCtor();
  if (!AudioCtx) return;

  const context = new AudioCtx();
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(320, context.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(590, context.currentTime + 0.05);

  gain.gain.setValueAtTime(0.0001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.02, context.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.07);

  oscillator.connect(gain);
  gain.connect(context.destination);

  oscillator.start();
  oscillator.stop(context.currentTime + 0.08);

  setTimeout(() => {
    context.close().catch(() => undefined);
  }, 120);
}
