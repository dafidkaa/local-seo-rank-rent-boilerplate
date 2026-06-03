import { siteConfig } from "@/site.config";

export function GET() {
  return new Response(
    `User-agent: *
Allow: /
Disallow: /api/
Disallow: /thank-you

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Applebot
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
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
