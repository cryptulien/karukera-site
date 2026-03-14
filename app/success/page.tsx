"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ConfettiCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#00ff88", "#00cc6a", "#00d4ff", "#8b5cf6", "#fbbf24", "#ff3366"];
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      size: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
    }[] = [];

    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 3 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 3,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.2,
        opacity: 1,
      });
    }

    let animationId: number;
    let frame = 0;

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05;
        p.rotation += p.rotationSpeed;
        if (frame > 60) p.opacity = Math.max(0, p.opacity - 0.005);

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.4);
        ctx.restore();
      }

      const allDone = particles.every((p) => p.opacity <= 0);
      if (!allDone) {
        animationId = requestAnimationFrame(animate);
      }
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-50 pointer-events-none"
    />
  );
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    sessionId ? "loading" : "error"
  );

  useEffect(() => {
    if (!sessionId) return;

    // Verify the session by hitting the download endpoint with HEAD-like check
    fetch(`/api/download?session_id=${encodeURIComponent(sessionId)}`, {
      method: "HEAD",
    })
      .then((res) => {
        setStatus(res.ok ? "success" : "error");
      })
      .catch(() => {
        setStatus("error");
      });
  }, [sessionId]);

  return (
    <main className="noise-bg min-h-screen flex items-center justify-center">
      <ConfettiCanvas />

      <div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 text-center">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-karu-accent/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative card-base p-8 sm:p-12">
          <div className="w-16 h-16 rounded-2xl bg-karu-accent/10 border border-karu-accent/30 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-karu-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold mb-4">
            Thank you for your purchase!
          </h1>

          <p className="text-karu-muted text-lg mb-2">
            Welcome to the mission.
          </p>
          <p className="text-karu-muted text-sm mb-8">
            Your playbook is ready for download.
          </p>

          {status === "loading" && (
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-karu-card border border-karu-border text-karu-muted font-semibold text-sm">
              <svg
                className="w-4 h-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="opacity-25"
                />
                <path
                  d="M4 12a8 8 0 018-8"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="opacity-75"
                />
              </svg>
              Verifying purchase...
            </div>
          )}

          {status === "success" && sessionId && (
            <a
              href={`/api/download?session_id=${encodeURIComponent(sessionId)}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-karu-accent text-karu-black font-bold text-sm hover:bg-karu-accent-dim transition-all duration-200 shadow-lg shadow-karu-accent/20"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Your Playbook
            </a>
          )}

          {status === "error" && (
            <div className="space-y-4">
              <p className="text-karu-red text-sm">
                {sessionId
                  ? "Could not verify your purchase. Please try again or contact support."
                  : "No session found. Please complete checkout first."}
              </p>
              <a
                href="https://karukera.xyz"
                className="inline-flex px-6 py-3 rounded-xl bg-karu-accent/10 border border-karu-accent/30 text-karu-accent font-semibold text-sm hover:bg-karu-accent/20 transition-all duration-200"
              >
                Back to KARUKERA
              </a>
            </div>
          )}

          {status === "success" && (
            <div className="mt-6">
              <a
                href="https://karukera.xyz"
                className="text-karu-muted text-sm hover:text-karu-accent transition-colors"
              >
                &larr; Back to KARUKERA
              </a>
            </div>
          )}

          <p className="mt-8 text-[10px] font-mono text-karu-muted/40 uppercase tracking-widest">
            gustave@karukera:~$ echo &quot;Another one joins the experiment.&quot;
          </p>
        </div>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="noise-bg min-h-screen flex items-center justify-center">
          <div className="text-karu-muted font-mono text-sm">Loading...</div>
        </main>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
