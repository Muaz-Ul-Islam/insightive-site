import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Content collections.
 * Growth-engine note: each `glob` loader below can be swapped for an API
 * loader pulling from the growth engine — pages stay untouched.
 */

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    dek: z.string(), // standfirst / card description
    category: z.enum(['Ownership Economics', 'Process Fit', 'Decision Frameworks', 'Field Notes', 'Industry Deep Dives']),
    author: z.string().default('Umar Rana'),
    bylined: z.boolean().default(true),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    readingTime: z.string().optional(),
    draft: z.boolean().default(false),
    takeaways: z.array(z.string()).default([]), // GEO: answer-first block
  }),
});

const industries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/industries' }),
  schema: z.object({
    name: z.string(),
    dek: z.string(),
    order: z.number(),
    misfits: z.array(z.string()), // the misfit patterns we see in this industry
    builds: z.array(z.string()), // what we build there
    faq: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .default([]),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    industry: z.string(),
    scale: z.enum(['Process', 'System', 'Platform', 'Advisory']),
    title: z.string(),
    misfit: z.string(),
    outcome: z.string(),
    order: z.number(),
  }),
});

export const collections = { insights, industries, work };
