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
- Тёмное золото: `dom-gold-dark` (#a4814a) — hover, eyebrow
- Золотой лист: `dom-gold-leaf` (#cca26b) — дополнительный акцент
- Бежевый: `dom-beige` (#f4e4ce) — светлый фон
- Белый: white — карточки, чистый фон

### Правила применения
- Текст на светлом фоне: `text-dom-graphite`
- Текст на тёмном фоне: `text-dom-beige` или `text-white`
- Eyebrow/labels: `text-dom-gold` или `text-dom-gold-dark`
- Ссылки: `text-dom-gold hover:text-dom-gold-dark`
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
hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(217,179,114,0.45)] 
active:translate-y-0 active:shadow-[0_8px_20px_rgba(217,179,114,0.3)]
transition-all duration-300 block text-center w-full md:w-auto"
```

### Кнопка 2: Второстепенная (контурная на светлом)
Когда: альтернативные действия — «Подробнее», «Структура метода»
```
class="border border-dom-graphite/20 text-dom-graphite py-3 px-8 
rounded-xl font-montserrat font-semibold uppercase tracking-[0.08em] text-xs 
hover:bg-dom-gold/10 hover:border-dom-gold/50 hover:text-dom-gold-dark 
hover:-translate-y-0.5
active:translate-y-0
transition-all duration-300 block text-center w-full md:w-auto"
```

### Кнопка 3: Контурная на тёмном фоне
Когда: действия на тёмных блоках — «Подробнее», «Войти»
```
class="border border-dom-gold/50 text-dom-gold py-3 px-6 
rounded font-montserrat font-medium text-sm 
hover:bg-dom-gold hover:text-white hover:-translate-y-0.5
active:translate-y-0
transition-all duration-300 block text-center w-full"
```

### Кнопка 4: Текстовая ссылка
Когда: навигация — «← Вернуться», «Читать далее»
```
class="text-dom-gold-dark hover:text-dom-graphite 
font-montserrat font-bold uppercase tracking-wider text-sm 
transition-colors duration-300 inline-flex items-center"
```
Без подъёма — это текстовая ссылка, не кнопка.

### Кнопка 5: Внешняя ссылка (покупка)
Когда: переход на внешний сайт — «Купить на Ozon», «App Store»
```
class="inline-flex items-center justify-center bg-gold-gradient 
text-white py-3 px-8 rounded-xl font-montserrat font-semibold 
uppercase tracking-[0.08em] text-xs 
shadow-[0_8px_20px_rgba(217,179,114,0.3)]
hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(217,179,114,0.4)]
active:translate-y-0 active:shadow-[0_6px_16px_rgba(217,179,114,0.25)]
transition-all duration-300"
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
p-8 md:p-10 shadow-[0_10px_24px_rgba(126,91,35,0.1)]
hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(126,91,35,0.15)]
hover:border-dom-gold/35
transition-all duration-300"
```

### Карточка 2: Тёплая
```
class="bg-[linear-gradient(145deg,rgba(255,252,244,0.98),rgba(246,233,203,0.92))] 
rounded-2xl border border-dom-gold/22 p-8 
hover:-translate-y-1 hover:border-dom-gold/50 
hover:shadow-[0_16px_36px_rgba(126,91,35,0.14)]
transition-all duration-300"
```

### Карточка 3: Тёплая выделенная (флагман)
```
class="bg-[linear-gradient(150deg,#fff7e8_0%,#f5e2bc_58%,#f1d8aa_100%)] 
rounded-2xl border-2 border-dom-gold/50 p-10 
shadow-[0_20px_44px_rgba(126,91,35,0.18)]
hover:-translate-y-1.5 hover:shadow-[0_28px_52px_rgba(126,91,35,0.22)]
transition-all duration-300"
```

### Карточка 4: Тёмная
```
class="bg-white/5 backdrop-blur-md rounded-2xl 
border border-dom-gold/20 p-8 
hover:-translate-y-1 hover:bg-white/10 hover:border-dom-gold/50 
hover:shadow-[0_16px_36px_rgba(0,0,0,0.15)]
transition-all duration-300"
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
- **hover-подъём отключается** на мобильном (нет ховера на тач-экранах)

---

## 6. EYEBROW (надпись над заголовком)

