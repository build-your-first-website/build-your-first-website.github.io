import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const notes = defineCollection({
  loader: glob({ base: "./src/content/notes", pattern: "*.md" }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    date: z.date()
  })
});

export const collections = { notes: notes };
