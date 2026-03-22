# Правила для страницы «Отзывы»

> Файл-источник: source-DOM/source-DOM.html, строки 5919–6113
> Страница: src/pages/ru/reviews.astro
> Данные отзывов: src/content/reviews/ (.md файлы — как блог)
> Конфигурация: src/data/pages/reviews.ts

## Архитектура

Отзывы хранятся как .md файлы с frontmatter в Content Collection.
3 типа отзывов = 3 блока на странице.
Фильтрация на клиенте через JS — без перезагрузки (как блог).

## Frontmatter каждого отзыва:
```yaml
type: "video"                    # video | story | telegram
title: "Отзыв Татьяны Шалютиной"
name: "Татьяна Шалютина"         # имя автора
city: "Курагино"                 # город
role: "Закройщик-портной"        # профессия (необязательно)
categories: ["parents", "book"]  # фильтры (массив)
excerpt: "Краткое описание"
date: "2026-01-15"

# Только для video:
youtubeId: "dQw4w9WgXcQ"        # ID видео с YouTube
thumbnail: "/images/reviews/video/thumb-01.jpg"

# Только для story:
photo: "/images/reviews/stories/tatyana.jpg"
highlight: "Я так рада, что это все происходит со мной"

# Только для telegram (файлы кладите в public/images/reviews/telegram/ — см. README там):
screenshot: "/images/reviews/telegram/telegram-01.png"
telegramLink: "https://t.me/channel/123"  # необязательно
```

## Фильтры отзывов (14 шт — configurable):
- all — Все темы
- awareness — Осознания и впечатления
- male-female — Отношения. Мужчина/Женщина
- system-thinking — Системное мышление
- parents — Отношения с родителями
- colleagues — Отношения с коллегами, друзьями и социумом
- money — Деньги. Реализация себя
- money-rod — Отношения с родом
- money-below — Позиция «ниже» денег
- money-rules — Правила и порядки системы денег
- health — Здоровье физическое и психическое
- children — Отношения с детьми
- depression — Депрессия. Тревожность
- book — Книга «Гармония в Семье»

## Подфильтры в навбаре "Отзывы":
system-thinking, male-female, money, depression
+ "Смотреть все отзывы"

## Правила
1. ВСЕ данные через props и Content Collections.
2. Фильтры и их иконки — в reviews.ts (configurable).
3. Добавить отзыв = создать .md файл с frontmatter. Всё.
4. Фильтрация на клиенте — без перезагрузки.
5. Следуй DOM-Design-System.md.
6. НЕ ТРОГАЙ Footer, Navbar (кроме выпадающего меню отзывов).

## SEO:
- title: "Отзывы участников DOM — Истории трансформации | DOM"
- description: "Реальные отзывы участников метода DOM: видео, истории, отзывы из Telegram-чатов."
- Schema.org: WebPage + Review для каждого отзыва
- Canonical: /ru/reviews/
