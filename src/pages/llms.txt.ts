import { siteConfig, allServices } from "@/site.config";

export function GET() {
  const b = siteConfig.business;
  const loc = siteConfig.defaultLocale;

  const coreServices = allServices
    .map((s) => `- **${s.title[loc]}:** ${s.short[loc]}`)
    .join("\n");

  const destinations = siteConfig.locations
    .map((l) => l.name)
    .join(", ");

  const languages = siteConfig.locales
    .map((l) => l.label)
    .join(", ");

  const body = `# ${b.name}

> ${b.description[loc]}

${b.name} (${siteConfig.siteUrl}) is an ONLINE local lead-generation website that collects private airport transfer quote inquiries for ${b.serviceArea}. It is not a storefront and has no physical/walk-in office or street address. Visitors send their route and travel details through the website, and a fixed quote is returned by email after the request is received. No prices are published in advance.

## Service Area
- Split Airport (SPU) and Central Dalmatia.
- Main destinations: ${destinations}.

## Contact Information
- **Email:** ${b.email}
- **Phone:** ${b.phone} (temporary call-tracking placeholder)
- **Service request channel:** ${b.serviceArea} — online quote requests, ${siteConfig.stats.quoteChannel}.

## Primary Services
${coreServices}

All vehicles — cars, vans, minibuses and buses — are arranged on request to match the group size, luggage and route; there is no owned-fleet inventory.

## Languages
- Website language versions: ${languages}. A German (Deutsch) version is planned.

## Key Resources
- **Homepage:** ${siteConfig.siteUrl}/${loc}/
- **Sitemap:** ${siteConfig.siteUrl}/sitemap-index.xml
- **Full AI-Readable Guide:** ${siteConfig.siteUrl}/llms-full.txt
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
}
