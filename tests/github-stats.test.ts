import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { parseGitHubRepoStats } from "../lib/github-stats.ts";

describe("parseGitHubRepoStats", () => {
  it("reads stars and forks from a GitHub repo payload", () => {
    assert.deepEqual(
      parseGitHubRepoStats({ stargazers_count: 12, forks_count: 3 }),
      { stars: 12, forks: 3 },
    );
  });

  it("returns null on missing or invalid payloads", () => {
    assert.equal(parseGitHubRepoStats(null), null);
    assert.equal(parseGitHubRepoStats({}), null);
    assert.equal(parseGitHubRepoStats({ stargazers_count: "12", forks_count: 1 }), null);
    assert.equal(parseGitHubRepoStats({ stargazers_count: 1 }), null);
  });

  it("accepts zero stars and forks", () => {
    assert.deepEqual(parseGitHubRepoStats({ stargazers_count: 0, forks_count: 0 }), {
      stars: 0,
      forks: 0,
    });
  });
});
