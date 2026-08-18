# Kits Karukera

Sources locales (gitignorées) sous `kits/<sku>/`. Le dépôt public ne versionne que ce fichier.

| SKU | Page | Dossier local | Repo privé |
|---|---|---|---|
| `security-kit` | `/agents/security` | `kits/security-kit/` | `cryptulien/karukera-security-kit` |
| `sales-secretary` | `/agents/secretary` | `kits/sales-secretary/` | `cryptulien/karukera-sales-secretary` |

Les ZIP chiffrés vivent dans `private/*.zip.enc` et se déchiffrent au build. Seuls ces deux SKU sont packés et vendus.

Kit interne (pas un SKU) : `kits/trustmrr-intel/` — veille TrustMRR + Monid, usage privé uniquement. Pas de page, pas de ZIP boutique.
