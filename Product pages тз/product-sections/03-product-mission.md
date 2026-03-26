# Блок 3: ProductMission — Миссия + Почему важно

**Создать:** src/components/products/ProductMission.astro

## Что на экране
- Две карточки рядом (grid 1 / 2 колонки)
- Левая (тёмная): "Миссия проекта" + текст
- Правая (светлая): "Почему это важно?" + текст

## Точные классы:
Сетка: class="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24"
Тёмная: class="product-dark-card p-10 md:p-12 rounded-[2rem] text-dom-graphite relative overflow-hidden"
H3 тёмная: class="font-messiri text-4xl text-dom-goldDark mb-6 relative z-10"
Светлая: class="product-light-card p-10 md:p-12 rounded-[2rem]"
H3 светлая: class="font-messiri text-4xl text-dom-graphite mb-6"

## Props
```typescript
interface Props {
  mission: string
  whyImportant: string
}
```

НЕ ТРОГАЙ Footer, Navbar.
