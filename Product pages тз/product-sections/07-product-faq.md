# Блок 7: ProductFAQ — Частые вопросы

**Создать:** src/components/products/ProductFAQ.astro

## Что на экране
- H2: "Частые вопросы"
- Аккордеон: вопрос → клик → раскрывается ответ

## УСЛОВНЫЙ: показывать ТОЛЬКО если faq.length > 0

## Props
```typescript
interface Props {
  items: Array<{ q: string; a: string }>
}
```

Контейнер: class="mb-24 max-w-4xl mx-auto"

НЕ ТРОГАЙ Footer, Navbar.
