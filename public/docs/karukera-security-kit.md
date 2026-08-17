# Karukera Security Kit

*Note de présentation · août 2026 · document public*

Un ZIP d’agents que tu lances chez toi pour sécuriser ton application — donc tes revenus. Ce texte décrit le périmètre, la méthode et la restitution. Rien ici n’est un accès. Rien n’est une donnée sensible.

## En une phrase

Tu ouvres le kit dans Claude, Codex, Cursor ou Hermes, sur ta machine. Tu dis quel projet auditer, à quelle profondeur, et si tu fournis des accès. Tu reçois un rapport avec des preuves, puis des tickets de correctif — chacun avec un prompt à coller dans ton LLM.

## Pour qui

Un solo founder, une petite équipe, un SaaS qui encaisse. Pas une équipe AppSec. Le trou qui coûte n’est généralement pas un header manquant : c’est un IDOR entre deux comptes, une session qui fuit, un tool d’agent trop ouvert.

## Périmètre

Le kit n’audite qu’un système dont tu as l’autorisation écrite : ton site, ton SaaS, ton API, ton instance MCP, ou le système d’un client qui t’a signé un mandat. Hors ça, il s’arrête.

Tu choisis comment regarder. Les trois approches se combinent. Ce que tu ne choisis pas reste marqué « Non testé » — ce n’est pas inventé.

- Extérieur — ce qu’un inconnu voit : pages publiques, en-têtes, JS servi, fichiers exposés, login.
- Code — le dépôt local, chez toi. Preuve = chemin + extrait + date. Pas un dump du repo.
- Intérieur — depuis un compte réel du SaaS. Sert à l’authz et à l’isolation (client A vs client B). Sans compte, ces tests restent Non testé.

Les e-mails et rôles des comptes de test vont dans le brief. Les mots de passe ne passent pas par le chat. Red-team : mandat écrit obligatoire, sinon stop.

## Ce que ce n’est pas

- Pas un scanner hébergé. Karukera ne voit ni la cible, ni le code, ni tes clés.
- Pas une agence, pas un pentester humain à la semaine.
- Pas un framework d’exploit : zéro payload, zéro PoC d’attaque, zéro DoS.
- Pas un certificat SOC 2, pas une garantie d’exhaustivité.
- Pas un audit d’un site tiers « pour voir ».

## Méthode

Le kit est un ZIP de prompts, configs et templates. Zéro code obligatoire. Tu l’ouvres dans l’agent que tu as déjà.

Claude, Codex et d’autres modèles refusent souvent de mener un audit de sécurité. Dans ce cas, une clé OpenRouter route vers des modèles qui l’acceptent. Les crédits sont les tiens. La clé se dépose hors chat, sur ta machine.

Tu ne choisis pas un identifiant interne. Tu dis le projet, la profondeur, les accès. L’orchestrateur mappe vers un des huit modes :

- Express — premier signal, 30–45 min.
- Complet Web — site ou app, pages, cookies, API de même origine.
- Complet SaaS — orgs, rôles, isolation. Deux tenants pour confirmer un IDOR.
- Agents / MCP — tools, skills, copilote branché sur des données.
- Delta — après correctifs : qu’est-ce qui a bougé.
- Continu — snapshot périodique, garde-fou de release.
- Red-team léger — exercice adverse. Mandat écrit, toujours sans exploit.
- Rapport board — synthèse décideur. Aucun test nouveau. Refusé si la QA n’a pas signé.

Douze agents s’enchaînent dans un ordre fixe : surface, menaces, pages, session, autorisation, API, secrets, supply chain, MCP, puis une QA adverse, puis le rapport. La QA relit la chaîne de preuve. Sans sa signature, il n’y a pas de livrable — pas même un « brouillon pour le comité ».

Six statuts, jamais fusionnés avec une jauge de couverture : Confirmé, Probable, Hypothèse, Non testé, Mitigé, Faux positif. Un Confirmé exige une preuve (URL ou fichier:ligne, extrait, date, méthode). Sans preuve, ce n’est pas Confirmé.

## Restitution

Ce que tu lis à la fin n’est pas un PDF marketing.

- Un rapport : synthèse, findings priorisés (P0–P3), ce qui n’a pas été testé.
- Les preuves : extraits déjà vus, secrets masqués, journal append-only.
- Des tickets de correctif : un par finding important. Chacun porte l’action attendue, le critère de sortie, et un prompt prêt à coller dans Claude ou Codex pour appliquer le correctif — sans payload, sans recette d’attaque.

Les Non testé restent visibles, surtout l’isolation à un seul tenant. On ne maquille pas un Express en audit stratégique.

## Phrase pour lancer

> Audite ce projet chez moi. URL : https://app.exemple.tld. Code : ./mon-app. Complet. Extérieur + intérieur. Les comptes sont dans le brief, pas ici.

Remplace l’URL et le chemin. N’invente aucun compte. N’y mets aucun mot de passe.

## Prix et livraison

197 €, une fois. Le ZIP se télécharge après paiement, via un lien signé. Les mises à jour arrivent par mail. Karukera ne proxy rien : tes modèles, tes crédits, ta machine.

## Ce que ce document n’est pas

Ce n’est pas le kit. C’est la présentation publique du kit. Le livrable reste le ZIP. Rien ici ne donne accès à une cible, à un compte, ou au contenu payant.
