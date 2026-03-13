# DOM Site — Архитектурная спецификация для AI-разработчика

> **Этот документ — источник правды для всей разработки.**
> Любой код, компонент или страница должны соответствовать правилам ниже.
> Если правило не описано — спроси, прежде чем принимать решение.

---

## 1. Философия архитектуры

### 1.1 Принцип: данные отдельно, представление отдельно

**НИКОГДА не хардкодь контент в .astro файлах.**

Каждый элемент сайта делится на:
- **Данные** — текст, картинки, ссылки, мета-теги → хранятся в `src/data/` (TypeScript) или `src/content/` (Markdown/MDX)
- **Компоненты** — визуальное представление → хранятся в `src/components/`
- **Страницы** — сборка компонентов + данные → хранятся в `src/pages/`

Это позволит в будущем подключить CMS (Tina, Decap, Sanity) без переписывания компонентов — меняется только источник данных.

### 1.2 Принцип: всё типизировано

Каждая структура данных описана TypeScript-интерфейсом в `src/types/`. Компоненты принимают данные через типизированные props. Это защищает от ошибок и делает код самодокументируемым.

### 1.3 Принцип: каждый компонент автономен

Компонент получает все данные через props. Компонент не импортирует данные напрямую — это делает страница. Компонент можно использовать на любой странице и в любом языке.

---

## 2. Структура проекта (целевая)

```
src/
├── types/
│   ├── navigation.ts       # NavItem, NavDropdown, LangSwitcher
│   ├── footer.ts            # FooterLink, SocialLink, AppBlock
│   ├── page.ts              # PageMeta (SEO), Breadcrumb
│   ├── product.ts           # Product, ProductModule, ProductReview, ProductFAQ
│   ├── blog.ts              # BlogPost, BlogCategory, BlogTag, BlogContentType
│   ├── review.ts            # Review, ReviewFilter
│   └── common.ts            # Image, CTA, LocaleString
│
├── data/
│   ├── navbar.ts            # Пункты меню, языки
│   ├── footer.ts            # Ссылки, контакты, соцсети, приложение
│   ├── site.ts              # Глобальные настройки: название, URL, дефолтный OG-image, языки
│   └── seo/
│       ├── home.ts          # SEO-данные главной
│       ├── method.ts        # SEO-данные страницы «О методе»
│       ├── about.ts         # ...и так для каждой статической страницы
│       └── defaults.ts      # Дефолтные мета-теги
│
├── content/                 # Astro Content Collections
│   ├── config.ts            # Схемы коллекций (Zod)
│   ├── products/
│   │   ├── formula-money.md
│   │   ├── business-mission.md
│   │   ├── psychogenotypes.md
│   │   └── ... (16 файлов)
│   ├── blog/
│   │   ├── kniga-rasshifrovka-genoma-chelovechnosti.md
│   │   ├── pochemu-narushenie-poryadkov-lomaet-rezultat.md
│   │   └── ... (все статьи)
│   └── reviews/
│       └── ... (отзывы как коллекция)
│
├── components/
│   ├── global/
│   │   ├── Navbar.astro
│   │   ├── Footer/
│   │   │   ├── FooterSection.astro
│   │   │   ├── FooterLogo.astro
│   │   │   ├── FooterLinks.astro
│   │   │   ├── FooterContact.astro
│   │   │   ├── FooterApp.astro
│   │   │   ├── FooterAppQR.astro
│   │   │   └── FooterLegal.astro
│   │   └── SEOHead.astro        # Компонент мета-тегов
│   ├── sections/
│   │   ├── HeroSection.astro
│   │   ├── MissionSection.astro
│   │   ├── PathCtaSection.astro
│   │   ├── ProgramsGrid.astro
│   │   ├── ReviewsSlider.astro
│   │   ├── FAQAccordion.astro
│   │   ├── BlogGrid.astro
│   │   ├── BlogFilters.astro
│   │   └── ...
│   ├── ui/
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── Badge.astro
│   │   ├── Breadcrumbs.astro
│   │   └── ...
│   └── product/
│       ├── ProductHero.astro
│       ├── ProductModules.astro
│       ├── ProductForWhom.astro
│       ├── ProductReviews.astro
│       ├── ProductFAQ.astro
│       └── ProductCTA.astro
│
├── layouts/
│   └── BaseLayout.astro     # HTML shell + SEOHead + Navbar + Footer
│
├── pages/
│   ├── index.astro          # Редирект → /ru/
│   ├── ru/
│   │   ├── index.astro
│   │   ├── method.astro
│   │   ├── about.astro
│   │   ├── about-life.astro
│   │   ├── books.astro
│   │   ├── path/
│   │   │   ├── index.astro
│   │   │   ├── money.astro
│   │   │   ├── relations.astro
│   │   │   ├── mental.astro
│   │   │   ├── soul.astro
│   │   │   ├── awareness.astro
│   │   │   └── worldview.astro
│   │   ├── products/
│   │   │   └── [slug].astro     # Динамическая страница продукта
│   │   ├── blog/
│   │   │   ├── index.astro      # Список статей
│   │   │   └── [slug].astro     # Динамическая страница статьи
│   │   ├── reviews.astro
│   │   ├── shop.astro
│   │   └── app-dom.astro
│   └── en/                       # Английская версия (позже)
│       └── ...
│
└── styles/
    └── global.css
```

