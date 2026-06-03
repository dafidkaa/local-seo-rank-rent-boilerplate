import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.object({ en: z.string(), hr: z.string() }),
    excerpt: z.object({ en: z.string(), hr: z.string() }),
    date: z.string(),
    image: z.string(),
    category: z.string().optional().default("guides"),
    relatedServices: z.array(z.string()).optional().default([])
  })
});

export const collections = { blog };
