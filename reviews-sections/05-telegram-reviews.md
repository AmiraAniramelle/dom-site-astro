# Блок 5: TelegramReviews — Отзывы из Telegram-чатов

**Создать:** src/components/reviews/TelegramScreenshot.astro (один компонент)
**Создать:** src/components/reviews/TelegramReviewsGrid.astro (сетка)

## Что на экране
- H2: "Отзывы из Telegram-чатов"
- Горизонтальная лента или сетка скриншотов
- Каждый: картинка-скриншот + подпись
- Клик: открывает картинку в модалке (увеличенную) или переходит в Telegram

## TelegramScreenshot Props
```typescript
interface Props {
  screenshot: string
  title: string
  categories: string[]
  telegramLink?: string
}
```

## Точные классы:
Карточка: class="telegram-shot review-filter-item"
data-review-category="{categories.join(',')}"
Подпись: class="font-montserrat text-xs uppercase tracking-[0.12em] text-dom-goldDark"

## Лента:
class="telegram-ribbon" (горизонтальный скролл или CSS grid)

НЕ ТРОГАЙ Footer, Navbar.
