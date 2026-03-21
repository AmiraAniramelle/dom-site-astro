# Секция 1: Архитектура Метода (строки 5699–5779)

**Создать файл:** src/components/method/MethodArchitecture.astro

## Что на экране

- Фон секции: класс method-page-bg (стили уже есть в global.css)
- Панель с закруглёнными углами (method-star-panel)
- Eyebrow: "Интерактивная модель"
- H1: "Архитектура Метода" (это единственный H1 на странице!)
- Подзаголовок: "Наведите курсор на звезду..."
- Слева: Canvas со звездой (id="starCanvas", 500x500) — интерактивная анимация
- Справа: три карточки-описания:
  - "Внешний DOM" (треугольник вниз) — D: Деньги, O: Отношения, M: Ментальное здоровье
  - "Внутренний DOM" (треугольник вверх) — D: Душа, O: Осознанность, M: Мировоззрение
  - "Любовь" — центральный элемент
- Под карточками: два блока "Внешний DOM" и "Внутренний DOM" с подробным описанием каждого направления (D, O, M)
- Блок "Системная логика" — текст о том как работает метод
- CTA: "Перейти к Карте пути DOM" → /ru/path/

## Props

```typescript
interface Props {
  eyebrow: string
  title: string  // H1!
  subtitle: string
  starCanvas: boolean  // включить canvas
  quickCards: Array<{ title: string; items: Array<{ letter: string; name: string }> }>
  houses: Array<{
    title: string
    subtitle: string
    triangleDirection: 'up' | 'down'
    items: Array<{ letter: string; name: string; desc: string }>
  }>
  systemLogic: { title: string; paragraphs: string[] }
  cta: { text: string; url: string }
}
```

## Особенность
Canvas-звезда рисуется функцией drawMethodStar() в JS (после строки 10087 в source-DOM.html). Перенеси эту функцию в <script> компонента.

## После выполнения
Обнови method.astro — импортируй компонент, передай данные из methodPageData.
