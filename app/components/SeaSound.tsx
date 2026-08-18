"use client";

import { useEffect, useRef, useState } from "react";

const KEY = "karukera-sea";

export function SeaSound({
  listen,
  quiet,
}: {
  listen: string;
  quiet: string;
}) {
  const [on, setOn] = useState(false);
  const [hidden, setHidden] = useState(false);
  const stopRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHidden(true);
      return;
    }
    if (localStorage.getItem(KEY) !== "on") return;
    const resume = () => start();
    window.addEventListener("pointerdown", resume, { once: true });
    return () => {
      window.removeEventListener("pointerdown", resume);
      stopRef.current?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (hidden) return null;

  function start() {
    if (stopRef.current) return;
    const Ctx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const length = Math.floor(ctx.sampleRate * 4);
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < length; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.018 * white) / 1.018;
      data[i] = last * 3.2;
    }
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.loop = true;
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 380;
    const gain = ctx.createGain();
    gain.gain.value = 0;
    src.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    src.start();
    gain.gain.linearRampToValueAtTime(0.055, ctx.currentTime + 1.4);
    stopRef.current = () => {
      gain.gain.cancelScheduledValues(ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.6);
      window.setTimeout(() => {
        src.stop();
        void ctx.close();
      }, 700);
      stopRef.current = null;
    };
    setOn(true);
    localStorage.setItem(KEY, "on");
  }

  function stop() {
    stopRef.current?.();
    setOn(false);
    localStorage.setItem(KEY, "off");
  }

  return (
    <button
      type="button"
      onClick={() => (on ? stop() : start())}
      className="mt-8 min-h-11 text-sm text-white/90 hover:text-white transition-colors drop-shadow-[0_1px_10px_rgba(20,34,40,0.5)]"
      aria-pressed={on}
    >
      {on ? quiet : listen}
    </button>
  );
}
