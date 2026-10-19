// Builds the GitHub Pages site into docs/.  Run:  node site/build.mjs
// Page text lives in home-i18n.mjs (landing page, one entry per language) and articles.mjs
// (English-only alternative and guide pages). Styles are in docs/site.css.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { HOME, LANGS } from "./home-i18n.mjs";
import { ALTERNATIVES, GUIDES } from "./articles.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, "..", "docs");
const SITE = "https://pyk-boo.github.io/ai-interview-helper/";
const BASE = "/ai-interview-helper/";
const REPO = "https://github.com/pyk-boo/ai-interview-helper";
const DL_SETUP = `${REPO}/releases/latest/download/AI-Interview-Helper-Setup.exe`;
const DL_ALL = `${REPO}/releases/latest`;
const VERSION = "2.0.1";
const UPDATED = "2026-10-19";

export const LINKS = { REPO, DL_SETUP, DL_ALL, BASE, SITE };

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const url = (path) => SITE + path;
const href = (path) => BASE + path;
const ld = (obj) => `<script type="application/ld+json">${JSON.stringify(obj)}</script>`;

const ICON_WIN = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 5.5 10.5 4.4v7.1H3zm0 13 7.5 1.1v-7H3zm8.4 1.2L21 21v-8.5h-9.6zm0-15.4v7.2H21V3z"/></svg>`;
const ICON_CODE = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/></svg>`;
const ICON_GH = `<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>`;

const homePath = (code) => (code === "en" ? "" : `${code}/`);
const homeAlternates = LANGS.map((l) => ({ hreflang: l.hreflang, path: homePath(l.code) }))
  .concat([{ hreflang: "x-default", path: "" }]);

// ---------- shared layout ----------
function layout({ lang, path, title, description, ogTitle, ogDescription, ogLocale, alternates = [], jsonld = [], ui, current, body }) {
  const altTags = alternates.map((a) => `<link rel="alternate" hreflang="${a.hreflang}" href="${url(a.path)}">`).join("\n");
  const langLinks = LANGS.map((l) =>
    `<a href="${href(homePath(l.code))}" hreflang="${l.hreflang}" lang="${l.hreflang}" title="${esc(l.name)}"${l.code === current ? ' aria-current="true"' : ""}>${l.code.toUpperCase()}</a>`).join("");
  const home = href(homePath(lang));
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="author" content="pyk-boo">
<meta name="theme-color" content="#090b10">
<link rel="canonical" href="${url(path)}">
${altTags}
<link rel="icon" type="image/svg+xml" href="${href("icon.svg")}">
<link rel="icon" type="image/png" sizes="32x32" href="${href("favicon-32.png")}">
<link rel="apple-touch-icon" href="${href("apple-touch-icon.png")}">
<link rel="manifest" href="${href("site.webmanifest")}">
<link rel="stylesheet" href="${href("site.css")}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="AI Interview Helper">
<meta property="og:title" content="${esc(ogTitle || title)}">
<meta property="og:description" content="${esc(ogDescription || description)}">
<meta property="og:url" content="${url(path)}">
<meta property="og:locale" content="${ogLocale || "en_US"}">
<meta property="og:image" content="${url("og.png")}">
<meta property="og:image:width" content="1280">
<meta property="og:image:height" content="640">
<meta property="og:image:alt" content="AI Interview Helper, a free open-source AI interview copilot">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(ogTitle || title)}">
<meta name="twitter:description" content="${esc(ogDescription || description)}">
<meta name="twitter:image" content="${url("og.png")}">
${jsonld.map(ld).join("\n")}
</head>
<body>
<div class="bg-fx"></div>
<nav class="top" aria-label="${esc(ui.navLabel)}">
  <div class="wrap">
    <a class="brand" href="${home}"><img src="${href("icon-192.png")}" alt="" width="28" height="28">AI Interview Helper</a>
    <div class="nav-links">
      <a href="${home}#features">${esc(ui.navFeatures)}</a>
      <a href="${home}#compare">${esc(ui.navCompare)}</a>
      <a href="${home}#alternatives">${esc(ui.navAlternatives)}</a>
      <a href="${home}#guides">${esc(ui.navGuides)}</a>
      <a href="${home}#faq">FAQ</a>
    </div>
    <div class="nav-right">
      <div class="langs" aria-label="${esc(ui.langLabel)}">${langLinks}</div>
      <a class="btn btn-ghost btn-sm" href="${REPO}">${ICON_GH} GitHub</a>
    </div>
  </div>
</nav>
${body}
${footer(lang, ui)}
</body>
</html>
`;
}

