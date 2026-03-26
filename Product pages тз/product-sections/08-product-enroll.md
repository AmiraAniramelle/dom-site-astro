# Блок 8: ProductEnroll — Форма записи

**Создать:** src/components/products/ProductEnroll.astro

## Что на экране
- Левая часть: условия участия, цена, описание
- Правая часть: форма (имя, email, телефон/Telegram, чекбокс, кнопка)

## Точные классы:
Обёртка: class="product-enroll p-8 md:p-12 rounded-[2.2rem] relative overflow-hidden" id="product-enroll-block"
Сетка: class="grid grid-cols-1 lg:grid-cols-2 gap-10"
Карточка условий: class="bg-white/70 border border-dom-gold/25 rounded-3xl p-6 md:p-8"
Карточка формы: class="bg-white/75 border border-dom-gold/25 rounded-3xl p-6 md:p-8"
Цена: class="text-5xl font-messiri text-dom-graphite mb-2"
Кнопка: class="w-full mt-6 py-4 bg-gold-gradient text-white font-messiri text-3xl tracking-wide rounded-2xl hover:brightness-105 transition-all shadow-[0_12px_26px_rgba(166,120,50,0.34)]"

## Props
```typescript
interface Props {
  title: string
  shortDesc: string
  price: string
  tag: string
  productSlug: string
}
```

НЕ ТРОГАЙ Footer, Navbar.
