import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const products = defineCollection({
  loader: glob({ base: './src/content/products', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    tag: z.string(),
    shortDesc: z.string(),
    mission: z.string(),
    whyImportant: z.string(),
    price: z.string(),
    backLink: z.string(),
    category: z.enum(['money', 'relations', 'mental', 'soul', 'awareness', 'worldview']),
    forWhom: z.array(
      z.object({
        title: z.string(),
        desc: z.string(),
      })
    ),
    results: z.array(z.string()),
    modules: z.array(
      z.object({
        name: z.string(),
        desc: z.string(),
      })
    ),
    reviews: z
      .array(
        z.object({
          text: z.string(),
          author: z.string(),
        })
      )
      .optional(),
    faq: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(),
        })
      )
      .optional(),
    seo: z.object({
      title: z.string(),
      description: z.string(),
      ogImage: z.string().optional(),
    }),
    order: z.number().default(0),
    published: z.boolean().default(true),
    lang: z.enum(['ru', 'en']).default('ru'),
  }),
});

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.enum([
      'system-thinking',
      'parents',
      'children',
      'society',
      'male-female',
      'self-realization',
      'money-business',
      'anxiety-depression',
      'physical-mental-health',
    ]),
    contentType: z.enum(['Статья', 'Пост', 'Практика', 'Разбор', 'Книга']),
    tags: z.array(z.string()),
    date: z.string(),
    readingTime: z.number(),
    cover: z.string(),
    relatedProductId: z.string().nullable(),
    cta: z
      .object({
        label: z.string(),
        action: z.string(),
      })
      .optional(),
    seo: z.object({
      title: z.string(),
      description: z.string(),
      ogImage: z.string().optional(),
    }),
    published: z.boolean().default(true),
    lang: z.enum(['ru', 'en']).default('ru'),
  }),
});

const reviews = defineCollection({
  loader: glob({ base: './src/content/reviews', pattern: '**/*.md' }),
  schema: z.object({
    author: z.string(),
    text: z.string(),
    category: z.string(),
    productId: z.string().optional(),
    rating: z.number().min(1).max(5).optional(),
    date: z.string().optional(),
    published: z.boolean().default(true),
    lang: z.enum(['ru', 'en']).default('ru'),
  }),
});

export const collections = { products, blog, reviews };
