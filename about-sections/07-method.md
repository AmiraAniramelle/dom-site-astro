# Блок 7: Метод DOM (строки 6335–6352)

**Создать:** src/components/about/AboutMethod.astro

## Что на экране
- Светлая карточка
- H2: "Метод DOM"
- Два направления: "Внешний дом" и "Внутренний дом" с описаниями

## Props
```typescript
interface Props {
  title: string
  houses: Array<{ title: string; description: string }>
  cta?: { text: string; url: string }
}
```

НЕ ТРОГАЙ Footer, Navbar.
