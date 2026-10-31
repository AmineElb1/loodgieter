// Zet de gebouwde React-app om naar statische HTML per pagina (dist/index.html, dist/<slug>/index.html), zodat crawlers
// (ook AI-bots die geen JavaScript uitvoeren) de volledige tekst, koppen en structured data zien.
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";

// import.meta.dirname bestaat pas vanaf Node 20.11: fileURLToPath werkt ook op oudere versies (bv. op Vercel)
const root = resolve(fileURLToPath(new URL(".", import.meta.url)), "..");
const ssrDir = resolve(root, ".ssr");
const dist = resolve(root, "dist");
const SITE = "https://www.akzonen.be";

const { render, routes } = await import(pathToFileURL(resolve(ssrDir, "entry-server.js")).href);

const template = await readFile(resolve(dist, "index.html"), "utf8");
if (!template.includes('<div id="root"></div>')) throw new Error("Geen lege #root gevonden in dist/index.html");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
const setTag = (html, re, replacement) => {
  if (!re.test(html)) throw new Error(`Tag niet gevonden: ${re}`);
  return html.replace(re, replacement);
};

for (const r of routes) {
  const url = r.path === "/" ? `${SITE}/` : `${SITE}${r.path}`;
  let html = template;
  html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(r.title)}</title>`);
  html = setTag(html, /(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${esc(r.description)}$2`);
  html = setTag(html, /(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  html = setTag(html, /(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);
  html = setTag(html, /(<meta property="og:title" content=")[^"]*(")/, `$1${esc(r.title)}$2`);
  html = setTag(html, /(<meta\s+property="og:description"\s+content=")[^"]*(")/, `$1${esc(r.description)}$2`);

  const schemaScripts = r.schemas
    .map((s) => `<script type="application/ld+json">${JSON.stringify(s).replace(/</g, "\\u003c")}</script>`)
    .join("\n    ");
  html = html.replace('<div id="root"></div>', `<div id="root">${render(r.path)}</div>`).replace("</head>", `    ${schemaScripts}\n  </head>`);

  const out = resolve(dist, r.file);
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, html);
  console.log(`Prerender ${r.path.padEnd(24)} ${(html.length / 1024).toFixed(0)} kB`);
}

await rm(ssrDir, { recursive: true, force: true });
