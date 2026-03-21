# Блок 5: Философия DOM (строки 6277–6302)

**Создать:** src/components/about/AboutPhilosophy.astro

## Что на экране
- Светлая карточка
- H2: "Философия DOM"
- 5 принципов в карточках: DOM внутри, Взрослая позиция, Структура + глубина, Любовь как состояние, Без догмы
- Каждый принцип: H4 заголовок + описание

## Props
```typescript
interface Props {
  title: string
  principles: Array<{ title: string; description: string }>
}
```

НЕ ТРОГАЙ Footer, Navbar.
