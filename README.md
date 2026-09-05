# Kiarina Sites

Static project pages published directly from the repository root with GitHub Pages.

## Routes

- `/` — project index
- `/tokyo-canvas/` — redirect to the relocated Tokyo Canvas site
- `/tokyo-canvas/privacy/` — redirect to the relocated privacy policy

The production URL is:

```text
https://kiarina.github.io/sites/
```

The Tokyo Canvas site moved to its own domain and is now maintained in the
Tokyo Canvas repository. The paths under `/tokyo-canvas/` keep only a redirect
notice and a `canonical` link so previously published URLs stay reachable:

```text
https://tokyocanvas.blazeworks.jp/
https://tokyocanvas.blazeworks.jp/privacy/
```

## Development

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/`. No build step or package installation is required.

GitHub Pages uses `main` and `/(root)` as its publishing source.
