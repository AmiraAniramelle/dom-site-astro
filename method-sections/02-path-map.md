# Секция 2: Карта Пути DOM (строки 5785–5915)

**Создать файл:** src/components/method/MethodPathMap.astro

## Что на экране

- Фон: bg-dom-beige с futuristic-grid
- H2: "Карта Пути DOM"
- Подзаголовок о том что DOM — это система из 6 граней

**Блок "Внешний DOM"** (светлый фон):
- H3: "Внешний DOM"
- 3 карточки-направления (кликабельные, ведут на страницы path):
  - "Деньги" — описание + ссылка на /ru/path/money/
  - "Отношения" — описание + иконка моста + ссылка на /ru/path/relations/
  - "Ментальное здоровье" — описание + ссылка на /ru/path/mental/

**Блок "Внутренний DOM"** (тёмный фон bg-dom-graphite):
- H3: "Внутренний DOM" (белый текст)
- 3 карточки:
  - "Душа" → /ru/path/soul/
  - "Осознанность" + иконка моста → /ru/path/awareness/
  - "Мировоззрение" → /ru/path/worldview/

**Блок "Занять место в программе":**
- H3: "Занять место в программе"
- Текст + форма или CTA

## Props

```typescript
interface Props {
  title: string
  subtitle: string
  outerHouse: {
    title: string
    items: Array<{ title: string; desc: string; letter: string; url: string; hasBridge?: boolean }>
  }
  innerHouse: {
    title: string
    items: Array<{ title: string; desc: string; letter: string; url: string; hasBridge?: boolean }>
  }
  enrollBlock: {
    title: string
    text: string
    cta: { text: string; url: string }
  }
}
```

## После выполнения
Добавь в method.astro после MethodArchitecture.
