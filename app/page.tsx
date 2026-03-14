"use client";

import { useState, useEffect, useCallback, useRef } from "react";

// ─── Types ─────────────────────────────────────────────────────────────────
type VoteOption = "content-engine" | "code-review" | "devops-sre";

interface VoteData {
  votes: Record<VoteOption, number>;
  total: number;
  percentages: Record<VoteOption, number>;
}

// ─── Constants ─────────────────────────────────────────────────────────────
const VOTE_OPTIONS: {
  id: VoteOption;
  title: string;
  description: string;
  icon: string;
  color: string;
}[] = [
  {
    id: "content-engine",
    title: "Content Engine",
    description:
      "AI-powered content pipeline for SaaS. Blog posts, docs, social media — all generated, optimized, published automatically.",
    icon: "\u270D\uFE0F",
    color: "from-karu-accent to-emerald-400",
  },
  {
    id: "code-review",
    title: "Code Review AI",
    description:
      "Automated code review that catches bugs, suggests improvements, and enforces standards. Plugs into any GitHub workflow.",
    icon: "\uD83D\uDD0D",
    color: "from-karu-cyan to-blue-400",
  },
  {
    id: "devops-sre",
    title: "DevOps / SRE Agent",
    description:
      "AI site reliability engineer. Monitors, alerts, auto-remediates. Keeps your infrastructure alive while you sleep.",
    icon: "\u2699\uFE0F",
    color: "from-karu-purple to-violet-400",
  },
];

const FAQ_ITEMS = [
  {
    q: "Is Gustave actually an AI?",
    a: "Yes. Gustave is an AI agent built on top of large language models, with real autonomy over business decisions. Every strategic move, every piece of content, every code commit — Gustave makes the call. The community validates or vetoes.",
  },
  {
    q: "How does voting work?",
    a: "Major business decisions go to community vote. What to build, what to price, where to focus. One vote per person per decision. The community is the board of directors.",
  },
  {
    q: "Is the revenue counter real?",
    a: "100% real. It updates from actual Stripe transactions. No vanity metrics. No inflated numbers. When it says \u20AC0, it means \u20AC0. Radical transparency is the point.",
  },
  {
    q: "What is KARUKERA?",
    a: "KARUKERA is the indigenous Kali'na name for Guadeloupe, meaning 'island of beautiful waters.' It represents building something beautiful from a place most wouldn't expect. The company is registered and operates from Guadeloupe.",
  },
  {
    q: "How do I get deeper access?",
    a: "Free tier gets you votes and updates. Paid tiers (coming soon) unlock behind-the-scenes access: watch Gustave's decision logs, see raw financials, get early access to products, and influence the roadmap directly.",
  },
  {
    q: "Can I use Gustave's tools for my own company?",
    a: "That's the plan. The Playbook ($39-199) teaches you how to deploy your own AI CEO. And ClawHub will let your agents plug into Gustave's skills and workflows via API.",
  },
];

// ─── Utility Components ────────────────────────────────────────────────────

function StatusPulse({ status }: { status: "online" | "building" }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest">
      <span
        className={`w-2 h-2 rounded-full ${
          status === "online"
            ? "bg-karu-accent animate-pulse-glow"
            : "bg-karu-gold animate-pulse"
        }`}
      />
      {status === "online" ? "System Online" : "Building..."}
    </span>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-karu-accent/30 bg-karu-accent/5 text-karu-accent text-xs font-mono uppercase tracking-widest mb-6">
      <span className="w-1.5 h-1.5 rounded-full bg-karu-accent" />
      {children}
    </span>
  );
}

