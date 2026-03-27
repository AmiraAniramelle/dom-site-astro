# ТЗ: Доработка дизайна всех компонентов продуктов

> Передай вместе: DOM-Design-System.md
> Прочитай DOM-Design-System.md ПЕРЕД началом работы
> **НЕ ТРОГАЙ:** Navbar, Footer, global.css, BaseLayout, WelcomePopup, файлы других страниц

---

## 0. ГЛОБАЛЬНО: Исправить camelCase во всех компонентах

**В КАЖДОМ файле в `src/components/products/` заменить:**
- `dom-goldDark` → `dom-gold-dark`
- `dom-graphite` — проверить что работает (если нет → `dom-graphite`)

Проверить что ВСЕ цветовые классы соответствуют Tailwind v4 токенам.

---

## 1. ProductHero.astro

### Десктоп
- Контейнер страницы: `max-w-5xl mx-auto px-4 sm:px-6 lg:px-8`
- Отступ от навбара: `pt-20`
- Кнопка назад: `text-dom-gold-dark hover:text-dom-graphite font-montserrat font-bold uppercase tracking-widest text-sm inline-flex items-center mb-10 transition-colors`
- Hero-карточка: `rounded-[2rem] p-10 md:p-16 relative overflow-hidden bg-[linear-gradient(145deg,rgba(255,252,244,0.98),rgba(246,233,203,0.92))] border border-dom-gold/35`
- Tag badge: `text-xs font-bold uppercase text-white bg-dom-gold-dark px-5 py-2 rounded-full inline-block mb-8 shadow-md tracking-widest`
- H1: `font-messiri text-5xl md:text-7xl text-dom-graphite mb-8 leading-tight`
- Описание: `text-xl md:text-2xl text-dom-graphite/80 font-montserrat leading-relaxed max-w-4xl font-light border-l-4 border-dom-gold pl-6`

### Мобильный
- Отступ от навбара: `pt-8`
- Карточка: `p-6`
- H1: стиль `font-size: clamp(1.8rem, 8vw, 2.4rem)`
- Описание: `text-lg`
- Кнопка назад: `text-xs mb-6`

---

## 2. ProductShowcase.astro

### Десктоп
- Видео-блок: тёмный фон
  ```
  rounded-2xl overflow-hidden mb-4
  background: linear-gradient(180deg, #38332d, #2f2923)
  ```
- Внутри видео: `text-center py-16 px-8`
- Chip: `inline-block px-6 py-2 rounded-full border border-dom-gold/30 bg-white/10 font-montserrat text-sm text-dom-beige/85 mb-4`
- Название: `font-messiri text-3xl md:text-5xl text-dom-gold mb-2`
- Подзаголовок: `font-montserrat text-sm text-dom-beige/75`
- Мета-полоска: `bg-white rounded-2xl border border-dom-gold/25 p-6 shadow-[0_10px_24px_rgba(126,91,35,0.1)]`
- Сетка мета: `grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto] gap-4 items-center`
- Label: `font-montserrat text-[10px] uppercase tracking-[0.12em] text-dom-graphite/60`
- Значение: `font-montserrat text-2xl font-semibold text-dom-graphite`
- Разделитель: `hidden md:block w-px h-12 bg-dom-gold/35`
- Кнопка: `px-8 py-3 bg-dom-gold text-white rounded-xl font-montserrat font-semibold text-base hover:bg-dom-gold-dark transition shadow-[0_10px_24px_rgba(166,120,50,0.32)]`

### Мобильный
- Видео: `py-10 px-5`
- Название: `text-2xl`
- Мета: одна колонка, разделители скрыты (`hidden`)
- Каждая метрика: `text-center py-3 border-b border-dom-gold/15 last:border-b-0`
- Значение: `text-xl`
- Кнопка: `w-full mt-4`

---

## 3. ProductMission.astro

### Десктоп
- Сетка: `grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24`
- **Левая (тёмная):**
  ```
  p-10 md:p-12 rounded-[2rem] relative overflow-hidden
  background: linear-gradient(180deg, #38332d, #2f2923)
  ```
  - H3: `font-messiri text-4xl text-dom-gold mb-6`
  - Текст: `font-montserrat text-lg leading-relaxed text-dom-beige/82`
