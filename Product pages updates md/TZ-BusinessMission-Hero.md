# ТЗ: Уникальный Hero-блок для страницы «Бизнес Миссия»

> Передай вместе: DOM-Design-System.md, DOM-Handoff-Complete.md
> Прочитай DOM-Design-System.md ПЕРЕД началом работы
> **НЕ ТРОГАЙ:** Navbar, Footer, global.css, BaseLayout, WelcomePopup, файлы других страниц

---

## 0. КОНТЕКСТ

Страница продукта «Бизнес Миссия» (`/ru/products/business-mission`) использует общий шаблон `[slug].astro` и компоненты из `src/components/products/`.

Этот блок — **уникальный Hero**, который заменяет стандартный `ProductHero.astro` ТОЛЬКО для slug `business-mission`. Остальные продукты продолжают использовать стандартный Hero.

### Референс
Скриншот: тёмный фон, заголовок «БИЗНЕС МИССИЯ», три карточки-столба (ДЕНЬГИ / ПОРЯДОК / КЛИЕНТЫ) с иконками, соединённые линиями со светящимися точками, описание и кнопка CTA.

### Задача
Сделать **светлую версию** этого блока с фоновым логотипом DOM (сердце-чаша) в качестве watermark. Стильно, премиально, в духе дизайн-системы DOM.

---

## 1. РЕАЛИЗАЦИЯ — ДВА ВАРИАНТА

### Вариант A (рекомендуемый): Отдельный компонент
- Создать `src/components/products/BusinessMissionHero.astro`
- В `[slug].astro` добавить условие:
```astro
{slug === 'business-mission' 
  ? <BusinessMissionHero {/* props */} />
  : <ProductHero {/* props */} />
}
```

### Вариант B: Отдельная страница
- Создать `src/pages/ru/products/business-mission.astro`
- Astro автоматически использует её вместо `[slug].astro`

**Выбрать Вариант A** — меньше дублирования, один шаблон.

---

## 2. СТРУКТУРА БЛОКА (сверху вниз)

