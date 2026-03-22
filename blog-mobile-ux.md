# ТЗ: Мобильная версия страницы «Блог и наука»

НЕ МЕНЯТЬ ДЕСКТОП. НЕ ТРОГАЙ Footer, Navbar.
ВСЕ изменения ТОЛЬКО внутри @media (max-width: 768px).

---

## Страница списка (/ru/blog/)

### Hero
- H1 "Блог DOM": clamp(1.8rem, 8vw, 2.4rem), text-align: center
- Подзаголовок: 14px, text-align: center, px-2
- Золотая линия: оставить, w-16

### Фильтры
СЕЙЧАС: 5 фильтров в ряд — не влезает на мобильном.

СДЕЛАТЬ:
- Все 5 фильтров в столбик (grid-cols-1), gap: 8px
- Каждый select: w-full, py-3, px-4, rounded-xl, 
  border border-dom-gold/20, font-size: 14px
- Поиск (input): w-full, py-3, px-4, rounded-xl
- Label над каждым фильтром: font-size: 10px, 
  uppercase, text-dom-goldDark, mb-1
- Eyebrow "НАВИГАЦИЯ ПО БЛОГУ": font-size: 10px
- Подсказка про категорию/тип/теги: скрыть на мобильном (hidden)
- Вся панель фильтров: padding 16px, 
  bg-dom-beige/30 rounded-2xl mb-6

### Счётчик "Материалов: N"
- font-size: 13px, text-align: left, mb-4

### Сетка карточек
- Одна колонка (grid-cols-1)
- gap: 16px
- Карточка статьи на мобильном:
  * Картинка: h-44 (не h-56), w-full, rounded-t-2xl
  * Badge типа (Статья/Пост): font-size: 10px, px-3 py-1
  * Дата + время чтения: font-size: 11px
  * Заголовок: font-size: 1.1rem, mb-2
  * Excerpt: font-size: 13px, line-clamp-2 (не 3)
  * Теги (pills): font-size: 10px, показывать максимум 2

### Пустое состояние
- text-align: center, font-size: 14px, py-8

---

## Страница статьи (/ru/blog/[slug]/)

### Кнопка назад
- font-size: 12px, mb-6
- "← К списку" (короче чем на десктопе)

### Обложка
- h-48 (не h-72), w-full, rounded-xl
- Badge типа: font-size: 10px

### Заголовок
- H1: clamp(1.5rem, 7vw, 2rem)
- mb-3

### Мета (дата + время чтения)
- font-size: 12px, mb-3

### Теги
- font-size: 10px, gap: 6px, mb-6
- Показывать все (не обрезать)

### Текст статьи
- font-size: 15px (чуть больше чем 14 — для чтения длинных текстов)
- line-height: 1.8
- Картинки внутри статьи: w-full, rounded-xl, my-4
- Цитаты (blockquote): border-l-3 border-dom-gold, 
  pl-4, italic, font-size: 14px

### CTA кнопка (если есть)
- w-full, mt-8

---

## Общие правила мобильного блога

- px-4 (16px) боковые отступы
- Шрифт заголовков: font-messiri
- Шрифт текста: font-montserrat
- Между блоками: 16-20px
- overflow-wrap: break-word на заголовках
- Никаких горизонтальных скроллов

НЕ МЕНЯТЬ ДЕСКТОП. НЕ ТРОГАЙ Footer, Navbar.