function footer(lang, ui) {
  const alt = ALTERNATIVES.map((a) => `<li><a href="${href(a.slug + "/")}">${esc(a.navLabel)}</a></li>`).join("");
  const guides = GUIDES.map((g) => `<li><a href="${href(g.slug + "/")}">${esc(g.navLabel)}</a></li>`).join("");
  const langs = LANGS.map((l) => `<li><a href="${href(homePath(l.code))}" hreflang="${l.hreflang}" lang="${l.hreflang}">${esc(l.name)}</a></li>`).join("");
  return `<footer>
  <div class="wrap foot">
    <div>
      <p><a href="${href(homePath(lang))}"><strong>AI Interview Helper</strong></a> v${VERSION} · © 2026 <a href="https://github.com/pyk-boo">pyk-boo</a> · MIT License</p>
      <p>${esc(ui.disclaimer)}</p>
      <p>${esc(ui.trademark)}</p>
    </div>
    <div><h4>${esc(ui.footProduct)}</h4><ul>
      <li><a href="${DL_SETUP}">${esc(ui.footDownload)}</a></li>
      <li><a href="${DL_ALL}">${esc(ui.footReleases)}</a></li>
      <li><a href="${REPO}">${esc(ui.footSource)}</a></li>
      <li><a href="${REPO}#-support-the-project">${esc(ui.footSupport)}</a></li>
    </ul></div>
    <div><h4>${esc(ui.footAlternatives)}</h4><ul>${alt}</ul><h4 style="margin-top:18px">${esc(ui.footGuides)}</h4><ul>${guides}</ul></div>
    <div><h4>${esc(ui.footLanguages)}</h4><ul>${langs}</ul></div>
  </div>
</footer>`;
}

