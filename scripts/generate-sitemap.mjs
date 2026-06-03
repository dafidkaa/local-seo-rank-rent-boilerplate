import { readFile, readdir, stat, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const dist = fileURLToPath(new URL("../dist/", import.meta.url));
const configSource = await readFile(new URL("../src/site.config.ts", import.meta.url), "utf8");
const site = configSource.match(/siteUrl:\s*"([^"]+)"/)?.[1] ?? "https://example.com";

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) return walk(path);
      return path.endsWith("index.html") ? [path] : [];
    })
  );
  return files.flat();
}

const htmlFiles = await walk(dist);
const urls = htmlFiles
  .map((file) => {
    const route = relative(dist, file).replace(/index\.html$/, "").replace(/\\/g, "/");
    return new URL(route, site).toString();
  })
  .sort();

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>
`;

await writeFile(new URL("../dist/sitemap.xml", import.meta.url), xml);
await writeFile(
  new URL("../dist/sitemap-index.xml", import.meta.url),
  `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${site}/sitemap.xml</loc></sitemap>
</sitemapindex>
`
);

const count = urls.length;
const sitemap = join(dist, "sitemap.xml");
const sitemapStat = await stat(sitemap);
console.log(`Generated sitemap.xml with ${count} URLs (${sitemapStat.size} bytes).`);