---

## 3. SEO — обязательные правила

### 3.1 Компонент SEOHead.astro

Создать единый компонент `src/components/global/SEOHead.astro`, который получает props и генерирует все мета-теги. Каждая страница передаёт в него свои данные.

**Обязательные props:**

```typescript
// src/types/page.ts
interface PageMeta {
  title: string                    // До 60 символов
  description: string              // До 160 символов
  canonicalUrl: string             // Полный URL страницы
  ogImage?: string                 // URL картинки для соцсетей (1200x630)
  ogType?: 'website' | 'article' | 'product'
  locale: 'ru_RU' | 'en_US'
  alternateLocales?: { lang: string; url: string }[]
  noIndex?: boolean                // Для служебных страниц
  publishedTime?: string           // Для статей блога
  modifiedTime?: string            // Для статей блога
  author?: string                  // Для статей блога
  breadcrumbs?: Breadcrumb[]       // Для Schema.org BreadcrumbList
}

interface Breadcrumb {
  name: string
  url: string
}
```

**SEOHead.astro должен генерировать:**

```html
<!-- Базовые мета -->
<title>{title}</title>
<meta name="description" content={description} />
<link rel="canonical" href={canonicalUrl} />

<!-- Open Graph -->
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:url" content={canonicalUrl} />
<meta property="og:image" content={ogImage} />
<meta property="og:type" content={ogType} />
<meta property="og:locale" content={locale} />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={ogImage} />

<!-- Alternate languages -->
<link rel="alternate" hreflang="ru" href={ruUrl} />
<link rel="alternate" hreflang="en" href={enUrl} />
<link rel="alternate" hreflang="x-default" href={ruUrl} />

<!-- Schema.org JSON-LD (BreadcrumbList) -->
<script type="application/ld+json">...</script>
```

### 3.2 Правила заголовков (H-теги)

**На КАЖДОЙ странице:**
- Ровно ОДИН `<h1>` — главный заголовок страницы, уникальный, содержит ключевое слово
- `<h2>` — для секций страницы
- `<h3>` — для подсекций внутри h2
- `<h4>` — для элементов внутри h3 (модули курса, вопросы FAQ и т.д.)
- НИКОГДА не пропускать уровни (нет h1 → h3, должно быть h1 → h2 → h3)
- НИКОГДА не использовать h-теги для стилизации — для этого есть CSS-классы

**Пример для страницы продукта:**
```html
<h1>ФОРМУЛА M+O+N+E+Y — Системный метод работы с денежной матрицей</h1>
  <h2>Для кого эта программа</h2>
    <h3>Духовно развивающиеся</h3>
    <h3>Лидеры и создатели</h3>
  <h2>Результаты программы</h2>
  <h2>Модули программы</h2>
    <h3>M — MINDSET (Мышление)</h3>
    <h3>O — ORDER (Порядок)</h3>
  <h2>Отзывы участников</h2>
  <h2>Частые вопросы</h2>
    <h3>Какой формат прохождения?</h3>
```

### 3.3 Schema.org (структурированные данные)

