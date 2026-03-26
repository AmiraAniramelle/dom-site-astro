# Блок 5: ProductResults — Результаты + Модули

**Создать:** src/components/products/ProductResults.astro

## Что на экране
- Большая карточка с двумя колонками
- Левая: "Что вы получите:" — список результатов
- Правая: "Как это работает:" — список модулей (название + описание)

## Точные классы:
Карточка: class="product-results-card rounded-[2.5rem] p-10 md:p-16 mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 relative overflow-hidden"
Результат: список <ul class="space-y-4">
Модуль: название + описание

## Props
```typescript
interface Props {
  results: string[]
  modules: Array<{ name: string; desc: string }>
}
```

НЕ ТРОГАЙ Footer, Navbar.
