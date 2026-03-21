# Блок 3: Филантропия (строки 6244–6258)

**Создать:** src/components/about/AboutPhilanthropy.astro

## Что на экране
- Светлая карточка
- Eyebrow: "Роль Анны Камаллаи Хефорс: филантропическая миссия"
- Слева: H2 "Филантропия, которая не про образ, а про жизнь" + текст
- Справа: фото

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
