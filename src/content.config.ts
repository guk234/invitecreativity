import { defineCollection, z } from 'astro:content';

const coloringPages = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    category: z.string(),
    date: z.string().optional(),
    sections: z.array(z.object({
      heading: z.string(),
      text: z.string(),
    })).nullable().optional(),
    coloringPages: z.array(z.object({
      title: z.string(),
      image: z.string(),
      pdf: z.string(),
    })).nullable().optional(),
    tips: z.object({
      colors: z.string().optional(),
      techniques: z.string().optional(),
      challenge: z.string().optional(),
    }).nullable().optional(),
    crafts: z.array(z.object({
      title: z.string(),
      text: z.string(),
    })).nullable().optional(),
    related: z.array(z.string()).optional(),
  }),
});

export const collections = { pages: coloringPages };
