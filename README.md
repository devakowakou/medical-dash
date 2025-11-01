
# Medical Dashboard

Application web de tableau de bord médical construite avec Next.js et TypeScript.

Ce README explique rapidement comment installer, lancer et déployer ce projet, ainsi que sa structure principale.

## Principales caractéristiques

- Basé sur Next.js (app router) + TypeScript
- UI composée de composants réutilisables (Tailwind CSS, Radix UI, Lucide)
- Cartographie (GeoJSON) servie via une API interne

## Prérequis

- Node.js (>= 18 recommandé)
- npm ou pnpm (les scripts utilisent npm, adaptez si vous utilisez pnpm/yarn)

Remarque : le script de développement démarre Next avec Turbopack et écoute le port 9002 par défaut (voir `package.json`).

## Installation

1. Clonez le dépôt :

	git clone <url-du-repo>
	cd medical-dashboard

2. Installez les dépendances :

	npm install

3. Lancez le serveur de développement :

	npm run dev

Ouvrez ensuite http://localhost:9002/ dans votre navigateur (ou le port configuré).

## Scripts utiles (depuis `package.json`)

- `npm run dev` — démarre l'application en développement (avec Turbopack) sur le port 9002.
- `npm run build` — build de production (NODE_ENV=production).
- `npm run start` — démarre le serveur Next en production (après `build`).
- `npm run lint` — lance l'outil de linting Next.js.
- `npm run typecheck` — vérifie les types TypeScript sans émettre d'artéfacts.

## Variables d'environnement

Ce projet peut utiliser des variables d'environnement (par ex. pour pointer vers une API). Exemple courant :

- `NEXT_PUBLIC_API_URL` — URL publique de l'API (utilisée côté client si nécessaire)

Si vous ajoutez des variables, créez un fichier `.env.local` à la racine (ne le commitez pas).

## Structure du projet (extrait)

- `src/app/` — routes et pages (App Router)
- `src/components/` — composants réutilisables (UI, dashboard, icônes)
- `src/lib/` — utilitaires, données (ex. `all-wilayas.geojson`)
- `public/` — fichiers statiques

Le point d'entrée de la page d'accueil est `src/app/page.tsx`.

## Géodata

Le projet sert le fichier GeoJSON via une route API locale (`src/app/api/wilayas/route.ts`) afin d'éviter les problèmes d'import direct de `.geojson` dans le bundler.

## Déploiement

- Vercel : Next.js est entièrement compatible. Poussez la branche main et configurez les variables d'environnement dans le dashboard Vercel.
- Docker : vous pouvez containeriser l'application en construisant le projet (`npm run build`) puis en lançant `next start` dans une image node:slim.

## Tests & qualité

Ce dépôt n'inclut pas (encore) de suite de tests automatisés. Exécutez au minimum :

```
npm run typecheck
npm run lint
```

## Contribution

Contributions bienvenues : ouvrez une issue pour discuter d'abord des changements importants, puis un pull request clair avec une description et, si besoin, des captures d'écran.

## Licence

Indiquez ici la licence du projet (ex. MIT) ou supprimez cette section si le projet est privé.

---

Si vous voulez que j'ajoute des badges (CI, couverture, version) ou un exemple d'environnement (`.env.example`), dites-le et je l'ajoute.