**Каждая страница продукта** должна содержать JSON-LD:
```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "ФОРМУЛА M+O+N+E+Y",
  "description": "...",
  "provider": {
    "@type": "Organization",
    "name": "DOM | Системный Метод Анны Хефорс"
  },
  "offers": {
    "@type": "Offer",
    "price": "48608",
    "priceCurrency": "RUB"
  }
}
```

**Каждая статья блога** должна содержать JSON-LD:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  "author": { "@type": "Person", "name": "Анна Хефорс" },
  "datePublished": "2026-02-14",
  "image": "..."
}
```

**Страница FAQ** (или FAQ-секция продукта):
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "...",
      "acceptedAnswer": { "@type": "Answer", "text": "..." }
    }
  ]
}
```

**Глобально (на всех страницах):**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "DOM | Системный Метод Анны Хефорс",
  "url": "https://dom-site.com",
  "logo": "https://dom-site.com/dom-assets/dom-logo.png"
}
```

### 3.4 Sitemap и robots.txt

Установить `@astrojs/sitemap`:
```
npx astro add sitemap
```

В `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://dom-site.com',  // Заменить на реальный домен
  integrations: [tailwind(), sitemap()],
})
```

Создать `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://dom-site.com/sitemap-index.xml
```

### 3.5 Картинки — обязательные атрибуты

Каждое изображение ДОЛЖНО иметь:
- `alt` — описательный текст (не пустой, не "image", а реальное описание)
- `width` и `height` — для предотвращения CLS (Cumulative Layout Shift)
- `loading="lazy"` — для всех картинок ниже первого экрана
- `loading="eager"` — только для hero-изображений

Использовать `<Image />` из `astro:assets` для оптимизации (авто-WebP, ресайз).

### 3.6 Ссылки

- Все внутренние ссылки — абсолютные пути от корня (`/ru/method/`, не `method.html`)
- Все внешние ссылки — `rel="noopener noreferrer"` + `target="_blank"`
- Навигационные ссылки — семантический `<nav>` с `aria-label`
- Хлебные крошки на каждой странице кроме главной

### 3.7 URL-структура — ПОЛНАЯ КАРТА САЙТА

**Статические страницы (18 шт.):**
```
/                                         ← редирект → /ru/
/ru/                                      ← главная (home)
/ru/method/                               ← о методе
/ru/about/                                ← об авторе
/ru/about-life/                           ← история жизни автора
/ru/books/                                ← книги автора
/ru/path/                                 ← карта пути (общая)
/ru/path/money/                           ← направление: деньги
/ru/path/relations/                       ← направление: отношения
/ru/path/mental/                          ← направление: ментальное здоровье
/ru/path/soul/                            ← направление: душа
/ru/path/awareness/                       ← направление: осознанность
/ru/path/worldview/                       ← направление: мировоззрение
/ru/blog/                                 ← список статей блога
/ru/reviews/                              ← отзывы
/ru/shop/                                 ← магазин
/ru/app-dom/                              ← приложение DOM
```

**Страницы продуктов (16 шт., динамические через [slug].astro):**
```
/ru/products/formula-money/               ← ФОРМУЛА M+O+N+E+Y
/ru/products/business-mission/            ← Бизнес-миссия
/ru/products/power-of-manifestation/      ← Сила проявления
/ru/products/seven-systems-abundance/     ← 7 систем изобилия
/ru/products/family-unity/                ← Единство семьи
/ru/products/place-among-others/          ← Место среди других
/ru/products/man-woman-relations/         ← Мужчина и женщина
/ru/products/children-relations/          ← Отношения с детьми
/ru/products/power-of-acceptance/         ← Сила принятия
/ru/products/rules-of-life-systems/       ← Правила жизненных систем
/ru/products/square-of-life-force/        ← Квадрат жизненной силы
/ru/products/separation-from-family-scenarios/ ← Сепарация от семейных сценариев
/ru/products/true-self/                   ← Истинное Я
/ru/products/psychogenotypes/             ← Психогенотипы
/ru/products/neuro-trainers/              ← Нейротренажёры
/ru/products/source-inner-joy/            ← Источник внутренней радости
```

**Страницы блога (динамические через [slug].astro, 14+ статей):**
```
/ru/blog/kniga-rasshifrovka-genoma-chelovechnosti/
/ru/blog/kniga-garmoniya-v-seme/
/ru/blog/pochemu-narushenie-poryadkov-lomaet-rezultat/
/ru/blog/vnutrennyaya-vina-pered-roditelyami/
/ru/blog/granicy-v-otnosheniyah-s-detmi/
/ru/blog/kak-ne-teryat-sebya-v-sociume/
/ru/blog/muzhchina-zhenshina-i-nezakrytye-roli/
/ru/blog/rodovye-scenarii-deneg/
/ru/blog/samocennost-i-realizaciya/
/ru/blog/depressivnoe-sostoyanie-i-opora/
/ru/blog/trevoga-i-telo/
/ru/blog/vygoranie-kak-sistemnyy-sboy/
/ru/blog/masshtabirovanie-bez-vygoraniya/
/ru/blog/cel-i-sistemnaya-disiplina/
```

**Фильтрованные виды блога (реализуются query-параметрами, НЕ отдельными страницами):**
```
/ru/blog/?filter=science                  ← Наука
/ru/blog/?filter=system-thinking          ← Системное мышление
/ru/blog/?filter=spiritual-development    ← Духовное развитие
/ru/blog/?filter=life-meanings            ← Смыслы жизни
```

**Фильтрованные виды отзывов (аналогично — query-параметры):**
```
/ru/reviews/?filter=system-thinking       ← Системное мышление
/ru/reviews/?filter=male-female           ← Отношения
/ru/reviews/?filter=money                 ← Деньги
/ru/reviews/?filter=depression            ← Депрессия
```

**Английская версия (зеркало русской):**
```
/en/                                      ← Home
/en/method/                               ← About Method
/en/about/                                ← About Author
/en/products/formula-money/               ← Product page
/en/blog/...                              ← Blog post
... (все страницы дублируются)
```

**ИТОГО: ~50+ уникальных URL (без учёта английской версии)**

Все URL заканчиваются на `/` (trailing slash). Настроить в `astro.config.mjs`:
```javascript
trailingSlash: 'always'
```

**Файловая структура pages/ должна точно соответствовать URL-карте:**
```
src/pages/
├── index.astro                    # → / (редирект на /ru/)
├── ru/
│   ├── index.astro                # → /ru/
│   ├── method.astro               # → /ru/method/
│   ├── about.astro                # → /ru/about/
│   ├── about-life.astro           # → /ru/about-life/
│   ├── books.astro                # → /ru/books/
│   ├── path/
│   │   ├── index.astro            # → /ru/path/
│   │   ├── money.astro            # → /ru/path/money/
│   │   ├── relations.astro        # → /ru/path/relations/
│   │   ├── mental.astro           # → /ru/path/mental/
│   │   ├── soul.astro             # → /ru/path/soul/
│   │   ├── awareness.astro        # → /ru/path/awareness/
│   │   └── worldview.astro        # → /ru/path/worldview/
│   ├── products/
│   │   └── [slug].astro           # → /ru/products/{slug}/ (16 продуктов)
│   ├── blog/
│   │   ├── index.astro            # → /ru/blog/
│   │   └── [slug].astro           # → /ru/blog/{slug}/ (14+ статей)
│   ├── reviews.astro              # → /ru/reviews/
│   ├── shop.astro                 # → /ru/shop/
│   └── app-dom.astro              # → /ru/app-dom/
└── en/
    └── ... (зеркало ru/)
