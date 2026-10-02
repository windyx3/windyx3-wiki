import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const schema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  category: z.string().default('未分类'),
  draft: z.boolean().default(false),
  sample: z.boolean().default(false),
  status: z.enum(['进行中', '已完成', '构想中']).optional(),
  repo: z.url().optional(),
  demo: z.url().optional()
});

export const collections = {
  notes: defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }), schema }),
  blog: defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }), schema }),
  projects: defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }), schema })
};
