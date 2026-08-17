# Karukera Security Kit

*Briefing note · August 2026 · public document*

A ZIP of agents you run on your machine to secure your app — and therefore your revenue. This note covers scope, method and delivery. Nothing here is access. Nothing here is sensitive data.

## In one sentence

You open the kit in Claude, Codex, Cursor or Hermes, on your machine. You name the project, the depth, and whether you give access. You get a report with evidence, then fix tickets — each with a prompt to paste into your LLM.

## Who it is for

A solo founder, a small team, a SaaS that takes money. Not an AppSec team. The hole that costs you is rarely a missing header: it is an IDOR between two accounts, a leaking session, an agent tool opened too wide.

## Scope

The kit only audits a system you are authorised to test in writing: your site, SaaS, API, MCP instance, or a client system under a signed mandate. Otherwise it stops.

You choose how to look. The three postures combine. What you do not choose stays “Untested” — it is not invented.

- Outside — what a stranger sees: public pages, headers, served JS, exposed files, login.
- Code — the local repo, on your disk. Evidence = path + excerpt + date. Not a repo dump.
- Inside — from a real SaaS account. Authz and isolation (customer A vs customer B). Without an account, those tests stay Untested.

Test-account emails and roles go in the brief. Passwords do not go through chat. Red team: written mandate, or stop.

## What it is not

- Not a hosted scanner. Karukera never sees the target, the code, or your keys.
- Not an agency, not a week of human pentest.
- Not an exploit framework: no payload, no attack PoC, no DoS.
- Not a SOC 2 certificate, not a claim of exhaustiveness.
- Not an audit of a third-party site “just to look”.

## Method

The kit is a ZIP of prompts, configs and templates. No code required. You open it in the agent you already use.

Claude, Codex and other models often refuse a security audit. An OpenRouter key then routes to models that will do it. Credits stay yours. The key is deposited off-chat, on your machine.

You do not pick an internal id. You name the project, the depth, the access. The orchestrator maps to one of eight modes:

- Express — first signal, 30–45 min.
- Full Web — site or app, pages, cookies, same-origin API.
- Full SaaS — orgs, roles, isolation. Two tenants to confirm an IDOR.
- Agents / MCP — tools, skills, a copilot wired to data.
- Delta — after fixes: what moved.
- Continuous — periodic snapshot, release guardrail.
- Light red team — adversarial exercise. Written mandate, still no exploit.
- Board report — decision-maker synthesis. No new tests. Refused if QA has not signed.

Twelve agents run in a fixed order: surface, threats, pages, session, authorisation, API, secrets, supply chain, MCP, then adversarial QA, then the report. QA rereads the evidence chain. Without its signature there is no deliverable — not even a “draft for the committee”.

Six statuses, never merged with a coverage gauge: Confirmed, Likely, Hypothesis, Untested, Mitigated, False positive. Confirmed requires evidence (URL or file:line, excerpt, date, method). No evidence, not Confirmed.

## Delivery

What you read at the end is not a marketing PDF.

- A report: synthesis, prioritised findings (P0–P3), what was not tested.
- Evidence: excerpts already seen, secrets masked, append-only journal.
- Fix tickets: one per important finding. Each has the expected action, the exit criterion, and a prompt ready to paste into Claude or Codex — no payload, no attack recipe.

Untested items stay visible, especially isolation with a single tenant. An Express is never dressed up as a strategic audit.

## Launch line

> Audit this project on my machine. URL: https://app.example.tld. Code: ./my-app. Full. Outside + inside. Accounts are in the brief, not here.

Replace the URL and the path. Do not invent accounts. Do not put a password in that sentence.

## Price and fulfilment

€197, once. The ZIP downloads after payment, via a signed link. Updates arrive by email. Karukera proxies nothing: your models, your credits, your machine.

## What this document is not

This is not the kit. It is the public briefing. The deliverable remains the ZIP. Nothing here grants access to a target, an account, or the paid contents.
