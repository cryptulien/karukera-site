# Karukera territoire — plan

> Exécution inline (feu vert utilisateur). Spec : `docs/superpowers/specs/2026-08-18-karukera-territoire-design.md`.

**Goal:** Remplacer le costume washi/vermillon par un système île unique, appliqué au studio et à la vente.

**Architecture:** Tokens `isle-*` + Young Serif / Bricolage / Literata. Home = Grande-Terre. Carnet = Basse-Terre. `/agents` garde la conversion, change de matériaux.

**Tech Stack:** Next.js 15, Tailwind 3, next/font, Web Audio, SVG.

## Global Constraints

- Light mode. FR/EN/ES. Pas de preuve inventée. Planches plage/villa/portrait intactes.
- Pas de papillon graphique. Pas d'eyebrow. Un accent (flamboyant).
- `/agents` : pas de lien studio dans le premier viewport.
- `prefers-reduced-motion` coupe surfeur et mer.

### Task 1 — Système

Tokens, fonts, globals, chrome partagé, composants SeaSound + Surfer.

### Task 2 — Studio

Home, nav/footer, carnet, posts, planche `foret.webp`.

### Task 3 — Vente

SalesNav/Footer, BuyButton, catalogue, SKU, guides, thanks : mêmes tokens.

### Task 4 — Vérité produit

PRODUCT.md + DESIGN.md après inspection navigateur.
