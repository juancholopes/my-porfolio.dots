#!/usr/bin/env node

import { writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_URL = "https://juancholopez.netlify.app";
const TODAY = new Date().toISOString().split("T")[0];

const urls = [
  {
    loc: "/",
    changefreq: "weekly",
    priority: "1.0",
    lastmod: TODAY,
  },
];

// Generar XML
const generateSitemap = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls
  .map(
    (url) => `  
  <url>
    <loc>${BASE_URL}${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
  )
  .join("\n")}

</urlset>`;

  return xml;
};

// Escribir archivo
const sitemapPath = join(__dirname, "../public/sitemap.xml");
const sitemap = generateSitemap();

try {
  writeFileSync(sitemapPath, sitemap, "utf-8");
  console.log(" Sitemap generado exitosamente en:", sitemapPath);
  console.log(` Total de URLs: ${urls.length}`);
  console.log(` Fecha de actualización: ${TODAY}`);
} catch (error) {
  console.error(" Error al generar sitemap:", error);
  process.exit(1);
}
