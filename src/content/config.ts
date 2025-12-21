import { defineCollection, z } from "astro:content";

const wines = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.array(
      z.object({
        name: z.string(),
        year: z.number(),
        image: image(),
      })
    ),
});

const events = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      cover: image(),
      gallery: z.array(image()).optional(),
    }),
});

const family = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      image: image(),
      description: z.string(),
    }),
});

const history = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        image: image(),
      })
    ),
});

export const collections = { wines, events, family, history };
