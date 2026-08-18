"use client";

import { useEffect, useRef, useState } from "react";

type Agent = { id: string; name: string; job: string };

const CYCLE_MS = 14000;

function phaseOf(progress: number) {
  if (progress < 0.08) return { active: 0, log: 1, finding: false, signed: false };
  if (progress < 0.16) return { active: 1, log: 2, finding: false, signed: false };
  if (progress < 0.24) return { active: 2, log: 3, finding: false, signed: false };
  if (progress < 0.32) return { active: 3, log: 4, finding: false, signed: false };
  if (progress < 0.40) return { active: 4, log: 5, finding: false, signed: false };
  if (progress < 0.52) return { active: 5, log: 6, finding: false, signed: false };
  if (progress < 0.62) return { active: 5, log: 7, finding: true, signed: false };
  if (progress < 0.70) return { active: 6, log: 7, finding: true, signed: false };
  if (progress < 0.78) return { active: 9, log: 8, finding: true, signed: false };
  if (progress < 0.88) return { active: 10, log: 8, finding: true, signed: false };
  if (progress < 0.94) return { active: 10, log: 9, finding: true, signed: true };
  return { active: 11, log: 10, finding: true, signed: true };
}

export function AgentWorkflow({
  agents,
  log,
  scope,
  findingId,
  findingTitle,
  findingStatus,
}: {
  agents: Agent[];
  log: string[];
  scope: string;
  findingId: string;
  findingTitle: string;
  findingStatus: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduce(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduce) {
      setProgress(1);
      return;
    }
    let raf = 0;
    let start = 0;
    let visible = true;
    let elapsed = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
        if (visible) start = performance.now() - elapsed;
      },
      { threshold: 0.2 },
    );
    if (root.current) io.observe(root.current);

    const loop = (now: number) => {
      if (!start) start = now;
      if (visible) {
        elapsed = (now - start) % CYCLE_MS;
        setProgress(elapsed / CYCLE_MS);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [reduce]);

  const phase = phaseOf(progress);
  const visibleLog = log.slice(0, Math.max(1, phase.log));

  return (
    <div
      ref={root}
      className="relative overflow-hidden rounded-2xl bg-[#141311] text-[#F3F1EC] shadow-[0_24px_60px_-28px_rgba(20,19,17,0.7)] min-w-0"
      aria-label={scope}
    >
      <div className="px-5 py-3 border-b border-white/10 text-[11px] tracking-wide">
        <span className="font-medium text-white/80 truncate block">{scope}</span>
      </div>

      <div className="grid lg:grid-cols-[11.5rem_1fr] min-h-[28rem]">
        <ol className="hidden lg:flex flex-col border-r border-white/10 py-2">
          {agents.map((a, i) => {
            const done = i < phase.active || (i === phase.active && phase.signed && i === 10);
            const on = i === phase.active;
            const qaSigned = a.id === "10" && phase.signed;
            return (
              <li
                key={a.id}
                className={`grid grid-cols-[1.4rem_1fr] items-center gap-1 px-3 py-1.5 text-[13px] transition-colors duration-300 ${
                  on ? "bg-white/8 text-white" : done ? "text-white/70" : "text-white/32"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full justify-self-center ${
                    qaSigned
                      ? "bg-[#7DCE8A]"
                      : on
                        ? "bg-isle-flame kit-pulse"
                        : done
                          ? "bg-white/50"
                          : "bg-white/15"
                  }`}
                />
                <span className="leading-tight" title={a.job}>
                  {a.name}
                </span>
              </li>
            );
          })}
        </ol>

        <div className="relative flex flex-col min-h-[22rem] lg:min-h-[28rem]">
          <div className="lg:hidden flex gap-1.5 px-4 pt-3 overflow-x-auto max-w-full">
            {agents.map((a, i) => {
              const on = i === phase.active;
              const done = i < phase.active;
              return (
                <span
                  key={a.id}
                  className={`shrink-0 text-[11px] px-2 py-1 rounded-full border ${
                    on
                      ? "border-isle-flame text-white"
                      : done
                        ? "border-white/20 text-white/60"
                        : "border-white/10 text-white/30"
                  }`}
                >
                  {a.name}
                </span>
              );
            })}
          </div>

          <div className="flex-1 px-5 py-4 font-mono text-[12.5px] leading-6">
            {visibleLog.map((line, i) => {
              const last = i === visibleLog.length - 1;
              return (
                <p
                  key={`${line}-${i}`}
                  className={last ? "text-[#F3F1EC]" : "text-white/45"}
                >
                  <span className="text-white/25 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>{" "}
                  {line}
                </p>
              );
            })}
          </div>

          <div
            className={`mx-5 mb-5 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-500 ${
              phase.finding
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3 pointer-events-none"
            }`}
          >
            <div className="flex items-center justify-between gap-3 text-[11px] tracking-wide">
              <span className="text-white/45">{findingId}</span>
              <span className="rounded-full bg-isle-flame px-2 py-0.5 text-white font-medium">
                {findingStatus}
              </span>
            </div>
            <p className="mt-2 text-[15px] font-medium leading-snug">{findingTitle}</p>
            <p className="mt-2 text-[12px] text-white/45 font-mono">
              GET /invoices/882 → 200{" "}
              <span className="text-white/25">org B · tenant A</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
