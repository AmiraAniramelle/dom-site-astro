# ТЗ: Переработка ProductHero + ProductShowcase → Единый блок

> Передай вместе: DOM-Design-System.md, DOM-Handoff-Complete.md
> Прочитай DOM-Design-System.md ПЕРЕД началом работы
> **НЕ ТРОГАЙ:** Navbar, Footer, global.css, BaseLayout, WelcomePopup, файлы других страниц

---

## 0. КОНТЕКСТ

Сейчас верхняя часть страницы продукта состоит из двух компонентов:
- `ProductHero.astro` — бейджи, заголовок, описание, кнопки (всё выровнено влево)
- `ProductShowcase.astro` — тёмный видео-блок + мета-полоска (формат/модули/доступ/цена)

**Проблема:** блоки визуально разрозненные, не смотрятся как единое целое, нет центрирования, нет видео-блока с кастомной обложкой.

**Задача:** объединить в один компонент `ProductHeroNew.astro` с новой структурой:
1. Название — по центру
2. Подпись — по центру
3. Видео-блок с YouTube + кастомная обложка + стильная кнопка Play
4. Кнопки CTA
5. Мета-линейка (формат / модули / доступ / цена)

---

## 1. НОВАЯ СТРУКТУРА (сверху вниз)

```
┌─────────────────────────────────────────────────────────────┐
│  ← Назад к направлению                                      │
│                                                               │
│              [бейдж: СИСТЕМНЫЙ МЕТОД...]                      │
│              [бейдж: ОНЛАЙН · 5 МОДУЛЕЙ]                     │
│                                                               │
│                    ФОРМУЛА M+O+N+E+Y                          │
│                         (H1)                                  │
│                                                               │
│         Новый финансовый порядок жизни. 5 элементов,          │
│         которые перестраивают мышление...                      │
│                                                               │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │                                                         │  │
│  │              🖼️  КАСТОМНАЯ ОБЛОЖКА                     │  │
│  │                     ▶ Play                              │  │
│  │                                                         │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                               │
│          [ ПОДАТЬ ЗАЯВКУ ]   [ СМОТРЕТЬ ПРОГРАММУ ]           │
│                                                               │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │  ФОРМАТ      │  МАТЕРИАЛЫ   │  ДОСТУП       │ СТОИМОСТЬ│  │
│  │  Онлайн      │  5 модулей   │  Сразу после  │ 48 608 ₽ │  │
│  └─────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. РЕАЛИЗАЦИЯ

### Файл: `src/components/products/ProductHeroNew.astro`

Заменяет **оба** компонента: `ProductHero.astro` и `ProductShowcase.astro`.

В `[slug].astro` заменить:
```diff
- <ProductHero ... />
- <ProductShowcase ... />
+ <ProductHeroNew ... />
```

Старые файлы `ProductHero.astro` и `ProductShowcase.astro` **НЕ УДАЛЯТЬ** — переименовать в `ProductHero.OLD.astro` и `ProductShowcase.OLD.astro` на случай отката.

---

## 3. ДЕТАЛЬНЫЕ СТИЛИ

### 3.1 Секция-обёртка

```
section: bg-[linear-gradient(145deg,rgba(255,252,244,0.98),rgba(246,233,203,0.92))]
rounded-[2rem] p-8 md:p-14 lg:p-16
border border-dom-gold/20
max-w-5xl mx-auto
text-align: center
```

### 3.2 Кнопка «Назад»

```
text-align: left (не center!)
class="text-dom-gold-dark hover:text-dom-graphite font-montserrat 
font-bold uppercase tracking-widest text-sm inline-flex items-center 
mb-8 transition-colors"
```

### 3.3 Бейджи (tag + format)

```
Обёртка: flex flex-wrap justify-center gap-3 mb-8

Бейдж 1 (tag, заливка): 
class="text-xs font-bold uppercase text-white bg-dom-gold-dark 
px-5 py-2 rounded-full inline-block shadow-md tracking-widest 
font-montserrat"

