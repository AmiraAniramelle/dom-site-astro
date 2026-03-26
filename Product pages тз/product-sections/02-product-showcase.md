# Блок 2: ProductShowcase — Видео-презентация + мета-полоска

**Создать:** src/components/products/ProductShowcase.astro

## Что на экране
- Тёмная карточка "Видео-презентация программы" с названием
- Мета-полоска: Формат | Материалы (N модулей) | Доступ
- Кнопка "Подать заявку" (скролл к форме внизу)

## Точные классы:
Видео-блок: class="product-video-shell mb-4"
Внутри: class="product-video-inner"
Chip: class="product-video-chip inline-block mb-4"
Мета-полоска: class="product-meta-strip"
Разделитель: class="hidden md:block w-px h-12 bg-dom-gold/35"
Кнопка CTA: class="w-full md:w-auto px-8 py-3 bg-dom-gold text-white rounded-xl font-montserrat font-semibold text-base hover:bg-dom-goldDark transition shadow-[0_10px_24px_rgba(166,120,50,0.32)]"

## Props
```typescript
interface Props {
  title: string
  modulesCount: number
  format: string        // "Онлайн"
  access: string        // "Сразу после заявки"
}
```

НЕ ТРОГАЙ Footer, Navbar.
