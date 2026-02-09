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
    z.array(
      z.object({
        name: z.string(),
        role: z.string(),
        image: image(),
        description: z.string(),
      })
    ),
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
const openingMonths = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      month: z.string(),       // "Februar", "März", etc.
      startDate: z.string(),   // "01. Feb."
      endDate: z.string(),     // "14. Feb."
      year: z.number(),        // 2025
    })
  ),
});



export const collections = { wines, events, family, history, openingMonths };
