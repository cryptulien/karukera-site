---
name: Karukera
description: Territoire île — studio et vente, une âme, deux pièces.
colors:
  salt: "#E6EBE6"
  foam: "#D2DDD8"
  mist: "#B8C6C0"
  stone: "#4E5F59"
  tide: "#2F3F3B"
  ink: "#142228"
  lagoon: "#184A58"
  canopy: "#1E2E24"
  flame: "#C43A14"
  sand: "#E4D4B4"
typography:
  display:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "clamp(2.15rem, 8vw, 7.5rem)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "clamp(1.85rem, 4vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  reading:
    fontFamily: "Literata, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  sm: "2px"
  md: "6px"
  lg: "12px"
  pill: "999px"
spacing:
  sm: "8px"
  md: "24px"
  lg: "64px"
  xl: "112px"
components:
  button-primary:
    backgroundColor: "{colors.flame}"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "#C43A14D9"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    height: "48px"
---

# Design System: Karukera

## Overview

**Creative North Star: "On entre dans un lieu."**

Karukera n'est pas une vitrine. C'est un territoire : lumière de fin de matinée sous une varangue, mer au loin, forêt plus bas. La précision (médecin, entrepreneur, tech) habite cette lenteur. Le papillon de la Guadeloupe n'est pas dessiné — il est respiré : Grande-Terre (clair, ouvert) sur la home, Basse-Terre (ombre, régénération) sur le carnet, Marie-Galante (ne rien forcer) dans le tempo partout.

Deux pièces, même air. Le studio est le territoire. `/agents` vend, avec les mêmes matériaux.

**Key Characteristics:**
- Badigeon minéral froid, pas papier washi
- Un seul accent chaud : le flamboyant
- Planches BD d'île monumentales (plage, villa, forêt, portrait)
- Young Serif pour les titres, Bricolage pour l'UI, Literata pour la lecture
- Light mode. Gravité douce. Jamais hustle.

## Colors

Palette dérivée des planches, pas d'une recette crème + terracotta.

### Primary
- **Flamboyant** (`flame`): l'unique accent chaud. CTA, focus, sélection. Rare.

### Secondary
- **Lagon** (`lagoon`): eau, liens secondaires, filet de séparation.

### Neutral
- **Sel** (`salt`): champ de toutes les pièces — badigeon de varangue.
- **Écume / brume** (`foam`, `mist`): surfaces et bordures.
- **Marée / pierre** (`tide`, `stone`): texte courant et muet.
- **Encre** (`ink`): titres.
- **Canopée** (`canopy`): champ Basse-Terre (carnet).
- **Sable** (`sand`): chaleur ponctuelle, jamais fond de page.

**The One Flame Rule.** Un seul accent chaud par écran. S'il apparaît partout, ce n'est plus un flamboyant, c'est une alarme.

## Typography

**Display Font:** Young Serif (Georgia)
**Body Font:** Bricolage Grotesque (system-ui)
**Reading Font:** Literata (Georgia)

**Character:** album un peu ancien + imprimerie locale + livre. Pas japonais, pas SaaS grotesque, pas Playfair.

### Hierarchy
- **Display** (400, jusqu'à ~7.5rem, 0.88): wordmark hero seulement.
- **Headline** (400, 1.85–3.5rem): titres de section et de vente.
- **Body** (Bricolage, 1.125rem, ~65–75ch): UI, vente, navigation.
- **Reading** (Literata, 1.125rem): carnet et à-propos.

**The No Kicker Rule.** Pas d'eyebrow, pas de label tracked au-dessus d'un titre. Le titre porte son poids.

## Layout

Mesure studio ~48–64rem. Vente jusqu'à 72rem. Plus d'air au-dessus d'un titre qu'en dessous. Home : planches plein viewport, puis plaques d'album (pas de cartes). Carnet : bande forêt, puis lecture. Vente : promesse, familles, preuve, CTA.

## Elevation & Depth

Studio : plat. La profondeur vient des planches et du champ, pas des ombres.

Vente : une ombre large et douce sous une carte produit (`0 12px 40px -18px`), jamais un halo coloré, jamais une ombre dure.

## Shapes

Coins discrets (2–12px). CTA en pill. Filet lagon 1px, 64px de large, jamais un point vermillon.

## Components

### Buttons
- **Shape:** pill
- **Primary:** flamboyant, texte blanc, hauteur 48px (36px compact en nav)
- **Focus:** filet flamboyant 2px

### Cards / Containers
- Studio : pas de cartes. Plaques séparées par un filet.
- Vente : carte blanche / sel, rayon 12–16px, une ombre, image 16:9.

### Navigation
- Studio : wordmark → home. Projets · Agents · Carnet. Flottante blanche sur planche, sel sur le reste.
- Vente : wordmark → `/agents`. Pas de lien studio dans le premier viewport.

### Signature
- Surfeur : silhouette SVG lointaine sur l'eau du hero. Absent si `prefers-reduced-motion`.
- Mer : contrôle texte « La mer », Web Audio, jamais autoplay.

## Do's and Don'ts

### Do:
- **Do** garder `plage.webp`, `villa.webp`, le portrait / favicon. Ce sont le socle.
- **Do** laisser le horizon lisible : overlay d'encre léger, jamais un voile à 80 %.
- **Do** traiter `/agents` comme une pièce de conversion dans les mêmes matériaux.

### Don't:
- **Don't** dessiner le papillon, ni une carte, ni une mascotte.
- **Don't** reconduire washi, Shippori, Space Grotesk, vermillon-sceau.
- **Don't** inventer avis, prix, preuves, visages clients.
- **Don't** habiller la vente en brochure villa ou en costume BD SuperPagr / Le Lien.