Бейдж 2 (format, контурный):
class="text-xs font-semibold uppercase text-dom-gold-dark 
px-5 py-2 rounded-full inline-block border border-dom-gold/40 
tracking-widest font-montserrat"
```

### 3.4 Заголовок H1 — ПО ЦЕНТРУ

```
font-messiri text-5xl md:text-6xl lg:text-7xl text-dom-graphite
text-center mb-6 leading-[1.05]
```

На мобильном:
```
font-size: clamp(1.8rem, 8vw, 2.4rem)
mb-4
```

### 3.5 Описание — ПО ЦЕНТРУ

```
font-montserrat text-lg md:text-xl text-dom-graphite/80
leading-relaxed max-w-3xl mx-auto text-center mb-10 font-light
```

На мобильном:
```
text-base mb-6
```

### 3.6 Видео-блок с кастомной обложкой

**Это ключевой новый элемент.**

```
Обёртка видео:
class="relative w-full max-w-4xl mx-auto mb-10 rounded-2xl 
overflow-hidden shadow-[0_16px_40px_rgba(126,91,35,0.15)]
border border-dom-gold/20 cursor-pointer group"
aspect-ratio: 16/9

Обложка (кастомная картинка):
<img src={videoCover} alt={title}
  class="w-full h-full object-cover absolute inset-0 
  group-hover:scale-[1.02] transition-transform duration-500"
  loading="eager" />

Затемнение поверх обложки:
class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10
group-hover:from-black/40 transition-all duration-300"

Кнопка Play (по центру обложки):
class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
w-20 h-20 md:w-24 md:h-24 rounded-full
bg-white/90 backdrop-blur-sm
flex items-center justify-center
shadow-[0_8px_32px_rgba(0,0,0,0.2)]
group-hover:bg-white group-hover:scale-110
transition-all duration-300 z-10"
```

**Кнопка Play — внутренняя иконка (SVG треугольник):**
```html
<svg class="w-8 h-8 md:w-10 md:h-10 text-dom-gold-dark ml-1" 
     viewBox="0 0 24 24" fill="currentColor">
  <path d="M8 5v14l11-7z"/>
</svg>
```

**Поведение при клике:**
1. По клику на обложку/play — обложка исчезает, появляется YouTube iframe
2. Iframe: `src="https://www.youtube.com/embed/{youtubeId}?autoplay=1&rel=0"`
3. Реализовать через JS: `data-youtube-id` на обёртке, при клике заменяем innerHTML

```html
<div class="video-wrapper aspect-video ..." data-youtube-id={youtubeId}>
  <img src={videoCover} ... />
  <div class="play-button ...">▶</div>
</div>

<script>
  document.querySelectorAll('.video-wrapper[data-youtube-id]').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.youtubeId;
      el.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0" 
        class="w-full h-full absolute inset-0" frameborder="0" 
        allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    });
  });
</script>
```

**Если youtubeId НЕ задан в frontmatter — НЕ показывать видео-блок вообще.**

На мобильном:
```
rounded-xl
Кнопка Play: w-16 h-16
SVG: w-6 h-6
mb-8
```

### 3.7 Кнопки CTA — ПО ЦЕНТРУ

```
Обёртка: flex flex-col sm:flex-row justify-center items-center gap-4 mb-10

Кнопка 1 (CTA, золотая заливка — «Подать заявку»):
class="bg-gold-gradient text-white py-4 px-8 rounded-xl 
font-montserrat font-bold uppercase tracking-[0.12em] text-sm 
shadow-[0_12px_28px_rgba(217,179,114,0.36)] 
hover:shadow-[0_16px_36px_rgba(217,179,114,0.45)] 
transition-all duration-300 text-center w-full sm:w-auto"
href="#product-enroll-block"

Кнопка 2 (контурная — «Смотреть программу»):
class="border border-dom-graphite/20 text-dom-graphite py-3 px-8 
rounded-xl font-montserrat font-semibold uppercase tracking-[0.08em] text-xs 
hover:bg-dom-gold/10 hover:border-dom-gold/50 hover:text-dom-gold-dark 
transition-all duration-300 text-center w-full sm:w-auto"
href="#product-results"  (якорь на блок «Результаты + Модули»)
```

На мобильном:
```
flex-col, обе кнопки w-full
```

### 3.8 Мета-линейка

```
Обёртка:
class="bg-white rounded-2xl border border-dom-gold/25 p-6 
shadow-[0_10px_24px_rgba(126,91,35,0.1)] max-w-4xl mx-auto"

Сетка (десктоп):
class="grid grid-cols-4 gap-4 items-center"

