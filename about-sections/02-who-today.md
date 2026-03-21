# Блок 2: Кто она сегодня (строки 6230–6243)

**Создать:** src/components/about/AboutWhoToday.astro

## Что на экране
- Светлая карточка about-light-card
- Eyebrow: "Роль Анны Камаллаи Хефорс: автор и архитектор метода DOM"
- H2: "Кто она сегодня"
- 3 параграфа текста

## Props
```typescript
interface Props {
  eyebrow: string
  title: string
  paragraphs: string[]
}
```

## Точные классы:
Карточка: class="about-light-card rounded-[2.2rem] p-7 md:p-9"

НЕ ТРОГАЙ Footer, Navbar.
