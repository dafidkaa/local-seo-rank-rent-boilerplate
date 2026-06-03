import { allServices, siteConfig } from "@/site.config";
import { localizedPath, locationPath, servicePath, subservicePath } from "@/lib/routes";

const urls = [
  "/",
  ...siteConfig.locales.flatMap((locale) => [
    localizedPath(locale.code),
    localizedPath(locale.code, "home-page-2"),
    localizedPath(locale.code, "about"),
    localizedPath(locale.code, "contact"),
    localizedPath(locale.code, "service-area"),
    localizedPath(locale.code, "service-area-hub-2"),
    localizedPath(locale.code, "blog"),
    localizedPath(locale.code, "privacy-policy"),
    localizedPath(locale.code, "terms-and-conditions"),
    localizedPath(locale.code, "thank-you"),
    ...allServices.map((service) => servicePath(locale.code, service)),
    ...allServices.flatMap((service) => service.children.map((child) => subservicePath(locale.code, service, child.id))),
    ...siteConfig.locations.map((location) => locationPath(locale.code, location.id)),
    ...siteConfig.blogPosts.map((post) => localizedPath(locale.code, `blog/${post.id}`))
  ])
];

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>${new URL(path, siteConfig.siteUrl).toString()}</loc></url>`).join("\n")}
</urlset>
`;
  return new Response(body, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