```
┌─────────────────────────────────────────────────────┐
│  СВЕТЛЫЙ ФОН (бежевый градиент)                      │
│                                                       │
│  ← Назад к направлению                               │
│                                                       │
│  ┌───────────────────────────────────────────────┐   │
│  │        ФОНОВЫЙ WATERMARK: лого-сердце         │   │
│  │        (полупрозрачное, по центру)             │   │
│  │                                                │   │
│  │           БИЗНЕС МИССИЯ                        │   │
│  │              (H1, крупный)                     │   │
│  │                                                │   │
│  │      ·─────────·─────────·                     │   │
│  │      │         │         │                     │   │
│  │  ┌───┴───┐ ┌───┴───┐ ┌───┴───┐               │   │
│  │  │💰     │ │⚙️     │ │👥     │               │   │
│  │  │ДЕНЬГИ │ │ПОРЯДОК│ │КЛИЕНТЫ│               │   │
│  │  └───────┘ └───────┘ └───────┘               │   │
│  │                                                │   │
│  │  Для предпринимателей и экспертов,            │   │
│  │  которые устали тянуть бизнес на себе...      │   │
│  │                                                │   │
│  │         [ ЗАНЯТЬ МЕСТО ]                       │   │
│  │                                                │   │
│  └───────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

---

## 3. ДЕТАЛЬНЫЕ СТИЛИ

### 3.1 Фон секции

```
section: relative overflow-hidden
background: linear-gradient(180deg, #fffcf4 0%, #f6e9cb 100%)
min-height: 80vh (десктоп), auto (мобильный)
padding: pt-20 pb-16 (десктоп), pt-8 pb-10 (мобильный)
```

### 3.2 Watermark — логотип-сердце (фоновый)

Логотип DOM (чаша/сердце) — SVG или PNG из `public/images/` (файл: `dom-heart-logo.svg` или аналогичный — уточнить путь в проекте).

```
position: absolute
top: 50%, left: 50%, transform: translate(-50%, -50%)
width: 500px (десктоп), 280px (мобильный)
height: auto
opacity: 0.06
pointer-events: none
z-index: 0
color/fill: #a4814a (dom-gold-dark)
```

**Важно:**
- Если SVG — задать `fill` через CSS/inline
- Если PNG — использовать с прозрачным фоном, opacity через CSS
- НЕ должен мешать чтению текста — max opacity 0.06–0.08
- Можно слегка увеличить (`scale(1.2)`) чтобы логотип выходил за края контентной зоны

### 3.3 Кнопка «Назад»

```
position: relative, z-index: 10
class="text-dom-gold-dark hover:text-dom-graphite font-montserrat 
font-bold uppercase tracking-widest text-sm inline-flex items-center 
mb-10 transition-colors"
```
Текст: `← К направлению «Деньги»`

### 3.4 Контентная область

```
position: relative, z-index: 10
text-align: center
max-w-5xl mx-auto px-4 sm:px-6 lg:px-8
```

### 3.5 Заголовок H1

```
font-messiri text-5xl md:text-7xl lg:text-8xl text-dom-graphite
mb-12 leading-[0.95] tracking-tight
```

На мобильном:
```
font-size: clamp(2rem, 10vw, 3rem)
mb-8
```

### 3.6 Три столба (ДЕНЬГИ / ПОРЯДОК / КЛИЕНТЫ)

#### Обёртка с соединительными линиями

```
Контейнер: flex justify-center items-start gap-6 md:gap-10 mb-10 relative
```

Между карточками — декоративные линии (SVG или pseudo-elements):
- Тонкая линия `1px` цвета `dom-gold/40`
- Сходятся к верхней точке (как на скриншоте — V-образно)
- На пересечении линий с карточками — круглые точки (`w-2 h-2 rounded-full bg-dom-gold`)
- **Линии НЕОБЯЗАТЕЛЬНЫ** на мобильном — можно убрать, оставить только карточки

#### Каждая карточка-столб

```
Десктоп:
w-[220px] py-5 px-6 rounded-xl text-center
border border-dom-gold/30
bg-white/60 backdrop-blur-sm
hover:border-dom-gold/60 hover:bg-white/80
hover:shadow-[0_8px_24px_rgba(217,179,114,0.2)]
transition-all duration-300

Мобильный:
w-[100px] py-3 px-3 rounded-lg
font-size: уменьшить (см. ниже)
```

Внутри карточки:
```
┌────────────────┐
│   [иконка]     │  ← emoji или SVG, text-3xl md:text-4xl, mb-2
│   ДЕНЬГИ       │  ← font-messiri text-lg md:text-xl text-dom-graphite uppercase tracking-wider font-bold
└────────────────┘
```

Иконки (emoji или SVG):
- ДЕНЬГИ: 💰 или иконка монет/графика
- ПОРЯДОК: ⚙️ или иконка серверной стойки/шестерёнки
- КЛИЕНТЫ: 👥 или иконка группы людей

**Если в проекте есть SVG-иконки** — использовать их. Если нет — emoji допустимы как fallback, но лучше заменить на Lucide icons или кастомные SVG в золотом цвете (`text-dom-gold`).

На мобильном:
```
Три карточки в ряд (flex, не stack)
Иконка: text-2xl
Текст: text-xs uppercase
gap: 8px
```

### 3.7 Описание

```
font-montserrat text-xl md:text-2xl text-dom-graphite/80
leading-relaxed max-w-3xl mx-auto mb-10 font-light
```

На мобильном:
```
text-base, mb-8
```

### 3.8 Кнопка CTA — «Занять место»

Кнопка 1 из дизайн-системы (главная CTA, золотая заливка):
```
class="bg-gold-gradient text-white py-4 px-10 rounded-xl
font-montserrat font-bold uppercase tracking-[0.12em] text-sm
shadow-[0_12px_28px_rgba(217,179,114,0.36)]
hover:shadow-[0_16px_36px_rgba(217,179,114,0.45)]
transition-all duration-300 inline-block text-center"
```

Ссылка: `#product-enroll-block` (якорь на блок формы заявки внизу страницы).

На мобильном:
```
w-full py-3 text-xs
```

---

## 4. ДАННЫЕ (props)

Все данные — через props, **НЕ хардкод**.

```typescript
interface BusinessMissionHeroProps {
  // Кнопка «Назад»
  backLink: {
    text: string       // "← К направлению «Деньги»"
    url: string        // "/ru/path/money"
  }
  
  // Заголовок
  title: string         // "БИЗНЕС МИССИЯ"
  
  // Три столба
  pillars: Array<{
    icon: string        // emoji или путь к SVG
    label: string       // "ДЕНЬГИ" / "ПОРЯДОК" / "КЛИЕНТЫ"
  }>
  
  // Описание
  description: string   // "Для предпринимателей и экспертов..."
  
  // CTA
  cta: {
    text: string        // "ЗАНЯТЬ МЕСТО"
    url: string         // "#product-enroll-block"
  }
  
  // Watermark
  watermarkSrc?: string // "/images/dom-heart-logo.svg"
}
```

Данные берутся из `src/content/products/business-mission.md` — добавить поля в frontmatter или вынести в `src/data/pages/products/business-mission.ts`.

---

## 5. СОЕДИНИТЕЛЬНЫЕ ЛИНИИ (декоративный элемент)

### Реализация через SVG

Между заголовком и карточками — SVG с V-образными линиями:

```html
<svg class="w-full max-w-[600px] h-[60px] mx-auto mb-4" viewBox="0 0 600 60">
  <!-- Левая линия -->
  <line x1="100" y1="55" x2="300" y2="5" 
        stroke="rgba(217,179,114,0.4)" stroke-width="1" />
  <!-- Правая линия -->
  <line x1="500" y1="55" x2="300" y2="5" 
        stroke="rgba(217,179,114,0.4)" stroke-width="1" />
  <!-- Центральная вертикальная -->
  <line x1="300" y1="5" x2="300" y2="55" 
        stroke="rgba(217,179,114,0.4)" stroke-width="1" />
  <!-- Точка сверху (пересечение) -->
  <circle cx="300" cy="5" r="3" fill="#d9b372" />
  <!-- Три точки снизу -->
  <circle cx="100" cy="55" r="3" fill="#d9b372" />
  <circle cx="300" cy="55" r="3" fill="#d9b372" />
  <circle cx="500" cy="55" r="3" fill="#d9b372" />
</svg>
```

На мобильном: `hidden` или уменьшенный (`max-w-[280px] h-[40px]`).

---

## 6. МОБИЛЬНАЯ ВЕРСИЯ (≤768px)

| Элемент | Мобильный стиль |
|---------|----------------|
| Секция padding | `pt-8 pb-10 px-4` |
| Watermark | `width: 280px, opacity: 0.05` |
| Кнопка «Назад» | `text-xs mb-6` |
| H1 | `clamp(2rem, 10vw, 3rem)`, `mb-6` |
| SVG-линии | `hidden` или `max-w-[280px]` |
| Три столба | `flex gap-2`, карточки `w-[100px]`, иконка `text-2xl`, текст `text-xs` |
| Описание | `text-base mb-6` |
| CTA кнопка | `w-full py-3` |

---

## 7. ПЕРЕД НАЧАЛОМ — ЧЕКЛИСТ

- [ ] Найти файл логотипа-сердца в `public/images/` — уточнить точное имя файла
- [ ] Проверить что `dom-gold-dark` (через дефис) используется, НЕ `dom-goldDark`
- [ ] Прочитать `src/content/products/business-mission.md` — какие данные уже есть
- [ ] Проверить `[slug].astro` — как сейчас передаются props в ProductHero

---

## 8. НЕ ТРОГАТЬ

- Navbar, Footer, BaseLayout, WelcomePopup
- global.css
- Файлы других страниц и продуктов
- Стандартный ProductHero.astro (он остаётся для остальных 15 продуктов)
- zoom

---

## 9. ПОРЯДОК РАБОТЫ

1. `git add -A && git commit -m "checkpoint before business-mission-hero"`
2. Создать `BusinessMissionHero.astro` в `src/components/products/`
3. Добавить условие в `[slug].astro`
4. Проверить в браузере (десктоп + мобильный)
5. `git commit -m "feat: unique BusinessMission hero block"`