Везде одинаковый:
```
class="font-montserrat text-[11px] uppercase tracking-[0.12em] 
text-dom-gold-dark mb-2 block"
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
Число: `font-messiri text-4xl md:text-5xl text-dom-gold-dark leading-none mb-2`
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

## 10. АНИМАЦИИ И HOVER-ЭФФЕКТЫ

### Система подъёмов (hover translate)

Все интерактивные элементы при hover «поднимаются» вверх — это создаёт ощущение глубины и отклика.

| Элемент | Подъём | Тень при hover |
|---------|--------|---------------|
| Кнопка 1 (CTA) | `hover:-translate-y-1` (4px) | Тень усиливается, радиус увеличивается |
| Кнопка 2 (контурная) | `hover:-translate-y-0.5` (2px) | Лёгкое свечение через bg-dom-gold/10 |
| Кнопка 3 (на тёмном) | `hover:-translate-y-0.5` (2px) | Заливка bg-dom-gold |
| Кнопка 4 (текстовая) | Без подъёма | Только смена цвета |
| Кнопка 5 (внешняя) | `hover:-translate-y-1` (4px) | Тень усиливается |
| Карточка 1–3 (светлые) | `hover:-translate-y-1` (4px) | Тень углубляется, бордер ярче |
| Карточка 3 (флагман) | `hover:-translate-y-1.5` (6px) | Максимальная тень |
| Карточка 4 (тёмная) | `hover:-translate-y-1` (4px) | bg-white/10, бордер ярче |
| Stat-карточка | `hover:-translate-y-1` (4px) | Тень углубляется |
| FAQ `<details>` | Без подъёма | Бордер ярче, цвет заголовка |
| Навигационные ссылки | Без подъёма | Только цвет/подчёркивание |

### Active/pressed состояние

При клике (`:active`) кнопка «возвращается» на место — создаёт ощущение нажатия:
```
active:translate-y-0 active:shadow-[уменьшенная_тень]
```

Применяется только к кнопкам 1, 2, 3, 5. НЕ применяется к карточкам и ссылкам.

### Правила hover-анимаций

1. **Всегда `transition-all duration-300`** — плавный переход за 300ms
2. **Подъём + тень = пара.** Если элемент поднимается — тень ОБЯЗАНА усилиться. Подъём без тени = элемент «летит», тень без подъёма = просто свечение
3. **Тень всегда тёплая:** `rgba(126,91,35,...)` или `rgba(217,179,114,...)`. НИКОГДА `rgba(0,0,0,...)` на светлом фоне
4. **На мобильном hover не работает** — на touch-устройствах нет ховера. Все hover-эффекты = приятный бонус для десктопа, НЕ обязательный элемент дизайна
5. **Масштабирование (`scale`) ЗАПРЕЩЕНО** на контейнерах и блоках. Допускается ТОЛЬКО на мелких элементах: иконки (`hover:scale-105`), play-кнопки, аватарки
6. **Кривая анимации:** стандартная `ease` (встроена в `transition-all`). НЕ использовать `ease-in`, `ease-out`, `cubic-bezier` без причины

### Разрешённые анимации
- Hover подъём: `hover:-translate-y-{n}` + усиление тени
- Hover цвет: смена цвета текста/бордера/фона
- Hover тень: усиление/появление тени
- Hover масштаб (только мелкие элементы): `hover:scale-105`
- Hover opacity: `hover:opacity-80` и подобные
- Появление при скролле: `fade-in` (CSS animation)
- Transition цвета ссылок: `transition-colors`

### Запрещённые анимации
- `zoom` или `transform: scale()` на контейнерах, секциях, карточках
- CSS `@keyframes` анимации на тексте (мигание, пульсация, typing effect)
- Бесконечные анимации (`animation: ... infinite`) кроме специальных случаев (бегущая строка)
- `transition-all` с `duration` больше 500ms — всё должно быть отзывчивым
- Анимация высоты/ширины блоков (вызывает layout shifts)
- Параллакс-скролл (тяжёлый, ломает мобильный)

---

## 11. ФОРМЫ

```
class="w-full rounded-xl border border-dom-gold/20 bg-white 
px-6 py-4 font-montserrat text-lg text-dom-graphite 
placeholder:text-dom-graphite/30 outline-none 
focus:border-dom-gold/60 focus:ring-2 focus:ring-dom-gold/20
transition-all duration-300"
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
- transform: scale() на контейнерах и секциях
- text-overflow: ellipsis
- overflow: hidden как костыль
- Фиксированные ширины
- Хардкод текстов в компонентах
- `<Image />` из astro:assets
- Менять Footer или Navbar
- Менять десктоп при мобильных правках
- Менять файлы других страниц
- Чёрные тени `rgba(0,0,0,...)` на светлом фоне
- `transition-all` с duration > 500ms
- Бесконечные CSS animations на контенте

---

## 17. ПРАВИЛА КОНТЕНТА БЛОГА

### Каждая статья (.md файл) ОБЯЗАТЕЛЬНО:
- title: заголовок
- slug: транслитерация заголовка (для URL)
- category: одна из 9 категорий
- contentType: Статья | Книга | Видео
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
