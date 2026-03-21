# Блок 2: Автор книг (строки 6627–6645)

**Создать:** src/components/books/BooksAuthor.astro

## Что на экране
- Слева: H2 "Автор книг" + два параграфа текста
- Справа: тёмная карточка с золотым свечением + мокап книг
  Точные классы карточки: class="rounded-[2rem] overflow-hidden border border-dom-gold/28 bg-[linear-gradient(140deg,rgba(36,28,17,0.95),rgba(80,58,30,0.9))] shadow-[0_22px_46px_rgba(0,0,0,0.28)] p-6 md:p-8 min-h-[420px] flex items-center justify-center relative"
  Свечение внутри: class="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(217,179,114,0.26),transparent_48%)]"

## Props
```typescript
interface Props {
  title: string
  paragraphs: string[]
  mockupImage: { src: string; alt: string }
}
```

## Данные для books.ts:
```typescript
author: {
  title: 'Автор книг',
  paragraphs: [
    'Камаллая Хефорс создает книги как практические маршруты...',
    'Каждый текст продолжает экосистему DOM...'
  ],
  mockupImage: { src: '/dom-assets/DOM расширенная версия 2 градиент.png', alt: 'Mockup визуал книги DOM' }
}
```

НЕ ТРОГАЙ Footer, Navbar.
