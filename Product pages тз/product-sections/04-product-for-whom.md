# Блок 4: ProductForWhom — Для кого этот путь?

**Создать:** src/components/products/ProductForWhom.astro

## Что на экране
- H2: "Для кого этот путь?"
- 3 карточки в ряд
- Каждая: заголовок + описание

## УСЛОВНЫЙ БЛОК: показывать ТОЛЬКО если forWhom.length > 0

## Props
```typescript
interface Props {
  items: Array<{ title: string; desc: string }>
}
```

Сетка: class="grid grid-cols-1 md:grid-cols-3 gap-8"

НЕ ТРОГАЙ Footer, Navbar.
