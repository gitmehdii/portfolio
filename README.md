# Portfolio - Mehdi

Un portfolio moderne et réactif développé avec React et Vite, prêt à être déployé sur GitHub Pages.

## 🚀 Démo

Le portfolio sera disponible à : `https://gitmehdii.github.io/portfolio/`

## ✨ Fonctionnalités

- 🎨 Design moderne avec animations fluides
- 📱 Entièrement responsive (mobile, tablette, desktop)
- ⚡ Performance optimisée avec Vite
- 🎯 Navigation intuitive avec scroll smooth
- 💼 Section projets avec filtres interactifs
- 📧 Formulaire de contact fonctionnel
- 🌐 Déploiement automatique sur GitHub Pages

## 🛠️ Technologies utilisées

- **React 19** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite** - Build tool ultra-rapide
- **CSS3** - Styles modernes avec animations et transitions
- **GitHub Pages** - Hébergement gratuit
- **GitHub Actions** - Déploiement automatique

## 📦 Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/gitmehdii/portfolio.git
cd portfolio
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

Le site sera accessible à `http://localhost:5173/portfolio/`

## 🏗️ Build

Pour créer une version de production :

```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`.

Pour prévisualiser la version de production localement :

```bash
npm run preview
```

## 📤 Déploiement sur GitHub Pages

Le déploiement est automatique ! Chaque fois que vous poussez sur la branche `main`, GitHub Actions :

1. Installe les dépendances
2. Build le projet
3. Déploie sur GitHub Pages

### Configuration nécessaire

1. Allez dans les **Settings** de votre dépôt GitHub
2. Naviguez vers **Pages** dans le menu latéral
3. Sous **Source**, sélectionnez **GitHub Actions**

Le site sera accessible à : `https://votreusername.github.io/portfolio/`

## 📝 Personnalisation

### Modifier les informations personnelles

1. **Hero Section** : `src/components/Hero.jsx`
2. **À Propos** : `src/components/About.jsx`
3. **Projets** : `src/components/Projects.jsx`
4. **Contact** : `src/components/Contact.jsx`

### Modifier les couleurs

Les couleurs principales sont définies dans les fichiers CSS de chaque composant. Le gradient principal utilise :
- Primaire : `#667eea`
- Secondaire : `#764ba2`
- Accent : `#ffd700`

## 📂 Structure du projet

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Section d'accueil
│   │   ├── Hero.css
│   │   ├── Navbar.jsx        # Navigation
│   │   ├── Navbar.css
│   │   ├── About.jsx         # Section à propos
│   │   ├── About.css
│   │   ├── Projects.jsx      # Section projets
│   │   ├── Projects.css
│   │   ├── Contact.jsx       # Section contact
│   │   └── Contact.css
│   ├── App.jsx               # Composant principal
│   ├── App.css
│   ├── main.jsx              # Point d'entrée
│   └── index.css             # Styles globaux
├── public/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Configuration GitHub Actions
├── index.html
├── vite.config.js
└── package.json
```

## 🎨 Sections du Portfolio

### 1. Hero / Accueil
- Présentation personnelle
- Animations de cartes flottantes
- CTA vers projets et contact

### 2. À Propos
- Présentation détaillée
- Statistiques (années d'expérience, projets)
- Compétences techniques avec barres de progression

### 3. Projets
- Grille de projets
- Filtres par catégorie (Web, Mobile, Backend)
- Liens vers démos et GitHub

### 4. Contact
- Liens vers réseaux sociaux
- Formulaire de contact
- Informations de localisation et disponibilité

## 🔧 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Build pour production
- `npm run preview` - Prévisualise le build de production
- `npm run lint` - Vérifie le code avec ESLint

## 📄 Licence

Ce projet est libre d'utilisation pour votre portfolio personnel.

## 🤝 Contribution

Les suggestions et améliorations sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

---

Fait avec ❤️ et React
