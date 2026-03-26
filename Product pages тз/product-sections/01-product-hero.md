# Блок 1: ProductHero

**Создать:** src/components/products/ProductHero.astro

## Что на экране
- Кнопка "← Назад к направлению"
- Большая карточка с тёплым фоном:
  - Tag badge (напр. "СИСТЕМНЫЙ МЕТОД РАБОТЫ С ДЕНЕЖНОЙ МАТРИЦЕЙ")
  - H1: название продукта
  - Описание с золотой полоской слева

## Точные классы из оригинала:
Кнопка назад: class="product-back-btn text-dom-goldDark hover:text-dom-graphite flex items-center text-sm font-bold uppercase tracking-widest mb-10 transition-colors"
Карточка: class="product-hero-card product-hero-linked rounded-[2rem] p-10 md:p-16 relative overflow-hidden"
Tag: class="text-xs font-bold uppercase text-white bg-dom-goldDark px-5 py-2 rounded-full inline-block mb-8 shadow-md tracking-widest"
H1: class="font-messiri text-5xl md:text-7xl text-dom-graphite mb-8 leading-tight"
Описание: class="text-xl md:text-2xl text-dom-graphite/80 font-montserrat leading-relaxed max-w-4xl font-light border-l-4 border-dom-gold pl-6"

## Props
```typescript
interface Props {
  title: string
  tag: string
  shortDesc: string
  backLink: { text: string; url: string }
}
```

НЕ ТРОГАЙ Footer, Navbar.
