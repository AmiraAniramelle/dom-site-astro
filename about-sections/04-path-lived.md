# Блок 4: Путь который прожит (строки 6259–6276)

**Создать:** src/components/about/AboutPathLived.astro

## Что на экране
- Светлая карточка
- Eyebrow: "Роль Анны Камаллаи Хефорс: прожитый опыт метода DOM"
- Слева: фото
- Справа: H2 "Путь, который прожит, а не выучен" + текст

## Props
```typescript
interface Props {
  eyebrow: string
  title: string
  text: string
  image: { src: string; alt: string }
}
```

НЕ ТРОГАЙ Footer, Navbar.
