import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const products = defineCollection({
  loader: glob({ base: './src/content/products', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    tag: z.string(),
    shortDesc: z.string(),
    heroSubtitle: z.string().optional(),
    heroTagline: z.string().optional(),
    heroShortDesc: z.string().optional(),
    heroQuote: z.string().optional(),
    heroImage: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    videoPreview: z
      .object({
        thumbnail: z.string(),
        videoUrl: z.string(),
        alt: z.string(),
      })
      .optional(),
    stats: z
      .array(
        z.object({
          icon: z.string().optional(),
          text: z.string(),
        })
      )
      .optional(),
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
    /** Уникальный hero «Бизнес Миссия» (slug business-mission) */
    heroPillars: z
      .array(
        z.object({
          icon: z.string().optional(),
          label: z.string(),
        })
      )
      .optional(),
    heroCta: z
      .object({
        text: z.string(),
        url: z.string(),
      })
      .optional(),
    /** Строка параметров под CTA (уникальный hero, напр. business-mission) */
    heroMetaRows: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
        })
      )
      .optional(),
    /** YouTube под заголовком в hero (напр. business-mission) */
    heroVideo: z
      .object({
        youtubeId: z.string(),
        posterSrc: z.string().optional(),
        /** Подзаголовок на кастомной обложке превью (business-mission) */
        coverSubtitle: z.string().optional(),
      })
      .optional(),
    /** Единый hero (ProductHeroNew): приоритет над heroVideo при сборке props в [slug] */
    youtubeId: z.string().optional(),
    videoCover: z.string().optional(),
    format: z.string().optional(),
    meta: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
        })
      )
      .optional(),
    /** Блок «Узнаёте себя» — только business-mission */
    painPointsEyebrow: z.string().optional(),
    painPointsTitle: z.string().optional(),
    painPoints: z
      .array(
        z.object({
          bold: z.string(),
          muted: z.string(),
        })
      )
      .optional(),
    painPointsConclusion: z
      .object({
        line1: z.string(),
        line2: z.string(),
      })
      .optional(),
    /** Блок «Главная ошибка» + практика — только business-mission */
    bmMainMistake: z
      .object({
        title: z.string(),
        leftText: z.string(),
        leftImage: z.string().optional(),
        ctaText: z.string().optional(),
        ctaHref: z.string().optional(),
        practiceLabel: z.string(),
        examples: z.array(
          z.object({
            title: z.string(),
            desc: z.string(),
            image: z.string().optional(),
          })
        ),
      })
      .optional(),
    /** Блок «Не мотивационный курс» + 4 карточки — только business-mission */
    bmSystemWork: z
      .object({
        title: z.string(),
        strikethroughItems: z.array(z.string()).min(1),
        subtitle: z.string(),
        cards: z
          .array(
            z.object({
              label: z.string(),
              image: z.string().optional(),
            })
          )
          .length(4),
      })
      .optional(),
    /** Блок «Формат» + «Результат после курса» — только business-mission */
    bmFormatResults: z
      .object({
        formatTitle: z.string(),
        formatItems: z.array(
          z.object({
            icon: z.enum(['target', 'bulb', 'chat']),
            text: z.string(),
          })
        ),
        ctaText: z.string().optional(),
        ctaHref: z.string().optional(),
        resultsTitle: z.string(),
        resultsItems: z.array(
          z.object({
            segments: z.array(
              z.union([
                z.object({ text: z.string() }),
                z.object({ gold: z.string() }),
              ])
            ),
          })
        ),
      })
      .optional(),
    /** Блок «Этот курс» — не для вас / для вас — только business-mission */
    bmCourseAudience: z
      .object({
        headline: z.string(),
        notForTitle: z.string(),
        notForItems: z.array(z.string()).min(1),
        notForImage: z.string().optional(),
        forTitle: z.string(),
        forItems: z.array(z.string()).min(1),
        forImage: z.string().optional(),
      })
      .optional(),
    /** Финальный блок записи (золотая карточка + форма) — только business-mission */
    bmEnroll: z
      .object({
        dateBlocks: z
          .array(
            z.object({
              heading: z.string(),
              detail: z.string(),
            })
          )
          .min(1),
        supportLine: z.string(),
        priceSubline: z.string(),
        formTitle: z.string(),
        placeholders: z
          .object({
            name: z.string().optional(),
            email: z.string().optional(),
            phone: z.string().optional(),
          })
          .optional(),
        marketingConsentPrefix: z.string(),
        marketingConsentLinkLabel: z.string().optional(),
        marketingConsentSuffix: z.string().optional(),
      })
      .optional(),
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
