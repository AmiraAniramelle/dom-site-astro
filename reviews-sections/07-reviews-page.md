# Блок 7: Страница reviews.astro

**Обновить:** src/pages/ru/reviews.astro

```astro
---
import { getCollection } from 'astro:content'
import BaseLayout from '../../layouts/BaseLayout.astro'
import ReviewsHero from '../../components/reviews/ReviewsHero.astro'
import ReviewsFilters from '../../components/reviews/ReviewsFilters.astro'
import VideoReviewsGrid from '../../components/reviews/VideoReviewsGrid.astro'
import StoryReviewsGrid from '../../components/reviews/StoryReviewsGrid.astro'
import TelegramReviewsGrid from '../../components/reviews/TelegramReviewsGrid.astro'
import { reviewsPageData } from '../../data/pages/reviews'
import { createPageMeta } from '../../data/seo/defaults'

const allReviews = await getCollection('reviews')
const videoReviews = allReviews.filter(r => r.data.type === 'video')
const storyReviews = allReviews.filter(r => r.data.type === 'story')
const telegramReviews = allReviews.filter(r => r.data.type === 'telegram')

const meta = createPageMeta(reviewsPageData.seo)
---
<BaseLayout meta={meta}>
  <section class="bg-dom-beige min-h-screen pt-20 pb-24">
    <div class="max-w-7xl mx-auto px-4" data-reviews-root>
      <ReviewsHero {...reviewsPageData.hero} />
      <ReviewsFilters {...reviewsPageData.filters} />
      <VideoReviewsGrid title="Видео-отзывы" reviews={videoReviews} />
      <StoryReviewsGrid title="Истории студентов" reviews={storyReviews} />
      <TelegramReviewsGrid title="Отзывы из Telegram-чатов" reviews={telegramReviews} />
      
      <div class="text-center hidden" data-reviews-empty>
        <p class="font-montserrat text-dom-graphite/75 text-base mb-6">
          По выбранному фильтру пока нет отзывов.
        </p>
      </div>

      <div class="text-center mt-12">
        <a href="https://t.me/itbrain_support" target="_blank" rel="noopener noreferrer"
        class="inline-flex items-center justify-center px-10 py-4 bg-gold-gradient text-white rounded-xl shadow-lg font-montserrat font-semibold uppercase tracking-wider text-sm">
          Смотреть больше отзывов
        </a>
      </div>
    </div>
  </section>
</BaseLayout>
```

## Schema.org:
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Отзывы участников DOM",
  "breadcrumb": { ... Главная → Отзывы }
}
```

## Content Collection:
Добавь коллекцию reviews в src/content.config.ts 
с Zod-схемой для frontmatter.

НЕ ТРОГАЙ Footer, Navbar.
