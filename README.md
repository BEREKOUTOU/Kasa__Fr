# Kasa - Application web de location immobilière (Refonte)

## Présentation du projet

Bienvenue dans le projet Kasa ! Il s'agit d'une application web de location immobilière développée avec React, repensée à partir des dernières maquettes Figma et des exigences du projet.

### Objectif du projet

L'objectif de ce projet est de développer l'intégralité du front-end de l'application avec React et React Router, en respectant les designs Figma et en garantissant sa réactivité. Le recrutement du back-end est toujours en cours ; pour l'instant, l'application utilisera un fichier JSON statique contenant les 20 dernières annonces immobilières pour construire le front-end.

### Contraintes techniques

- Le projet utilise React avec Vite comme outil de développement.
- Aucune intégration back-end pour le moment ; les données proviennent d'un fichier JSON statique.
- Respecter les directives de codage de Kasa pour la qualité et la cohérence.
- Utiliser React Router pour la navigation entre les pages.
- S'assurer que l'application est responsive et conforme aux maquettes Figma.
- Utilisez les ressources (logo, icônes, images) fournies dans les maquettes Figma.

## Design et Fonctionnalités

### Design

- La conception de l'interface est basée sur les maquettes Figma.
- Toutes les ressources nécessaires (logos, icônes, images) sont disponibles dans les fichiers Figma et peuvent être exportées selon les besoins.
- Les vignettes des appartements incluent un rectangle orange superposé dans les maquettes, qui peut être remplacé par les images de couverture réelles.
- Utilisez les prototypes du site pour comprendre les animations attendues, notamment pour les menus déroulants (composants de réduction).

### Contraintes fonctionnelles

- **Composant Galerie (Défilement des photos)** :
- Lorsque l'utilisateur est sur la première image et clique sur « Précédent », la galerie affiche la dernière image.
- Lorsque l'utilisateur est sur la dernière image et clique sur « Suivant », la galerie affiche la première image.
- S'il n'y a qu'une seule image, les boutons « Suivant » et « Précédent » ainsi que la numérotation ne doivent pas apparaître.
- La hauteur de la galerie doit rester cohérente avec la maquette Figma ; les images doivent être recadrées et centrées dans le cadre.

- **Composant de réduction** :
- Les réductions sont fermées par défaut au chargement de la page.
- Cliquer sur une réduction ouverte la ferme.
- Cliquer sur une réduction fermée l'ouvre.

## Démarrage

Pour démarrer le projet en local :

1. Installer les dépendances :

```bash
npm install
```

2. Exécuter le serveur de développement :

```bash
npm run dev
```

3. Ouvrez votre navigateur et accédez à « http://localhost:51309/» (ou au port indiqué dans votre terminal).

## Informations complémentaires

- La structure du projet comprend des composants pour les bannières, les cartes, les réductions, les galeries, les en-têtes, la navigation, ainsi que les pages d'accueil, à propos, de logement et de gestion des erreurs.
- Le style est réalisé avec des modules SCSS et CSS, conformément aux directives de style du projet. Les fichiers de données statiques se trouvent dans « src/datas/ », notamment « logement.json » pour les annonces immobilières et « collapses.json » pour le contenu à réduire.

---

Bonne chance pour le développement ! Nous avons hâte de découvrir votre code de qualité et le produit final.

---