// ---------- landing page (one per language) ----------
function homePage(t) {
  const path = homePath(t.code);
  const enNote = t.code === "en" ? "" : ` <span lang="en">(English)</span>`;
  const features = t.features.items.map((f) => `<div class="card"><div class="ico" aria-hidden="true">${f.ico}</div><h3>${f.h}</h3><p>${f.p}</p></div>`).join("\n      ");
  const steps = t.how.steps.map((s) => `<div class="step"><h3>${s.h}</h3><p>${s.p}</p></div>`).join("\n      ");
  const rows = t.compare.rows.map((r) => `<tr><th scope="row">${r[0]}</th><td class="us">✅ ${r[1]}</td><td class="them">${r[2]}</td></tr>`).join("\n          ");
  const altCards = ALTERNATIVES.map((a, i) => `<a class="card" href="${href(a.slug + "/")}"><h3>${t.alternatives.cards[i].h}</h3><p>${t.alternatives.cards[i].p}</p><span class="more">${t.alternatives.more}${enNote}</span></a>`).join("\n      ");
  const guideCards = GUIDES.map((g, i) => `<a class="card" href="${href(g.slug + "/")}"><div class="ico" aria-hidden="true">${g.ico}</div><h3>${t.guides.cards[i].h}</h3><p>${t.guides.cards[i].p}</p><span class="more">${t.guides.more}${enNote}</span></a>`).join("\n      ");
  const faq = t.faq.items.map((q) => `<details><summary>${q.q}</summary><p>${q.a}</p></details>`).join("\n      ");
  const otherLangs = t.otherLangs ? `
<section id="other-languages" aria-labelledby="ol-h">
  <div class="wrap">
    <span class="eyebrow">${t.otherLangs.eyebrow}</span>
    <h2 id="ol-h">${t.otherLangs.h2}</h2>
    <div class="other-langs">
      ${t.otherLangs.blocks.map((b) => `<div class="card" lang="${b.lang}"><h3>${b.h}</h3><p>${b.p}</p><a class="more" href="${DL_SETUP}">${b.cta}</a></div>`).join("\n      ")}
    </div>
  </div>
</section>` : "";

  const strip = (s) => s.replace(/<[^>]+>/g, "");
  const jsonld = [
    {
      "@context": "https://schema.org", "@type": "SoftwareApplication",
      name: "AI Interview Helper", alternateName: ["AI Interview Copilot", "AI interview assistant"],
      applicationCategory: "BusinessApplication", applicationSubCategory: "Interview preparation",
      operatingSystem: "Windows 10, Windows 11, macOS", softwareVersion: VERSION,
      description: t.meta.description, inLanguage: t.hreflang, url: url(path),
      downloadUrl: DL_ALL, installUrl: DL_SETUP, image: url("og.png"), screenshot: url("og.png"),
      license: "https://opensource.org/licenses/MIT", isAccessibleForFree: true,
      codeRepository: REPO,
      author: { "@type": "Person", name: "pyk-boo", url: "https://github.com/pyk-boo" },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@context": "https://schema.org", "@type": "FAQPage", inLanguage: t.hreflang,
      mainEntity: t.faq.items.map((q) => ({ "@type": "Question", name: strip(q.q), acceptedAnswer: { "@type": "Answer", text: strip(q.a) } })),
    },
  ];
  if (t.code === "en") jsonld.push({ "@context": "https://schema.org", "@type": "WebSite", name: "AI Interview Helper", url: SITE, inLanguage: "en" });

  const body = `<header class="wrap hero">
  <div>
    <span class="pill"><i></i>${t.hero.pill}</span>
    <h1>${t.hero.h1}</h1>
    <p class="lead">${t.hero.lead}</p>
    <div class="cta">
      <a class="btn btn-primary" href="${DL_SETUP}">${ICON_WIN} ${t.hero.ctaWin}</a>
      <a class="btn btn-ghost" href="${REPO}#-quick-start">${ICON_CODE} ${t.hero.ctaSrc}</a>
    </div>
    <p class="sub-cta">${t.hero.sub} · <a href="${DL_ALL}">${t.hero.allDownloads}</a></p>
  </div>
  <div class="mock" role="img" aria-label="${esc(t.mock.label)}">
    <div class="mock-head"><div class="mock-logo"><span class="ring"></span>AI INTERVIEW HELPER</div><span class="badge">LISTENING</span></div>
    <div class="mock-body">
      <span class="lbl">🎧 INTERVIEWER</span>
      <div class="bubble">${t.mock.q}</div>
      <span class="lbl ai">✦ AI ANSWER</span>
      <div class="answer">${t.mock.a}
<pre><span class="k">def</span> <span class="f">find_dups</span>(nums):
    seen, dups = <span class="t">set</span>(), <span class="t">set</span>()
    <span class="k">for</span> n <span class="k">in</span> nums:
        <span class="k">if</span> n <span class="k">in</span> seen: dups.add(n)
        seen.add(n)
    <span class="k">return</span> dups<span class="typing"></span></pre>
      </div>
    </div>
  </div>
</header>

<main>
<section id="features" aria-labelledby="f-h">
  <div class="wrap">
    <span class="eyebrow">${t.features.eyebrow}</span>
    <h2 id="f-h">${t.features.h2}</h2>
    <p class="sec-lead">${t.features.lead}</p>
    <div class="grid grid-3">
      ${features}
    </div>
  </div>
</section>

<section id="how" aria-labelledby="h-h">
  <div class="wrap">
    <span class="eyebrow">${t.how.eyebrow}</span>
    <h2 id="h-h">${t.how.h2}</h2>
    <div class="steps">
      ${steps}
    </div>
  </div>
</section>

<section id="compare" aria-labelledby="c-h">
  <div class="wrap">
    <span class="eyebrow">${t.compare.eyebrow}</span>
    <h2 id="c-h">${t.compare.h2}</h2>
    <p class="sec-lead">${t.compare.lead}</p>
    <div class="tbl-wrap">
      <table>
        <thead><tr><th scope="col"><span class="sr">${t.compare.headFeature}</span></th><th scope="col" class="us">AI Interview Helper</th><th scope="col">${t.compare.headThem}</th></tr></thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </div>
    <p class="note">${t.compare.note}</p>
    <div class="providers">
      <span class="prov"><i style="background:#f55036"></i>Groq <small>${t.compare.free}</small></span>
      <span class="prov"><i style="background:#c87941"></i>Claude</span>
      <span class="prov"><i style="background:#4285f4"></i>Gemini <small>${t.compare.free}</small></span>
      <span class="prov"><i style="background:#10a37f"></i>OpenAI GPT</span>
      <span class="prov"><i style="background:#7c6af7"></i>DeepSeek</span>
      <span class="prov"><i style="background:#0d9488"></i>Z.ai GLM <small>${t.compare.free}</small></span>
      <span class="prov"><i style="background:#ff9f43"></i>Ollama <small>${t.compare.offline}</small></span>
    </div>
  </div>
</section>

<section id="alternatives" aria-labelledby="a-h">
  <div class="wrap">
    <span class="eyebrow">${t.alternatives.eyebrow}</span>
    <h2 id="a-h">${t.alternatives.h2}</h2>
    <p class="sec-lead">${t.alternatives.lead}</p>
    <div class="grid grid-3">
      ${altCards}
    </div>
  </div>
</section>

<section id="guides" aria-labelledby="g-h">
  <div class="wrap">
    <span class="eyebrow">${t.guides.eyebrow}</span>
    <h2 id="g-h">${t.guides.h2}</h2>
    <div class="grid grid-2">
      ${guideCards}
    </div>
  </div>
</section>

<section id="faq" aria-labelledby="q-h">
  <div class="wrap">
    <span class="eyebrow">FAQ</span>
    <h2 id="q-h">${t.faq.h2}</h2>
    <div class="faq">
      ${faq}
    </div>
  </div>
</section>
${otherLangs}
<section aria-labelledby="final-h">
  <div class="wrap">
    <div class="final">
      <h2 id="final-h">${t.final.h2}</h2>
      <p class="sec-lead">${t.final.lead}</p>
      <div class="cta">
        <a class="btn btn-primary" href="${DL_SETUP}">${ICON_WIN} ${t.hero.ctaWin}</a>
        <a class="btn btn-ghost" href="${REPO}">⭐ ${t.final.star}</a>
      </div>
      <p class="porsche">${t.final.porsche.replace("{support}", `${REPO}#-support-the-project`)}</p>
    </div>
  </div>
</section>
</main>`;

  return layout({
    lang: t.hreflang, path, title: t.meta.title, description: t.meta.description,
    ogTitle: t.meta.ogTitle, ogDescription: t.meta.ogDescription, ogLocale: t.ogLocale,
    alternates: homeAlternates, jsonld, ui: t.ui, current: t.code, body,
  });
}

// ---------- English article pages ----------
const EN = HOME.find((h) => h.code === "en");

function crumbs(items) {
  const html = `<nav class="crumbs wrap" aria-label="Breadcrumb"><ol>${items.map((c, i) =>
    i < items.length - 1 ? `<li><a href="${href(c.path)}">${esc(c.name)}</a></li>` : `<li aria-current="page">${esc(c.name)}</li>`).join("")}</ol></nav>`;
  const data = { "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: url(c.path) })) };
  return { html, data };
}

function ctaBox(h, p) {
  return `<div class="cta-box"><h2>${h}</h2><p>${p}</p><div class="cta">
    <a class="btn btn-primary" href="${DL_SETUP}">${ICON_WIN} Download for Windows (free)</a>
    <a class="btn btn-ghost" href="${REPO}">${ICON_GH} View on GitHub</a></div></div>`;
}

function relatedLinks(exceptSlug) {
  const all = [...ALTERNATIVES.map((a) => ({ slug: a.slug, h: a.navLabel, p: a.cardText })), ...GUIDES.map((g) => ({ slug: g.slug, h: g.navLabel, p: g.cardText }))]
    .filter((x) => x.slug !== exceptSlug);
  return `<section class="related" aria-labelledby="rel-h"><div class="wrap"><h2 id="rel-h">Related pages</h2><div class="grid">${
    all.map((x) => `<a class="card" href="${href(x.slug + "/")}"><h3>${esc(x.h)}</h3><p>${esc(x.p)}</p><span class="more">Read →</span></a>`).join("")
  }</div></div></section>`;
}

function alternativePage(a) {
  const path = a.slug + "/";
  const c = crumbs([{ name: "Home", path: "" }, { name: "Alternatives", path: "#alternatives" }, { name: a.navLabel, path }]);
  c.data.itemListElement[1].item = url("") + "#alternatives";
  const rows = a.table.map((r) => `<tr><th scope="row">${r[0]}</th><td class="us">${r[1]}</td><td class="them">${r[2]}</td></tr>`).join("");
  const faq = a.faq.map((q) => `<details><summary>${q.q}</summary><p>${q.a}</p></details>`).join("");
  const strip = (s) => s.replace(/<[^>]+>/g, "");
  const body = `${c.html}
<main>
<header class="wrap article-head">
  <span class="pill"><i></i>FREE · OPEN SOURCE · MIT</span>
  <h1>${a.h1}</h1>
  <p class="lead">${a.lead}</p>
  <div class="cta"><a class="btn btn-primary" href="${DL_SETUP}">${ICON_WIN} Download free for Windows</a><a class="btn btn-ghost" href="${REPO}">${ICON_GH} Source on GitHub</a></div>
  <p class="meta-line">Updated ${a.updatedHuman}</p>
</header>
<div class="wrap">
  <article class="prose">
    ${a.intro}
    <h2>${a.tableTitle}</h2>
    <div class="tbl-wrap"><table>
      <thead><tr><th scope="col">Feature</th><th scope="col" class="us">AI Interview Helper</th><th scope="col">${esc(a.competitor)}</th></tr></thead>
      <tbody>${rows}</tbody>
    </table></div>
    <p class="fine">${a.tableNote}</p>
    ${a.sections}
    <h2>Frequently asked questions</h2>
    <div class="faq">${faq}</div>
    ${ctaBox(a.ctaH, a.ctaP)}
    <p class="fine">${esc(a.competitor)} is a trademark of its respective owner. AI Interview Helper is an independent open-source project and is not affiliated with, endorsed by or sponsored by ${esc(a.competitor)}.</p>
  </article>
</div>
${relatedLinks(a.slug)}
</main>`;
  const jsonld = [
    { "@context": "https://schema.org", "@type": "WebPage", name: a.title, description: a.description, url: url(path), inLanguage: "en", dateModified: UPDATED,
      about: { "@type": "SoftwareApplication", name: "AI Interview Helper", applicationCategory: "BusinessApplication", operatingSystem: "Windows, macOS", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } } },
    c.data,
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: a.faq.map((q) => ({ "@type": "Question", name: strip(q.q), acceptedAnswer: { "@type": "Answer", text: strip(q.a) } })) },
  ];
  return layout({ lang: "en", path, title: a.title, description: a.description, alternates: [], jsonld, ui: EN.ui, current: "en", body });
}

function guidePage(g) {
  const path = g.slug + "/";
  const c = crumbs([{ name: "Home", path: "" }, { name: "Guides", path: "#guides" }, { name: g.navLabel, path }]);
  c.data.itemListElement[1].item = url("") + "#guides";
  const body = `${c.html}
<main>
<header class="wrap article-head">
  <span class="eyebrow">Guide · ${g.readTime} read</span>
  <h1>${g.h1}</h1>
  <p class="lead">${g.lead}</p>
  <p class="meta-line">By <a href="https://github.com/pyk-boo">pyk-boo</a> · Updated ${g.updatedHuman}</p>
</header>
<div class="wrap">
  <article class="prose">
    ${g.content}
    ${ctaBox(g.ctaH, g.ctaP)}
  </article>
</div>
${relatedLinks(g.slug)}
</main>`;
  const jsonld = [
    { "@context": "https://schema.org", "@type": "TechArticle", headline: g.h1.replace(/<[^>]+>/g, ""), description: g.description,
      inLanguage: "en", url: url(path), image: url("og.png"), datePublished: g.published, dateModified: UPDATED,
      author: { "@type": "Person", name: "pyk-boo", url: "https://github.com/pyk-boo" },
      publisher: { "@type": "Person", name: "pyk-boo" }, mainEntityOfPage: url(path) },
    c.data,
  ];
  return layout({ lang: "en", path, title: g.title, description: g.description, alternates: [], jsonld, ui: EN.ui, current: "en", body });
}

function notFoundPage() {
  const body = `<main class="wrap" style="padding-block:96px;text-align:center">
  <span class="eyebrow">404</span>
  <h1 style="font-size:clamp(32px,5vw,52px)">This page doesn't exist</h1>
  <p class="lead" style="margin-inline:auto">The link may be old or mistyped. Here is where you can go instead.</p>
  <div class="cta" style="justify-content:center"><a class="btn btn-primary" href="${BASE}">Go to the home page</a><a class="btn btn-ghost" href="${DL_ALL}">Download the app</a></div>
</main>`;
  return layout({ lang: "en", path: "404.html", title: "Page not found | AI Interview Helper", description: "This page doesn't exist.", ui: EN.ui, current: "en", body })
    .replace('<meta name="robots" content="index, follow, max-image-preview:large">', '<meta name="robots" content="noindex">')
    .replace(/<link rel="canonical"[^>]*>\n/, "");
}

// ---------- write ----------
function write(rel, html) {
  const file = join(OUT, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  console.log("wrote", rel);
}

for (const t of HOME) write(homePath(t.code) + "index.html", homePage(t));
for (const a of ALTERNATIVES) write(a.slug + "/index.html", alternativePage(a));
for (const g of GUIDES) write(g.slug + "/index.html", guidePage(g));
write("404.html", notFoundPage());

// sitemap with hreflang alternates for the landing pages
const altXml = homeAlternates.map((a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${url(a.path)}"/>`).join("\n");
const entries = [
  ...HOME.map((t) => `  <url>\n    <loc>${url(homePath(t.code))}</loc>\n    <lastmod>${UPDATED}</lastmod>\n    <priority>${t.code === "en" ? "1.0" : "0.9"}</priority>\n${altXml}\n  </url>`),
  ...ALTERNATIVES.map((a) => `  <url>\n    <loc>${url(a.slug + "/")}</loc>\n    <lastmod>${UPDATED}</lastmod>\n    <priority>0.8</priority>\n  </url>`),
  ...GUIDES.map((g) => `  <url>\n    <loc>${url(g.slug + "/")}</loc>\n    <lastmod>${UPDATED}</lastmod>\n    <priority>0.7</priority>\n  </url>`),
];
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`);
write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${url("sitemap.xml")}\n`);
write("site.webmanifest", JSON.stringify({
  name: "AI Interview Helper", short_name: "Interview Helper", start_url: BASE, scope: BASE, display: "standalone",
  background_color: "#090b10", theme_color: "#090b10",
  icons: [{ src: href("icon-192.png"), sizes: "192x192", type: "image/png" }, { src: href("icon-512.png"), sizes: "512x512", type: "image/png" }],
}, null, 2) + "\n");
