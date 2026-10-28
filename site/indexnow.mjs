// Tells Bing, Yandex and other IndexNow engines that every page in the sitemap changed.
// Run after the site is deployed:  node site/indexnow.mjs
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const SITE = "https://pyk-boo.github.io/ai-interview-helper/";
const KEY = "c6369a2e5c14d4d2f1bbacc013ceb792";

const sitemap = readFileSync(join(here, "..", "docs", "sitemap.xml"), "utf8");
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: "pyk-boo.github.io", key: KEY, keyLocation: `${SITE}${KEY}.txt`, urlList }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} URLs`);
