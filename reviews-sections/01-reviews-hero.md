# Блок 1: ReviewsHero

**Создать:** src/components/reviews/ReviewsHero.astro

## Что на экране
- Eyebrow: "РЕЗУЛЬТАТЫ"
- H1: "Отзывы участников"
- Золотая линия
- Подзаголовок

## Точные классы из оригинала:
Eyebrow: class="text-dom-goldDark font-bold tracking-widest uppercase text-sm mb-3 block font-montserrat"
H1: class="font-messiri text-5xl md:text-6xl text-dom-graphite mb-6"
Линия: class="w-20 h-1 bg-dom-gold mx-auto mb-8"
Подзаголовок: class="text-dom-graphite/70 text-lg max-w-2xl mx-auto font-montserrat"

## Props
```typescript
interface Props {
  eyebrow: string
  title: string
  subtitle: string
}
```

НЕ ТРОГАЙ Footer, Navbar.
