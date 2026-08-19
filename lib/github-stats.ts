export type GitHubRepoStats = {
  stars: number;
  forks: number;
};

export function parseGitHubRepoStats(payload: unknown): GitHubRepoStats | null {
  if (!payload || typeof payload !== "object") return null;
  const p = payload as Record<string, unknown>;
  if (typeof p.stargazers_count !== "number" || typeof p.forks_count !== "number") {
    return null;
  }
  if (!Number.isFinite(p.stargazers_count) || !Number.isFinite(p.forks_count)) {
    return null;
  }
  return { stars: p.stargazers_count, forks: p.forks_count };
}

/** Public GitHub API, 1h cache. Token optional (higher rate limit). */
export async function getGitHubRepoStats(repo: string): Promise<GitHubRepoStats | null> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "karukera-site",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      headers,
      redirect: "follow",
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return parseGitHubRepoStats(await res.json());
  } catch {
    return null;
  }
}
