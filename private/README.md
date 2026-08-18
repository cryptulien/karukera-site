Le ZIP livré n’est pas dans git (produit payant).

`karukera-security-kit.zip.enc` et `karukera-sales-secretary.zip.enc` sont les kits chiffrés (AES-256, `KIT_DOWNLOAD_SECRET`).
`npm run pack-kit` les packe depuis `kits/<sku>/` s’il est présent, sinon déchiffre le `.enc` au build.
