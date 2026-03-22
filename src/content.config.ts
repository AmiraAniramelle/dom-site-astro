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
    /** Дублирует URL-слаг (имя файла без .md); опционально для совместимости с импортом из Дзена */
    slug: z.string().optional(),
    excerpt: z.string(),
    category: z.enum([
      'science',
      'system-thinking',
      'spiritual-development',
      'life-meanings',
      'parents',
      'children',
      'male-female',
      'money-business',
      'anxiety-depression',
    ]),
    /** Только: Статья | Книга | Видео. Не использовать Пост, Практика, Разбор. */
    contentType: z.enum(['Статья', 'Книга', 'Видео']),
    /** Для постов с contentType «Видео» — встраивание на странице статьи */
    youtubeId: z.string().optional(),
    tags: z.array(z.string()),
    date: z.string(),
    readingTime: z.number(),
    /** Просмотры (например с Дзена); в сетке блога, по умолчанию 0 */
    viewsCount: z.number().optional().default(0),
    cover: z.string(),
    relatedProductId: z.string().nullable(),
    cta: z
      .object({
        label: z.string(),
        /** Якорь на странице, например #section */
        action: z.string().optional(),
        /** Внешняя или внутренняя ссылка (блок 06) */
        url: z.string().optional(),
      })
      .refine((d) => Boolean(d.url || d.action), {
        message: 'cta: укажите url или action',
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

const reviewCommon = {
  title: z.string(),
  name: z.string(),
  city: z.string(),
  role: z.string().optional(),
  categories: z.array(z.string()),
  excerpt: z.string(),
  date: z.string(),
  published: z.boolean().default(true),
  lang: z.enum(['ru', 'en']).default('ru'),
};

const reviews = defineCollection({
  loader: glob({ base: './src/content/reviews', pattern: '**/*.md' }),
  schema: z.discriminatedUnion('type', [
    z.object({
      type: z.literal('video'),
      ...reviewCommon,
      youtubeId: z.string(),
      thumbnail: z.string(),
    }),
    z.object({
      type: z.literal('story'),
      ...reviewCommon,
      photo: z.string(),
      highlight: z.string(),
    }),
    z.object({
      type: z.literal('telegram'),
      ...reviewCommon,
      screenshot: z.string(),
      telegramLink: z.string().optional(),
    }),
  ]),
});

export const collections = { products, blog, reviews };
