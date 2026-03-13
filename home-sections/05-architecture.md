# Секция 5: Architecture — «Архитектура метода DOM»

**Источник:** source-DOM.html, строки 5309–5388

**Создать файл:** src/components/sections/ArchitectureSection.astro

## Что на экране
- Заголовок H2: "АРХИТЕКТУРА МЕТОДА DOM"
- Подзаголовок: "Два дома. Шесть граней. Одна целостная жизнь."
- Описание: "Когда внутренний и внешний контуры человека синхронизированы..."
- Левый блок — "Внешний Дом" (H3) / "ПРОЯВЛЕННАЯ ЖИЗНЬ": D — Деньги, O — Отношения, M — Ментальное здоровье
- Центр — диаграмма-звезда (canvas) с 6 гранями и словом "ЛЮБОВЬ" в центре
- Правый блок — "Внутренний Дом" (H3) / "ОСНОВА ЛИЧНОСТИ": D — Душа/Дух, O — Осознанность, M — Мировоззрение
- Итоговая цитата курсивом + обычный текст
- Кнопка CTA: "ПЕРЕЙТИ В РАЗДЕЛ «О МЕТОДЕ»" → /ru/method/

## Props
```typescript
interface Props {
  title: string
  subtitle: string
  description: string
  outerHouse: { title: string; label: string; description: string; items: Array<{ letter: string; name: string; desc: string }> }
  innerHouse: { title: string; label: string; description: string; items: Array<{ letter: string; name: string; desc: string }> }
  closingQuote: string
  closingText: string
  cta: { text: string; url: string }
}
```

## Особенность
Диаграмма-звезда рисуется на Canvas через JS (функция drawMethodStar в source-DOM.html после строки 10087). Перенеси эту функцию в <script> тег компонента. Canvas id="starCanvas".

## Данные
Добавь в homePageData.architecture.

## После выполнения
Добавь компонент в src/pages/ru/index.astro в правильном порядке (секция 5 из 12). Импортируй данные из homePageData. Проверь визуально.