- **Правая (светлая):**
  ```
  bg-white rounded-[2rem] p-10 md:p-12
  border border-dom-gold/25
  shadow-[0_10px_24px_rgba(126,91,35,0.1)]
  ```
  - H3: `font-messiri text-4xl text-dom-graphite mb-6`
  - Текст: `font-montserrat text-lg leading-relaxed text-dom-graphite/80`

### Мобильный
- Одна колонка, `gap-6`
- Обе карточки: `p-6`
- H3: `font-size: clamp(1.3rem, 6vw, 1.6rem)`
- Текст: `text-base`

---

## 4. ProductForWhom.astro

### Десктоп
- Заголовок: `text-center mb-12`
  - H2: `font-messiri text-4xl md:text-5xl text-dom-graphite`
- Сетка: `grid grid-cols-1 md:grid-cols-3 gap-8`
- Каждая карточка (Карточка 2 — тёплая):
  ```
  bg-[linear-gradient(145deg,rgba(255,252,244,0.98),rgba(246,233,203,0.92))]
  rounded-2xl border border-dom-gold/22 p-8
  hover:border-dom-gold/50 hover:shadow-xl transition-all duration-300
  ```
  - H4: `font-messiri text-2xl text-dom-graphite mb-3`
  - Текст: `font-montserrat text-sm text-dom-graphite/70 leading-relaxed`

### Мобильный
- `grid-cols-1 gap-4`
- Карточки: `p-6`
- H2: `font-size: clamp(1.5rem, 7vw, 2rem)`
- H4: `font-size: clamp(1.1rem, 5vw, 1.3rem)`

---

## 5. ProductResults.astro (Результаты + Модули)

### Десктоп
- Обёртка-карточка:
  ```
  rounded-[2.5rem] p-10 md:p-16 mb-24
  bg-[linear-gradient(145deg,rgba(255,252,244,0.98),rgba(246,233,203,0.92))]
  border border-dom-gold/22
  ```
- Сетка: `grid grid-cols-1 lg:grid-cols-2 gap-16`

**Левая — «Что вы получите»:**
- H3: `font-messiri text-4xl text-dom-graphite mb-10`
- Список: `space-y-4`
- Каждый результат:
  ```
  flex items-start bg-white/60 p-5 rounded-xl
  border border-dom-beige hover:border-dom-gold/30 transition-colors
  ```
  - Маркер: `text-dom-gold mr-4 mt-1 text-2xl font-bold` — «✓»
  - Текст: `font-montserrat text-base text-dom-graphite/80 leading-relaxed`

**Правая — «Как это работает» (модули timeline):**
- H3: `font-messiri text-4xl text-dom-graphite mb-10`
- Каждый модуль:
  ```
  border-l-2 border-dom-gold/30 pl-8 pb-8 relative group
  ```
  - Точка: `absolute w-4 h-4 bg-dom-beige border-2 border-dom-gold rounded-full -left-[9px] top-1 group-hover:bg-dom-gold transition-colors`
  - Название: `font-messiri font-bold text-dom-graphite text-2xl mb-2`
  - Описание: `font-montserrat text-base text-dom-graphite/70 leading-relaxed`

### Мобильный
- Одна колонка, `gap-10`
- Обёртка: `p-6`
- H3: `font-size: clamp(1.3rem, 6vw, 1.6rem)`
- Результаты: `p-4`, текст `text-sm`
- Модули: `pl-6 pb-6`

---

## 6. ProductReviews.astro

### Десктоп
- Контейнер: `mb-24`
- H2: `font-messiri text-4xl md:text-5xl text-dom-graphite mb-12 text-center`
- Сетка: `grid grid-cols-1 md:grid-cols-2 gap-10`
- Каждый отзыв (Карточка 1 — светлая):
  ```
  bg-white rounded-2xl border border-dom-gold/25 p-10
  shadow-[0_10px_24px_rgba(126,91,35,0.1)]
  relative
  ```
  - Кавычка: `absolute top-4 left-6 text-7xl text-dom-gold/20 font-serif` — «"»
  - Текст: `font-montserrat text-base leading-relaxed italic text-dom-graphite/85 relative z-10 mb-8`
  - Автор: `font-messiri text-dom-gold font-bold text-xl` — «— {author}»

**Рендерить ТОЛЬКО если reviews.length > 0**

### Мобильный
- `grid-cols-1 gap-6`
- Карточки: `p-6`
- Кавычка: `text-5xl`

