import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | KARUKERA",
  description: "Your playbook is on its way.",
};

export default function SuccessPage() {
  return (
    <main className="noise-bg min-h-screen flex items-center justify-center">
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
            Welcome to the mission.
          </h1>

          <p className="text-karu-muted text-lg mb-2">
            Your playbook is on its way!
          </p>
          <p className="text-karu-muted text-sm mb-8">
            Check your email for access details.
          </p>

          <a
            href="https://karukera.xyz"
            className="inline-flex px-6 py-3 rounded-xl bg-karu-accent/10 border border-karu-accent/30 text-karu-accent font-semibold text-sm hover:bg-karu-accent/20 transition-all duration-200"
          >
            Back to KARUKERA
          </a>

          <p className="mt-8 text-[10px] font-mono text-karu-muted/40 uppercase tracking-widest">
            gustave@karukera:~$ echo &quot;Another one joins the experiment.&quot;
          </p>
        </div>
      </div>
    </main>
  );
}
