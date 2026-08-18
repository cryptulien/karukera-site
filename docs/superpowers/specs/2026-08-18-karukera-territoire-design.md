# Karukera — territoire & système visuel

Date : 2026-08-18  
Statut : contractuel (feu vert utilisateur : « vas-y »)

## Décisions figées

- Une âme partout. Deux pièces : studio (home, projets, carnet, à propos) et vente (`/agents`, guides, SKU).
- Papillon respiré, pas dessiné. Pas de carte, pas de motif papillon.
- Réimaginer le chrome (typo, couleur, rythme, lumière). Garder les planches actuelles (plage, villa, portrait / favicon).
- Seijaku reste une attitude (calme, un accent, lumière du jour). Le costume washi / Shippori / vermillon-sceau sort.
- Light mode. FR / EN / ES. Rien d'inventé (prix, avis, preuves).
- Système d'abord, appliqué d'un coup sur studio et vente.

## Scène physique

On lit sous une varangue, fin de matinée, Guadeloupe. La lumière est haute et dure. L'ombre des palmes est nette. Le mur est un badigeon minéral, un peu froid, pas un papier washi. La mer est loin, toujours là.

## Métaphore opératoire (invisible)

| Terre | Qualité | Surface |
|---|---|---|
| Grande-Terre | Clair, ouvert, horizon | Home : planches monumentales, air, entrée |
| Basse-Terre | Ombre, régénération, sous-bois | Carnet / à propos : champ plus sombre, lecture |
| Marie-Galante | Ne rien forcer | Tempo de tout le site : motion lente, son optionnel, mesure large |

## Couleur — stratégie *full palette*, dérivée des planches

Pas crème + serif + terracotta. Le champ est un badigeon de varangue (froid-minéral). L'encre est un lagon profond. L'unique accent chaud est le flamboyant (l'arbre, pas le sceau japonais).

| Token | Hex | Rôle |
|---|---|---|
| `isle-salt` | `#E6EBE6` | Champ studio / vente |
| `isle-foam` | `#D2DDD8` | Surface secondaire, filets doux |
| `isle-mist` | `#B8C6C0` | Bordures |
| `isle-stone` | `#4E5F59` | Texte muet (≥ 4.5:1 sur salt) |
| `isle-tide` | `#2F3F3B` | Texte courant |
| `isle-ink` | `#142228` | Titres, encre |
| `isle-lagoon` | `#184A58` | Eau, liens secondaires |
| `isle-canopy` | `#1E2E24` | Champ Basse-Terre (carnet) |
| `isle-canopy-ink` | `#E6EBE6` | Texte sur canopy |
| `isle-flame` | `#C43A14` | Accent unique : CTA, focus, sélection |
| `isle-sand` | `#E4D4B4` | Sable, chaleur ponctuelle |

Le vermillon `#E0483D` / `#E23B2E` et le washi `#FBFAF7` n'existent plus.

## Typographie

Faces hors liste générique IA. Deux voix + une de lecture.

- **Titres et wordmark** : Young Serif (`font-serif`). Coupure un peu ancienne, chaleur d'album, pas japonais, pas Playfair.
- **UI, vente, navigation** : Bricolage Grotesque (`font-sans`). Imprimerie locale, un peu brute.
- **Longue lecture (carnet)** : Literata (`font-text`). Livre, pas landing.

Mesure corps 65–75ch. Display ≤ 6rem. Tracking ≥ −0.03em. Pas d'eyebrows / kickers. Le titre porte son poids.

## Illustration

- Planches existantes : `plage.webp`, `villa.webp`, portrait / favicon. Intouchables.
- Nouvelle planche Basse-Terre : forêt / canopée / cascade, **même grammaire** (ligne encrée, grain, gouache), pour le carnet.
- Interdit : comic moderne, tropical Instagram, brochure villa, papillon graphique, logos BD SuperPagr / Le Lien comme identité.
- Le surfeur est un clin d'œil géométrique (silhouette SVG lointaine), pas une mascotte, pas une illustration figurée.

## Motion & son (Marie-Galante)

Un seul geste d'auteur, pas des fade-in partout.

- **Surfeur** : silhouette minuscule, traverse l'eau du hero en ~50s, une fois par cycle. `prefers-reduced-motion: reduce` → absent.
- **Mer** : boucle Web Audio (bruit brun filtré), jamais autoplay. Contrôle explicite « La mer » dans le hero, volume bas, mémorisé en `localStorage`. Absent si reduced-motion ou si l'utilisateur n'a pas demandé.
- Entrées de section : une lenteur (opacity + léger translate), déjà visibles par défaut si JS off.

## Deux pièces

### Studio (territoire)

Le visiteur entre. Premier viewport = la plage en planche, horizon lisible, overlay d'encre *léger* (plus le dégradé noir à 80 %). Wordmark Karukera. Tagline actuelle conservée. Le bas de page fond vers `salt`.

Pas de cartes projet. Des plaques d'album : titre, domaine en phrase, texte, lien. Air généreux.

Carnet (home + index + article) : champ qui tend vers `canopy` / `foam`, Literata, planche forêt. Lecture, pas vitrine.

Nav studio : Karukera · Projets · Agents · Carnet. Wordmark = home.

### Vente (même air, autre meuble)

`/agents`, SKU, guides, thanks. Même tokens, même typo, même accent flamboyant.

Structure de conversion conservée : promesse, familles, preuve, CTA. Pas de lien « Studio / Accueil » dans le premier viewport (le buyer n'est pas venu visiter). Wordmark → `/agents`.

CTA = `isle-flame`, pill existant, verbe d'action déjà dans le dictionnaire. Pas de témoignages inventés. Console / stages restent la preuve.

## Chrome navigateur

Sélection, focus, soulignement : `isle-flame`. Scrollbar teintée `isle-mist`. Caret `isle-ink`.

## Accessibilité

WCAG 2.2 AA. Contraste vérifié sur salt et sur canopy. Cibles 44px. Son jamais requis pour comprendre. i18n intact.

## Hors scope

- Ne pas réécrire les faits, prix, copy produit.
- Ne pas toucher aux kits, Stripe, e-mails (sauf couleur du bouton mail si elle cite l'ancien vermillon — aligner sur flame).
- Ne pas introduire de dark mode.
- Ne pas dessiner le papillon.

## Critère de succès

Un inconnu, après un viewport : « Je suis entré quelque part. Ici on ne court pas. »  
Il peut encore citer un projet, et sur `/agents` nommer les deux familles et ouvrir un kit.