```

---

## 4. Content Collections — схемы данных

### 4.1 Конфигурация (`src/content/config.ts`)

```typescript
import { defineCollection, z } from 'astro:content'

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tag: z.string(),
    shortDesc: z.string(),
    mission: z.string(),
    whyImportant: z.string(),
    price: z.string(),
    backLink: z.string(),
    category: z.enum(['money', 'relations', 'mental', 'soul', 'awareness', 'worldview']),
    forWhom: z.array(z.object({
      title: z.string(),
      desc: z.string(),
    })),
    results: z.array(z.string()),
    modules: z.array(z.object({
      name: z.string(),
      desc: z.string(),
    })),
    reviews: z.array(z.object({
      text: z.string(),
      author: z.string(),
    })).optional(),
    faq: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })).optional(),
    seo: z.object({
      title: z.string(),
      description: z.string(),
      ogImage: z.string().optional(),
    }),
    order: z.number().default(0),
    published: z.boolean().default(true),
    lang: z.enum(['ru', 'en']).default('ru'),
  })
})

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.enum([
      'system-thinking', 'parents', 'children', 'society',
      'male-female', 'self-realization', 'money-business',
      'anxiety-depression', 'physical-mental-health'
    ]),
    contentType: z.enum(['Статья', 'Пост', 'Практика', 'Разбор', 'Книга']),
    tags: z.array(z.string()),
    date: z.string(),
    readingTime: z.number(),
    cover: z.string(),
    relatedProductId: z.string().nullable(),
    cta: z.object({
      label: z.string(),
      action: z.string(),
    }).optional(),
    seo: z.object({
      title: z.string(),
      description: z.string(),
      ogImage: z.string().optional(),
    }),
    published: z.boolean().default(true),
    lang: z.enum(['ru', 'en']).default('ru'),
  })
})

