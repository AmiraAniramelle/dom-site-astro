# Блок 8: Книги автора (строки 6353–6385)

**Создать:** src/components/about/AboutBooks.astro

## Что на экране
- Светлая карточка
- H2: "Книги автора"
- 3 книги: Гармония в семье, Расшифровка генома человечности, Библиотека DOM
- Каждая: обложка, H4 название, описание

## Props
```typescript
interface Props {
  title: string
  books: Array<{
    title: string
    description: string
    cover: string
    url?: string
  }>
}
```

НЕ ТРОГАЙ Footer, Navbar.
