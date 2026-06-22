import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: process.env.SITE_URL || "https://splitairporttransfers.com.hr",
  integrations: [mdx()],
  prefetch: true,
  output: "static",
  vite: {
    plugins: [tailwindcss()],
    server: { allowedHosts: true }
  },
  image: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" }
    ]
  }
});
