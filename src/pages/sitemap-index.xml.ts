import { siteConfig } from "@/site.config";

export function GET() {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${siteConfig.siteUrl}/sitemap.xml</loc></sitemap>
</sitemapindex>
`,
    {
      headers: {
        "Content-Type": "application/xml"
      }
    }
  );
}
