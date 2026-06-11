import { allServices, siteConfig } from "@/site.config";
import { localizedPath, locationPath, servicePath, subservicePath } from "@/lib/routes";
import { getCollection } from "astro:content";

const POSTS_PER_PAGE = 9;

/**
 * Sitemap entries are built as per-locale path groups so every URL can carry
 * xhtml:link hreflang alternates — the most reliable multilingual signal for
 * large sites. Excluded on purpose: thank-you (disallowed in robots.txt).
 */
type Entry = {
  /** locale code → site-relative path */
  paths: Record<string, string>;
  lastmod?: string;
};

export async function GET() {
  const blogPosts = await getCollection("blog");
  const localeCodes = siteConfig.locales.map((l) => l.code);
  const forAll = (build: (code: string) => string): Record<string, string> =>
    Object.fromEntries(localeCodes.map((code) => [code, build(code)]));

  const staticPages = ["", "about", "contact", "service-area", "faq", "blog", "privacy-policy", "terms-and-conditions", "legal/disclaimer"];

  const totalBlogPages = Math.max(1, Math.ceil(Math.max(0, blogPosts.length - 1) / POSTS_PER_PAGE));

  const entries: Entry[] = [
    ...staticPages.map((page) => ({ paths: forAll((code) => localizedPath(code, page)) })),
    ...Array.from({ length: totalBlogPages - 1 }, (_, i) => ({
      paths: forAll((code) => localizedPath(code, `blog/page/${i + 2}`))
    })),
    ...allServices.map((service) => ({ paths: forAll((code) => servicePath(code, service)) })),
    ...allServices.flatMap((service) =>
      service.children.map((child) => ({ paths: forAll((code) => subservicePath(code, service, child)) }))
    ),
    ...siteConfig.locations.map((location) => ({ paths: forAll((code) => locationPath(code, location.id)) })),
    ...blogPosts.map((post) => ({
      paths: forAll((code) => localizedPath(code, `blog/${post.slug}`)),
      lastmod: (post.data.updatedAt ?? post.data.date)?.slice(0, 10)
    }))
  ];

  const abs = (path: string) => new URL(path, siteConfig.siteUrl).toString();

  const urlBlocks = entries.flatMap((entry) =>
    localeCodes.map((code) => {
      const alternates = localeCodes
        .map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt}" href="${abs(entry.paths[alt])}"/>`)
        .join("\n");
      const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(entry.paths[siteConfig.defaultLocale])}"/>`;
      const lastmod = entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : "";
      return `  <url>\n    <loc>${abs(entry.paths[code])}</loc>${lastmod}\n${alternates}\n${xDefault}\n  </url>`;
    })
  );

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlBlocks.join("\n")}
</urlset>
`;
  return new Response(body, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
