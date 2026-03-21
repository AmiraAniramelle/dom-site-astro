# Блок 11: Финальный CTA (строки 6421–6437)

**Создать:** src/components/about/AboutFinalCta.astro

## Что на экране
- ТЁМНАЯ карточка (bg-dom-graphite) — как Внутренний DOM на карте пути
- class="bg-dom-graphite rounded-[2.4rem] p-8 md:p-11 border border-dom-gold/35 shadow-2xl text-center relative overflow-hidden"
- Заголовок, описание, CTA кнопка

## Props
```typescript
interface Props {
  title: string
  description: string
  cta: { text: string; url: string }
}
```

## Важно
Используй те же стили тёмной карточки что в PathInternalHouse — 
path-internal-house-card класс для фона.

НЕ ТРОГАЙ Footer, Navbar.
