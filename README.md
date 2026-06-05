# My Resume Website

This site is my resume website. It was built with React, Tailwind CSS, and Vite so it loads fast and is easy to update.

## What this website is

- A single-page resume website.
- Includes a fixed top navigation bar with links to download the PDF résumé, visit GitHub, and send email.
- Displays a hero section with a personal introduction and profile image.
- Shows interactive sections for education, projects, and work experience.
- Includes additional qualifications and a reference section.

## How it is built

### Main technologies

- `React` 19
- `Vite` 7
- `Tailwind CSS` 3
- `ESLint` for linting

### Project structure

- `src/App.jsx`: Main application layout and page sections.
- `src/components/Navbar.jsx`: Responsive top navigation with desktop buttons and a mobile menu.
- `src/components/SchoolShowcase.jsx`: Interactive education section with interactive logos and detail panels.
- `src/components/ProjectsShowcase.jsx`: Animated project showcase with clickable project cards and a downloadable reflection PDF.
- `src/components/WorkExperience.jsx`: Work experience layout with interactive circle cards and details.
- `src/assets/`: Images, PDF résumé, and SVG assets used in the site.

### Styling and configuration

- Tailwind utility classes are used throughout the JSX for layout, spacing, color, and responsive behavior.
- `tailwind.config.js` and `postcss.config.js` configure Tailwind and PostCSS for the Vite build.
- Vite handles development server, asset bundling, and optimized production builds.

## Run locally

To run the site locally:

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite in the browser.

## Build for production

```bash
npm run build
```

Then preview the production build with:

```bash
npm run preview
```

## Notes

- The site is responsive and includes desktop and mobile-friendly interactions.
- The resume download and project assets are stored in the `src/assets` folder for bundling by Vite.
