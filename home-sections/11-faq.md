# Секция 11: FAQ — «Часто задаваемые вопросы»

**Источник:** source-DOM.html, строки 5588–5664

**Создать файл:** src/components/sections/FaqSection.astro

## Что на экране
- Заголовок H2: "Часто задаваемые вопросы"
- Аккордеон: 6 вопросов с раскрывающимися ответами
- Первый вопрос раскрыт по умолчанию

## Props
```typescript
interface Props {
  title: string
  items: Array<{ question: string; answer: string }>
}
```

## Особенность
Аккордеон управляется JS (data-home-faq-toggle, aria-expanded). Перенеси в <script>.

Добавь JSON-LD Schema.org типа FAQPage — генерируй из массива items:
```html
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": items.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": { "@type": "Answer", "text": item.answer }
  }))
})}
</script>
```

## Данные
Добавь в homePageData.faq.

## После выполнения
Добавь компонент в src/pages/ru/index.astro в правильном порядке (секция 11 из 12). Импортируй данные из homePageData. Проверь визуально.
