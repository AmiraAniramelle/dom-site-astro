# Блок 8: Выпадающее меню отзывов в Навбаре

**Обновить:** Navbar — выпадающее меню при наведении на "Отзывы"

## Пункты меню:
- Системное мышление → /ru/reviews/?filter=system-thinking
- Мужчина и женщина → /ru/reviews/?filter=male-female
- Деньги → /ru/reviews/?filter=money
- Депрессия → /ru/reviews/?filter=depression
- Смотреть все отзывы → /ru/reviews/

## Данные (configurable в navbar.ts или reviews.ts):
```typescript
reviewsMenuFilters: [
  { id: 'system-thinking', label: 'Системное мышление' },
  { id: 'male-female', label: 'Мужчина и женщина' },
  { id: 'money', label: 'Деньги' },
  { id: 'depression', label: 'Депрессия' },
]
```

ОСТОРОЖНО С NAVBAR — не сломай существующую навигацию и меню блога.
