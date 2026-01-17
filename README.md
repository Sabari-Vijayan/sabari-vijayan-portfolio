# Portfolio Website

This is a personal portfolio website built to showcase my projects and experience. It is designed as a single-page application using React and styled with Tailwind CSS.

## Live Demo

[https://sabari-vijayan-portfolio-phaz.vercel.app/](https://sabari-vijayan-portfolio-phaz.vercel.app/)

## Tech Stack

- **React** (v19.2.0)
- **Vite** (v7.2.4) - Build tool and development server
- **Tailwind CSS** (v4.1.18) - Utility-first CSS framework
- **Lucide React** (v0.562.0) - Icon library

## Features

- **Responsive Design:** Optimized for various screen sizes, including a mobile-friendly navigation menu.
- **Dark Mode:** Integrated dark/light theme toggle with state persistence using `localStorage`.
- **Single Page Navigation:** Smooth scrolling to different sections (Home, Projects, About, Contact).
- **Component-Based Architecture:** Modular design with separate components for Navigation, Hero, Projects, Experience, and Contact sections.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sabari-Vijayan/sabari-vijayan-portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## File Structure

```
/src
├── assets/          # Static assets (images, icons)
├── components/      # Reusable UI components
│   ├── Contact.jsx
│   ├── DarkMode.jsx # Theme toggle logic
│   ├── NavBar.jsx   # Responsive navigation
│   └── ...
├── pages/           # Main section components
│   ├── HomePage.jsx
│   ├── ProjectsPage.jsx
│   ├── ExperiencePage.jsx
│   └── ContactPage.jsx
├── App.jsx          # Main application layout
└── main.jsx         # Entry point
```

## Deployment

The project is deployed on Vercel.

To build for production locally:
```bash
npm run build
```