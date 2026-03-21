# Блок 1: Hero — Книги Камаллаи Хефорс (строки 6608–6625)

**Создать:** src/components/books/BooksHero.astro

## Что на экране
- Фоновая картинка на всю ширину с тёмным оверлеем
- Chip: "Бестселлеры DOM"
- H1: "Книги Камаллаи Хефорс"
- Подзаголовок
- Строка "Представлено на": Amazon, Ozon, DOM Method, MIROZDANIE

## Точные классы из оригинала:
Секция: class="books-hero mb-12 fade-in"
Картинка: class="books-hero-image"
Оверлей: class="books-hero-overlay"
Контент: class="books-hero-content"
Chip: class="books-hero-chip"
H1: class="books-page-main-title font-messiri text-5xl md:text-6xl text-white mb-4"
Подзаголовок: class="books-page-intro font-montserrat text-lg text-white/85 max-w-3xl mx-auto"
Строка press: class="books-hero-press"

## Props
```typescript
interface Props {
  chip: string
  title: string
  subtitle: string
  heroImage: { src: string; alt: string }
  press: { label: string; items: string[] }
}
```

## Данные для books.ts:
```typescript
export const booksPageData = {
  seo: { title: '...', description: '...', canonicalUrl: '/ru/books/' },
  hero: {
    chip: 'Бестселлеры DOM',
    title: 'Книги Камаллаи Хефорс',
    subtitle: 'Авторские книги, в которых метод DOM раскрыт через внешний контур отношений и внутренний контур осознанности.',
    heroImage: { src: '/dom-assets/hero-reference.jpg', alt: 'Книги Камаллаи Хефорс' },
    press: { label: 'Представлено на', items: ['Amazon', 'Ozon', 'DOM Method', 'MIROZDANIE'] }
  },
}
```

НЕ ТРОГАЙ Footer, Navbar.
