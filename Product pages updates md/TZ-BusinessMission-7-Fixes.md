# ТЗ: Визуальные правки BusinessMissionHero.astro — 7 фиксов

> Прочитай DOM-Design-System.md ПЕРЕД началом работы.
> **НЕ ТРОГАЙ:** Navbar, Footer, global.css, BaseLayout, WelcomePopup, файлы других страниц.
> **НЕ МЕНЯТЬ** логику, props, скрипт YouTube, данные, [slug].astro, content.config.ts.
> Все правки — ТОЛЬКО в `src/components/products/BusinessMissionHero.astro`.

---

## 0. Перед началом

```bash
git add -A && git commit -m "checkpoint before bm-hero-visual-fixes"
```

---

## 1. WATERMARK — снизить opacity, фиксированный размер по центру

**Проблема:** watermark слишком контрастный (opacity 0.11) и растянут на весь блок (`background-size: cover`). Логотип забивает контент.

**Сейчас (строка ~37–41):**
```html
<div
  class="pointer-events-none absolute inset-0 opacity-[0.11]"
  style={`background-image: url('${watermarkUrl}'); background-size: cover; background-position: center; background-repeat: no-repeat;`}
  aria-hidden="true"
>
</div>
```

**Заменить на:**
```html
<div
  class="pointer-events-none absolute inset-0 flex items-center justify-center"
  aria-hidden="true"
>
  <img
    src={watermarkUrl}
    alt=""
    class="w-[420px] max-w-[60%] h-auto select-none"
    style="opacity: 0.04;"
    loading="eager"
    draggable="false"
  />
</div>
```

**Почему:** `opacity: 0.04` делает логотип едва заметным — он ощущается как текстура, а не перекрывает контент. Фиксированный размер 420px вместо cover — логотип остаётся аккуратным по центру.

---

## 2. КНОПКА «НАЗАД» — убрать бейдж, сделать текстовую ссылку

**Проблема:** кнопка «назад» стилизована как пилюля с фоном и бордером. На всех других страницах продуктов это простая текстовая ссылка.

**Сейчас (строка ~48–53):**
```html
<a
  href={backLink.url}
  class="inline-flex items-center rounded-full border border-dom-gold/28 bg-white/55 px-3 py-1.5 text-left font-montserrat text-[10px] font-bold uppercase tracking-[0.14em] text-dom-gold-dark transition-colors hover:border-dom-gold/45 hover:bg-[rgba(255,250,242,0.95)] hover:text-dom-graphite md:px-4 md:py-2 md:text-xs"
>
  {backLink.text}
</a>
```

**Заменить на:**
```html
<a
  href={backLink.url}
  class="inline-flex items-center font-montserrat text-xs font-bold uppercase tracking-wider text-dom-gold-dark transition-colors hover:text-dom-graphite md:text-sm"
>
  {backLink.text}
</a>
```

**Почему:** убраны `rounded-full`, `border`, `bg-white/55`, `px-3 py-1.5` — кнопка становится чистой текстовой ссылкой как на всех остальных продуктах. Стиль = Кнопка 4 из дизайн-системы.

---

## 3. HOVER НА ВИДЕО — убрать чёрное затемнение

**Проблема:** `group-hover:bg-black/15` создаёт холодный тёмный overlay на бежевом фоне. Выглядит инородно.

**Сейчас (строка ~84–87):**
```html
<span
  class="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/15"
  aria-hidden="true"
>
```

**Заменить на:**
```html
<span
  class="pointer-events-none absolute inset-0 flex items-center justify-center transition-colors duration-300"
  aria-hidden="true"
>
```

**Почему:** убраны `bg-black/0` и `group-hover:bg-black/15`. Hover-эффект остаётся через scale на обложке (`group-hover:scale-[1.02]` если есть) и scale на play-кнопке — этого достаточно, тёмный overlay не нужен.

---

## 4. PLAY КНОПКА — белый круг с золотой иконкой (не наоборот)

**Проблема:** золотой круг (`bg-dom-gold/90`) сливается с бежевым фоном карточки. Белый круг с золотой иконкой создаёт контраст и выглядит премиально.

**Сейчас (строка ~88–93):**
```html
<span class="flex h-14 w-14 items-center justify-center rounded-full bg-dom-gold/90 text-white shadow-lg transition-transform duration-300 group-hover:scale-105 md:h-16 md:w-16">
  <svg class="ml-1 h-7 w-7 md:h-8 md:w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 5v14l11-7z"></path>
  </svg>
</span>
```

**Заменить на:**
```html
<span class="flex h-16 w-16 items-center justify-center rounded-full bg-white/85 shadow-[0_4px_20px_rgba(126,91,35,0.2)] backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:scale-105 md:h-20 md:w-20">
  <svg class="ml-0.5 h-6 w-6 text-dom-gold-dark md:h-7 md:w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 5v14l11-7z"></path>
  </svg>
</span>
```

