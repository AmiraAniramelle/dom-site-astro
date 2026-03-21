# ТЗ: Мобильная оптимизация страницы «Об авторе»

НЕ ТРОГАЙ: Footer, Navbar, десктопную версию, данные.
Все изменения ТОЛЬКО для экранов до 768px.

---

## Главный принцип

На мобильном УБРАТЬ все карточки-обёртки (about-light-card).
Контент идёт свободно на фоне страницы — чисто, без рамок,
без скруглений. Карточки ограничивают ширину и создают тесноту.

В global.css добавь:

```css
@media (max-width: 768px) {
  .about-light-card {
    background: transparent !important;
    border: none !important;
    border-radius: 0 !important;
    padding: 0 !important;
    box-shadow: none !important;
  }
  
  .about-stat-card {
    padding: 12px 16px !important;
  }
}
```

---

## Блок 1: Hero

- Портрет: показать над текстом, max-width: 280px, 
  mx-auto, rounded-2xl, margin-bottom: 20px
- H1: clamp(1.8rem, 7vw, 2.4rem), text-align: center
- Описание: font-size: 15px, text-align: center
- Кнопки: flex-col, w-full, gap: 10px
- Stat-карточки: grid-cols-2, gap: 10px, 
  компактные — число font-size: 1.5rem, 
  подпись font-size: 12px

---

## Блоки 2–4: Текстовые (Кто она, Филантропия, Путь)

- Без карточки-обёртки (уже убрана через CSS выше)
- Eyebrow: font-size: 10px, text-align: center
- Заголовок H2/H3: clamp(1.4rem, 6vw, 1.8rem), 
  text-align: center, margin-bottom: 12px
- Текст: font-size: 14px, line-height: 1.7, 
  text-align: left
- Картинки: w-full, rounded-xl, margin-bottom: 16px,
  показывать НАД текстом (order: -1)
- Между блоками: разделитель — тонкая линия 
  border-bottom: 1px solid rgba(217,179,114,0.15) 
  и padding-bottom: 24px, margin-bottom: 24px

---

## Блок 5: Философия DOM

- Заголовок: по центру
- 5 принципов: в столбик, gap: 16px
- Каждый принцип: 
  * H4: font-size: 1.1rem, font-weight: 600
  * Описание: font-size: 14px
  * Между принципами: лёгкий разделитель

---

## Блок 6: Основатель экосистемы

- Фото: w-full, rounded-xl, над текстом
- Заголовок: clamp(1.4rem, 6vw, 1.8rem), text-align: center
- Текст: font-size: 14px
- Список достижений: простой, без вложенных карточек

---

## Блок 7: Метод DOM

- Два направления (Внешний/Внутренний): в столбик
- Каждое: H4 + описание, разделитель между ними

---

## Блок 8: Книги автора

- 3 книги: в столбик, gap: 20px
- Каждая: обложка (w-full, max-height: 200px, 
  object-fit: cover, rounded-xl) + название + описание
- Не в карточках — просто контент с разделителями

---

## Блок 9: Приложение DOM

- Скриншот: w-full, rounded-xl
- Текст по центру
- Кнопка CTA: w-full

---

## Блок 10: Истории людей

- Карточки отзывов: в столбик
- Каждая: фото маленькое (w-12 h-12 rounded-full) 
  рядом с именем, текст под ним

---

## Блок 11: Финальный CTA (тёмная карточка)

- Тёмную карточку ОСТАВИТЬ (она выглядит хорошо)
- Но уменьшить padding: p-6
- Заголовок: clamp(1.4rem, 6vw, 1.8rem)
- Кнопка: w-full

---

## Общие правила мобильной версии

- Боковые отступы: px-4 (16px)
- Между блоками: 24px (разделитель + отступы)
- Основной текст: 14px
- Декоративные орнаменты: скрыть на мобильном (hidden)
- Золотое свечение: скрыть на мобильном (hidden)
- Никаких overflow хаков, zoom, ellipsis

НЕ ТРОГАЙ: Footer, Navbar, десктопную версию.
