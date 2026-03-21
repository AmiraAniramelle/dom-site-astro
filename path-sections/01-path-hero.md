# Блок 1: Заголовок Карты Пути (строки 5784–5793)

**Создать:** src/components/path/PathHero.astro

## Что на экране
- Фон: bg-dom-beige с futuristic-grid
- H1: "Карта Пути DOM"
- Подзаголовок: описание что DOM — система из 6 граней, два дома

## Props
```typescript
interface Props {
  title: string
  subtitle: string
}
```

## Данные для path.ts
```typescript
export const pathPageData = {
  seo: {
    title: 'Карта Пути DOM — 6 направлений трансформации | DOM',
    description: 'Деньги, Отношения, Ментальное здоровье, Душа, Осознанность, Мировоззрение. Выберите своё направление.',
    canonicalUrl: '/ru/path/',
  },
  hero: {
    title: 'Карта Пути DOM',
    subtitle: '...',  // скопируй текст из source-DOM.html
  },
}
```

## Мобильная версия
- H1: clamp(1.6rem, 7vw, 2.2rem), text-align: center
- Подзаголовок: 14px, text-align: center
- padding: pt-12 pb-6

## После выполнения
Обнови path/index.astro — импортируй компонент и данные.
