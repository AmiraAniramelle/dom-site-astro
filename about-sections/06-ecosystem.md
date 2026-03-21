# Блок 6: Основатель экосистемы DOM (строки 6303–6334)

**Создать:** src/components/about/AboutEcosystem.astro

## Что на экране
- Светлая карточка
- Фото слева
- H2: "Основатель экосистемы DOM"
- Описание + список достижений/элементов экосистемы

## Props
```typescript
interface Props {
  title: string
  description: string
  items: string[]
  image: { src: string; alt: string }
}
```

НЕ ТРОГАЙ Footer, Navbar.