Каждая метрика (десктоп):
class="text-center"
```

Внутри каждой метрики:
```
Label: font-montserrat text-[10px] uppercase tracking-[0.12em] text-dom-graphite/60 mb-1
Значение: font-montserrat text-lg md:text-xl font-semibold text-dom-graphite
```

Разделители между метриками (десктоп):
- Вертикальная линия через CSS `border-r border-dom-gold/20` на первых 3 метриках
- Либо через grid с `divide-x divide-dom-gold/20`

**4 метрики:**
| Label | Пример значения |
|-------|----------------|
| ФОРМАТ | Онлайн |
| МАТЕРИАЛЫ | 5 модулей |
| ДОСТУП | Сразу после заявки |
| СТОИМОСТЬ | 48 608 ₽ (Доступ ко всем модулям на год) |

На мобильном:
```
grid-cols-2 gap-4
Разделители: border-b вместо border-r
Каждая метрика: py-3
Последние 2 метрики: border-b-0
Значение: text-base
```

---

## 4. ДАННЫЕ (props)

```typescript
interface ProductHeroNewProps {
  // Кнопка назад
  backLink: {
    text: string         // "← К направлению «Деньги»"
    url: string          // "/ru/path/money/"
  }
  
  // Бейджи
  tag: string            // "СИСТЕМНЫЙ МЕТОД РАБОТЫ С ДЕНЕЖНОЙ МАТРИЦЕЙ"
  format?: string        // "ОНЛАЙН · 5 МОДУЛЕЙ" (необязательный)
  
  // Заголовок и описание
  title: string          // "ФОРМУЛА M+O+N+E+Y"
  shortDesc: string      // "Новый финансовый порядок жизни..."
  
  // Видео (всё опционально — если нет, блок не рендерится)
  youtubeId?: string     // "dQw4w9WgXcQ"
  videoCover?: string    // "/images/products/formula-money-cover.jpg"
  
  // Кнопки
  primaryCta: {
    text: string         // "ПОДАТЬ ЗАЯВКУ"
    url: string          // "#product-enroll-block"
  }
  secondaryCta?: {
    text: string         // "СМОТРЕТЬ ПРОГРАММУ"
    url: string          // "#product-results"
  }
  
  // Мета-линейка
  meta: Array<{
    label: string        // "ФОРМАТ"
    value: string        // "Онлайн"
  }>
}
```

---

## 5. ИЗМЕНЕНИЯ В CONTENT COLLECTION

### Добавить поля в Zod-схему (`src/content/config.ts` или `src/content.config.ts`)

```typescript
// Добавить к существующей схеме products:
youtubeId: z.string().optional(),
videoCover: z.string().optional(),    // путь к кастомной обложке
format: z.string().optional(),        // "ОНЛАЙН · 5 МОДУЛЕЙ"
meta: z.array(z.object({
  label: z.string(),
  value: z.string(),
})).optional(),
```

### Добавить данные в frontmatter продуктов

Пример для `formula-money.md`:
```yaml
youtubeId: "VIDEO_ID_HERE"
videoCover: "/images/products/formula-money-cover.jpg"
format: "ОНЛАЙН · 5 МОДУЛЕЙ"
meta:
  - label: "ФОРМАТ"
    value: "Онлайн"
  - label: "МАТЕРИАЛЫ"
    value: "5 модулей"
  - label: "ДОСТУП"
    value: "Сразу после заявки"
  - label: "СТОИМОСТЬ"
    value: "48 608 ₽ (Доступ ко всем модулям на год)"
```

**Если youtubeId не указан** — видео-блок не рендерится. Остальная структура (заголовок, описание, кнопки, линейка) показывается всегда.

**Если meta не указан** — линейка не рендерится.

---

## 6. УСЛОВНАЯ ЛОГИКА РЕНДЕРИНГА

```astro
<!-- Видео — только если есть youtubeId -->
{youtubeId && (
  <div class="video-wrapper ..." data-youtube-id={youtubeId}>
    <img src={videoCover || `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`} />
    <div class="play-button">...</div>
  </div>
)}

<!-- Мета-линейка — только если есть meta -->
{meta && meta.length > 0 && (
  <div class="meta-strip ...">
    ...
  </div>
)}

<!-- Вторая кнопка — только если задана -->
{secondaryCta && (
  <a href={secondaryCta.url}>{secondaryCta.text}</a>
)}
```

**Fallback обложки:** если `videoCover` не указан, но `youtubeId` есть — использовать YouTube thumbnail: `https://img.youtube.com/vi/{youtubeId}/maxresdefault.jpg`

