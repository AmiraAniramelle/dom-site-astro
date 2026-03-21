# Блок 2: Внешний DOM (строки 5796–5844)

**Создать:** src/components/path/PathExternalHouse.astro

## Что на экране
- H2: "Внешний DOM"
- Подзаголовок: "ПРОЯВЛЕННАЯ ЖИЗНЬ"
- 3 карточки направлений (белый фон, скруглённые, hover-эффект):

  1. "Деньги" (D) — описание + кнопка "Войти" → /ru/path/money/
  2. "Отношения" (O) — описание + иконка моста + кнопка "Войти" → /ru/path/relations/
  3. "Ментальное здоровье" (M) — описание + кнопка "Войти" → /ru/path/mental/

- Каждая карточка кликабельная целиком (ссылка)
- Hover: shadow увеличивается, border золотеет, заголовок золотеет

## Props
```typescript
interface Props {
  title: string
  subtitle: string
  items: Array<{
    letter: string
    name: string
    description: string
    url: string
    hasBridge?: boolean
    buttonText: string
  }>
}
```

## Данные для path.ts
```typescript
externalHouse: {
  title: 'Внешний DOM',
  subtitle: 'ПРОЯВЛЕННАЯ ЖИЗНЬ',
  items: [
    { letter: 'D', name: 'Деньги', description: '...', url: '/ru/path/money/', buttonText: 'Войти' },
    { letter: 'O', name: 'Отношения', description: '...', url: '/ru/path/relations/', hasBridge: true, buttonText: 'Войти' },
    { letter: 'M', name: 'Ментальное здоровье', description: '...', url: '/ru/path/mental/', buttonText: 'Войти' },
  ]
}
```

## Классы из оригинала (копировать точно)
Карточка: `bg-white p-10 rounded-2xl border border-dom-gold/25 hover:shadow-2xl hover:border-dom-gold transition-all duration-500 flex flex-col items-center text-center group cursor-pointer`
Кнопка: `px-8 py-3 border border-dom-graphite/20 text-dom-graphite rounded hover:bg-dom-graphite hover:text-white transition w-full font-medium uppercase tracking-wider text-xs`

## Мобильная версия
- Карточки в одну колонку, gap: 12px
- Карточка: padding 20px, text-align center
- Кнопка: w-full

## После выполнения
Добавь в path/index.astro после PathHero.
