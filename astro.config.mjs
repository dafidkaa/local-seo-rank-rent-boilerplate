import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://example.com",
  integrations: [],
  prefetch: true,
  output: "static",
  image: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" }
    ]
  }
});