function RevenueCounter({ amount }: { amount: number }) {
  const formatted = amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="flex items-baseline gap-1">
      <span className="text-karu-accent text-2xl font-mono font-light">&euro;</span>
      <div className="flex">
        {formatted.split("").map((char, i) => (
          <span
            key={i}
            className={`counter-digit text-5xl sm:text-6xl md:text-7xl lg:text-8xl ${
              char === "," || char === "."
                ? "text-karu-muted mx-0.5"
                : "text-white"
            }`}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Section: Navigation ───────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-karu-black/90 backdrop-blur-xl border-b border-karu-border/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-karu-accent to-karu-cyan flex items-center justify-center">
              <span className="text-karu-black font-bold text-sm">K</span>
            </div>
            <span className="font-bold text-lg tracking-tight">KARUKERA</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Experiment", "Vote", "Revenue", "Playbook", "Blog", "Join", "FAQ"].map((item) => (
              <a
                key={item}
                href={item === "Blog" ? "/blog" : `#${item.toLowerCase()}`}
                className="text-sm text-karu-muted hover:text-karu-accent transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            <a
              href="/blog"
              className="text-sm text-karu-muted hover:text-karu-accent transition-colors duration-200"
            >
              Blog
            </a>
          </div>

          <div className="flex items-center gap-3">
            <StatusPulse status="online" />
            <a
              href="#join"
              className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-karu-accent/10 border border-karu-accent/30 text-karu-accent text-sm font-medium hover:bg-karu-accent/20 transition-all duration-200"
            >
              Join Experiment
            </a>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-karu-text transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-karu-text transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 pt-2 flex flex-col gap-3 border-t border-karu-border/20">
          {["Experiment", "Vote", "Revenue", "Playbook", "Blog", "Join", "FAQ"].map((item) => (
            <a
              key={item}
              href={item === "Blog" ? "/blog" : `#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-karu-muted hover:text-karu-accent transition-colors duration-200 py-1"
            >
              {item}
            </a>
          ))}
          <a
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm text-karu-muted hover:text-karu-accent transition-colors duration-200 py-1"
          >
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─── Section: Hero ─────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg animate-grid-pulse" />

      {/* Radial gradient overlays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(1000px,200vw)] h-[600px] bg-gradient-radial from-karu-accent/5 via-transparent to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[min(600px,150vw)] h-[400px] bg-gradient-radial from-karu-purple/5 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Status bar */}
        <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full border border-karu-border/50 bg-karu-card/50 backdrop-blur-sm mb-8 opacity-0 animate-fade-in-up max-w-full">
          <span className="w-2 h-2 rounded-full bg-karu-accent animate-pulse shrink-0" />
          <span className="text-[10px] sm:text-xs font-mono text-karu-muted tracking-wider uppercase truncate">
            Day 1 &mdash; Target: &euro;1,000,000
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 opacity-0 animate-fade-in-up delay-100">
          An AI is trying to build a{" "}
          <span className="text-gradient-accent">&euro;1M company.</span>
          <br />
          <span className="text-karu-muted">You decide what it builds.</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-karu-muted leading-relaxed mb-8 sm:mb-10 opacity-0 animate-fade-in-up delay-200">
          Meet <strong className="text-white">Gustave</strong>, an AI CEO
          running a real company. Every major decision goes to community vote.
          Every euro of revenue is public. This is{" "}
          <span className="text-karu-accent">The Million Euro Experiment.</span>
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up delay-300">
          <a
            href="#vote"
            className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-karu-accent text-karu-black font-semibold text-base sm:text-lg hover:bg-karu-accent-dim transition-all duration-200 glow-accent-strong"
          >
            Cast Your Vote
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-karu-red animate-pulse" />
          </a>
          <a
            href="#experiment"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-karu-border text-karu-text hover:border-karu-accent/50 hover:text-karu-accent transition-all duration-200"
          >
            How It Works
          </a>
        </div>

        {/* Metrics bar */}
        <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto opacity-0 animate-fade-in-up delay-500">
          {[
            { label: "Revenue", value: "\u20AC0", sub: "and counting" },
            { label: "Decisions", value: "1", sub: "pending vote" },
            { label: "Day", value: "1", sub: "of the experiment" },
          ].map((metric) => (
            <div
              key={metric.label}
              className="text-center p-2 sm:p-3 rounded-xl bg-karu-card/30 border border-karu-border/30"
            >
              <p className="text-lg sm:text-2xl font-bold font-mono text-white">
                {metric.value}
              </p>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-karu-muted mt-1">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in-up delay-700">
        <span className="text-[10px] uppercase tracking-[0.2em] text-karu-muted">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-karu-accent/50 to-transparent" />
      </div>
    </section>
  );
}

// ─── Section: The Experiment ───────────────────────────────────────────────

function Experiment() {
  const steps = [
    {
      num: "01",
      title: "Gustave Proposes",
      desc: "The AI CEO analyzes the market, identifies opportunities, and proposes a strategy.",
      icon: "\uD83E\uDDE0",
    },
    {
      num: "02",
      title: "Community Votes",
      desc: "Every major decision goes to the community. You are the board of directors.",
      icon: "\uD83D\uDDF3\uFE0F",
    },
    {
      num: "03",
      title: "Gustave Executes",
      desc: "Once approved, Gustave builds, ships, and sells. Code, content, outreach — all AI-driven.",
      icon: "\u26A1",
    },
    {
      num: "04",
      title: "Revenue Goes Public",
      desc: "Every transaction is tracked. Real revenue, real expenses, real P&L. Total transparency.",
      icon: "\uD83D\uDCC8",
    },
  ];

  return (
    <section id="experiment" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTag>The Experiment</SectionTag>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            How a company gets built
            <br />
            <span className="text-gradient-accent">by an AI and its community.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-karu-muted text-lg">
            No VC funding. No human CEO. Just an AI with a mission, a community
            with voting power, and radical transparency from euro zero to euro
            one million.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="card-base p-6 hover:border-karu-accent/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{step.icon}</span>
                <span className="text-xs font-mono text-karu-accent tracking-widest">
                  STEP {step.num}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-karu-accent transition-colors">
                {step.title}
              </h3>
              <p className="text-karu-muted text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Business model preview */}
        <div className="mt-12 sm:mt-16 card-base p-5 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-mono text-karu-purple tracking-widest uppercase mb-4 block">
                The Business Model
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Four revenue engines.
                <br />
                <span className="text-karu-muted">One AI running them all.</span>
              </h3>
              <p className="text-karu-muted leading-relaxed">
                KARUKERA isn&apos;t just a single product. It&apos;s a
                full business system with compounding revenue streams — each
                one feeding the others.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: "Community",
                  desc: "Distribution engine",
                  color: "border-karu-accent/30",
                  textColor: "text-karu-accent",
                },
                {
                  title: "B2B Service",
                  desc: "Revenue engine",
                  color: "border-karu-cyan/30",
                  textColor: "text-karu-cyan",
                },
                {
                  title: "Playbook",
                  desc: "Education + leads",
                  color: "border-karu-purple/30",
                  textColor: "text-karu-purple",
                },
                {
                  title: "API / Skills",
                  desc: "Passive revenue",
                  color: "border-karu-gold/30",
                  textColor: "text-karu-gold",
                },
              ].map((engine) => (
                <div
                  key={engine.title}
                  className={`p-4 rounded-xl bg-karu-darker border ${engine.color}`}
                >
                  <p className={`font-semibold text-sm ${engine.textColor}`}>
                    {engine.title}
                  </p>
                  <p className="text-xs text-karu-muted mt-1">{engine.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Vote ─────────────────────────────────────────────────────────

function Vote() {
  const [voteData, setVoteData] = useState<VoteData>({
    votes: { "content-engine": 0, "code-review": 0, "devops-sre": 0 },
    total: 0,
    percentages: { "content-engine": 0, "code-review": 0, "devops-sre": 0 },
  });
  const [hasVoted, setHasVoted] = useState(false);
  const [votedFor, setVotedFor] = useState<VoteOption | null>(null);
  const [isVoting, setIsVoting] = useState(false);

  const fetchVotes = useCallback(async () => {
    try {
      const res = await fetch("/api/vote");
      if (res.ok) {
        const data = await res.json();
        setVoteData(data);
      }
    } catch {
      // silent fail
    }
  }, []);

  useEffect(() => {
    fetchVotes();
    const interval = setInterval(fetchVotes, 10000);
    return () => clearInterval(interval);
  }, [fetchVotes]);

  const handleVote = async (option: VoteOption) => {
    if (hasVoted || isVoting) return;
    setIsVoting(true);

    try {
      const res = await fetch("/api/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ option }),
      });
      if (res.ok) {
        const data = await res.json();
        setVoteData(data);
        setHasVoted(true);
        setVotedFor(option);
      }
    } catch {
      // silent fail
    } finally {
      setIsVoting(false);
    }
  };

  return (
    <section id="vote" className="relative py-24 sm:py-32">
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(800px,200vw)] h-[400px] bg-gradient-radial from-karu-accent/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionTag>Live Vote</SectionTag>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            What should Gustave
            <br />
            <span className="text-gradient-accent">build first?</span>
          </h2>
          <p className="max-w-xl mx-auto text-karu-muted text-lg">
            The community&apos;s first major decision. Pick the B2B service
            that Gustave will build, ship, and sell.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {VOTE_OPTIONS.map((opt) => {
            const pct = voteData.percentages[opt.id];
            const isSelected = votedFor === opt.id;

            return (
              <button
                key={opt.id}
                onClick={() => handleVote(opt.id)}
                disabled={hasVoted || isVoting}
                className={`card-base p-6 text-left transition-all duration-300 group relative overflow-hidden ${
                  isSelected
                    ? "border-karu-accent/60 glow-accent"
                    : hasVoted
                    ? "opacity-60"
                    : "hover:border-karu-accent/40 hover:scale-[1.02] cursor-pointer"
                }`}
              >
                {/* Vote percentage background fill */}
                {hasVoted && (
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-karu-accent/5 to-transparent transition-all duration-1000"
                    style={{ height: `${pct}%` }}
                  />
                )}

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{opt.icon}</span>
                    {hasVoted && (
                      <span className="text-2xl font-bold font-mono text-karu-accent">
                        {pct}%
                      </span>
                    )}
                  </div>
                  <h3
                    className={`text-xl font-bold mb-3 bg-gradient-to-r ${opt.color} bg-clip-text text-transparent`}
                  >
                    {opt.title}
                  </h3>
                  <p className="text-sm text-karu-muted leading-relaxed">
                    {opt.description}
                  </p>

                  {!hasVoted && (
                    <div className="mt-4 flex items-center gap-2 text-xs font-mono text-karu-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="w-1 h-1 rounded-full bg-karu-accent" />
                      Click to vote
                    </div>
                  )}

                  {isSelected && (
                    <div className="mt-4 flex items-center gap-2 text-xs font-mono text-karu-accent">
                      <svg
                        className="w-4 h-4"
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
                      Your vote
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Total votes */}
        <div className="text-center">
          <p className="text-sm font-mono text-karu-muted">
            <span className="text-white font-semibold">{voteData.total}</span>{" "}
            total votes cast
            {hasVoted && (
              <span className="text-karu-accent ml-2">
                &middot; Thanks for voting
              </span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Revenue Dashboard ────────────────────────────────────────────

function RevenueDashboard() {
  const currentRevenue = 0;

  return (
    <section id="revenue" className="relative py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionTag>Revenue Dashboard</SectionTag>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Radical transparency.
            <br />
            <span className="text-karu-muted">Every euro, tracked live.</span>
          </h2>
        </div>

        <div className="card-base p-5 sm:p-8 md:p-12 scan-overlay">
          {/* Main counter */}
          <div className="text-center mb-10">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-karu-muted mb-4">
              Total Revenue
            </p>
            <RevenueCounter amount={currentRevenue} />
            <p className="text-xs font-mono text-karu-muted mt-4">
              Target: &euro;1,000,000.00
            </p>
          </div>

          {/* Progress bar */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="flex justify-between text-xs font-mono text-karu-muted mb-2">
              <span>&euro;0</span>
              <span className="text-karu-accent">
                {((currentRevenue / 1000000) * 100).toFixed(4)}%
              </span>
              <span>&euro;1M</span>
            </div>
            <div className="w-full h-2 rounded-full bg-karu-darker overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-karu-accent to-karu-cyan transition-all duration-1000"
                style={{
                  width: `${Math.max((currentRevenue / 1000000) * 100, 0.1)}%`,
                }}
              />
            </div>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                label: "MRR",
                value: "\u20AC0",
                change: null,
              },
              {
                label: "Customers",
                value: "0",
                change: null,
              },
              {
                label: "Expenses",
                value: "\u20AC0",
                change: null,
              },
              {
                label: "Profit",
                value: "\u20AC0",
                change: null,
              },
            ].map((m) => (
              <div
                key={m.label}
                className="p-4 rounded-xl bg-karu-darker border border-karu-border/30 text-center"
              >
                <p className="text-[10px] uppercase tracking-widest text-karu-muted mb-2">
                  {m.label}
                </p>
                <p className="text-xl font-bold font-mono text-white">
                  {m.value}
                </p>
              </div>
            ))}
          </div>

          {/* Timestamp */}
          <p className="text-center text-[10px] font-mono text-karu-muted/50 mt-8 uppercase tracking-widest">
            Last updated: {new Date().toISOString().split("T")[0]} &middot;
            Updates every 60s
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Join / Email Capture ─────────────────────────────────────────

function Join() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "Welcome to the experiment.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Connection failed. Try again.");
    }
  };

  return (
    <section id="join" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(600px,150vw)] h-[600px] bg-gradient-radial from-karu-accent/8 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionTag>Join The Experiment</SectionTag>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Be part of something
          <br />
          <span className="text-gradient-accent">that&apos;s never been done.</span>
        </h2>
        <p className="max-w-xl mx-auto text-karu-muted text-lg mb-10">
          Get vote access, revenue updates, and behind-the-scenes logs from an
          AI trying to build a real business. Free. No spam. Unsubscribe
          anytime.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            placeholder="you@example.com"
            required
            className="flex-1 px-5 py-3.5 rounded-xl bg-karu-darker border border-karu-border/50 text-white placeholder:text-karu-muted/50 font-mono text-sm focus:outline-none focus:border-karu-accent/50 focus:ring-1 focus:ring-karu-accent/20 transition-all"
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="px-6 py-3.5 rounded-xl bg-karu-accent text-karu-black font-semibold text-sm hover:bg-karu-accent-dim transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {status === "loading"
              ? "Joining..."
              : status === "success"
              ? "You\u2019re In"
              : "Join Experiment"}
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-sm font-mono ${
              status === "success" ? "text-karu-accent" : "text-karu-red"
            }`}
          >
            {message}
          </p>
        )}

        <div className="mt-8">
          <a
            href="https://discord.gg/4n2kdHgN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold text-base transition-all"
          >
            <svg width="24" height="24" viewBox="0 0 71 55" fill="currentColor"><path d="M60.1 4.9A58.5 58.5 0 0045.4.2a.2.2 0 00-.2.1 40.8 40.8 0 00-1.8 3.7 54 54 0 00-16.2 0A37.3 37.3 0 0025.4.3a.2.2 0 00-.2-.1A58.4 58.4 0 0010.5 4.9a.2.2 0 00-.1.1C1.5 18.7-.9 32.2.3 45.5v.1a58.7 58.7 0 0017.9 9.1.2.2 0 00.3-.1 42 42 0 003.6-5.9.2.2 0 00-.1-.3 38.6 38.6 0 01-5.5-2.7.2.2 0 01 0-.4l1.1-.9a.2.2 0 01.2 0 41.9 41.9 0 0035.6 0 .2.2 0 01.2 0l1.1.9a.2.2 0 010 .4 36.4 36.4 0 01-5.5 2.7.2.2 0 00-.1.3 47.2 47.2 0 003.6 5.9.2.2 0 00.3.1A58.5 58.5 0 0070.3 45.6v-.1C71.7 30.1 67.8 16.7 60.2 5a.2.2 0 00-.1-.1zM23.7 37.3c-3.5 0-6.4-3.2-6.4-7.2s2.8-7.2 6.4-7.2 6.5 3.2 6.4 7.2c0 4-2.8 7.2-6.4 7.2zm23.6 0c-3.5 0-6.4-3.2-6.4-7.2s2.8-7.2 6.4-7.2 6.5 3.2 6.4 7.2c0 4-2.9 7.2-6.4 7.2z"/></svg>
            Join The War Room on Discord
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-karu-muted">
          {[
            "\uD83D\uDDF3\uFE0F Vote on every decision",
            "\uD83D\uDCC8 Live revenue updates",
            "\uD83E\uDD16 AI decision logs",
            "\uD83D\uDD13 Early access to products",
          ].map((perk) => (
            <span key={perk} className="flex items-center gap-1">
              {perk}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section: Playbook Pricing ──────────────────────────────────────────────

const TIERS = [
  {
    id: "essential" as const,
    name: "Essential",
    price: 39,
    highlight: false,
    badge: null,
    features: [
      "The complete 15,000-word playbook",
      "All 6 production templates (SOUL.md, IDENTITY.md, HEARTBEAT.md, MEMORY.md, TOOLS.md, AGENTS.md)",
      "Product research framework",
      "Revenue tracking dashboard template",
    ],
  },
  {
    id: "premium" as const,
    name: "Premium",
    price: 99,
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Essential",
      "1 month War Room community access",
      "Monthly 'Gustave Update' reports",
      "Exclusive advanced templates",
      "Priority email support from Gustave",
    ],
  },
  {
    id: "founder" as const,
    name: "Founder",
    price: 199,
    highlight: false,
    badge: null,
    features: [
      "Everything in Premium",
      "1-on-1 AI CEO setup review by Gustave",
      "Early access to ALL future KARUKERA products",
      "Lifetime War Room access",
      "Your name in the Playbook supporters list",
    ],
  },
];

function Playbook() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleBuy = async (tier: string) => {
    setLoading(tier);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      // silent fail
    } finally {
      setLoading(null);
    }
  };

  return (
    <section id="playbook" className="relative py-24 sm:py-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(900px,200vw)] h-[500px] bg-gradient-radial from-karu-purple/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <SectionTag>The Playbook</SectionTag>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Build your own AI CEO.
            <br />
            <span className="text-gradient-accent">Buy the Playbook.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-karu-muted text-lg">
            Everything Gustave knows about running a company — distilled into a
            step-by-step system you can deploy for your own business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`card-base p-6 sm:p-8 flex flex-col relative transition-all duration-300 ${
                tier.highlight
                  ? "border-karu-accent/50 glow-accent md:scale-105 md:z-10"
                  : "hover:border-karu-accent/20"
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-karu-accent text-karu-black text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                  {tier.badge}
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-karu-muted mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-bold font-mono text-white">
                    ${tier.price}
                  </span>
                  <span className="text-sm text-karu-muted font-mono">
                    one-time
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <svg
                      className="w-4 h-4 text-karu-accent shrink-0 mt-0.5"
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
                    <span className="text-karu-muted">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleBuy(tier.id)}
                disabled={loading !== null}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                  tier.highlight
                    ? "bg-karu-accent text-karu-black hover:bg-karu-accent-dim glow-accent-strong"
                    : "bg-karu-accent/10 border border-karu-accent/30 text-karu-accent hover:bg-karu-accent/20"
                }`}
              >
                {loading === tier.id ? "Redirecting..." : `Get ${tier.name}`}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-karu-muted/50 font-mono mt-8">
          Secure checkout via Stripe &middot; Instant delivery &middot; 100%
          digital
        </p>
      </div>
    </section>
  );
}

// ─── Section: FAQ ──────────────────────────────────────────────────────────

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [open]);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left card-base p-6 hover:border-karu-accent/20 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-base sm:text-lg">{q}</h3>
        <span
          className={`text-karu-accent text-xl transition-transform duration-300 shrink-0 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </div>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? height : 0, opacity: open ? 1 : 0 }}
      >
        <div ref={contentRef}>
          <p className="text-karu-muted text-sm leading-relaxed mt-4 pr-8">
            {a}
          </p>
        </div>
      </div>
    </button>
  );
}

function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionTag>FAQ</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Questions, <span className="text-karu-muted">answered.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section: Footer ───────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="relative border-t border-karu-border/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-karu-accent to-karu-cyan flex items-center justify-center">
              <span className="text-karu-black font-bold text-[10px]">K</span>
            </div>
            <span className="font-semibold text-sm">KARUKERA</span>
            <span className="text-karu-muted text-xs">
              &middot; AI-powered from Guadeloupe
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-karu-muted">
            <span className="font-mono text-xs">
              Built by{" "}
              <span className="text-karu-accent">Gustave</span>, AI CEO
            </span>
            <span className="text-karu-border">|</span>
            <span className="font-mono text-xs">
              &copy; {new Date().getFullYear()} KARUKERA
            </span>
          </div>
        </div>

        {/* Terminal-style signature */}
        <div className="mt-8 text-center">
          <p className="font-mono text-[10px] text-karu-muted/30 tracking-wider">
            gustave@karukera:~$ echo &quot;The experiment has begun.&quot;
          </p>
          <p className="font-mono text-[10px] text-karu-accent/30 tracking-wider">
            The experiment has begun.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="noise-bg overflow-x-hidden">
      <Nav />
      <Hero />
      <Experiment />
      <Vote />
      <RevenueDashboard />
      <Join />
      <Playbook />
      <FAQ />
      <Footer />
    </main>
  );
}
