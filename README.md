# Kiarina Sites

Static project pages published directly from the repository root with GitHub Pages.

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
python3 -m http.server 8000
```

Open `http://localhost:8000/`. No build step or package installation is required.

GitHub Pages should use `main` and `/(root)` as its publishing source.
