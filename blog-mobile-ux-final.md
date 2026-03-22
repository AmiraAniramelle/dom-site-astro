# ТЗ: Мобильная версия блога — все страницы

> Прочитай DOM-Design-System.md перед выполнением.
> НЕ МЕНЯТЬ ДЕСКТОП. НЕ ТРОГАЙ Footer, Navbar.
> ВСЕ изменения ТОЛЬКО внутри @media (max-width: 768px).

---

## Страница списка /ru/blog/

### Hero
- H1 "Блог DOM": clamp(1.8rem, 8vw, 2.4rem), text-align: center
- Золотая линия: w-16
- Подзаголовок: 14px, text-align: center

### Фильтры
- Все 5 фильтров в столбик (grid-cols-1), gap: 8px
- Каждый select: w-full, py-3, px-4, rounded-xl,
  border border-dom-gold/20, font-size: 14px
- Label: font-size: 10px, uppercase, text-dom-goldDark
- Подсказка "Категория = сфера жизни..." — скрыть (hidden)
- Вся панель: padding 12px, bg-dom-beige/30, rounded-2xl, mb-4

### Счётчик
- font-size: 13px, mb-3

### Карточки статей
- Одна колонка (grid-cols-1), gap: 12px
- Обложка: h-44, w-full, rounded-t-2xl
- Badge (Статья/Книга): font-size: 10px, px-3 py-1
- Дата: font-size: 11px
- Заголовок: font-size: 1.1rem, normal-case (не uppercase!), mb-2
- Excerpt: font-size: 13px, line-clamp-2
- Теги: font-size: 10px, максимум 2 штуки
- Вся карточка: rounded-2xl

### Кнопка "Показать ещё"
- w-full, py-3, mt-4

---

## Страница статьи /ru/blog/[slug]/

### Кнопка назад
- font-size: 12px, mb-4
- Текст: "← К списку"

### Обложка
- h-48, w-full, rounded-xl
- Badge: font-size: 10px

### Мета (дата + время)
- font-size: 12px, mb-2

### Заголовок H1
- clamp(1.5rem, 7vw, 2rem), normal-case
- mb-3

### Теги
- font-size: 10px, gap: 6px, mb-4
- flex-wrap, показать все

### Текст статьи
- font-size: 14px
- line-height: 1.75
- Картинки внутри: w-full, rounded-xl, my-3
- Цитаты: border-l-3 border-dom-gold, pl-4, font-size: 13px, italic

### Блок "Связанный продукт"
- Карточка: p-4, rounded-xl
- Заголовок: font-size: 1.1rem
- Кнопка: w-full

### Блоки "Похожие" и "Та же категория"
- Одна колонка (grid-cols-1), gap: 3
- Карточка: компактная — название + дата, без картинки
- font-size: 13px

### CTA кнопка
- w-full, mt-6

---

## Поп-ап WelcomePopup на мобильном

- Одна колонка — портрет СКРЫТЬ (hidden)
- Модальное окно: mx-3, mt-8, rounded-2xl
- max-height: 85vh, overflow-y: auto
- Заголовок: clamp(1.3rem, 6vw, 1.6rem)
- Описание: font-size: 13px
- Поля ввода: в столбик, w-full, font-size: 14px
- Кнопка: w-full
- Кнопка X: w-8 h-8, top-3 right-3
- Дисклеймер: font-size: 10px

---

## Общие правила (все страницы блога)

### Шрифты
- Заголовки: font-messiri (Cinzel RUS by Lyajka)
- Текст: font-montserrat (Montserrat)

### Размеры (мобильный)
- H1: clamp(1.8rem, 8vw, 2.4rem)
- H2: clamp(1.5rem, 7vw, 2rem)
- H3: clamp(1.3rem, 6vw, 1.6rem)
- H4: clamp(1.1rem, 5vw, 1.3rem)
- Основной текст: 14px
- Eyebrow: 11px
- Кнопки: 13px

### Отступы
- Боковые: px-4 (16px)
- Между блоками: 20px
- Секция padding: pt-8 pb-10

### Запрещено
- zoom
- text-overflow: ellipsis
- overflow: hidden как костыль
- Менять десктопную версию
- Трогать Footer, Navbar

---

## Выпадающее меню навбара на мобильном

Меню "Блог и наука" и "Отзывы" с подфильтрами:
- На мобильном: подменю раскрывается по нажатию (не hover)
- Пункты: font-size: 14px, py-3, px-4
- Активный пункт: text-dom-gold, font-weight: 600
