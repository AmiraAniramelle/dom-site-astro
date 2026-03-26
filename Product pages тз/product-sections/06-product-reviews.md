# Блок 6: ProductReviews — Отзывы участников

**Создать:** src/components/products/ProductReviews.astro

## Что на экране
- H2: "Изменения участников"
- Карточки отзывов (текст + автор)

## УСЛОВНЫЙ: показывать ТОЛЬКО если reviews.length > 0

## Props
```typescript
interface Props {
  reviews: Array<{ text: string; author: string }>
}
```

Сетка: class="grid grid-cols-1 md:grid-cols-2 gap-10"

НЕ ТРОГАЙ Footer, Navbar.
