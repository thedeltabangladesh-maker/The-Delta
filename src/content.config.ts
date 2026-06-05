import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One collection: "articles". Each article is a Markdown file in
// src/content/articles/. The editor (Sveltia CMS) writes these files
// for you, so you normally never touch them by hand.
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    // The standfirst / summary line shown under the headline and in cards.
    dek: z.string().optional(),
    category: z.string(),
    author: z.string().optional(),
    pubDate: z.coerce.date(),
    // Lead image path, e.g. /uploads/photo.jpg (served from /public).
    heroImage: z.string().optional(),
    heroCaption: z.string().optional(),
    // Pin this story to the top of the homepage.
    featured: z.boolean().default(false),
    // Hide from the live site (work in progress).
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
