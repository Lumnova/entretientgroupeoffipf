# Questionnaire d'Entretien

Un site web interactif pour mener des entretiens structurés avec des candidats, comprenant des questions de présentation, de RP (roleplay) et de règlement.

## Fonctionnalités

- **Formulaire d'information du candidat** : Recueille les informations de base du candidat.
- **Questions de présentation** : Questions ouvertes pour connaître le candidat.
- **Questions de RP** : Questions sur l'expérience et les compétences en roleplay.
- **Questions de règlement** : Quiz avec notation automatique pour évaluer la connaissance des règles.
- **Récapitulatif** : Résumé des réponses et score final avec possibilité de filtrer les résultats.

## Structure du projet

```
questionnaire-entretien/
│
├── index.html          # Page principale
├── styles.css          # Feuille de style
├── questions.js        # Définition des questions
├── horizontal-layout.js # Module pour l'affichage horizontal des questions
├── app.js              # Logique principale de l'application
└── README.md           # Documentation
```

## Installation

1. Clonez ce dépôt sur votre machine locale ou téléchargez-le sous forme de ZIP.
2. Aucune installation supplémentaire n'est nécessaire, le site utilise des CDN pour les dépendances.

## Déploiement sur GitHub Pages

1. Créez un nouveau dépôt sur GitHub.
2. Téléchargez tous les fichiers du projet dans ce dépôt.
3. Allez dans les paramètres du dépôt, puis dans la section "Pages".
4. Sélectionnez la branche principale comme source et cliquez sur "Save".
5. Votre site sera disponible à l'adresse `https://votre-nom-utilisateur.github.io/nom-du-depot/`.

## Personnalisation

### Modifier les questions

Pour modifier les questions, ouvrez le fichier `questions.js` et modifiez les tableaux :

- `presentationQuestions` : Questions de présentation
- `rpQuestions` : Questions de RP
- `reglementQuestions` : Questions de règlement

### Modifier l'apparence

Pour modifier l'apparence du site, vous pouvez éditer le fichier `styles.css` ou ajouter des classes Tailwind directement dans le HTML.

## Utilisation

1. Ouvrez `index.html` dans un navigateur web.
2. Remplissez le formulaire d'information du candidat.
3. Suivez les instructions à l'écran pour répondre aux différentes sections de questions.
4. À la fin, un récapitulatif avec le score sera affiché.

## Dépendances

- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitaire
- [SweetAlert2](https://sweetalert2.github.io/) - Bibliothèque pour les alertes et modals

## Compatibilité

Le site est compatible avec les navigateurs modernes :
- Chrome
- Firefox
- Safari
- Edge

## Licence

Ce projet est sous licence libre, vous pouvez l'utiliser et le modifier comme bon vous semble. 