# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary (home / studio):** a visitor discovering Julien Lelandais — médecin psychiatre et entrepreneur — et ce qu'il construit. Job : comprendre *qui* est derrière SuperPagr, Le Lien, OpenStats, et s'il vaut la peine de suivre.

**Secondary ( /agents ):** entrepreneur qui cherche un outil IA pour son quotidien. Job : comprendre que Karukera Agents sont des kits lancés chez lui, calés sur sa pratique, en deux familles qui ne se mélangent pas — Technique (aujourd'hui l'audit sécu) et Commercial (aujourd'hui la secrétaire). Il peut arriver directement sur `/agents/security` ou `/agents/secretary`.

Les deux publics se croisent ; la home n'essaie pas de convertir le second, `/agents` n'essaie pas de raconter le premier.

## Product Purpose

Karukera.xyz est le site du studio Karukera. Il a deux jobs distincts, dans cet ordre :

1. **Studio.** Dire qui est Julien, ce qu'il construit (santé, software agentic), et tenir un carnet public.
2. **Karukera Agents.** Présenter des kits IA pour entrepreneurs, en deux familles (Technique, Commercial), et vendre les SKU réels : audit sécu `/{locale}/agents/security`, secrétaire `/{locale}/agents/secretary`.

Succès home : un inconnu peut raconter Seijaku et citer un projet en une minute.  
Succès /agents : un visiteur peut dire ce qu'est Karukera Agents, nommer les deux familles, et ouvrir le kit qui correspond à sa pratique — sans que sécu et sales soient vendus comme un même produit.

## Positioning

Un humain seul, médecin, qui livre du software agentic — et maintenant des *kits* d'agents que d'autres font tourner chez eux (Claude Code / Cursor / Codex / Hermes), branchés sur OpenRouter. Ce n'est ni une agence IA, ni un scanner SaaS hébergé, ni un portfolio de designer.

Le kit sécu se distingue par : modèles frontier qui ne refusent pas l'audit, chaîne de preuve, six statuts de mesure, Double QA bloquante, agent MCP/Skills.

## Operating Context

- Site Next.js 15, i18n `/fr` `/en` `/es`, hébergé Vercel, domaine `karukera.xyz`.
- Chemins figés : home studio ; `/agents` catalogue ; `/agents/security` produit ; `/blog` (Le Carnet).
- Le kit sécu est un ZIP de prompts / configs / templates, pas une appli hébergée. Source locale `kits/security-kit/` (gitignorée), miroir privé `cryptulien/karukera-security-kit`. Le site public ne contient que le ZIP chiffré.
- Le kit **secrétaire commercial** (Hermes + Ringover + Odoo) : source locale `kits/sales-secretary/` (gitignorée), miroir privé `cryptulien/karukera-sales-secretary`, ZIP chiffré `private/karukera-sales-secretary.zip.enc`, page `/{locale}/agents/secretary`.
- OpenStats vit sur `openstats.karukera.xyz` (appli, hors de ce site). SuperPagr et Le Lien ont leurs propres domaines.
- Publications : X (manuel V1) et LinkedIn via Postiz. DA de sharing requise.
- Maquettes : Penpot self-hosted (`penpot.superpagr.com`).

## Capabilities and Constraints

- Boutique : deux SKU — kit d'audit sécu (`/agents/security`) et kit secrétaire commercial (`/agents/secretary`). Le reste reste « bientôt ».
- Pas de compte client, pas de dashboard, pas d'audit hébergé.
- Light mode uniquement (contrainte utilisateur).
- Seijaku (« calme dans la tempête ») est une **méthode et un engagement de marque**, pas une recette visuelle. Le costume washi / Shippori / vermillon est sorti.
- DA : territoire île (badigeon de varangue, encre lagon, accent flamboyant, Young Serif + Bricolage + Literata). Planches plage / villa / portrait conservées. Papillon respiré, jamais dessiné.
- Prix, témoignages, captures d'audit, logos clients : **non affichés** tant qu'ils n'existent pas. Pas d'invention.
- Preuves autorisées : photos Guadeloupe déjà dans `public/images/`, noms de projets réels, extraits du Carnet, faits de fonctionnement du kit (OpenRouter, squad, règles) une fois le kit écrit.

## Brand Commitments

- Nom : **Karukera** (nom indigène de la Guadeloupe). Société de Julien Lelandais.
- Voix : calme, précise, première personne sur le studio ; factuelle et non hype sur le kit.
- Seijaku est binding comme *attitude* : retenue, un sceau plutôt qu'une alarme, lumière du jour (light).
- Une âme, deux pièces. Studio (home, projets, carnet) = territoire. Vente (`/agents`, SKU, guides) = conversion, **mêmes matériaux** (typo, palette, accent), autre meuble. Pas de lien studio dans le premier viewport vente.
- Home : une page-voyage en assets pixel (arrivée bateau → îles-projets → plongée → carnet sous l’eau). Texte en HTML, pas un jeu. **Sans** les marques BD SuperPagr / Le Lien.
- Pas de sous-domaine produit : tout vit sous `karukera.xyz/{locale}/…`.
- Nav cible : Projets · Agents · Carnet.

## Evidence on Hand

- Site live : https://karukera.xyz (home + Carnet). Pas de `robots.txt` ni de `sitemap.xml`.
- Images : `public/images/plage.webp`, `villa.webp`, et 2 autres + favicon.
- Projets citables : SuperPagr (superpagr.com), Le Lien (pas encore de site), OpenStats (openstats.karukera.xyz).
- Un article Carnet (founder memo) dans `lib/posts.tsx`.
- Pas de logo-marque au-delà du wordmark « Karukera » en serif.
- Pas de clients kit, pas de rapport d'audit publiable, pas de prix confirmé à l'écran.

## Product Principles

1. La home est un studio, pas une landing de vente.
2. `/agents` est le catalogue Karukera Agents : deux familles (Technique, Commercial), une offre réelle par carte ; le reste s'annonce en ligne, jamais en faux produit.
3. Rien d'inventé : pas de preuve, pas de chiffre, pas de visage client.
4. Seijaku gouverne le *comportement* de la marque (calme, un accent, lumière) — pas le costume washi de 2026.
6. Une âme, deux pièces. Home : planches monumentales, lenteur. Vente : landing de conversion dans les mêmes matériaux, pas de logos BD.
5. Une seule propriété SEO : sous-dossiers, une DA, deux registres (studio / offre).

## Accessibility & Inclusion

WCAG 2.2 AA visé sur le site public. Contraste light-mode non négociable (le vermillon actuel sur crème est à vérifier, pas à reconduire en aveugle). i18n FR/EN/ES conservé.