const reviews = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string(),
    text: z.string(),
    category: z.string(),
    productId: z.string().optional(),
    rating: z.number().min(1).max(5).optional(),
    date: z.string().optional(),
    published: z.boolean().default(true),
    lang: z.enum(['ru', 'en']).default('ru'),
  })
})

export const collections = { products, blog, reviews }
```

### 4.2 Пример файла продукта (`src/content/products/formula-money.md`)

```markdown
---
title: "ФОРМУЛА M+O+N+E+Y"
tag: "СИСТЕМНЫЙ МЕТОД РАБОТЫ С ДЕНЕЖНОЙ МАТРИЦЕЙ"
shortDesc: "Новый финансовый порядок жизни. 5 элементов, которые перестраивают мышление и денежные привычки."
mission: "Создать пространство, где зрелые, осознанные лидеры возвращаются к целостному мышлению..."
whyImportant: "Часто деньги приходят и уходят. Вы зарабатываете, но не чувствуете устойчивости..."
price: "48 608 ₽ (Доступ ко всем модулям на год)"
backLink: "path-money"
category: "money"
forWhom:
  - title: "Духовно развивающиеся"
    desc: "Ищете баланс между смыслом и деньгами..."
  - title: "Лидеры и создатели"
    desc: "Понимаете, что качество мышления определяет результаты..."
  - title: "В периоде перехода"
    desc: "Выходите из состояния выживания..."
results:
  - "Перестаёте жить в нарушении денежных порядков системы"
  - "Выходите из хронических долгов и утечек энергии"
  - "Возвращаете телесное чувство безопасности"
modules:
  - name: "M — MINDSET (Мышление)"
    desc: "Ваше место в системе. Поиск нарушенного баланса обмена."
  - name: "O — ORDER (Порядок)"
    desc: "21 день. Правила системы денег. Выход из родовых программ."
  - name: "N — NEUROSYSTEM (Нейропластичность)"
    desc: "21 день. Перепрошивка реакций мозга из страха в спокойствие."
  - name: "E — ENERGY (Энергия Денег)"
    desc: "Эмоции, страх, стыд и вина как утечка."
  - name: "Y — YOUR VALUE (Твоя ценность)"
    desc: "21 день. Работа с программой 'Я никчёмный'. Опора на себя."
reviews:
  - text: "Я пересмотрел все свои отношения с деньгами..."
    author: "Александр"
  - text: "Формула дала невероятное чувство внутреннего порядка..."
    author: "Мария"
faq:
  - q: "Какой формат прохождения программы?"
    a: "Это 100% онлайн-формат в видео- и аудиозаписях..."
  - q: "Сколько времени занимает обучение?"
    a: "Среднее время глубокого прохождения — около 4 месяцев..."
seo:
  title: "Формула MONEY — Системный метод работы с деньгами | DOM"
  description: "Онлайн-программа трансформации отношений с деньгами. 5 модулей, нейротренажёры, 22+ часов материалов. Выход из паттернов выживания."
order: 1
published: true
lang: "ru"
---

