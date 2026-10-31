// Zet de gebouwde React-app om naar statische HTML in dist/index.html, zodat crawlers
// (ook AI-bots die geen JavaScript uitvoeren) de volledige tekst, koppen en FAQ-schema zien.
import { readFile, writeFile, rm } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const ssrDir = resolve(root, ".ssr");
const htmlPath = resolve(root, "dist/index.html");

const { render, faqJsonLd } = await import(pathToFileURL(resolve(ssrDir, "entry-server.js")).href);

let html = await readFile(htmlPath, "utf8");
if (!html.includes('<div id="root"></div>')) throw new Error("Geen lege #root gevonden in dist/index.html");

const faqScript = `<script type="application/ld+json">${JSON.stringify(faqJsonLd).replace(/</g, "\\u003c")}</script>`;
html = html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`).replace("</head>", `${faqScript}\n  </head>`);

await writeFile(htmlPath, html);
await rm(ssrDir, { recursive: true, force: true });
console.log(`Prerender klaar: ${(html.length / 1024).toFixed(0)} kB HTML`);
