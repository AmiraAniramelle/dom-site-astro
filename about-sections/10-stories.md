# Блок 10: Истории людей (строки 6411–6420)

**Создать:** src/components/about/AboutStories.astro

## Что на экране
- Светлая карточка
- H2: "Истории людей"
- Карточки с отзывами/историями

## Props
```typescript
interface Props {
  title: string
  stories: Array<{ name: string; text: string; photo?: string }>
}
```

НЕ ТРОГАЙ Footer, Navbar.
