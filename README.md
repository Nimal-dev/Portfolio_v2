# Nimal Prince, portfolio

Personal site for Nimal Prince: iOS Engineer Intern at Infilect Technologies, founder of Gate Track, B.Tech in Computer Science and Engineering (2026).

## Stack

- React 19 and Vite 6
- framer-motion for scroll-linked and interactive motion
- lenis for smooth scrolling
- Plain CSS with design tokens in `src/styles/global.css` (no WebGL, no Bootstrap)

## Run

```
npm install
npm run dev
npm run build
npm run preview
```

## Where things live

- `src/data/portfolioData.js` holds all copy: profile, "right now" facts, experience, education, skills, projects, testimonials. Edit content here, not in components.
- `src/components/hero/` is the landing hero: popping name, rotating headline word, fanned screenshot stack, and the ticker.
- `src/components/common/Doodle.jsx` draws the outlined cartoon shapes; `Reveal.jsx` holds the text-pop, squiggle, and pop-in helpers.
- `src/components/sections/` are the home page sections: About, Experience, Work, Skills, Testimonials, Contact.
- `src/components/pages/` are the routes: Home, ProjectsPage, ProjectDetails.
- `public/projects/` holds project screenshots referenced by URL.

## Design

Cartoon style: light sky base, thick ink outlines, hard offset shadows, and yellow, orange, blue, lime, and violet accents. Fredoka for all type. Letters pop in, headings underline themselves, doodles float, skill rows drift, and hero cards spring up on hover. Reduced-motion preferences are respected throughout.
