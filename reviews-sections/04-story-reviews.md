# Блок 4: StoryReviews — Истории студентов

**Создать:** src/components/reviews/StoryReviewCard.astro (один компонент)
**Создать:** src/components/reviews/StoryReviewsGrid.astro (сетка)

## Что на экране
- H2: "Истории студентов"
- Сетка карточек: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch` (без бегущей строки — она только на главной)
- Каждая карточка: большое фото сверху, имя, строка мета (роль · город или город), текст — **те же классы, что блок Reviews на главной** (`home-review-card`, `home-review-photo-wrap`, `home-review-body`, … в `global.css`)
- На карточке только `excerpt` + строка «Читать полностью» (как на главной); полный текст из body открывается в **модалке** (`home-review-modal-overlay` / `home-review-modal`, те же стили, что блок Reviews на главной). Клик по карточке или Enter/Space при фокусе.
- У фото карточки — `onerror` с подстановкой `/images/home/hero-reference.jpg`, как на главной.

## StoryReviewCard Props
```typescript
interface Props {
  id: string              // id записи коллекции (slug файла)
  name: string
  city: string
  role?: string
  photo: string
  highlight: string       // в схеме контента; на карточке не выводится
  excerpt: string         // превью на карточке
  categories: string[]
}
```
Полный текст — из body через `<Content />`, в DOM в скрытом `[data-reviews-story-body]` для копирования в модалку.

## Разметка карточки
- `article.home-review-card.review-filter-item.reviews-story-card` + `data-reviews-story-card`, `data-review-category`
- Внутри: `home-review-photo-wrap` / `home-review-photo`, `home-review-body`, `home-review-name`, `home-review-meta`, `home-review-excerpt`, при необходимости `button.home-review-readmore`

## Сетка
См. выше (tailwind в `StoryReviewsGrid.astro`).

## Расширяемость
Карточка может быть компактной (excerpt) с кнопкой "Читать полностью"
которая раскрывает полный текст (JS: toggle class hidden).

НЕ ТРОГАЙ Footer, Navbar.