---

## 7. ProductFAQ.astro

### Десктоп
- Контейнер: `mb-24 max-w-4xl mx-auto`
- H2: `font-messiri text-4xl md:text-5xl text-dom-graphite mb-12 text-center`
- Каждый вопрос — `<details>`:
  ```
  rounded-xl p-6 cursor-pointer group mb-4
  bg-white border border-dom-gold/20
  hover:border-dom-gold/40 transition-colors
  ```
- `<summary>`:
  ```
  font-montserrat font-bold text-dom-graphite text-lg
  group-open:text-dom-gold-dark transition-colors
  outline-none list-none flex justify-between items-center
  ```
  - Иконка справа: `text-dom-gold text-3xl font-light group-open:rotate-45 transition-transform` — текст «+»
- Ответ: `font-montserrat text-dom-graphite/70 mt-5 text-base leading-relaxed border-t border-dom-gold/15 pt-5`

**Рендерить ТОЛЬКО если faq.length > 0**

**JSON-LD обязательно:**
```html
<script type="application/ld+json">
  FAQPage schema...
</script>
```

### Мобильный
- `p-5`
- Вопрос: `text-base`
- Ответ: `text-sm`

---

## 8. ProductEnroll.astro

### Десктоп
- Обёртка:
  ```
  id="product-enroll-block"
  p-8 md:p-12 rounded-[2.2rem]
  bg-[linear-gradient(145deg,rgba(255,252,244,0.98),rgba(246,233,203,0.92))]
  border border-dom-gold/25
  ```
- Сетка: `grid grid-cols-1 lg:grid-cols-2 gap-10`

**Левая — условия:**
- Карточка: `bg-white/70 border border-dom-gold/25 rounded-3xl p-6 md:p-8`
- Eyebrow: `font-montserrat text-xs uppercase tracking-[0.16em] text-dom-graphite/70 mb-4` — «Условия участия»
- H3: `font-messiri text-4xl text-dom-graphite mb-4`
- Описание: `font-montserrat text-base text-dom-graphite/80 leading-relaxed mb-6`
- Цена: `font-messiri text-5xl text-dom-graphite mb-2`
- Примечание: `font-montserrat text-sm text-dom-graphite/75`

**Правая — форма:**
- Карточка: `bg-white/75 border border-dom-gold/25 rounded-3xl p-6 md:p-8`
- H4: `font-messiri text-3xl text-dom-graphite mb-5` — «Форма заявки»
- Поля (`space-y-4`), каждый инпут:
  ```
  w-full rounded-xl border border-dom-gold/20 bg-white
  px-6 py-4 font-montserrat text-lg text-dom-graphite
  placeholder:text-dom-graphite/30 outline-none
  focus:border-dom-gold/60 focus:ring-2 focus:ring-dom-gold/20
  ```
- Placeholder (НЕ label): «Ваше имя», «Электронная почта», «Телефон / Telegram»
- Кнопка:
  ```
  w-full mt-6 py-4 bg-gold-gradient text-white font-messiri text-2xl
  tracking-wide rounded-2xl hover:brightness-105 transition-all
  shadow-[0_12px_26px_rgba(166,120,50,0.34)]
  ```
  Текст: «Занять место»
- Чекбокс: `mt-5 flex items-start gap-3 cursor-pointer`
  - Текст: `font-montserrat text-sm leading-relaxed text-dom-graphite/85`
- Поддержка: `text-center mt-3 font-montserrat text-sm text-dom-graphite/75`

### Мобильный
- Одна колонка
- Обёртка: `p-5`
- Карточки: `p-5`
- Все инпуты: `w-full`, `text-base` (не text-lg)
- Цена: `text-4xl`
- Кнопка: `w-full text-xl`
- H3: `font-size: clamp(1.3rem, 6vw, 1.6rem)`

---

## Порядок работы

1. Сначала замени ВСЕ `dom-goldDark` → `dom-gold-dark` во всех компонентах
2. Потом применяй стили компонент за компонентом: Hero → Showcase → Mission → ForWhom → Results → Reviews → FAQ → Enroll
3. После каждого компонента проверяй в браузере
4. `git commit` после каждых 2-3 компонентов

## НЕ ТРОГАТЬ
- Navbar, Footer, BaseLayout, WelcomePopup
- global.css
- Файлы других страниц
- zoom
