# Cybersecurity Portfolio Website

A modern, dark-themed personal portfolio built for **Shashith Hansaja** using:

- React (Vite)
- Tailwind CSS
- Lucide React
- Framer Motion

## Features

- Clean and professional cyber-style UI (black, purple, and neon blue accents)
- Responsive layout for mobile and desktop
- Smooth scrolling navigation
- Animated section reveals and hover effects
- Modular section components:
  - Hero
  - About
  - Skills
  - Projects
  - Experience/Achievements
  - Contact
  - Footer

## Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview production build:
   ```bash
   npm run preview
   ```

## Folder Structure

```text
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Customization

- Update social links and email in `src/components/Contact.jsx`.
- Update projects in `src/components/Projects.jsx`.
- Update skills and profile details in the relevant component files.
