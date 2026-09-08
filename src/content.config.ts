import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const ingredients = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ingredients' }),
  schema: z.object({
    title: z.string(),
    entity: z.string(),
    chinese: z.string(),
    pinyin: z.string(),
    scientificName: z.string(),
    type: z.string(),
    aroma: z.array(z.string()),
    status: z.string(),
    related: z.array(z.string()).optional(),
  }),
});

const concepts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/concepts' }),
  schema: z.object({
    title: z.string(),
    entity: z.string(),
    type: z.string(),
    status: z.string(),
  }),
});

export const collections = { ingredients, concepts };
