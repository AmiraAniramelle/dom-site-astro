# Блок 2: ReviewsFilters — Фильтры-чипы

**Создать:** src/components/reviews/ReviewsFilters.astro

## Что на экране
- Подсказка: "Смотреть отзывы по теме"
- Горизонтальный ряд chip-кнопок (14 фильтров)
- Каждый чип: SVG-иконка + текст
- Активный чип выделен (класс active)
- Статус: "Сейчас показаны: все темы"

## Точные классы:
Подсказка: class="review-filter-help"
Обёртка: class="review-filter-list max-w-7xl mx-auto"
Чип: class="review-filter-btn review-filter-control"
Активный: class="review-filter-btn active review-filter-control"
Статус: class="font-montserrat text-[11px] uppercase tracking-[0.11em] text-dom-goldDark"

## Props
```typescript
interface Props {
  hint: string
  filters: Array<{
    id: string
    label: string
    svgIcon: string   // SVG path для иконки
  }>
  statusPrefix: string  // "Сейчас показаны:"
}
```

## Данные в reviews.ts:
Все 14 фильтров с SVG-иконками из source-DOM.html строки 5935–5986.
Каждый чип имеет data-filter="{id}" для JS фильтрации.

## ВАЖНО: На мобильном чипы должны скроллиться горизонтально
(overflow-x: auto, flex-nowrap) или переноситься в несколько строк.

НЕ ТРОГАЙ Footer, Navbar.