**Что изменилось:**
- Фон: `bg-dom-gold/90` → `bg-white/85` (белый полупрозрачный круг)
- Иконка: `text-white` → `text-dom-gold-dark` (золотой треугольник)
- Тень: `shadow-lg` → тёплая золотая тень `rgba(126,91,35,0.2)` вместо чёрной
- Hover: `group-hover:bg-white` (становится непрозрачным)
- Размер: `h-14 w-14 md:h-16 md:w-16` → `h-16 w-16 md:h-20 md:w-20` (чуть крупнее для лучшей кликабельности)
- SVG сдвиг: `ml-1` → `ml-0.5` (точнее оптическое центрирование)

---

## 5. SPACING — добавить воздуха внутри карточки

**Проблема:** padding `pt-2 pb-4` делает блок сплющенным. Контент прижат к краям, нет дыхания.

**Сейчас (строка ~43–45):**
```html
<div
  class="relative z-10 mx-auto max-w-5xl px-4 pb-4 pt-2 sm:px-6 md:pb-5 md:pt-3 lg:px-8"
>
```

**Заменить на:**
```html
<div
  class="relative z-10 mx-auto max-w-5xl px-4 pb-8 pt-6 sm:px-6 md:pb-12 md:pt-10 lg:px-8"
>
```

**Что изменилось:**
- `pt-2` → `pt-6` (мобильный), `md:pt-3` → `md:pt-10` (десктоп)
- `pb-4` → `pb-8` (мобильный), `md:pb-5` → `md:pb-12` (десктоп)
- Карточка получает нормальное дыхание, визуально встаёт в один масштаб с другими страницами

---

## 6. КАРТОЧКИ СТОЛБОВ — уменьшить десктопный размер

**Проблема:** на десктопе карточки `w-[220px]` с текстом `md:text-xl` — слишком крупные по сравнению с остальными элементами страницы. На мобильном `w-[100px]` — скачок масштаба слишком резкий.

**Сейчас (строка ~131):**
```html
class="w-[100px] rounded-lg border border-dom-gold/30 bg-white/50 px-3 py-2.5 text-center shadow-none backdrop-blur-sm transition-all duration-300 hover:border-dom-gold/60 hover:bg-white/75 hover:shadow-[0_8px_24px_rgba(217,179,114,0.2)] md:w-[220px] md:rounded-xl md:px-5 md:py-4"
```

**Заменить на:**
```html
class="w-[110px] rounded-lg border border-dom-gold/25 bg-white/50 px-3 py-3 text-center backdrop-blur-sm transition-all duration-300 hover:border-dom-gold/50 hover:bg-white/70 hover:shadow-[0_6px_20px_rgba(217,179,114,0.15)] md:w-[180px] md:rounded-xl md:px-5 md:py-4"
```

**И текст столба (строка ~173):**

**Сейчас:**
```html
<p class="font-messiri text-xs font-bold uppercase tracking-wider text-dom-graphite md:text-xl">
```

**Заменить на:**
```html
<p class="font-messiri text-xs font-bold uppercase tracking-wider text-dom-graphite md:text-base">
```

**Что изменилось:**
- Ширина: `w-[100px] md:w-[220px]` → `w-[110px] md:w-[180px]` (плавнее переход)
- Текст: `md:text-xl` → `md:text-base` (пропорциональнее)
- Тень hover: чуть мягче
- Бордер: `dom-gold/30` → `dom-gold/25` (нежнее)

---

## 7. ОТСТУП КНОПКИ «НАЗАД» — добавить mb

**Проблема:** отступ `mb-2 md:mb-3` между кнопкой назад и заголовком слишком маленький.

**Сейчас (строка ~46):**
```html
<div class="mb-2 flex justify-start md:mb-3">
```

**Заменить на:**
```html
<div class="mb-6 flex justify-start md:mb-8">
```

**Почему:** по дизайн-системе отступ кнопки назад от контента = `mb-10` (в обычном Hero). Внутри карточки можно чуть меньше — `mb-6 md:mb-8`.

---

## Порядок работы

1. Сделай checkpoint (git commit)
2. Применяй правки в порядке 1 → 2 → 3 → 4 → 5 → 6 → 7
3. После каждой правки — сохрани и проверь в браузере
4. Открой главную страницу (`/ru/`) в соседней вкладке — масштаб должен ощущаться одинаково
5. Проверь мобильную версию (375px)
6. `git commit -m "fix: BusinessMissionHero visual polish — 7 fixes"`

---

## Контрольные вопросы после всех правок

- [ ] Watermark едва заметен? (если видно с первого взгляда — opacity ещё снизить)
- [ ] Кнопка «назад» — чистая текстовая ссылка без фона?
- [ ] При наведении на видео нет тёмного мерцания?
- [ ] Play кнопка — белый круг с золотым треугольником?
- [ ] Внутри карточки достаточно воздуха сверху и снизу?
- [ ] Три столба — не слишком крупные на десктопе?
- [ ] Клик по видео работает (YouTube iframe появляется)?

---

## НЕ ТРОГАТЬ

- Логику компонента, props, interface
- Скрипт YouTube (is:inline)
- SVG-иконки столбов
- SVG линии между столбами
- Мета-линейку
- [slug].astro
- content.config.ts
- business-mission.md
- Любые другие файлы
