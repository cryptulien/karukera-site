import type { Dict } from "@/dictionaries";
import type { GitHubRepoStats } from "@/lib/github-stats";
import { githubCloneUrl, githubHttpsUrl } from "@/lib/kit-offer";
import { CloneButton } from "./CloneButton";

function GitHubMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.7 7.7 0 0 1 8 4.58c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

function RepoStats({
  stats,
  dict,
  tone = "light",
}: {
  stats: GitHubRepoStats;
  dict: Dict;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-sm tabular-nums ${
        tone === "dark" ? "text-white/60" : "text-[#5C5954]"
      }`}
    >
      <span>
        ★ {stats.stars}{" "}
        <span className="sr-only">{dict.oss.stars}</span>
      </span>
      <span>
        ⑂ {stats.forks}{" "}
        <span className="sr-only">{dict.oss.forks}</span>
      </span>
    </span>
  );
}

export function GitHubCta({
  githubRepo,
  license,
  dict,
  stats,
  className = "",
  compact = false,
  tone = "light",
}: {
  githubRepo: string;
  license: string;
  dict: Dict;
  stats: GitHubRepoStats | null;
  className?: string;
  compact?: boolean;
  tone?: "light" | "dark";
}) {
  const href = githubHttpsUrl(githubRepo);
  const clone = `git clone ${githubCloneUrl(githubRepo)}`;

  if (compact) {
    return (
      <div className={`flex items-center gap-3 ${className}`.trim()}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E23B2E] px-4 h-9 text-[13px] font-medium text-white hover:bg-[#c92f24] transition-colors"
        >
          <GitHubMark className="h-3.5 w-3.5" />
          {dict.oss.viewShort}
        </a>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={
            tone === "dark"
              ? "inline-flex items-center rounded-full bg-white px-3 h-7 text-[12px] font-medium text-[#121212]"
              : "inline-flex items-center rounded-full bg-[#121212] px-3 h-7 text-[12px] font-medium text-white"
          }
        >
          {dict.oss.badge}
        </span>
        <span
          className={
            tone === "dark"
              ? "inline-flex items-center rounded-full border border-white/25 px-3 h-7 text-[12px] font-medium text-white"
              : "inline-flex items-center rounded-full border border-black/10 px-3 h-7 text-[12px] font-medium text-[#121212]"
          }
        >
          {license}
        </span>
        {stats ? <RepoStats stats={stats} dict={dict} tone={tone} /> : null}
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E23B2E] px-7 h-12 text-[15px] font-medium text-white hover:bg-[#c92f24] transition-colors"
        >
          <GitHubMark className="h-4 w-4" />
          {dict.oss.viewOnGitHub}
        </a>
        <CloneButton
          command={clone}
          label={dict.oss.clone}
          copiedLabel={dict.oss.cloneCopied}
          tone={tone}
        />
      </div>
      <p className={`mt-3 text-sm ${tone === "dark" ? "text-white/50" : "text-[#8A857D]"}`}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={
            tone === "dark"
              ? "underline underline-offset-4 decoration-white/25 hover:text-white hover:decoration-white"
              : "underline underline-offset-4 decoration-black/20 hover:text-[#121212] hover:decoration-[#121212]"
          }
        >
          github.com/{githubRepo}
        </a>
      </p>
    </div>
  );
}
