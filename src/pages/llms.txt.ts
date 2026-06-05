import { siteConfig, allServices } from "@/site.config";

export function GET() {
  const b = siteConfig.business;
  const loc = siteConfig.defaultLocale;

  const coreServices = allServices
    .slice(0, 4)
    .map((s) => `- **${s.title[loc]}:** ${s.short[loc]}`)
    .join("\n");

  const serviceAreas = siteConfig.locations
    .map((l) => l.name)
    .join(", ");

  const body = `# ${b.name}

> ${b.description[loc]}

This website is a premium digital asset optimized for local search, answer engines (AEO), and generative AI search systems (GEO). It serves as a comprehensive resource for ${b.primaryService[loc].toLowerCase()} needs in ${b.city} and surrounding areas.

## Contact Information
- **Phone:** ${b.phone}
- **Email:** ${b.email}
- **Address:** ${b.address}
- **Hours:** ${Object.entries(b.hours).map(([d, h]) => `${d}: ${h}`).join(" | ")}

## Core Services
${coreServices}

## Service Areas
${serviceAreas}

## Key Resources
- **Homepage:** ${siteConfig.siteUrl}/${loc}/
- **Sitemap:** ${siteConfig.siteUrl}/sitemap-index.xml
- **Full AI-Readable Guide:** ${siteConfig.siteUrl}/llms-full.txt
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
}