<!-- Расширенное описание (body) для SEO -->
Программа «Формула M+O+N+E+Y» — это системный подход к трансформации
отношений с деньгами через пять ключевых элементов...
```

---

## 5. CMS-Ready архитектура

### 5.1 Принцип подготовки к CMS

Каждый визуальный элемент сайта должен получать данные через props, а не из хардкода. При подключении CMS (Tina, Decap, Sanity) нужно будет заменить только источник данных, не трогая компоненты.

### 5.2 Что должно управляться из CMS (будущее)

**Глобальные настройки:**
- Логотип сайта (навбар + футер)
- Пункты меню навбара
- Ссылки и контакты в футере
- Соцсети
- Дефолтный OG-image

**Контент страниц:**
- Тексты и заголовки каждой секции
- Картинки
- CTA-кнопки (текст + ссылка)

**Коллекции:**
- Продукты (все поля из схемы)
- Статьи блога
- Отзывы

### 5.3 Как готовить компоненты

**ПРАВИЛЬНО:**
```astro
---
// Компонент получает данные через props
interface Props {
  title: string
  description: string
  image: ImageMetadata | string
  ctaText: string
  ctaUrl: string
}
const { title, description, image, ctaText, ctaUrl } = Astro.props
---
<section>
  <h2>{title}</h2>
  <p>{description}</p>
  <a href={ctaUrl}>{ctaText}</a>
</section>
```

**НЕПРАВИЛЬНО:**
```astro
---
// Компонент содержит хардкод — при подключении CMS придётся переписывать
---
<section>
  <h2>Системный Метод Анны Хефорс</h2>
  <p>Трансформация через осознанность</p>
  <a href="/ru/method/">Узнать о методе</a>
</section>
```

### 5.4 Данные статических страниц

Для страниц, которые не являются коллекциями (главная, метод, об авторе), создавать файлы данных:

```typescript
// src/data/pages/home.ts
export const homePageData = {
  seo: {
    title: 'DOM | Системный Метод Анны Хефорс',
    description: 'Трансформация жизни через системный подход...',
    ogImage: '/dom-assets/og-home.jpg',
  },
  hero: {
    title: 'Системный Метод Анны Хефорс',
    subtitle: 'Трансформация через осознанность',
    ctaText: 'Начать путь',
    ctaUrl: '/ru/path/',
    portraitImage: '/assets/images/anna-portrait.png',
    logoImage: '/assets/images/dom-logo-home-gold-bg.jpg',
  },
  mission: {
    title: 'Миссия метода',
    text: '...',
  },
  // ...остальные секции
}
```

Страница импортирует данные и передаёт компонентам:
```astro
---
import { homePageData } from '../../data/pages/home'
import HeroSection from '../../components/sections/HeroSection.astro'
---
<HeroSection {...homePageData.hero} />
```

---

## 6. Компоненты — стандарты

### 6.1 Именование
- PascalCase для компонентов: `HeroSection.astro`, `ProductCard.astro`
- camelCase для данных и утилит: `navbar.ts`, `formatDate.ts`
- kebab-case для URL и slug: `formula-money`, `about-life`

### 6.2 Структура компонента

```astro
---
// 1. Импорты
import { Image } from 'astro:assets'
import Button from '../ui/Button.astro'

// 2. TypeScript interface для props
interface Props {
  title: string
  description?: string
}

// 3. Деструктуризация props
const { title, description } = Astro.props
---

<!-- 4. HTML-разметка -->
<section class="...">
  <h2>{title}</h2>
  {description && <p>{description}</p>}
</section>

<!-- 5. Scoped стили (если нужны) -->
<style>
  /* Стили только для этого компонента */
</style>

<!-- 6. Клиентский скрипт (если нужен) -->
<script>
  // JS только для этого компонента
</script>
```

### 6.3 Семантическая разметка

- `<header>` — шапка сайта
- `<nav>` — навигация (с `aria-label`)
- `<main>` — основной контент (один на страницу)
- `<article>` — самостоятельный контент (статья блога, продукт)
- `<section>` — тематический раздел (с заголовком)
- `<aside>` — побочный контент (сайдбар, связанные продукты)
- `<footer>` — подвал
- `<figure>` + `<figcaption>` — изображения с подписями

### 6.4 Доступность (a11y)

- Все интерактивные элементы доступны с клавиатуры
- `aria-label` на навигациях
- `aria-expanded` на выпадающих меню
- `role="button"` если `<div>` используется как кнопка (лучше использовать `<button>`)
- Контраст текста — минимум 4.5:1

---

## 7. Мультиязычность (i18n)

### 7.1 Структура

```
src/pages/
├── index.astro          # Редирект → /ru/
├── ru/
│   ├── index.astro
│   ├── products/[slug].astro
│   └── blog/[slug].astro
└── en/
    ├── index.astro
    ├── products/[slug].astro
    └── blog/[slug].astro
