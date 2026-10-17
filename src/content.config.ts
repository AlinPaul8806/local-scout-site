import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Loader obligatoriu în Astro 6+

const newsCollection = defineCollection({
  // 'glob' scanează automat fișierele .md din folderul specificat
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(), // Converteste automat string-ul de dată în obiect nativ Date
    isCamp: z.boolean().default(false),
  }),
});

export const collections = {
  'news': newsCollection,
};
