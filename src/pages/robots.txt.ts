import { siteConfig } from "@/site.config";

export function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${siteConfig.siteUrl}/sitemap-index.xml
`,
    {
      headers: {
        "Content-Type": "text/plain"
      }
    }
  );
}
