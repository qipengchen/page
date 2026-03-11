## Project overview

- Main academic homepage: Vite + React app in `src/`, served at `/`.
- Research blog: Quarto project in `blog-src/`, built HTML lives in `dist/blog/` and is served at `/blog/`.

### Quick commands

- Install dependencies: `npm install`
- Run dev server (homepage only): `npm run dev`
- Build homepage: `npm run build`
- Build blog (qmd / ipynb → HTML): `npm run build:blog`
- Build both and preview production:  
  - `npm run build:all`  
  - `npm run preview`
