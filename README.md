# Kiarina Sites

Public project pages published with GitHub Pages.

## Routes

- `/` — project index
- `/tokyo-canvas/` — Tokyo Canvas landing page
- `/tokyo-canvas/privacy/` — provisional privacy policy

The production URL is expected to be:

```bash
https://kiarina.github.io/sites/tokyo-canvas/
```

## Development

```bash
npm install
npm run dev
npm run build
npm run build:pages
```

`npm run build` verifies the application build. `npm run build:pages` creates the
static `out/` directory deployed by `.github/workflows/pages.yml`.
