## Project overview

- Main academic homepage: Vite + React app in `src/`, served at `/`.
- Research blog: Quarto project in `blog-src/`, built HTML lives in `dist/blog/` and is served at `/blog/`.

### Quick commands

- Install dependencies: `npm install`
- Run dev server (homepage only): `npm run dev`
- Build homepage (local): `npm run build`
- Build blog (qmd / ipynb → HTML, local): `npm run build:blog`
- Build both (local, for GitHub Pages): `npm run build:all`
- Preview local production build:  
  - `npm run preview`

> Note: All blog HTML in `dist/blog/` is pre-rendered locally.  
> GitHub Actions only uploads the existing `dist/` folder to Pages and does not run R / Quarto. To update blog pages, rerun `npm run build:blog` or `npm run build:all` locally and commit the updated `dist/` files.
