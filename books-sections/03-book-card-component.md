# Блок 3: Компонент BookCard (переиспользуемый)

**Создать:** src/components/books/BookCard.astro

Это ОДИН компонент который используется для каждой книги.
НЕ создавай отдельные компоненты для каждой книги.

## Props

```typescript
interface Props {
  chip: string
  title: string
  paragraphs: string[]
  meta: string[]
  buyButton: { text: string; url: string }
  cover: { src: string; alt: string }
}
```

## Точные классы из source-DOM.html (строки 6647–6713):

Карточка: class="books-product-card fade-in"
Chip: class="book-domain-chip mb-4"
H2: class="font-messiri text-4xl md:text-5xl text-dom-graphite mb-4"
Мета-строка: class="books-book-meta mb-6"
Мета-элемент: class="books-book-meta-point"
Мета-разделитель: class="books-book-meta-sep" (текст: •)
Кнопка: class="inline-flex items-center justify-center book-submit-btn !no-underline"
Обложка frame: class="books-book-cover-frame"
Обложка img: class="books-book-cover"
Grid: grid-cols-1 lg:grid-cols-12, текст lg:col-span-7, обложка lg:col-span-5

Кнопка "Купить" — внешняя ссылка: <a> с rel="noopener noreferrer" target="_blank"

НЕ ТРОГАЙ Footer, Navbar.