---

## 7. МОБИЛЬНАЯ ВЕРСИЯ (≤768px)

| Элемент | Десктоп | Мобильный |
|---------|---------|-----------|
| Секция padding | `p-14 lg:p-16` | `p-5` |
| Секция border-radius | `rounded-[2rem]` | `rounded-2xl` |
| Кнопка «Назад» | `text-sm mb-8` | `text-xs mb-5` |
| Бейджи | `flex-row gap-3` | `flex-col gap-2`, каждый `w-full text-center` |
| H1 | `text-6xl lg:text-7xl` | `clamp(1.8rem, 8vw, 2.4rem)` |
| Описание | `text-xl` | `text-base` |
| Видео | `max-w-4xl, rounded-2xl` | `w-full, rounded-xl` |
| Play кнопка | `w-24 h-24` | `w-16 h-16` |
| CTA кнопки | `flex-row gap-4` | `flex-col gap-3, w-full` |
| Мета-линейка | `grid-cols-4` | `grid-cols-2` |
| Мета значение | `text-xl` | `text-base` |

---

## 8. ИЗМЕНЕНИЯ В `[slug].astro`

```astro
---
// Вместо импорта двух компонентов:
// import ProductHero from ...
// import ProductShowcase from ...

// Импортируем один:
import ProductHeroNew from '../../../components/products/ProductHeroNew.astro'
---

<!-- Вместо двух блоков: -->
<!-- <ProductHero ... /> -->
<!-- <ProductShowcase ... /> -->

<!-- Один блок: -->
<ProductHeroNew
  backLink={{ text: `← ${backText}`, url: backUrl }}
  tag={p.tag}
  format={p.format}
  title={p.title}
  shortDesc={p.shortDesc}
  youtubeId={p.youtubeId}
  videoCover={p.videoCover}
  primaryCta={{ text: "ПОДАТЬ ЗАЯВКУ", url: "#product-enroll-block" }}
  secondaryCta={{ text: "СМОТРЕТЬ ПРОГРАММУ", url: "#product-results" }}
  meta={p.meta}
/>
```

---

## 9. ОБЛОЖКИ ВИДЕО

Картинки обложек класть в: `public/images/products/`

Формат имени: `{slug}-video-cover.jpg`

Примеры:
```
/images/products/formula-money-video-cover.jpg
/images/products/business-mission-video-cover.jpg
/images/products/family-unity-video-cover.jpg
```

Требования к обложкам:
- Размер: 1280×720px минимум (16:9)
- Формат: JPG или WebP
- Качество: высокое, без пикселизации
- Стиль: в тонах дизайн-системы DOM (бежевый/золотой/графитовый)

---

## 10. ПЕРЕД НАЧАЛОМ — ЧЕКЛИСТ

- [ ] `git add -A && git commit -m "checkpoint before product-hero-redesign"`
- [ ] Прочитать `[slug].astro` — как сейчас передаются props
- [ ] Прочитать `ProductHero.astro` и `ProductShowcase.astro` — что берём, что убираем
- [ ] Проверить что `dom-gold-dark` (через дефис) используется, НЕ `dom-goldDark`
- [ ] Проверить файл content config — какие поля уже есть

---

## 11. НЕ ТРОГАТЬ

- Navbar, Footer, BaseLayout, WelcomePopup
- global.css
- Файлы других страниц
- `ProductMission.astro`, `ProductForWhom.astro`, `ProductResults.astro`, `ProductReviews.astro`, `ProductFAQ.astro`, `ProductEnroll.astro` — они остаются как есть
- zoom

---

## 12. ПОРЯДОК РАБОТЫ

1. `git commit` — контрольная точка
2. Добавить новые поля в Zod-схему content collection
3. Добавить данные в 1 тестовый продукт (`formula-money.md`)
4. Создать `ProductHeroNew.astro`
5. Подключить в `[slug].astro` вместо двух старых компонентов
6. Проверить в браузере (десктоп + мобильный)
7. Если всё ОК — обновить остальные 15 продуктов (добавить `meta` в frontmatter)
8. `git commit -m "feat: unified ProductHeroNew with video + meta strip"`
9. Переименовать старые файлы: `ProductHero.OLD.astro`, `ProductShowcase.OLD.astro`
