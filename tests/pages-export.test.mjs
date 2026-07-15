import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function exported(path) {
  return readFile(new URL(`../out/${path}`, import.meta.url), "utf8");
}

test("exports the project index and Tokyo Canvas pages", async () => {
  const [index, tokyoCanvas, privacy] = await Promise.all([
    exported("index.html"),
    exported("tokyo-canvas/index.html"),
    exported("tokyo-canvas/privacy/index.html"),
  ]);

  assert.match(index, /Kiarina Sites/);
  assert.match(index, /Tokyo Canvas/);
  assert.match(tokyoCanvas, /A quiet 3D map painting game/i);
  assert.match(tokyoCanvas, /Play as your VRoid Hub avatar/);
  assert.match(privacy, /Tokyo Canvas Privacy/);
});

test("uses the GitHub Pages base path for generated assets", async () => {
  const html = await exported("tokyo-canvas/index.html");
  assert.match(html, /(?:src|href)=["']\/sites\//);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});
