# Дизайн-система DOM — Единый стандарт для всех страниц

> Этот документ — закон. Все страницы должны соответствовать 
> этим правилам. Cursor должен получать этот файл при работе 
> над ЛЮБОЙ страницей.

---

## 1. ШРИФТЫ

Заголовки H1–H4: `font-messiri` (Cinzel RUS by Lyajka)
Весь остальной текст: `font-montserrat` (Montserrat)

Никаких других шрифтов на сайте. Никогда.

---

## 2. ЦВЕТА

### Основная палитра
- Графитовый: `dom-graphite` (#38332d) — тёмный фон, основной текст
- Золотой: `dom-gold` (#d9b372) — акценты, кнопки, иконки
- Тёмное золото: `dom-goldDark` (#a4814a) — hover, eyebrow
- Бежевый: `dom-beige` (#f4e4ce) — светлый фон
- Белый: white — карточки, чистый фон

### Правила применения
- Текст на светлом фоне: `text-dom-graphite`
- Текст на тёмном фоне: `text-dom-beige` или `text-white`
- Eyebrow/labels: `text-dom-gold` или `text-dom-goldDark`
- Ссылки: `text-dom-gold hover:text-dom-goldDark`
- Разделители: `border-dom-gold/20` или `border-dom-gold/30`

### Градиенты
- Золотой (кнопки): `bg-gold-gradient` = linear-gradient(135deg, #d9b372, #a4814a)
- Графитовый (тёмные блоки): linear-gradient(180deg, #38332d, #2f2923)
- Тёплый светлый (карточки): linear-gradient(145deg, rgba(255,252,244,0.98), rgba(246,233,203,0.92))

---

## 3. КНОПКИ — 5 типов

### Кнопка 1: Главная CTA (золотая заливка)
Когда: главные действия — «Начать путь», «Открыть программу», «Отправить заявку»
```
class="bg-gold-gradient text-white py-4 px-8 rounded-xl 
font-montserrat font-bold uppercase tracking-[0.12em] text-sm 
shadow-[0_12px_28px_rgba(217,179,114,0.36)] 
hover:shadow-[0_16px_36px_rgba(217,179,114,0.45)] 
transition-all duration-300 block text-center w-full md:w-auto"
```

### Кнопка 2: Второстепенная (контурная на светлом)
Когда: альтернативные действия — «Подробнее», «Структура метода»
```
class="border border-dom-graphite/20 text-dom-graphite py-3 px-8 
rounded-xl font-montserrat font-semibold uppercase tracking-[0.08em] text-xs 
hover:bg-dom-gold/10 hover:border-dom-gold/50 hover:text-dom-goldDark 
transition-all duration-300 block text-center w-full md:w-auto"
```

### Кнопка 3: Контурная на тёмном фоне
Когда: действия на тёмных блоках — «Подробнее», «Войти»
```
class="border border-dom-gold/50 text-dom-gold py-3 px-6 
rounded font-montserrat font-medium text-sm 
hover:bg-dom-gold hover:text-white transition-all duration-300 
block text-center w-full"
```

### Кнопка 4: Текстовая ссылка
Когда: навигация — «← Вернуться», «Читать далее»
```
class="text-dom-goldDark hover:text-dom-graphite 
font-montserrat font-bold uppercase tracking-wider text-sm 
transition-colors inline-flex items-center"
```

### Кнопка 5: Внешняя ссылка (покупка)
Когда: переход на внешний сайт — «Купить на Ozon», «App Store»
```
class="inline-flex items-center justify-center bg-gold-gradient 
text-white py-3 px-8 rounded-xl font-montserrat font-semibold 
uppercase tracking-[0.08em] text-xs shadow-lg 
hover:shadow-xl transition-all duration-300"
```
Обязательно: `target="_blank" rel="noopener noreferrer"`

### Правила для всех кнопок
- На мобильном: ВСЕГДА `w-full`
- Две кнопки рядом (десктоп): `flex flex-row gap-4`
- Две кнопки рядом (мобильный): `flex flex-col gap-3`
- Всегда `transition-all duration-300`

---

## 4. РАССТОЯНИЯ И РИТМ

### Десктоп — вертикальный ритм

| Между чем | Отступ | Класс |
|-----------|--------|-------|
| Navbar → первый блок | 80px | `pt-20` |
| Navbar → блок с кнопкой «Назад» | 48px | `pt-12` |
| Большие секции (Hero → Контент) | 64px | `mb-16` |
| Связанные блоки (Заголовок → Карточки) | 40px | `mb-10` |
| Карточки в сетке | 32px | `gap-8` |
| Параграфы текста | 24px | `mb-6` |
| Eyebrow → Заголовок | 12px | `mb-3` |
| Заголовок → Подзаголовок | 16px | `mb-4` |
| Подзаголовок → Контент | 24px | `mb-6` |
| Последний блок → Footer | 96px | `pb-24` |

### Мобильный — вертикальный ритм

| Между чем | Отступ | Класс |
|-----------|--------|-------|
| Navbar → первый блок | 32px | `pt-8` |
| Большие секции | 32px | `mb-8` |
| Связанные блоки | 24px | `mb-6` |
| Карточки в сетке | 16px | `gap-4` |
| Параграфы текста | 16px | `mb-4` |
| Eyebrow → Заголовок | 8px | `mb-2` |
| Заголовок → Подзаголовок | 12px | `mb-3` |
| Последний блок → Footer | 48px | `pb-12` |

### Горизонтальный ритм (ВЕЗДЕ одинаковый)
- Контейнер: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- Мобильный: `px-4` (16px с каждой стороны)
- Никогда не шире max-w-6xl (1152px)

---

## 5. КАРТОЧКИ — 4 типа

### Карточка 1: Светлая
```
class="bg-white rounded-2xl border border-dom-gold/25 
p-8 md:p-10 shadow-[0_10px_24px_rgba(126,91,35,0.1)]"
```

### Карточка 2: Тёплая
```
class="bg-[linear-gradient(145deg,rgba(255,252,244,0.98),rgba(246,233,203,0.92))] 
rounded-2xl border border-dom-gold/22 p-8 
hover:border-dom-gold/50 hover:shadow-xl transition-all duration-300"
```

### Карточка 3: Тёплая выделенная (флагман)
```
class="bg-[linear-gradient(150deg,#fff7e8_0%,#f5e2bc_58%,#f1d8aa_100%)] 
rounded-2xl border-2 border-dom-gold/50 p-10 
shadow-[0_20px_44px_rgba(126,91,35,0.18)]"
```

### Карточка 4: Тёмная
```
class="bg-white/5 backdrop-blur-md rounded-2xl 
border border-dom-gold/20 p-8 
hover:bg-white/10 hover:border-dom-gold/50 transition-all duration-300"
```

### Одинаковая высота карточек в ряду
```
Сетка: grid + gap-8
Ячейка: flex
Карточка: flex flex-col h-full
Описание: flex-grow
Кнопка: mt-auto
```

### Карточки на мобильном
- Одна колонка
- Обёртки убираются (transparent, no border)
- Внутренние карточки: padding 20px

---

## 6. EYEBROW (надпись над заголовком)

Везде одинаковый:
```
class="font-montserrat text-[11px] uppercase tracking-[0.12em] 
text-dom-goldDark mb-2 block"
```
На тёмном фоне: `text-dom-gold/85`

---

## 7. РАЗДЕЛИТЕЛИ

Золотая линия: `class="w-20 h-1 bg-dom-gold mx-auto mb-8"`

Badge/Chip: 
```
class="inline-block px-6 py-2 rounded-full border border-dom-gold/30 
bg-white/80 font-montserrat text-sm text-dom-graphite"
```

Между stat-числами: `class="w-px h-8 bg-dom-gold/20"`

Между блоками текста: `class="border-b border-dom-gold/15 pb-6 mb-6"`

---

## 8. STAT-КАРТОЧКИ

```
class="rounded-2xl p-5 md:p-6 border border-dom-gold/45 
bg-[linear-gradient(145deg,rgba(255,255,255,0.97),rgba(246,234,205,0.92))] 
shadow-[0_10px_24px_rgba(126,91,35,0.12)] 
hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(126,91,35,0.2)] 
transition-all duration-300"
```
Число: `font-messiri text-4xl md:text-5xl text-dom-goldDark leading-none mb-2`
Подпись: `font-montserrat text-base md:text-lg text-dom-graphite/82`

---

## 9. КАРТИНКИ

- Все: `<img>` (не `<Image />`)
- Портреты: `rounded-[2rem] object-cover border border-dom-gold/25`
- Обложки книг: `rounded-xl object-cover`
- Продуктовые: `rounded-xl object-cover h-48 w-full`
- loading="lazy" везде кроме Hero (Hero: loading="eager")
- Alt обязательный и осмысленный

---

## 10. АНИМАЦИИ

Разрешённые:
- Hover: `transition-all duration-300`
- Ссылки: `transition-colors`
- Появление: `fade-in`

Запрещённые:
- zoom, transform: scale() на контейнерах
- CSS animations на тексте

---

## 11. ФОРМЫ

```
class="w-full rounded-xl border border-dom-gold/20 bg-white 
px-6 py-4 font-montserrat text-lg text-dom-graphite 
placeholder:text-dom-graphite/30 outline-none 
focus:border-dom-gold/60 focus:ring-2 focus:ring-dom-gold/20"
```
На мобильном: столбик, w-full, font-size: 15px

---

## 12. КРУГИ С БУКВАМИ (D, O, M)

На светлом:
```
class="w-16 h-16 rounded-full bg-dom-beige/50 
flex items-center justify-center text-dom-gold 
text-3xl font-messiri"
```

На тёмном:
```
class="w-16 h-16 rounded-full bg-dom-gold/10 
border border-dom-gold/30 flex items-center justify-center 
text-dom-gold text-3xl font-messiri 
group-hover:bg-dom-gold group-hover:text-white transition-all"
```

---

## 13. СЕТКИ

- Продукты: `grid grid-cols-1 md:grid-cols-2 gap-8`
- Направления: `grid grid-cols-1 md:grid-cols-3 gap-6`
- Контент с картинкой: `grid grid-cols-1 lg:grid-cols-12 gap-8`
- Stats: `grid grid-cols-2 md:grid-cols-4 gap-4`
- Нечётное число карточек: последняя `md:col-span-2`

---

## 14. РАЗМЕРЫ ШРИФТОВ

### Десктоп
- H1: `text-5xl md:text-6xl` (48–60px)
- H2: `text-4xl md:text-5xl` (36–48px)
- H3: `text-3xl md:text-4xl` (30–36px)
- H4: `text-2xl` (24px)
- Текст: `text-base md:text-lg` (16–18px)
- Eyebrow: `text-xs` (12px)
- Кнопки: `text-sm` (14px)

### Мобильный
- H1: `clamp(1.8rem, 8vw, 2.4rem)`
- H2: `clamp(1.5rem, 7vw, 2rem)`
- H3: `clamp(1.3rem, 6vw, 1.6rem)`
- H4: `clamp(1.1rem, 5vw, 1.3rem)`
- Текст: 14px
- Eyebrow: 11px
- Кнопки: 13px

---

## 15. SEO (каждая страница)

- Уникальные title и description
- Один H1 на страницу
- Иерархия H1 → H2 → H3 → H4 без пропусков
- Canonical URL
- Open Graph теги
- Schema.org JSON-LD
- Хлебные крошки: sr-only
- Alt на всех картинках
- Внешние ссылки: `rel="noopener noreferrer" target="_blank"`

---

## 16. ЗАПРЕЩЕНО (везде, всегда)

- zoom на html/body
- text-overflow: ellipsis
- overflow: hidden как костыль
- Фиксированные ширины
- Хардкод текстов в компонентах
- `<Image />` из astro:assets
- Менять Footer или Navbar
- Менять десктоп при мобильных правках
- Менять файлы других страниц

---

## 17. ПРАВИЛА КОНТЕНТА БЛОГА

### Каждая статья (.md файл) ОБЯЗАТЕЛЬНО:
- title: заголовок
- slug: транслитерация заголовка (для URL)
- category: одна из 9 категорий
- contentType: Статья | Книга | Видео (только эти три; без Пост / Практика / Разбор)
- tags: минимум 2, максимум 5 из списка тегов
- date: дата публикации
- readingTime: время чтения в минутах
- cover: путь к обложке
- excerpt: 1-2 предложения описания

### РЕКОМЕНДУЕТСЯ (если подходит):
- relatedProductId: slug продукта (formula-money, family-unity и т.д.)
  Ставить ТОЛЬКО если статья реально связана с продуктом.
  Если не связана — null или не указывать.
- cta: кнопка действия (купить книгу, перейти к программе)

### ЗАПРЕЩЕНО в статьях:
- relatedProductId на несуществующий продукт
- Упоминания Дзена, ссылки на dzen.ru
- Пустой excerpt
- Дата в будущем