```

### 7.2 Контент

Каждый файл контента имеет поле `lang: 'ru' | 'en'`. Продукты и статьи на разных языках — отдельные файлы:
```
content/products/
├── formula-money.md          # lang: 'ru'
└── formula-money-en.md       # lang: 'en'
```

### 7.3 UI-строки

Строки интерфейса (кнопки, лейблы) хранятся в:
```typescript
// src/data/i18n.ts
export const ui = {
  ru: {
    'nav.home': 'Главная',
    'nav.method': 'О методе',
    'blog.readMore': 'Читать далее',
    'product.buy': 'Приобрести программу',
  },
  en: {
    'nav.home': 'Home',
    'nav.method': 'About Method',
    'blog.readMore': 'Read more',
    'product.buy': 'Get the program',
  }
}
```

---

## 8. Производительность

- Все картинки через `<Image />` из `astro:assets` (автоматический WebP, ресайз)
- `loading="lazy"` на всех картинках ниже fold
- Шрифты: `font-display: swap` + preload для основных начертаний
- Никаких блокирующих скриптов в `<head>`
- CSS минифицирован при сборке (Astro делает автоматически)
- Target: Lighthouse Performance ≥ 90, SEO ≥ 95

---

## 9. Чеклист перед публикацией каждой страницы

- [ ] Уникальный `<title>` до 60 символов
- [ ] Уникальный `<meta description>` до 160 символов
- [ ] `<link rel="canonical">` указывает на правильный URL
- [ ] Open Graph теги заполнены (title, description, image, url)
- [ ] Ровно один `<h1>`, иерархия H-тегов не нарушена
- [ ] Все картинки имеют осмысленный `alt`
- [ ] Все картинки имеют `width` и `height`
- [ ] Хлебные крошки присутствуют (кроме главной)
- [ ] JSON-LD Schema.org соответствует типу страницы
- [ ] URL заканчивается на `/`
- [ ] Страница доступна и выглядит корректно на мобильных
- [ ] Нет хардкода контента — всё через props и данные

---

## 10. Текущие данные проекта

### 10.1 Продукты (16 шт.)

| Slug | Направление |
|------|------------|
| formula-money | money |
| business-mission | money |
| power-of-manifestation | money |
| seven-systems-abundance | money |
| family-unity | relations |
| place-among-others | relations |
| man-woman-relations | relations |
| children-relations | relations |
| power-of-acceptance | mental |
| rules-of-life-systems | mental |
| square-of-life-force | mental |
| separation-from-family-scenarios | mental |
| true-self | soul |
| psychogenotypes | awareness |
| neuro-trainers | awareness |
| source-inner-joy | soul |

### 10.2 Категории блога (9 шт.)

| ID | Название |
|----|---------|
| system-thinking | Системное мышление |
| parents | Отношения с родителями |
| children | Отношения с детьми |
| society | Отношения с окружающими |
| male-female | Мужчина и женщина |
| self-realization | Реализация себя |
| money-business | Деньги и бизнес |
| anxiety-depression | Тревожность и депрессия |
| physical-mental-health | Физическое и ментальное здоровье |

### 10.3 Типы контента блога

Статья, Пост, Практика, Разбор, Книга

### 10.4 Теги блога (32 шт.)

Принятие, Внутренняя мама, Внутренний папа, Треугольник личности, Позиция взрослого, Роль, Порядки системы, Цель, Самоценность, Внутренняя опора, Энергия, Осознание, Конфликт, Страх, Тревога, Депрессивное состояние, Потерянность, Выгорание, Кризис, Вина, Обида, Непринятие, Зависимость, Развод, Границы, Проявленность, Лидерство, Ответственность, Финансовый рост, Масштабирование, Самореализация, Работа с телом

---

## 11. Запрещено

- Хардкодить текст, картинки, ссылки в компонентах
- Использовать `<h1>` больше одного раза на странице
- Пропускать уровни заголовков (h1 → h3)
- Использовать `<div>` где нужен семантический тег
- Оставлять `alt=""` или `alt="image"` на картинках
- Использовать inline styles вместо Tailwind-классов
- Создавать компоненты, которые сами импортируют данные (данные только через props)
- Игнорировать мобильную версию
- Коммитить без проверки в Lighthouse
