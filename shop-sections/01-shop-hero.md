# Блок 1: ShopHero — Заголовок магазина

**Создать:** src/components/shop/ShopHero.astro

## Что на экране
- Eyebrow: "DOM STORE"
- H1: "Магазин DOM"
- Золотая линия
- Подзаголовок

## Точные классы из оригинала:
Eyebrow: class="text-dom-goldDark font-bold tracking-widest uppercase text-sm mb-3 block font-montserrat"
H1: class="font-messiri text-5xl md:text-6xl text-dom-graphite mb-6"
Линия: class="w-20 h-1 bg-dom-gold mx-auto mb-8"
Подзаголовок: class="text-dom-graphite/74 text-base md:text-lg max-w-3xl mx-auto font-montserrat"
Контейнер: class="text-center mb-14"

## Props
```typescript
interface Props {
  eyebrow: string
  title: string
  subtitle: string
}
```

## Данные для shop.ts:
```typescript
export const shopPageData = {
  seo: {
    title: 'Магазин DOM — Мерч MIROZDANIE и DOM | Стиль метода',
    description: 'Лимитированные коллекции MIROZDANIE и DOM: худи, футболки, аксессуары.',
    canonicalUrl: '/ru/shop/',
  },
  hero: {
    eyebrow: 'DOM STORE',
    title: 'Магазин DOM',
    subtitle: 'Внутри магазина DOM представлены два бренда: MIROZDANIE и DOM. Стильные вещи для ежедневной практики, вдохновения и жизни в ритме метода.',
  },
}
```

НЕ ТРОГАЙ Footer, Navbar.
